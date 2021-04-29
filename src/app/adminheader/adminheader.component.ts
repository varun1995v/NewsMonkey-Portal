import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdministrateService } from '../administrate.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AdminheaderComponent implements OnInit {

  isAdmin: boolean = false;
  username: string = '';
  email: string = '';

  constructor(
    private adminservice:AdministrateService,
    private fb:FormBuilder,
    private router: Router, 
    private route: ActivatedRoute,
    private _cookieService: CookieService,
    private http:HttpClient
  ) { }

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

  }

  logout(){
    this.router.navigate(['/logout']);
  }

}
