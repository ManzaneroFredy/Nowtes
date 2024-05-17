import NoteRepository from "../repositories/NoteRepository";
import Note from "../entities/Note";

export class RegisterNote {
  constructor(
    private readonly noteRepository: NoteRepository
  ) {}

  async createNote(
    id: number,title: string,
    body: string,status: string,
    deadline: string,substract?: string,
    priority?: string,lastModification?: string): Promise<Note> {
    const note = new Note(id,title,body,status,deadline,substract,priority,lastModification);
    await this.noteRepository.saveNote(note);
    return note;
  }
}


