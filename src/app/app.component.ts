import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'langApp';

username:string="";
ic:string="";
mobileno:string="";
email:string="";
password:string="";
selectLang:string="";
TransLang:any[]=[];
LoginFormLabels={
  username:"name",
  ic:"ic",
  mobileno:"Mobile No",
  email:"E-mail"


  }

  constructor(public translate: TranslateService){
    translate.setDefaultLang('en');
    translate.addLangs(['en','bs']);
    
    translate.use('en');
   
    }

    uselang(lang:string){
      this.translate.use(lang)

    }

    setTransLanguage(){
      this.translate.use(this.selectLang);
      }
      getTransLanguage(){
      this.TransLang=[...this.translate.getLangs()];
      }
      ngOnInit(){
        this.getTransLanguage();
        }
        
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,"/public/lang-files/", "-lang.json");
  }
