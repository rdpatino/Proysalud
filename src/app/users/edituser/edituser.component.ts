import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ServicesService,
    private router: Router,
    private routes: ActivatedRoute) { }

  addForm: FormGroup;

  ngOnInit() {

    const routeParams = this.routes.snapshot.params;
    console.log(routeParams.id);
    //$_GET[]

    this.addForm = this.formBuilder.group({
    id: [],
    username: ['', Validators.required],
    password: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', Validators.required],
    salary: ['', Validators.required]
    });

    this.apiService.getUserById(routeParams.id).subscribe((data: any) => {
      // console.log(data)
      this.addForm.patchValue(data);
    });
  }

  onUpdate(){
    // console.log(this.addForm.value)
    // console.log(this.addForm.value);
    this.apiService.updateUser(this.addForm.value).subscribe(() => {
      this.router.navigate(['viewuser']);
    },
      error => {
        alert(error);
      });
  }

}
