import NoteRepository from "../repositories/NoteRepository";
import UserNotesRepository from "../repositories/UserNotesRepository";

export class DeleteNote {
  constructor(
    private readonly noteRepository: NoteRepository,
    private readonly userNotesRepository: UserNotesRepository
  ) {}

  async deleteNote(id: string): Promise<void> {
    try {
      const existingNote = await this.userNotesRepository.findById(id);
  
      if (!existingNote) {
        throw new Error("No se encontró la nota para eliminar.");
      }
  
      if (existingNote.getStatus() === "En progreso") {
        throw new Error("No se puede eliminar una nota en progreso.");
      }
  
      await this.noteRepository.deleteNoteById(id);

      console.log("¡La nota se ha eliminado exitosamente!");
    } catch (error) {
      console.error("Error al eliminar la nota:", error);
      throw error;
    }
  }
}
  