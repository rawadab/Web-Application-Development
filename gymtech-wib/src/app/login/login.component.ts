import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    // this.authService.login(this.email, this.password).subscribe(
    //   response => {
    //     console.log('Login successful', response);
    //     this.router.navigate(['/login']); // Example redirection
    //   },
    //   error => {
    //     console.error('Login failed', error);
    //     alert('Invalid email or password');
    //   }
    // );
  }
}
