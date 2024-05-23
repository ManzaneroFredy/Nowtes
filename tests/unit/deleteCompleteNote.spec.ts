/*
import Note from "@/domain/entities/Note";
import NoteRepository from "@/domain/repositories/NoteRepository";
import UserNotesRepository from "@/domain/repositories/UserNotesRepository";
import { DeleteNote } from "@/domain/usesCases/deleteCompleteNote";

// Mock de los repositorios
jest.mock("@/domain/repositories/NoteRepository");
jest.mock("@/domain/repositories/UserNotesRepository");

describe("DeleteNote", () => {
  let noteRepository: jest.Mocked<NoteRepository>;
  let userNotesRepository: jest.Mocked<UserNotesRepository>;
  let deleteNote: DeleteNote;

  // Simular console.log y console.error
  const originalLog = console.log;
  const originalError = console.error;
  beforeAll(() => {
    console.log = jest.fn();
    console.error = jest.fn();
  });

  afterAll(() => {
    console.log = originalLog;
    console.error = originalError;
  });

  beforeEach(() => {
    noteRepository = {
      deleteNoteById: jest.fn() // Creamos una función simulada para el método deleteNoteById
    } as unknown as jest.Mocked<NoteRepository>;

    userNotesRepository = {
      findById: jest.fn() // Creamos una función simulada para el método findById
    } as unknown as jest.Mocked<UserNotesRepository>;

    deleteNote = new DeleteNote(noteRepository, userNotesRepository);
    jest.clearAllMocks();
  });

  it("debería eliminar una nota no finalizada exitosamente", async () => {
    const note = new Note(
      1,
      "Nota de prueba",
      "Contenido de prueba",
      "En progreso",  // Nota no finalizada
      "2023-12-31"
    );

    userNotesRepository.findById.mockResolvedValue(note);

    await deleteNote.deleteNote(note.getId().toString());

    expect(noteRepository.deleteNoteById).toHaveBeenCalledWith(note.getId().toString());
    expect(console.log).toHaveBeenCalledWith("¡La nota se ha eliminado exitosamente!");
  });

  it("debería lanzar un error si la nota no se encuentra", async () => {
    userNotesRepository.findById.mockResolvedValue(null as any);

    await expect(deleteNote.deleteNote("1")).rejects.toThrow("No se encontró la nota para eliminar.");
    expect(console.error).toHaveBeenCalledWith("Error al eliminar la nota:", expect.any(Error));
  });

  it("debería lanzar un error si la nota está finalizada", async () => {
    const note = new Note(
      1,
      "Nota de prueba",
      "Contenido de prueba",
      "Terminado",  // Nota finalizada
      "2023-12-31"
    );

    userNotesRepository.findById.mockResolvedValue(note);

    await expect(deleteNote.deleteNote(note.getId().toString())).rejects.toThrow("No se puede eliminar una nota finalizada.");
    expect(console.error).toHaveBeenCalledWith("Error al eliminar la nota:", expect.any(Error));
  });

  it("debería manejar errores inesperados", async () => {
    userNotesRepository.findById.mockRejectedValue(new Error("Error inesperado"));

    await expect(deleteNote.deleteNote("1")).rejects.toThrow("Error inesperado");
    expect(console.error).toHaveBeenCalledWith("Error al eliminar la nota:", expect.any(Error));
  });
});
*/

