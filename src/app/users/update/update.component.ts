import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  id!: any;
  request!: RequestUpdate;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res => {
      this.request = {
        name: `${res.data.first_name} `,
        last_name: `${res.data.last_name}` ,
        email: `${res.data.email}`
      }
    });
  }

  update() {
    this.userService.updateUser(this.id, this.request).subscribe(res => {
      alert(`Atualizado! Nome: ${res.name}, Sobrenome: ${res.last_name}, E-mail: ${res.email}`)
    })
  }
}
