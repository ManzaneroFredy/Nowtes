/* eslint-disable */
import NoteRepository from "../repositories/NoteRepository";
export class DeleteNote {
  constructor(
    private readonly noteRepository: NoteRepository,
  ) {}

  async deleteNote(id: string): Promise<void> {
    try {
      const existingNote = await this.noteRepository.getNoteById(id);

      if (!existingNote) {
        throw new Error("No se encontró la nota para eliminar.");
      }

      if (existingNote.iscompleted()) {
        throw new Error("No se puede eliminar una nota finalizada.");
      }
      await this.noteRepository.deleteNoteById(id);

    } catch (error) {
      console.error("Error al eliminar la nota:", error);
      throw error;
    }
  }
}