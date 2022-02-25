import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { HeaderComponent } from './component/header/header.component';
import { ContactComponent } from './contact/contact.component';
import { DetailVinoComponent } from './detail-vino/detail-vino.component';
import { HomeComponent } from './home/home.component';
import { NewWineComponent } from './new-wine/new-wine.component';


const routes: Routes = [
{
  path: '',
  component: HomeComponent,
  pathMatch:'full'
},

{
  path: 'catalogo',
  component: CatalogComponent,
  pathMatch:'full'

},

{
  path: 'contacto',
  component: ContactComponent,
  pathMatch:'full'

},

{
  path: 'catalogo/detalle/:id',
  component: DetailVinoComponent,
  pathMatch:'full'

},

{
  path: 'nuevoVino',
  component: NewWineComponent,
  pathMatch:'full'

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
