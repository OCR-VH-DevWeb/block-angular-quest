import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  title: string = 'Raclette party 🧀';

  isThisIngredientVital: boolean = true;
  isGuestListDisplayed: boolean = false;
  songList: string[] = [
    'Alejandro',
    'Ne me quitte pas',
    'Le temps est bon',
    'Ezperanza',
  ];
}
