import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {
    MdCardModule,
    MdListModule,
    MdInputModule,
    MdSelectModule,
    MdButtonModule,
    MdSnackBarModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule
} from '@angular/material'

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MdCardModule,
        MdListModule,
        MdInputModule,
        MdSelectModule,
        MdButtonModule,
        MdSnackBarModule,
        MdCheckboxModule,
        MdToolbarModule,
        MdIconModule
    ],
    exports: [
        BrowserAnimationsModule,
        MdCardModule,
        MdListModule,
        MdInputModule,
        MdSelectModule,
        MdButtonModule,
        MdSnackBarModule,
        MdCheckboxModule,
        MdToolbarModule,
        MdIconModule
    ]
})

export class MaterialModule {}
