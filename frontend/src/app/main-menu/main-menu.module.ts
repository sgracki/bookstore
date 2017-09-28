import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

import { MainMenuComponent } from './main-menu.component'
import { MaterialModule } from './../material.module'

@NgModule({
    declarations: [
        MainMenuComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        MainMenuComponent
    ],
    providers: []
})
export class MainMenuModule { }
