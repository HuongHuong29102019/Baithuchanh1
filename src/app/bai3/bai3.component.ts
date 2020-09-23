import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {
  ngOnInit() {
    let catten = (s) => {
      let n = s.lastIndexOf(' ');
      return s.substr(n + 1) + ' ' + s.substr(0, n);
    }
    let s = [{ hoten: 'Nguyen Thi Mai', dthi: 9 },
    { hoten: 'Tran Thi Anh', dthi: 7.5 },
    { hoten: 'Hoang Thi Dung', dthi: 8.3 }
    ].sort((a, b) => {
      if (catten(a.hoten) > catten(b.hoten)) return 1;
      else if (catten(a.hoten) < catten(b.hoten)) return -1;
      return 0;
    });
    console.log(s);

  }
}
