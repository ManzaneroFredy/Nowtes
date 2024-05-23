/*
import { RegisterNote } from "../../src/domain/usesCases/registerNote";
import NoteRepository from "../../src/domain/repositories/NoteRepository";
import Note from "../../src/domain/entities/Note";

class MockNoteRepository implements NoteRepository {
  getNoteById(id: string): Promise<Note | null> {
    throw new Error("Method not implemented.");
  }
  private notes: Note[] = [];

  async saveNote(note: Note): Promise<void> {
    this.notes.push(note);
  }

  async deleteNoteById(id: string): Promise<void> {
    this.notes = this.notes.filter((note) => note.getId() !== parseInt(id));
  }

  async editNote(id: string): Promise<void> {
    // Implement mock logic for editNote if needed
  }

  getNotes(): Note[] {
    return this.notes;
  }
}

describe("RegisterNote", () => {
  let registerNote: RegisterNote;
  let mockNoteRepository: MockNoteRepository;

  beforeEach(() => {
    mockNoteRepository = new MockNoteRepository();
    registerNote = new RegisterNote(mockNoteRepository);
  });

  it("should create and save a new note", async () => {
    const id = 1;
    const title = "Test Note";
    const body = "This is a test note";
    const status = "active";
    const deadline = "2024-12-31";
    const substract = "substract test";
    const priority = "high";
    const lastModification = "2024-05-17";

    const note = await registerNote.createNote(
      id,
      title,
      body,
      status,
      deadline,
      substract,
      priority,
      lastModification
    );

    expect(note.toJSON()).toEqual({
      id,
      title,
      body,
      status,
      deadline,
      substract,
      priority,
      lastModification,
    });

    const savedNotes = mockNoteRepository.getNotes();
    expect(savedNotes.length).toBe(1);
    expect(savedNotes[0].toJSON()).toEqual(note.toJSON());
  });
});
*/