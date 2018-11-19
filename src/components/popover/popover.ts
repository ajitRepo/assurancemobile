import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  items:any;
  text: string;

  constructor(public viewCtrl: ViewController) {
    this.items = [
      {item:'Test 1'},
      {item:'Test 2'},
      {item:'Test 3'},
    ]
  }

  itemClick(item) {
    this.viewCtrl.dismiss(item);
  }

}
