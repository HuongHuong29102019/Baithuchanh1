import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai6',
  templateUrl: './bai6.component.html',
  styleUrls: ['./bai6.component.css']
})
export class Bai6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var arr = [1, 2, 3, -4];
    var total = 0;
    for (let i in arr) { 
      if( arr[i]>0)
      {
      total += arr[i];
      }
     }
     console.log("total is : " + total);
    }
}
