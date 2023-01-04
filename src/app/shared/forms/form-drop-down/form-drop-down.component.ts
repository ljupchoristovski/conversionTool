import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-drop-down',
  templateUrl: './form-drop-down.component.html',
  styleUrls: ['./form-drop-down.component.scss']
})
export class FormDropDownComponent {
  @Input() key: string;
  @Input() form: FormGroup;
  @Input() label: string;
  @Input() options: any;
  @Input() optionsKey: string = 'id';
  @Input() optionsValue: string = 'value';

}
