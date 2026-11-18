import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  // Input: the list of skills comes from the parent.
  skills = input.required<string[]>();
  checkpoint = input(false);

  // Output: an event this component sends up to the parent.
  skillSelected = output<string>();

  // Remembers which skill is highlighted.
  active = signal('');

  selectSkill(skill: string) {
    this.active.set(skill);
    this.skillSelected.emit(skill);
  }
}
