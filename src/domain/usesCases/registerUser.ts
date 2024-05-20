import UserDto from "../dto/UserDTO";
import UserRepository from "../repositories/UserRepository";

export class RegisterUser {
  constructor(private readonly userRepository: UserRepository) {}

  async register(username: string, password: string) {
    const newUser: UserDto = { username, password };
    await this.userRepository
      .saveUser(newUser)
      .then((data) => {
        alert("Usuario registrado correctamente");
      })
      .catch(() => {
        alert("El Usuario ya existe");
      });
  }
}
