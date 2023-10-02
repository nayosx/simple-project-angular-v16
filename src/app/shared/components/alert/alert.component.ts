import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MessageOption } from '../../models/message.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent {
  @Input()
  Message:MessageOption|null = null;
}
