import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-ng-iff',
  templateUrl: './sub-ng-iff.component.html',
  styleUrls: ['./sub-ng-iff.component.css']
})
export class SubNgIffComponent implements OnInit {

  constructor() {
    console.log('SubNgIffComponent');
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    console.log('Destroy');
  }
}
