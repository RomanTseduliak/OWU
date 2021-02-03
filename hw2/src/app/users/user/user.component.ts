import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../../interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [],
})
export class UserComponent implements OnInit {
  @Input()
  user: User;
  @Output()
  eventEmitter = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  getPosts(): void {
    this.eventEmitter.emit(this.user.id);
  }
}
