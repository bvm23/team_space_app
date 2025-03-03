import { Component } from '@angular/core';
import { TeamMemberComponent } from '../team-member/team-member.component';

@Component({
  selector: 'app-team-dashboard',
  imports: [TeamMemberComponent],
  templateUrl: './team-dashboard.component.html',
  styleUrl: './team-dashboard.component.css',
})
export class TeamDashboardComponent {
  openedMenuIndex!: number;

  memebers = [
    {
      id: 1,
      name: 'Polly Norman',
      email: 'polly.norman@example.com',
      role: 'Admin',
      image: 'm-avatar.svg',
    },
    {
      id: 2,
      name: 'Eunice Stevenson',
      email: 'eunice.stevenson@example.com',
      role: 'Member',
      image: 'f-avatar.svg',
    },
    {
      id: 3,
      name: 'Ethan Gibbs',
      email: 'ethan.gibbs@example.com',
      role: 'Member',
      image: 'm-avatar.svg',
    },
    {
      id: 4,
      name: 'Johnny Allison',
      email: 'johnny.allison@example.com',
      role: 'Member',
      image: 'm-avatar.svg',
    },
    {
      id: 5,
      name: 'Kyle Watts',
      email: 'kyle.watts@example.com',
      role: 'Manager',
      image: 'm-avatar.svg',
    },
    {
      id: 6,
      name: 'Rosa Armstrong',
      email: 'rosa.armstrong@example.com',
      role: 'Member',
      image: 'f-avatar.svg',
    },
  ];
}
