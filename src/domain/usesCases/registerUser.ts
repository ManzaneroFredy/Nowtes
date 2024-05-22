import RegisterDto from "../dto/register.dto";
import UserRepository from "../repositories/UserRepository";

class RegisterUser {
  constructor(private readonly userRepository: UserRepository) {}

  public async register(registerDto: RegisterDto) {
    try {
      const response = await this.userRepository.register(registerDto);
      if (response.status === 201) {
        console.log("User successfully registered");
        return true;
      } else {
        console.error("Unexpected response:", response.status);
        return false;
      }
    } catch (error) {
      console.error("Register failed", error);
      return false;
    }
  }
}

export default RegisterUser;
