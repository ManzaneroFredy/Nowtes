import UserDto from "../dto/UserDTO";

interface UserRepository {
  loginUser(user: UserDto): Promise<Response>;
  saveUser(user: UserDto): Promise<boolean>;
  deleteUser(): Promise<void>;
}

export default UserRepository;
