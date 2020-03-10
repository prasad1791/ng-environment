import { Component } from '@angular/core';
import {EnvironmentService} from 'ng-environment';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'envApplication';
  apiUrl :string;
  constructor(private http: HttpClient,private envService:EnvironmentService){
    this.dataRes();
  }

  public dataRes():void{
    this.apiUrl = this.envService.envConfig.apiUrl;
    this.http.get(`${this.apiUrl}employees`).subscribe((res)=>{
      const resData =res;
    },(error)=>console.log(error));
  }
}
