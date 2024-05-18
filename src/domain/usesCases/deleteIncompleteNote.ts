import NoteRepository from "../repositories/NoteRepository";
import UserNotesRepository from "../repositories/UserNotesRepository";

export class DeleteNote {
  constructor(
    private readonly noteRepository: NoteRepository,
    private readonly userNotesRepository: UserNotesRepository
  ) {}

  async deleteNote(id: string): Promise<void> {
    // Lógica para eliminar la nota con el id proporcionado
    try {
      // Primero, obtén la nota existente
      const existingNote = await this.userNotesRepository.findById(id);

      if (!existingNote) {
        throw new Error("No se encontró la nota para eliminar.");
      }

      // Verifica que la nota no esté finalizada
      if (existingNote.getStatus() === "En progreso") {
        throw new Error("No se puede eliminar una nota finalizada.");
      }

      // Procede a eliminar la nota
      await this.noteRepository.deleteNoteById(id);

      console.log("¡La nota se ha eliminado exitosamente!");
    } catch (error) {
      console.error("Error al eliminar la nota:", error);
      throw error;
    }
  }
}
