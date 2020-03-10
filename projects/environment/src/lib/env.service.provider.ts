import {APP_INITIALIZER} from '@angular/core';
import {EnvironmentService} from './environment.service';

export const envInitializerFn = (envConfig: EnvironmentService) => {
  return () => {
    return envConfig.loadEnvConfig();
  };
};
export const EnvServiceProvider = {
  provide: APP_INITIALIZER,
  useFactory: envInitializerFn,
  multi: true,
  deps: [EnvironmentService],
};