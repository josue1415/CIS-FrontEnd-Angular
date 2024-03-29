import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StriphtmlPipe } from './pipes/striphtml.pipe';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { VerFotografiasComponent } from './components/modals/verFotografias/ver-fotografias/ver-fotografias.component';
import { VerParticipantesComponent } from './components/modals/verParticipantes/ver-participantes/ver-participantes.component';


// Export using to translate
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    HeaderMenuComponent,
    FooterComponent,
    StriphtmlPipe,
    VerFotografiasComponent,
    VerParticipantesComponent
  ],
  imports: [
    CommonModule,
    MdbCollapseModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    HeaderMenuComponent,
    FooterComponent,
    TranslateModule,
    StriphtmlPipe
  ]
})
export class SharedModule { }
