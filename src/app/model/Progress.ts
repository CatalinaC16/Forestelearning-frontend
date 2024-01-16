import {Quiz} from "./Quiz";
import {User} from "./User";

export class Progress {
  id: number = 0;
  quiz: Quiz = new Quiz();
  user: User = new User();
  grade: number = 0;
}
