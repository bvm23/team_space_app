import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    console.log(this.enteredEmail, this.enteredName);
  }
}
