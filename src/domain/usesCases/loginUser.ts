import LoginDto from "../dto/login.dto";
import UserRepository from "../repositories/UserRepository";

class LoginUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async login(loginDto: LoginDto): Promise<boolean> {
    try {
      const response = await this.userRepository.login(loginDto);

      if (!response.ok) {
        console.error("Login failed with status:", response.status);
        return false;
      }

      const data = await response.json();

      if (!data.token || !data.userId) {
        console.error("Invalid login response", data);
        return false;
      }

      this.storeSessionData(data.token, data.userId);
      return true;
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  }

  private storeSessionData(token: string, userId: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
  }
}

export default LoginUserUseCase;
