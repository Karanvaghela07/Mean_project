import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private router: Router) {}

  // Signup method
  signup() {
    console.log('Signup successful!');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    alert('Signup Successfully!');
    this.message = 'Signup Successful!';
    this.router.navigate(['/home']);
  }

  // Send message method
  sendMessage() {
    alert('Message sent successfully!'); // Show success alert
    this.router.navigate(['/home']); // Redirect to home page
  }
}
