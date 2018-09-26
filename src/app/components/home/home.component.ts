import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cityList: any[];
  constructor() { }

  getCityName(value) {
      this.cityList = ['Mumbai', 'London', 'New York'];
  }

  ngOnInit() {
  }

}
