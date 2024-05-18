import NoteRepository from "../repositories/NoteRepository";
import Note from "../entities/Note";
import UserNotesRepository from "../repositories/UserNotesRepository";

export class EditNote {
  constructor(
    private readonly noteRepository: NoteRepository,
    private readonly userNotesRepository: UserNotesRepository
  ) {}

  async editNote(id: string, updatedNote: Note): Promise<void> {
    // Lógica para editar la nota con el id proporcionado
    try {
      // Primero, obtén la nota existente
      const existingNote = await this.userNotesRepository.findById(id);

      if (!existingNote) {
        throw new Error("No se encontró la nota para editar.");
      }

      await this.noteRepository.saveNote(existingNote);

      console.log("¡La nota se ha editado exitosamente!");
    } catch (error) {
      console.error("Error al editar la nota:", error);
      throw error;
    }
  }
}
