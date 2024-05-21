import Note from "../entities/Note";

interface UserNotesRepository {
  findById(id: string): Promise<Note>;
  findByTitle(title: string): Promise<Note>;
  findByPriority(priority: string): Promise<Note>;
  getAll(): Promise<Note[]>;
}

export default UserNotesRepository;
