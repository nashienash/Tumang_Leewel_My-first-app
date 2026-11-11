import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})

export class ProfileCard {
  cardTitle = 'Get To Know Me';
  description = 'Art is where it all started for me. I love exploring different kinds of design, from illustration to layout, and I notice the little things: color, balance, and how a composition feels. To me, every screen is a canvas. I’m patient, detail-oriented, and always open to feedback.';
  tags = ['UI/UX Design', 'Figma', 'Prototyping', 'Visual Design', 'Angular'];
}
