import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
     ReactiveFormsModule,
     FormsModule
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
