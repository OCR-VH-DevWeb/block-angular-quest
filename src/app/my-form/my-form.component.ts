import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css',
})
export class MyFormComponent {
  onSubmit(): void {
    //form submitted
    console.log('Formulaire envoyé !');
  }
}
