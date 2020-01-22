import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from './../../_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  user: User;
  @ViewChild('editForm', {static: false}) editForm: NgForm;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotifation($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private userService: UserService, private authservice: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {this.user = data['user']; debugger;  console.log(data['user']); });
  }
  updateUser() {
console.log(this.user);
this.userService.updateUser(this.authservice.decodedToken.UserId, this.user).subscribe(next => {
  this.alertify.success('Profile update successfully');
  this.editForm.resetForm(this.user);
}, error => {  this.alertify.error(error.message); });
}
}
