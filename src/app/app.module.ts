import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProfileService} from './profile.service';
// import { RepositoryService } from './repository.service';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProfileComponent } from './profile/profile.component';
import {ProfileComponent} from './profile/profile.component';
import { DurationPipe } from './duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
