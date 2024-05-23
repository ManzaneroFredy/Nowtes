import CreateNoteDto from "../dto/createNote.dto";
import updatedNoteDto from "../dto/updateNote.dto";
import Note from "../entities/Note";

interface NoteRepository {
  createNote(createNoteDto: CreateNoteDto): Promise<boolean>;
  getAllNotes(): Promise<Note[]>;
  getNoteById(id: string): Promise<Note>;
  deleteNoteById(id: string): Promise<void>;
  editNote(id: string, updatedNoteDto: updatedNoteDto): Promise<void>;
}

export default NoteRepository;
