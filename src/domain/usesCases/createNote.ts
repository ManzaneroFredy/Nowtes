import NoteRepository from "../repositories/NoteRepository";
import CreateNoteDto from "../dto/createNote.dto";

export class CreateNoteUseCase {
  constructor(private readonly noteRepository: NoteRepository) {}

  async createNote(createNoteDto: CreateNoteDto): Promise<boolean> {
    return await this.noteRepository.createNote(createNoteDto);
  }
}
