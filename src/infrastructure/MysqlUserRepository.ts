import UserDto from "@/domain/dto/UserDTO";
import UserRepository from "@/domain/repositories/UserRepository";

class MysqlUserRepository implements UserRepository {
  public async loginUser(user: UserDto): Promise<Response> {
    try {
      const response = await fetch(`http://localhost:3000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `"Network response was not ok ${response.status} - ${errorText}`
        );
      } else {
        alert("Login correct");
        return response;
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }

  public async saveUser(user: UserDto): Promise<boolean> {
    try {
      const response = await fetch(`http://localhost:3000/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `"Network response was not ok ${response.status} - ${errorText}`
        );
      } else {
        alert("Usuario correctamente registrado");
        return true;
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }

  deleteUser(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export default MysqlUserRepository;
