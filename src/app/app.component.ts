import { Component } from '@angular/core';
import { TeamDashboardComponent } from './team/team-dashboard/team-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [TeamDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'team_space_app';
}
