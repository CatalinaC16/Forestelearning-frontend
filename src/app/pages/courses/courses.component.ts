// courses.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses = [
    {
      title: 'Introducere în Silvicultură',
      description: 'Un curs introductiv care acoperă principiile de bază ale silviculturii.',
      imageUrl: 'assets/intro_forestry.jpg'
    },
    {
      title: 'Gestiunea Pădurilor',
      description: 'Aprofundează-ți cunoștințele despre gestionarea eficientă a pădurilor.',
      imageUrl: 'assets/forest_management.jpg'
    },
    {
      title: 'Gestiunea Pădurilor',
      description: 'Aprofundează-ți cunoștințele despre gestionarea eficientă a pădurilor.',
      imageUrl: 'assets/forest_management.jpg'
    },
    {
      title: 'Gestiunea Pădurilor',
      description: 'Aprofundează-ți cunoștințele despre gestionarea eficientă a pădurilor.',
      imageUrl: 'assets/forest_management.jpg'
    }
  ];

  enroll(course: any) {
    console.log(`Te-ai înscris în cursul ${course.title}`);
  }
}
