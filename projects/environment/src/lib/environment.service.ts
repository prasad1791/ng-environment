import { Injectable, Inject } from '@angular/core';
import {filePath$} from './env-token.service';
import {HttpClient, HttpBackend} from '@angular/common/http';
import { xmlToJson } from './xmlToJson.service';
@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private envData: any;
  private http: HttpClient;
  constructor(handler: HttpBackend, @Inject(filePath$) private path: string) {
    //Ignore interceptor if implemented
    this.http = new HttpClient(handler); 
  }

  public async loadEnvConfig():Promise<any>{
    try
    {
      const fileExt =this.path.split('.').pop();
      if(['json','xml'].includes(fileExt)){
        if(fileExt ==='xml'){
          const xml = await this.http.get(this.path,{responseType:'text'}).toPromise();
          const xmlData = new DOMParser().parseFromString(xml, 'text/xml');
          const environmentData = xmlToJson(xmlData);
          this.envData = environmentData;
        }
        else
        {
          const environmentData = await this.http.get(this.path).toPromise();
          this.envData = environmentData;
        }
      }
      else
      {
        throw new Error("File format not supported..");
      }
    }
    catch(error)
    {
      console.error(error);
    }
  }

  get envConfig() {
    return this.envData;
  }
}
