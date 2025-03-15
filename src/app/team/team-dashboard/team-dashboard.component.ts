import { Component } from '@angular/core';
import { TeamMemberComponent } from '../team-member/team-member.component';
import { NewMemberComponent } from '../new-member/new-member.component';
import { Member } from '../team-member/team-member.model';
import { TeamService } from '../team.service';
import { NewManagerComponent } from '../new-manager/new-manager.component';
import { TaskService } from '../../tasks/task.service';

@Component({
  selector: 'app-team-dashboard',
  imports: [TeamMemberComponent, NewMemberComponent, NewManagerComponent],
  templateUrl: './team-dashboard.component.html',
  styleUrl: './team-dashboard.component.css',
})
export class TeamDashboardComponent {
  selectedMemberId!: string;
  isAddingMember = false;
  isMakingManager = false;

  constructor(
    private teamService: TeamService,
    private taskService: TaskService
  ) {}

  get members() {
    return this.teamService.getMembers();
  }

  loadSampleData() {
    this.teamService.getSampleData();
    this.taskService.loadSampleTasks();
  }

  openForm() {
    this.isAddingMember = true;
  }

  closeForm() {
    this.isAddingMember = false;
  }

  onMakeManager() {
    this.isMakingManager = true;
  }

  closeManagerForm() {
    this.isMakingManager = false;
  }
}
