import {Course} from "./Course";

export class Quiz {
  id: number=0;
  title: string='';
  course: Course= new Course();
  htmlDescription: string='';
  correctOptions: string='';
}
