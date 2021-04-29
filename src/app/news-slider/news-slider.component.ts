import { Component, OnInit } from '@angular/core';
import { AdministrateService } from '../administrate.service';
import { TitleList } from '../titleList';

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class NewsSliderComponent implements OnInit {

  newsList: TitleList[] = []
  constructor(private service:AdministrateService) { }

  ngOnInit(): void {
    this.service.getNewsList()
    .subscribe(data=>{this.newsList = data, console.log(this.newsList)}); 
  }

  goToUrl(url: string) {
    window.open(url, "_blank");
  }

}
