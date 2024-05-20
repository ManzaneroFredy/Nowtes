import Note from "@/domain/entities/Note";
import NoteRepository from "@/domain/repositories/NoteRepository";
import UserNotesRepository from "@/domain/repositories/UserNotesRepository";
import { EditNote } from "@/domain/usesCases/editNote";

describe("EditNote", () => {
  let noteRepository: NoteRepository;
  let userNotesRepository: UserNotesRepository;
  let editNoteService: EditNote;

  beforeEach(() => {
    noteRepository = {
      saveNote: jest.fn(),
    } as unknown as NoteRepository;

    userNotesRepository = {
      findById: jest.fn(),
    } as unknown as UserNotesRepository;

    editNoteService = new EditNote(noteRepository, userNotesRepository);
  });

  it("should edit an existing note successfully", async () => {
    const noteId = "1";
    const existingNote = new Note(1, "a", "a", "a", "a", "a", "a");
    const updatedNote = new Note(1, "b", "b", "b", "b", "b");

    (userNotesRepository.findById as jest.Mock).mockResolvedValue(existingNote);

    await editNoteService.editNote(noteId, updatedNote);

    expect(userNotesRepository.findById).toHaveBeenCalledWith(noteId);
    expect(noteRepository.saveNote).toHaveBeenCalledWith(existingNote);
  });

  it("should throw an error if the note does not exist", async () => {
    const noteId = "1";
    const updatedNote = new Note(1, "a", "a", "a", "a", "a", "a");

    (userNotesRepository.findById as jest.Mock).mockResolvedValue(null);

    await expect(editNoteService.editNote(noteId, updatedNote)).rejects.toThrow(
      "No se encontró la nota para editar."
    );

    expect(userNotesRepository.findById).toHaveBeenCalledWith(noteId);
    expect(noteRepository.saveNote).not.toHaveBeenCalled();
  });

  it("should handle errors during the edit process", async () => {
    const noteId = "1";
    const existingNote = new Note(1, "a", "a", "a", "a", "a", "a");
    const updatedNote = new Note(1, "b", "b", "b", "b", "b");

    (userNotesRepository.findById as jest.Mock).mockResolvedValue(existingNote);
    (noteRepository.saveNote as jest.Mock).mockRejectedValue(
      new Error("Error al guardar la nota")
    );

    await expect(editNoteService.editNote(noteId, updatedNote)).rejects.toThrow(
      "Error al guardar la nota"
    );

    expect(userNotesRepository.findById).toHaveBeenCalledWith(noteId);
    expect(noteRepository.saveNote).toHaveBeenCalledWith(existingNote);
  });
});
