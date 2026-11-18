import { Component, input } from '@angular/core';
import { Proficiency } from '../proficiency';

// Turns a level word into a number of filled dots (1 to 3).
const SCORES: Record<Proficiency['level'], number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  fullName = input.required<string>();
  proficiencies = input.required<Proficiency[]>();
  checkpoint = input(false);

  year = new Date().getFullYear();

  score(level: Proficiency['level']): number {
    return SCORES[level];
  }
}
