import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamService } from '../team.service';
import { Member } from '../team-member/team-member.model';

@Component({
  selector: 'app-new-member',
  imports: [FormsModule],
  templateUrl: './new-member.component.html',
  styleUrl: './new-member.component.css',
})
export class NewMemberComponent {
  @Output() close = new EventEmitter();

  enteredName = '';
  enteredEmail = '';
  enteredAvatar = '';

  constructor(private teamService: TeamService) {}

  onClose() {
    this.close.emit();
  }

  selectAvatar(event: MouseEvent, value: 'm' | 'f') {
    event.preventDefault();
    this.enteredAvatar = value;
  }

  onSubmit() {
    if (this.enteredEmail && this.enteredName && this.enteredAvatar) {
      let newMember: Member = {
        id: Math.random().toString(),
        name: this.enteredName,
        email: this.enteredEmail,
        image: `${this.enteredAvatar}-avatar.svg`,
        role: 'member',
        haveManager: false,
      };

      this.teamService.addMember(newMember);
      this.onClose();
    }
  }
}
