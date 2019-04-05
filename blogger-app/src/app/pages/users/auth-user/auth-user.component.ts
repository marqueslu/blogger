import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.less']
})
export class AuthUserComponent implements OnInit {

  form: FormGroup;
 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
