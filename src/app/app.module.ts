import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BlogpostModule } from './blogpost/blogpost.module';
import { CmspageModule } from './cmspage/cmspage.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Http,HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    BlogpostModule,
    CmspageModule,
    AppRoutingModule
    
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
