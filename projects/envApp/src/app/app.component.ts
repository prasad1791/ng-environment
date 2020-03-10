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
  constructor(private http: HttpClient,private envService:EnvironmentService){
    this.dataRes();
  }

  public dataRes():void{
    this.http.get(`${this.envService.envConfig.apiUrl}employees`).subscribe((res)=>{
      const resData =res;
    },(error)=>console.log(error));
  }
}
