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

  peopleList!: Member[];
  searchText: string = '';
  searchResults?: Member[];

  constructor(private teamService: TeamService) {}

  get selectedMembersCount() {
    return this.peopleList.filter((m) => m.haveManager).length;
  }

  get user() {
    return this.teamService.getMember(this.userId)!;
  }

  getPeopleList() {
    this.peopleList = this.teamService
      .getMembers()
      .filter((member) => member.id !== this.userId)
      .filter(
        (member) =>
          !member.haveManager ||
          (member.haveManager && member.manager?.id === this.userId)
      )
      .sort((m1, m2) => Number(m2.haveManager) - Number(m1.haveManager));
    this.searchResults = this.peopleList;
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.setManager();
    this.onClose();
  }

  onSearch() {
    let searchResult: Member[] = [...this.searchResults!];
    if (this.searchText) {
      searchResult = this.searchResults?.filter((member) =>
        member.name.toLowerCase().includes(this.searchText.toLowerCase())
      )!;
    }
    this.peopleList = searchResult;
  }

  setManager() {
    this.peopleList = this.peopleList.map((member) => {
      member.manager = member.haveManager ? this.user : undefined;
      return member;
    });
    this.user.role = 'manager';
  }

  ngOnInit() {
    this.getPeopleList();
  }
}
