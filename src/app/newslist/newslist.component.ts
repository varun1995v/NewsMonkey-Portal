import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdministrateService } from '../administrate.service';
import { TitleList } from '../titleList';


@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class NewslistComponent implements OnInit {
  titleList:TitleList[]=[];
  filterArray:TitleList[]=[]
  searchKey: string = '';
  expression:boolean= true;
  isAdmin: boolean = false;
  username: string = '';
  email: string = '';
  
  flag: boolean=false;
  msg: String="";
  
  constructor(
    private fb:FormBuilder,
    private adminservice:AdministrateService,
    private router: Router, 
    private route: ActivatedRoute,
    private _cookieService: CookieService,
    private http:HttpClient) {
 
     }

  ngOnInit(): void {
    var tokenString = this._cookieService.get('auth');
    var obj = { token: tokenString };
    this.http.post('http://localhost:3300/authAdmin', obj).subscribe(data => 
    {
      console.log(data);
      var result: any = data;
      console.log(result);
      if (result.auth) {
        this.isAdmin = true;
        this.username = this._cookieService.get('username');
        this.email = this._cookieService.get('email');
      } else {
        this.isAdmin = false;
      }
    })
      this.loadNews();
  }

  loadNews() {
    this.adminservice.getNewsList().subscribe(
      data=>{this.titleList = data
        this.filterArray=data
        this.titleList.forEach ( x => {x.lock=true })
      }); 
  }

  onSearch(){
    let s=this.searchKey.trim().toLocaleLowerCase();
    this.filterArray=this.titleList.filter(function(news){
      if(news.title.toLocaleLowerCase().includes(s)){
        return news
      }
      else
      return ;
      
    })
  }

  editRow(news:TitleList){
    this.titleList.forEach( x => {
      if (x._id == news._id) {
      x.lock = false;
      }
      });
  }

  updateRow(news:TitleList,i:number){
    console.log(news._id);
    this.titleList.forEach( x => {
      if (x._id == news._id) {
        x.lock = true;      
        this.adminservice.onUpdate(news)   
      }  
      });        
  }
 
  cancel(news:TitleList){
    this.titleList.forEach( x => {
      if (x._id == news._id) {
      x.lock = true;
      }
      });
  }

  deleteRow(news: TitleList){
    var delBtn = confirm("Do you want to delete?");
    if ( delBtn == true ) {
      this.adminservice.onDelete(news);
      window.location.reload();
    }   
  }
  
}
