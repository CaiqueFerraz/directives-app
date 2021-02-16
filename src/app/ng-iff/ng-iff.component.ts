import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-iff',
  templateUrl: './ng-iff.component.html',
  styleUrls: ['./ng-iff.component.css']
})
export class NgIffComponent implements OnInit {
  showName : boolean = false;
  showAddress : boolean = false;
  showPhone : boolean = false;
  showAge : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
