import NoteRepository from "../repositories/NoteRepository";
import Note from "../entities/Note";
import CreateNoteDto from "../dto/createNote.dto";

export class CreateNoteUseCase {
  constructor(
    private readonly noteRepository: NoteRepository
  ) {}

  async createNote(createNoteDto: CreateNoteDto): Promise<void> {
    await this.noteRepository.createNote(createNoteDto);
  }
}
