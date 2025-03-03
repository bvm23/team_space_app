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
import { Member } from './team-member.model';

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
  @Input({ required: true }) menuOpenedId!: number;
  @Output() menuOpenedIdChange = new EventEmitter<number>();

  constructor(private el: ElementRef) {}

  menuCardPosition = { left: '0px', top: '0px' };

  menuOpened = false;
  m: any = [];

  onMenuClick(id: number, event: PointerEvent) {
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
    this.menuOpenedIdChange.emit(this.data.id);
  }

  closeMenu() {
    this.menuOpened = false;
  }
}
