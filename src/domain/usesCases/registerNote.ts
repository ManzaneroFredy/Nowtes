import NoteRepository from "../repositories/NoteRepository";
import Note from "../entities/Note";

export class RegisterNote {
  constructor(
    private readonly noteRepository: NoteRepository // Inyección de dependencias
  ) {}

  async createNote(
    id: number,
    title: string,
    body: string,
    status: string,
    deadline: string,
    substract?: string, // Parámetro opcional
    priority?: string, // Parámetro opcional
    lastModification?: string // Parámetro opcional
  ): Promise<Note> {
    const note = new Note(
      id,
      title,
      body,
      status,
      deadline,
      substract,
      priority,
      lastModification
    );
    await this.noteRepository.saveNote(note); // Guardar la nota en el repositorio
    return note;
  }
}
