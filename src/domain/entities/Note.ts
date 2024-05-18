export class Note {
  constructor(
    private id: number,
    private title: string,
    private body: string,
    private status: string,
    private deadline: string,
    private substract?: string, // Renamed from 'substract'
    private priority?: string,
    private lastModification?: string
  ) {}

  toJSON(): object {
    return {
      id: this.id,
      title: this.title,
      body: this.body,
      status: this.status,
      deadline: this.deadline,
      substract: this.substract,
      priority: this.priority,
      lastModification: this.lastModification,
    };
  }

  static createNote(
    id: number,
    title: string,
    body: string,
    status: string,
    deadline: string,
    substract?: string,
    priority?: string,
    lastModification?: string
  ): Note {
    return new Note(
      id,
      title,
      body,
      status,
      deadline,
      substract,
      priority,
      lastModification
    );
  }



  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getBody(): string {
    return this.body;
  }

  getStatus(): string {
    return this.status;
  }

  getDeadline(): string {
    return this.deadline;
  }

  getAbstract(): string | undefined {
    return this.substract;
  }

  getPriority(): string | undefined {
    return this.priority;
  }

  getLastModification(): string | undefined {
    return this.lastModification;
  }
}

export default Note;
