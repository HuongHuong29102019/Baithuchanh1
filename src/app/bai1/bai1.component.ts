import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {
  x: number;
  n: number;
  s = 0;

  constructor() { }

  ngOnInit(): void {
  }
  tinh() {
    for (let i=1;i<=this.n;++i) {
      this.s+=this.x/i;
    }
  }

}
