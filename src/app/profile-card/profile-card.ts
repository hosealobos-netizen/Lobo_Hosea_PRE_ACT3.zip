import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = 'A Little About Me';

  paragraphs = [
    'I am a student who enjoys turning ideas into working web pages. Right now I am learning Angular and how to build applications out of small, reusable components.',
    'I like understanding how things work, so I try to build and break small projects until the pieces make sense. I am always looking for the next thing to learn.'
  ];
}
