import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CartComponent } from './component/cart/cart.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DetailVinoComponent } from './detail-vino/detail-vino.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { SpinnerInterceptor } from './component/inceptor/spinner.interceptor';
import { ErrorInterceptor } from './component/inceptor/error.interceptor';
import { NewWineComponent } from './new-wine/new-wine.component';
import { ErrorDivComponent } from './component/error-div/error-div.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    DetailVinoComponent,
    SpinnerComponent,
    NewWineComponent,
    ErrorDivComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: SpinnerInterceptor, multi:true},{provide: HTTP_INTERCEPTORS,useClass: ErrorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
