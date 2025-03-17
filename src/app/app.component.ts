import { Component } from '@angular/core';
import { TeamDashboardComponent } from './team/team-dashboard/team-dashboard.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { TasksDashboardComponent } from './tasks/tasks-dashboard/tasks-dashboard.component';
import debounce from 'debounce';

@Component({
  selector: 'app-root',
  imports: [
    TeamDashboardComponent,
    DashboardComponent,
    TasksDashboardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {
    '(window:resize)': 'onDebounce($event)',
  },
})
export class AppComponent {
  mode: 'team' | 'tasks' = 'team';
  reloaded: { mobile: boolean; desktop: boolean };

  constructor() {
    let currentMode = localStorage.getItem('mode');
    this.mode = currentMode ? (currentMode as 'team' | 'tasks') : 'team';

    let reloadData = localStorage.getItem('reload');
    this.reloaded = reloadData
      ? JSON.parse(reloadData)
      : { mobile: false, desktop: false };
  }

  onDebounce = debounce(this.onResize, 500);
  onResize(event: Event) {
    let screenWidth = window.innerWidth;

    if (screenWidth <= 768 && !this.reloaded.mobile) {
      this.reloaded.mobile = true;
      this.reloaded.desktop = false;
      localStorage.setItem('reload', JSON.stringify(this.reloaded));
      location.reload();
    }
    if (screenWidth > 768 && !this.reloaded.desktop) {
      this.reloaded.desktop = true;
      this.reloaded.mobile = false;
      localStorage.setItem('reload', JSON.stringify(this.reloaded));
      location.reload();
    }
  }
  changeMode() {
    this.mode = this.mode === 'team' ? 'tasks' : 'team';
    localStorage.setItem('mode', this.mode);
  }
}
