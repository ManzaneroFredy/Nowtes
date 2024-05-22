import LoginDto from "../dto/login.dto";
import UserRepository from "../repositories/UserRepository";

class LoginUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async login(loginDto: LoginDto): Promise<boolean> {
    try {
      const response = await this.userRepository.login(loginDto);
      const data = await response.json();
      const token = data.token;
      localStorage.setItem("token", token);
      return true;
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  }
}

export default LoginUserUseCase;
