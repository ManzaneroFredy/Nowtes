import MysqlRepository from "@/infrastructure/MysqlUserRepository";
import UserDto from "@/domain/dto/UserDTO";
import RegisterUser from "@/domain/usesCases/registerUser";

describe("EditNote", () => {
  let mySqlUserRepository: MysqlRepository;
  let userDTO: UserDto;
  let registerUser: RegisterUser;
  beforeEach(() => {
    mySqlUserRepository = new MysqlRepository();
    registerUser = new RegisterUser(mySqlUserRepository);
  });

  it("should be a register function created", async () => {
    expect(registerUser.register).toBeDefined();
  });

  it("should be return a succesful registration message", async () => {
    userDTO = { username: "fredy4", password: "123" };
    expect(registerUser.register(userDTO.username, userDTO.password)).toBe(
      "User created successfully"
    );
  });
});
