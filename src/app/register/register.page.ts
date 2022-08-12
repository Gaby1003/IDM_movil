import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public registerForm: FormGroup;
  selectedImage:  any  = null;
  imagenprev: string | null | undefined;

  constructor(private sanitizer: DomSanitizer,
    private fb: FormBuilder, private router: Router,) { }

  ngOnInit() {
  }

  read(event, item) {
    this.registerForm.get(item).setValue(event.target.value);
  }

  showPreview(event: any){
    console.log(this.selectedImage);
    const imagenCargada = event.target.files[0];
    this.selectedImage = event.target.files[0];
    this.extraerBase64(imagenCargada).then((imagen: any) =>{
      this.imagenprev = imagen.base;
      this.registerForm.value.photo = this.imagenprev;
      console.log(imagen);
    });
    console.log(this.imagenprev);
    console.log(this.registerForm.value.photo);
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    let base: any;
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return base;
    }
  });

}
