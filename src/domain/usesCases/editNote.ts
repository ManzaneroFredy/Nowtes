import NoteRepository from "../repositories/NoteRepository";
import Note from "../entities/Note";
import UserNotesRepository from "../repositories/UserNotesRepository";
import updatedNoteDto from "../dto/updateNote.dto";

export class EditNote {
  constructor(
    private readonly noteRepository: NoteRepository,
    private readonly userNotesRepository: UserNotesRepository
  ) {}

  async editNote(id: string, updatedNoteDto: updatedNoteDto): Promise<void> {
    try {
      const existingNote = await this.userNotesRepository.findById(id);

      if (!existingNote) {
        throw new Error("No se encontró la nota para editar.");
      }

      await this.noteRepository.editNote(id, updatedNoteDto);
    } catch (error) {
      console.error("Error al editar la nota:", error);
      throw error;
    }
  }
}
