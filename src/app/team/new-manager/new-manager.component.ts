import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TeamService } from '../team.service';
import { FormsModule } from '@angular/forms';
import { Member, Role } from '../team-member/team-member.model';

type List = Member & { selected: boolean };

@Component({
  selector: 'app-new-manager',
  imports: [FormsModule],
  templateUrl: './new-manager.component.html',
  styleUrl: './new-manager.component.css',
})
export class NewManagerComponent implements OnInit {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter();

  peopleList: List[] = [];

  constructor(private teamService: TeamService) {}

  get user() {
    return this.teamService.getMember(this.userId);
  }

  getPeopleList() {
    const people = this.teamService.getMembers();
    this.peopleList = people.map((user: Member) => {
      return {
        ...user,
        selected: false,
      };
    });
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    console.log(this.peopleList);
  }

  ngOnInit(): void {
    this.getPeopleList();
  }
}
