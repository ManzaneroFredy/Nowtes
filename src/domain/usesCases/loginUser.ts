/** @jest-environment jsdom */
import UserDto from "../dto/UserDTO";
import UserRepository from "../repositories/UserRepository";
import LoginDto from "../dto/LoginDTO";

class LoginUser {
  constructor(private readonly userRepository: UserRepository) {}

  public async loginUser(username: string, password: string) {
    const newUser: UserDto = { username, password };
    const response = await this.userRepository.loginUser(newUser);
    response.json().then((data: LoginDto) => {
      const token = data.token;
      localStorage.setItem("token", token);
      return true;
    });
  }
}

export default LoginUser;
