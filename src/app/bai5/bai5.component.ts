import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai5',
  templateUrl: './bai5.component.html',
  styleUrls: ['./bai5.component.css']
})
export class Bai5Component implements OnInit {


  constructor() { }

  ngOnInit(): void {
    let sochinhphuong = (n) =>{
        return   Math.pow(Math.floor(Math.sqrt(n)),2)==n;
      }
      let s = [3,4,8,10,25,55].filter(sochinhphuong);
      console.log(s);

}
}
