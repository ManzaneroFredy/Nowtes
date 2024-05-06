import { v4 } from "uuid";

export default interface User {
  id: typeof v4;
  username: string;
}
