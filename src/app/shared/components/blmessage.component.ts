import { Component, Input } from "@angular/core";

@Component({
  templateUrl: './blmessage.component.html',
  selector: 'bc-message'
})
export class BLMessageComponent{

   @Input() text = '';
}
