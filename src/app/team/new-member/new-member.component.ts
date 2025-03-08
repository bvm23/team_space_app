import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamService } from '../team.service';

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

  constructor(private teamService: TeamService) {}

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.teamService.addMember(this.enteredName, this.enteredEmail);
    this.onClose();
  }
}
