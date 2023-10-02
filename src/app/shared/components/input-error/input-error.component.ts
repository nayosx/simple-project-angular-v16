import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  encapsulation: ViewEncapsulation.None
})
export class InputErrorComponent {

  @Input()
  message:string = '';
}
