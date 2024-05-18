export class User {
  constructor(
    private id: number,
    private username: string,
    private password: string
  ) {}

  getId(): number {
    return this.id;
  }

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }
}

export default User;
