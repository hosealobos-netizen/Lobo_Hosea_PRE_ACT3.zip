import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // Inputs: values this component receives from its parent.
  fullName = input.required<string>();
  role = input.required<string>();
  location = input.required<string>();
  email = input.required<string>();
  phone = input.required<string>();
  profile = input.required<string>();
  checkpoint = input(false);

  // Derived value: initials for the logo mark, e.g. "HDJL".
  initials = computed(() =>
    this.fullName()
      .split(' ')
      .filter((word) => word.length > 0)
      .map((word) => word[0].toUpperCase())
      .join('')
      .slice(0, 4)
  );
}
