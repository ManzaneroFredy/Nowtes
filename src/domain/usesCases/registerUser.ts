/** @jest-environment jsdom */
import UserDto from "../dto/UserDTO";
import UserRepository from "../repositories/UserRepository";

class RegisterUser {
  constructor(private readonly userRepository: UserRepository) {}

  public async register(username: string, password: string) {
    const newUser: UserDto = { username, password };
    const response = await this.userRepository.saveUser(newUser);
    return response;
  }
}

export default RegisterUser;
