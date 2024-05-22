/* eslint-disable */
import Note from "../entities/Note";
import NoteRepository from "../repositories/NoteRepository";

export class GetAllNotesUseCase {
  constructor(
    private readonly noteRepository: NoteRepository
  ) {}

  async getAll(): Promise<Note[]> {
    try {
      return await this.noteRepository.getAllNotes();
    } catch (error) {
      console.error("Error fetching note:", error);
      return []
    }  
  }
}
