/* eslint-disable */
import Note from "../entities/Note";
import NoteRepository from "../repositories/NoteRepository";

export class GetNoteUseCase {
  constructor(
    private readonly noteRepository: NoteRepository
  ) {}

  async getById(id: string): Promise<Note | null> {
    try {
      const note = await this.noteRepository.getNoteById(id);
      return note;
    } catch (error) {
      console.error("Error fetching note:", error);
      return null;
    }  
  }
}
