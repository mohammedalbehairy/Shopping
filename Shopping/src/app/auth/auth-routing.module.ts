import { LoginComponent } from './components/login/login.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const  routes:  Routes  = [
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export  class  AuthRoutingModule { }
