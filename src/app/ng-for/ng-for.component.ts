import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "Tainara",
    "Caique",
    "Mark",
    "Mariel"
  ]
  cities = [
    {name: "São Paulo", state:"Sp"},
    {name: "Porto Alegre", state:"RS"},
    {name: "Coritiba", state:"PR"},
    {name: "Rio de Janeiro", state:"RJ"}


  ]
  constructor() { }

  ngOnInit() {
  }

}
