import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { User } from 'src/app/Model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  users: any;
  
  constructor(
    private apiService: ServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiService.getUsers()
    .subscribe( (data : any) => {
        this.users = data;
        console.log(this.users);
    });
  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }

  edit(user: User): void {
    this.router.navigate(['edituser/' + user.id]);
  }

}
