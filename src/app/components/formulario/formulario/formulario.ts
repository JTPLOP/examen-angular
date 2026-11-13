import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {

  formVeterinaria = new FormGroup({
    nombre: new FormControl('',[Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    apellidos: new FormControl('', [Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^(\+34 ?)?[6-9]\d{8}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),

    // mascota
    nombreMascota: new FormControl('',[Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([ -][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    especieMascota: new FormControl('', [Validators.required]),
    sexoMascota: new FormControl('',[Validators.required]), 
    razaMascota: new FormControl('', [Validators.maxLength(40)]),
    edadMascota: new FormControl('', [Validators.required, Validators.max(30), Validators.min(0)]),
    pesoMascota: new FormControl('', [Validators.required, Validators.min(0.1), Validators.max(90)]),
    microChipMascota: new FormControl('', [Validators.required, Validators.pattern(/^\d{15}$/)]),
    
    // Seguridad

    contrasena: new FormControl('',[Validators.required ,Validators.minLength(10), Validators.maxLength(24), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/)]),
    politicaPrivacidad: new FormControl('', [Validators.requiredTrue]),
    novedadesCheck: new FormControl('')
    
  });

  

}
