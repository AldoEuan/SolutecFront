import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [
        BadgeModule, AvatarModule, InputTextModule,
        RippleModule, CommonModule, ButtonModule,
        MenubarModule
    ]
})
export class HomeComponent implements OnInit {

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-home'
            },
            {
                label: 'Sobre mí',
                icon: 'pi pi-star'
            },
            {
                label: 'Servicios',
                icon: 'pi pi-envelope',
            },
            {
                label: 'Consejos',
                icon: 'pi pi-envelope',
            },
            {
                label: 'Portafolio',
                icon: 'pi pi-envelope',
            }
        ];
    }

}
