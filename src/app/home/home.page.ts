import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formLogin!: FormGroup;

  constructor(private data: DataService,
    private formBuilder: FormBuilder) {}

  onInit(): void {
    this.formLogin = this.initForm();
  }

  onSubmit(){

  }

  initForm(): FormGroup {
    return this.formBuilder.group({
     email: ['', [Validators.required, Validators.email]],
     password: ['', Validators.required]
   });
 }

 read(event, item) {
  this.formLogin.get(item).setValue(event.target.value);
}

}
