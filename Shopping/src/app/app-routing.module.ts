import { AdminComponent } from './core/components/admin/admin.component';
import { AppComponent } from './core/app.component';
import { AuthComponent } from './core/components/auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes =
  [
    {
      path: 'auth',
      component: AuthComponent,
      loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
    },
    {
      path: 'admin',
      component: AdminComponent,
      loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
    },
    {
      path: 'products',
      component: AdminComponent,
      children: [
        {
          path: 'home',
          loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule)
        }
      ]
    },
    {
      path: '**',
      redirectTo: 'products/home'
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
