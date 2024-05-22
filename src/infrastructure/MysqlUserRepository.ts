import LoginDto from "@/domain/dto/login.dto";
import RegisterDto from "@/domain/dto/register.dto";
import UserRepository from "@/domain/repositories/UserRepository";

class MysqlUserRepository implements UserRepository {
  public async login(loginDto: LoginDto): Promise<Response> {
    try {
      const response = await fetch(`http://localhost:3000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginDto),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `"Network response was not ok ${response.status} - ${errorText}`
        );
      } else {
        return response;
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }

  public async register(registerDto: RegisterDto): Promise<Response> {
    try {
      const response = await fetch(`http://localhost:3000/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerDto),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `"Network response was not ok ${response.status} - ${errorText}`
        );
      } else {
        alert("Usuario correctamente registrado");
        return response;
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
