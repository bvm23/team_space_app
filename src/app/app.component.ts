import { Component } from '@angular/core';
import { TeamDashboardComponent } from './team/team-dashboard/team-dashboard.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { TasksDashboardComponent } from './tasks/tasks-dashboard/tasks-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [
    TeamDashboardComponent,
    DashboardComponent,
    TasksDashboardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  mode: 'team' | 'tasks' = 'team';

  changeMode() {
    this.mode = this.mode === 'team' ? 'tasks' : 'team';
  }
}
