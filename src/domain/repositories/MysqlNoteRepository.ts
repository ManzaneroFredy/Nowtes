/* eslint-disable */
import CreateNoteDto from "../dto/createNote.dto";
import updatedNoteDto from "../dto/updateNote.dto";
import Note from "../entities/Note";
import NoteRepository from "../repositories/NoteRepository";

class MysqlNoteRepository implements NoteRepository {
  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  private getHeaders(): HeadersInit {
    const token = this.getToken();
    return {
      "Content-Type": "application/json",
      ...(token && { "Authorization": `Bearer ${token}` }),
    };
  }

  async getAllNotes(): Promise<Note[]> {
    try {
      const response = await fetch("http://localhost:3000/note", {
        method: "GET",
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.map((noteData: any) => new Note(
        noteData.id,
        noteData.title,
        noteData.description,
        noteData.isCompleted,
        new Date(noteData.deadline),
        noteData.userId,
        noteData.priority,
        noteData.lastModification ? new Date(noteData.lastModification) : undefined
      ));
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }

  async getNoteById(id: string): Promise<Note> {
    try {
      const response = await fetch(`http://localhost:3000/note/${id}`, {
        method: "GET",
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }

  public async createNote(createNoteDto: CreateNoteDto): Promise<void> {
    try {
      const response = await fetch("http://localhost:3000/note", {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(createNoteDto),
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
      const response = await fetch(`http://localhost:3000/note/${id}`, {
        method: "DELETE",
        headers: this.getHeaders(),
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

  public async editNote(id: string, updatedNoteDto: updatedNoteDto): Promise<void> {
    try {
      const response = await fetch(`http://localhost:3000/note/${id}`, {
        method: "PUT",
        headers: this.getHeaders(),
        body: JSON.stringify(updatedNoteDto),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Note edited successfully");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }
}

export default MysqlNoteRepository;
