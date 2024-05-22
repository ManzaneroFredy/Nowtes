import LoginDto from "../dto/login.dto";
import RegisterDto from "../dto/register.dto";

interface UserRepository {
  login(loginDto: LoginDto): Promise<Response>;
  register(registerDto: RegisterDto): Promise<Response>;
  deleteUser(): Promise<void>;
}

export default UserRepository;
