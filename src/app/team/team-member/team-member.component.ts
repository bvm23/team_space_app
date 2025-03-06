import {
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  Input,
  input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Member, Role } from './team-member.model';
import { TeamService } from '../team.service';
import { NewManagerComponent } from '../new-manager/new-manager.component';

@Component({
  selector: 'app-team-member',
  imports: [],
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.css',
  host: {
    class: 'card',
  },
})
export class TeamMemberComponent {
  @Input({ required: true }) data!: Member;
  @Input({ required: true }) selectedMemberId!: string;
  @Output() selectedMemberIdChange = new EventEmitter<string>();
  @Output() makeManager = new EventEmitter();

  constructor(private el: ElementRef, private teamService: TeamService) {}

  menuCardPosition = { left: '0px', top: '0px' };

  menuOpened = false;

  onMenuClick() {
    this.menuCardPosition = {
      left:
        (
          this.el.nativeElement.lastElementChild.offsetLeft +
          this.el.nativeElement.lastElementChild.offsetWidth -
          this.el.nativeElement.lastElementChild.clientWidth
        ).toString() + 'px',
      top:
        (
          this.el.nativeElement.lastElementChild.offsetTop +
          this.el.nativeElement.lastElementChild.offsetHeight -
          this.el.nativeElement.lastElementChild.clientHeight
        ).toString() + 'px',
    };
    this.openMenu();
  }

  openMenu() {
    this.menuOpened = true;
    this.selectedMemberIdChange.emit(this.data.id);
  }

  closeMenu() {
    this.menuOpened = false;
  }

  onRemove() {
    this.teamService.removeMember(this.data.id);
  }

  onChangeRole(enteredRole: Role) {
    this.teamService.changeRole(this.data.id, enteredRole);
  }

  onMakeManager() {
    this.makeManager.emit();
  }
}
