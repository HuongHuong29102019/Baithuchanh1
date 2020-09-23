import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai8',
  templateUrl: './bai8.component.html',
  styleUrls: ['./bai8.component.css']
})
export class Bai8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    class tamgiac{
        a: number;
        b: number;
        c: number;
        constructor(a: number, b: number,c: number){
          this.a = a;
          this.b = b;
          this.c = c;
        }
        dt(){
          var p = (this.a+this.b+this.c)/2;
          var s = p*(p-this.a)*(p-this.b)*(p-this.c);
          return Math.sqrt(s);
        }
      }
      class hinhchop extends tamgiac{
        h : number;
        constructor(a: number, b: number,c: number, h:number){
          super(a,b,c);
          this.h = h;
        }
        tc(){
          return 1/3 * super.dt()*this.h;
        }
      }
      var hc = new hinhchop(3,4,5,6);
      console.log(hc.tc());
  }

}
