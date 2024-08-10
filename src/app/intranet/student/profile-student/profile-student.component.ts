import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/model/user';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../core/services/student.service';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrl: './profile-student.component.css'
})
export class ProfileStudentComponent implements OnInit {
  student?: User;
  constructor(private newTitle: Title,
    private route: ActivatedRoute,
    private service: StudentService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('studentId');
    this.service.getStudentbyID(id).subscribe((data) => {
      this.student = data;
      this.newTitle.setTitle(`${this.student?.name} ${this.student?.lastname}`)
    });
  }
}
