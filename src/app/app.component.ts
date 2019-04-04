import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ MyserviceService ]
})
export class AppComponent implements OnInit{
  title = 'blogger';
  constructor(public router: Router,private service:MyserviceService) {}
  ngOnInite(){
    this.service.getService().subscribe(
      dates=>console.log(dates)
    );
  }
}
