import { AdminComponent } from './core/components/admin/admin.component';
import { AuthComponent } from './core/components/auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
      path: '',
      component: AdminComponent,
      children: [
        {
          path: 'home',
          loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule)
        },
        {
          path: 'blogs',
          loadChildren: () => import(`./blogs/blogs.module`).then(m => m.BlogsModule)
        },
        {
          path: 'contact',
          loadChildren: () => import(`./contacts/contacts.module`).then(m => m.ContactsModule)
        },
        {
          path: 'cart',
          loadChildren: () => import(`./cart/cart.module`).then(m => m.CartModule)
        },
        {
          path: 'categories',
          loadChildren: () => import(`./categories/categories.module`).then(m => m.CategoriesModule)
        },
        {
          path: '**',
          redirectTo: '/home'
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
