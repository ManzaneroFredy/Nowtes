import Note from "../entities/Note";

interface NoteRepository {
  saveNote(note: Note): Promise<void>;
  deleteNoteById(id: string): Promise<void>;
  editNote(id: string): Promise<void>;
}

export default NoteRepository;
