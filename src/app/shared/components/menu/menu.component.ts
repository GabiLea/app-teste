import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { faHome as faHome } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank as faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faDigitalTachograph as faDigitalTachograph } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hide = true;

  constructor(private router: Router, library: FaIconLibrary) {
    library.addIcons(faHome);
    library.addIcons(faPiggyBank);
    library.addIcons(faDigitalTachograph);

  }

  ngOnInit() { }

  onStatement() {

    this.router.navigate(['statement']);
  }
  onTransactions() {
    this.router.navigate(['newTransaction']);

  }

  onMouseOver() {
    if (screen.availWidth > 812) {
      this.hide = false;
    }
  }

  onMouseOut() {
    if (screen.availWidth > 812) {
      this.hide = true;
    }
  }

}
