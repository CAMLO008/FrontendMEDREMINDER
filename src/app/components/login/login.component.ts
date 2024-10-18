import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;
  invalidLogin = false;

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicialización del formulario con validaciones
    this.loginForm = this.fb.group({
      username: ['', Validators.required],  // Campo de usuario requerido
      password: ['', Validators.required]   // Campo de contraseña requerido
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    const { username, password } = this.loginForm.value;

    // Autenticación con datos quemados
    if (username === 'admin' && password === '1234') {
      this.invalidLogin = false;  // Credenciales válidas
      this.router.navigate(['/crear-recordatorio']);  // Redirección a otra página
    } else {
      this.invalidLogin = true;  // Credenciales inválidas, mostrar error
    }
  }
}
