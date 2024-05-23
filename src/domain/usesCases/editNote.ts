import NoteRepository from "../repositories/NoteRepository";
import updatedNoteDto from "../dto/updateNote.dto";

export class EditNote {
  constructor(private readonly noteRepository: NoteRepository) {}

  async editNote(id: string, updatedNoteDto: updatedNoteDto): Promise<boolean> {
    try {
      return await this.noteRepository.editNote(id, updatedNoteDto);
    } catch (error) {
      console.error("Error al editar la nota:", error);
      throw error;
    }
  }
}
