import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TeamService } from '../team.service';
import { FormsModule } from '@angular/forms';
import { Member, Role } from '../team-member/team-member.model';

@Component({
  selector: 'app-new-manager',
  imports: [FormsModule],
  templateUrl: './new-manager.component.html',
  styleUrl: './new-manager.component.css',
})
export class NewManagerComponent implements OnInit {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter();

  user!: Member;
  peopleList!: Member[];

  constructor(private teamService: TeamService) {}

  getPeopleList() {
    this.peopleList = this.teamService
      .getMembers()
      .filter((member) => member.id !== this.userId)
      .filter(
        (member) =>
          !member.haveManager ||
          (member.haveManager && member.manager?.id === this.userId)
      );
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.setManager();
    this.onClose();
  }

  setManager() {
    this.peopleList = this.peopleList.map((member) => {
      member.manager = member.haveManager ? this.user : undefined;
      return member;
    });
    console.log(
      this.peopleList.map((m) => [m.name, m.haveManager, m.manager?.name])
    );

    this.teamService.changeRole(this.user.id, 'manager');
  }

  ngOnInit() {
    this.user = this.teamService.getMember(this.userId)!;
    this.getPeopleList();
  }
}
