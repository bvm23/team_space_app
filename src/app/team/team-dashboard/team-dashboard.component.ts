import { Component } from '@angular/core';
import { TeamMemberComponent } from '../team-member/team-member.component';
import { NewMemberComponent } from '../new-member/new-member.component';
import { Member } from '../team-member/team-member.model';
import { TeamService } from '../team.service';
import { NewManagerComponent } from '../new-manager/new-manager.component';

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

  constructor(private teamService: TeamService) {}

  get members() {
    return this.teamService.getMembers();
  }

  openForm() {
    this.isAddingMember = true;
  }

  closeForm() {
    this.isAddingMember = false;
  }

  onAddMember(data: { name: string; email: string }) {
    this.teamService.addMember(data.name, data.email);
    this.closeForm();
  }

  onMakeManager() {
    this.isMakingManager = true;
  }

  closeManagerForm() {
    this.isMakingManager = false;
  }
}
