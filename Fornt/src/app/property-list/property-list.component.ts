import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {


  properties : Array<any> = [
    {
      "Id" : 1,
      "Name":"Birla",
      "Type":"House",
      "Price" : 12000
   },
   {
    "Id" : 2,
    "Name":"Pearl",
    "Type":"House",
    "Price" : 13400
 },
 {
  "Id" : 3,
  "Name":"Pink",
  "Type":"House",
  "Price" : 67000
},
{
  "Id" : 4,
  "Name":"GOld",
  "Type":"House",
  "Price" : 45000
}


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
