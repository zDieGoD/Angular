import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{

  request: RequestCreate = {
    name: '',
    last_name: '',
    email: '',    
  }

  response!: ResponseCreate

  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }

  save() {
    this.userService.createUser(this.request).subscribe(res => {
      this.response = res;
    });
  }
}
