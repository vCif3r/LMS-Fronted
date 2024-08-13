import { Component, OnInit } from '@angular/core';
import { User } from '../../core/model/user';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user?: User;
  constructor(private newTitle: Title,
    private route: ActivatedRoute,
    private _profile: ProfileService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('studentId');
    this._profile.getUserbyID(id).subscribe((data) => {
      this.user = data;
      this.newTitle.setTitle(`${this.user?.name} ${this.user?.lastname}`)
    });
  }
}
