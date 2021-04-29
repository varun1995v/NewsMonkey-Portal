import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private http:HttpClient,
    private router:Router)
   { }

  sent: boolean = false;
  validationErrors: boolean = false;
  queryData: any;

  ngOnInit(): void {

  }
  
  onSubmit(object) {
    var obj = { email: object.email, fulName: object.fulName, phone: object.phone ,query: object.query };
    console.log(obj);
    if (obj.email == null || obj.email == '' || 
      obj.phone == null || obj.phone == '' ||
      obj.fulName == null || obj.fulName == '' ||
      obj.query == null || obj.query == '') {
      this.validationErrors = true;
    } else {
      this.validationErrors = false;
      this.http.post('http://localhost:3300/admin/contactUs', obj).subscribe(data => 
      {
        console.log(data);
        this.sent = true;
        this.queryData = data;
        if (this.queryData.status) {
          this.sent = true;
        }
        
      })
    }
  }
  
}