import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.css']
})
export class Bai4Component implements OnInit {
  ngOnInit() {
    let s = [{ hoten: 'Nguyen Thi Mai',quequan:'Hung Yen', dthi: 9 },
    { hoten: 'Tran Thi Anh',quequan:'Ha Noi ', dthi: 7.5 },
    { hoten: 'Hoang Thi Dung',quequan:'Hai Phong', dthi: 8.3 }
    ].filter(x=>x.dthi>=8 && x.quequan=='Hai Phong');
    console.log(s);

  }
}
