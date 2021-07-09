import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BukuComponent } from './components/buku/buku.component';
import { PelangganComponent } from './components/pelanggan/pelanggan.component';
import { SalamComponent } from './components/salam/salam.component';

const routes: Routes = [
  {path: "", component: SalamComponent},
  {path: "buku", component: BukuComponent},
  {path: "pelanggan", component: PelangganComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [SalamComponent, BukuComponent, PelangganComponent];
