import UserNotesRepository from "./UserNotesRepository";
import Note from "../entities/Note";

class MysqlUserNotesRepository implements UserNotesRepository {
    async findById(id: string): Promise<Note> {
        try {
            const response = await fetch(`${process.env.SERVER}/notes/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const noteData = await response.json();
            return Note.createNote(
                noteData.id,
                noteData.title,
                noteData.body,
                noteData.status,
                noteData.deadline,
                noteData.substract,
                noteData.priority,
                noteData.lastModification
            );
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
            throw error;
        }
    }

    async findByTitle(title: string): Promise<Note> {
        try {
            const response = await fetch(`${process.env.SERVER}/notes/title/${title}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const noteData = await response.json();
            return Note.createNote(
                noteData.id,
                noteData.title,
                noteData.body,
                noteData.status,
                noteData.deadline,
                noteData.substract,
                noteData.priority,
                noteData.lastModification
            );
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
            throw error;
        }
    }

    async findByPriority(priority: string): Promise<Note> {
        try {
            const response = await fetch(`${process.env.SERVER}/notes/priority/${priority}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const noteData = await response.json();
            return Note.createNote(
                noteData.id,
                noteData.title,
                noteData.body,
                noteData.status,
                noteData.deadline,
                noteData.substract,
                noteData.priority,
                noteData.lastModification
            );
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
            throw error;
        }
    }

    async getAll(): Promise<Note[]> {
        try {
            const response = await fetch(`${process.env.SERVER}/notes`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const notesData = await response.json();
            return notesData.map((noteData: any) => Note.createNote(
                noteData.id,
                noteData.title,
                noteData.body,
                noteData.status,
                noteData.deadline,
                noteData.substract,
                noteData.priority,
                noteData.lastModification
            ));
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
            throw error;
        }
    }
}

export default MysqlUserNotesRepository;
