import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Ínicio',
      icon: 'home',
      routeUrl: ''
    }

  }

  ngOnInit(): void {
  }

}
