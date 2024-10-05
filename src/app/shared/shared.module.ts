import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core/core.module';
import { ButtonComponent } from './components/button/button.component';


const COMPONENTS = [CustomInputComponent, HeaderComponent, LogoComponent,
  ButtonComponent]

const MODULES =[CommonModule,
  IonicModule,
  ReactiveFormsModule,
  FormsModule,
  CoreModule]  

@NgModule({
  declarations: [...COMPONENTS],
   
  exports: [ ...COMPONENTS,
    ReactiveFormsModule, ...MODULES
  ],
  imports: [...MODULES]
})
export class SharedModule { }
