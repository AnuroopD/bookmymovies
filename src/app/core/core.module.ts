import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { AppRoutingModule } from './../app-routing.module';
import { UserDetailService } from 'src/app/core/services/userDetails.service';
import { HeaderComponent } from './shell/header/header.component';
import { AuthService } from 'angular-6-social-login';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular-6-social-login';
import { SignInService } from '../core/shell/header/service/signin.service';
import { SharedModule } from '../shared/shared.module';
import { LoggerComponent } from './Logger/logger/logger.component';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('211481144823-tvupluah139i5bdcqdpnaeqdmeu9rfbd.apps.googleusercontent.com')
    }
  ]);
  return config;
}

@NgModule({
  declarations: [ShellComponent, HeaderComponent, LoggerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  providers: [
    UserDetailService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    SignInService,
    AuthService
  ],
  exports: [SharedModule, HeaderComponent]
})
export class CoreModule {}
