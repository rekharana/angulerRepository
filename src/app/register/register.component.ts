import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {};
@Input() valuesFromHome: any;
@Output() cancelRegister = new EventEmitter();

  constructor(private authservice: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }
  register() {
    this.authservice.register(this.model).subscribe(() =>   {
     this.alertify.success('registeration successfully');
    }, error => {
      this.alertify.error(error);
    });  
  }
  cancel() {
    this.alertify.warning('Cancel'); 
    this.cancelRegister.emit(false);
  }
}
