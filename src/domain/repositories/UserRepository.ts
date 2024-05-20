import UserDto from "../dto/UserDTO";
import User from "../entities/User";

interface UserRepository {
  saveUser(user: UserDto): Promise<User>;
  deleteUser(): Promise<void>;
}

export default UserRepository;
