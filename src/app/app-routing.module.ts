import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeComponentModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'departments', loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule) },
  { path: 'doctors', loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule) },
  { path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
  { path: 'empanelments', loadChildren: () => import('./empanelments/empanelments.module').then(m => m.EmpanelmentsModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
