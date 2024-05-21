import Note from "../entities/Note";
import NoteRepository from "../repositories/NoteRepository";

class MysqlNoteRepository implements NoteRepository {
  public async saveNote(note: Note): Promise<void> {
    try {
      const response = await fetch(`${process.env.SERVER}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note.toJSON()),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Note saved successfully");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }

  public async deleteNoteById(id: string): Promise<void> {
    try {
      const response = await fetch(`${process.env.SERVER}/notes/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Note deleted successfully");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }

  public async editNote(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export default MysqlNoteRepository;
