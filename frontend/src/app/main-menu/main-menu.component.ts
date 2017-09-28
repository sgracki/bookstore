import { Component, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http'
import { MdSnackBar } from '@angular/material'

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.sass']
})

export class MainMenuComponent implements OnInit {

    constructor(public snackBar: MdSnackBar) { }

    ngOnInit() {
    }
}
