import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public imgUrl: string; // Dirección de imagen
  public infoArry=[];//n

  image: string;

  public registerForm: FormGroup;
  selectedImage:  any  = null;
  imagenprev: string | null | undefined;

  constructor(private sanitizer: DomSanitizer,
    private fb: FormBuilder, private router: Router,
    private service: UserService,
    private camera: Camera,
    public navCtrl: NavController,) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      FullName: ['', [Validators.required]],
      DocumentType: ['', [Validators.required]],
      DocumentNumber: ['', [Validators.required]],
      DepartamentName: ['', Validators.required],
      ContractEndDate: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Position: ['', [Validators.required]],
      State: ['', [Validators.required]],
      TerminationDate: ['', [Validators.required]],
      photo: ['', [Validators.required]],
    });
  }

  read(event, item) {
    this.registerForm.get(item).setValue(event.target.value);
  }

  registrar(){
    this.service.addUser(this.registerForm.value);
    this.router.navigateByUrl('/login');
  }

  async showPreview(event: any){

    const imagenCargada = event.target.files[0];
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage);
    await this.extraerBase64(imagenCargada).then((imagen: any) =>{
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

  tomarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(async (imageData) => {
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.registerForm.value.photo = base64Image;
      console.log(this.registerForm.value.photo);
    }, (err) => {
    });
    console.log(this.registerForm.value.photo);
  }

}
