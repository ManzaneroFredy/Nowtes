import User from "../entities/User";

interface UserRepository {
  saveUser(user: User): Promise<void>;
  deleteUser(): Promise<void>;
}

export default UserRepository;
