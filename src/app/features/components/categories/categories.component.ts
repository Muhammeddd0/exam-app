import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsService } from '../../../../../projects/auth-library/src/lib/subjects.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  constructor(private _subjects: SubjectsService) {}
  subjects: any[] = [];

  ngOnInit(): void {
    this._subjects.getSubjects().subscribe({
      next: (data) => {
        console.log('Subjects:', data);
        this.subjects = data.subjects;
        console.log(this._subjects);
      },
      error: (error) => {
        console.error('Error fetching subjects:', error);
      },
    });
  }
}