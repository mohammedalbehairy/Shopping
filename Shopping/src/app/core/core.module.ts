import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
