# ng-environment

Library allows you to provide environment variables externally for angular project. You are also allowed to change them after build.

# Features
  - Accept the [JSON](https://www.json.org/json-en.html) and [XML](https://en.wikipedia.org/wiki/XML) file.
  - Allow to Change the environment variables without new angular build.

## Download and Installation
### Step 1: Install `ng-environment`:

#### NPM
```shell
npm install ng-environment --save
```
#### YARN
```shell
yarn add ng-environment
```
### Step 2: Include a `JSON` or `XML` file: 
To allow external environment variables include `.json` or `.xml` file in `assets` folder. Angular cli will copy these files to `dist` folder after build.

### Step 3: Import the `EnvironmentModule`:
```js
import {EnvironmentModule} from 'ng-environment';

@NgModule({
  declarations: [AppComponent],
  imports: [EnvironmentModule.forRoot('assets/config.json')],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Step 4 : Access environment variables inside the components

#### Import `EnvironmentService` in the component

```js
import {EnvironmentService} from 'ng-environment';
import {HttpClient} from '@angular/common/http';
  export class AppComponent {
  
  constructor(private http: HttpClient,private envService:EnvironmentService){
    this.dataRes();
  }

  public dataRes():void{
    this.http.get(`${this.envService.envConfig.apiUrl}employees`)
    .subscribe((res)=>{
      const resData =res;
    },(error)=>console.log(error));
  }
}
```