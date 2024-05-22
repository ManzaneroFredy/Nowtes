export class Note {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private isCompleted: boolean,
    private deadline: Date,
    private userId: string,
    private priority?: string,
    private lastModification?: Date
  ) {}

  toJSON(): object {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      isCompleted: this.isCompleted,
      deadline: this.deadline,
      userId: this.userId,
      priority: this.priority,
      lastModification: this.lastModification,
    };
  }

  static createNote(
    id: string,
    title: string,
    description: string,
    isCompleted: boolean,
    deadline: Date,
    userId: string,
    priority?: string,
    lastModification?: Date
  ): Note {
    return new Note(
      id,
      title,
      description,
      isCompleted,
      deadline,
      userId,
      priority,
      lastModification
    );
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  iscompleted(): boolean {
    return this.isCompleted;
  }

  getDeadline(): Date {
    return this.deadline;
  }

  getUserId(): string | undefined {
    return this.userId;
  }

  getPriority(): string | undefined {
    return this.priority;
  }

  getLastModification(): Date | undefined {
    return this.lastModification;
  }
}

export default Note;
