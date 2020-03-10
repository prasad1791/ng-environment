import { NgModule , ModuleWithProviders} from '@angular/core';
import {EnvironmentService} from './environment.service';
import {EnvServiceProvider} from './env.service.provider';
import {filePath$} from './env-token.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
imports: [HttpClientModule],
providers: [EnvironmentService, EnvServiceProvider]
})
export class EnvironmentModule { 
  static forRoot(filePath: string): ModuleWithProviders {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: filePath$,
          useValue: filePath,
        },
      ],
    };
  }
}
