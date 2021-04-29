import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdministrateService } from '../administrate.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AddnewsComponent implements OnInit {
  formModel: FormGroup;
  loading=false;
  msg="";
  alertService: any;

  isAdmin: boolean = false;
  username: string = '';
  email: string = '';

   urlRegex= /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  constructor(
    private adminservice:AdministrateService,
    private fb:FormBuilder,
    private router: Router, 
    private route: ActivatedRoute,
    private _cookieService: CookieService,
    private http:HttpClient) { 
      this.formModel=this.fb.group
          ({
              title:['', Validators.required],
              description:['',Validators.required],
              url:['', [Validators.required,Validators.pattern(this.urlRegex)]],
              imageUrl:['', [Validators.required,Validators.pattern(this.urlRegex)]],
              publishedAt:['', Validators.required]            
          }        
        )
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
  }
onSubmit() {
    this.adminservice.addnews(this.formModel.value)
      .subscribe( data => { 
      });
      location.reload();
        this.msg = 'News is added successfully';
        
    }
  

}
