import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-error-message',
  templateUrl: './input-error-message.component.html',
  styleUrls: ['./input-error-message.component.scss'],
})
export class InputErrorMessageComponent {
  @Input() public mensagem: string = '';
}
