import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { UsersComponent } from '../users.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public userService: UsersService,
    private routeur: Router) { }

  ngOnInit(): void {
    this.initUserForm();

  }
  initUserForm(): void {
    this.userForm = this.formBuilder.group({
      firstname: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      lastname: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control("", [Validators.required, Validators.email]),
      description: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      dateBirth: this.formBuilder.control("", [Validators.required]),
      address: this.formBuilder.group({
        street: this.formBuilder.control("", [Validators.required]),
        state: this.formBuilder.control("", [Validators.required]),
        city: this.formBuilder.control("", [Validators.required]),
        codeZip: this.formBuilder.control("", [Validators.required]),
      }),
      alias: this.formBuilder.array([])
    });
  }

  getAlias(): FormArray {
    return this.userForm.get("alias") as FormArray;
  }
  addAlias(): void {
    this.getAlias().push(this.formBuilder.control("", Validators.required));
  }


  onSubmit(): void {
    const dataUserForm = this.userForm.value;
    const address = new Address(
      dataUserForm.street,
      dataUserForm.state,
      dataUserForm.city,
      dataUserForm.codeZip,
    );
    const alias = dataUserForm.alias ? dataUserForm.alias : [];
    const user = new User(
      dataUserForm.firstname,
      dataUserForm.lastname,
      dataUserForm.email,
      dataUserForm.description,
      dataUserForm.dateBirth,
      address,
      alias
    );

    this.userService.addUser(user);
    this.routeur.navigateByUrl('users');
  }
}
