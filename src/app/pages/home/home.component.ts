import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import SplitText from 'gsap/SplitText';
import gsap from 'gsap';

gsap.registerPlugin(SplitText);

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

   
  ngAfterViewInit(): void {
    gsap.registerPlugin(); // Solo SplitText si lo usas

    // ✅ Header animation
    gsap.from("header", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });

    gsap.from(".navbar a", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      delay: 0.5,
      duration: 0.6
    });

    // ✅ Hero Text Animation (con SplitText si lo tienes)
    // const split = new SplitText("#chars", { type: "chars" });
    // gsap.from(split.chars, {
    //   x: 50,
    //   opacity: 0,
    //   duration: 0.8,
    //   ease: "back.out(1.7)",
    //   stagger: 0.03,
    //   delay: 0.8
    // });

    // ✅ Alternativa sin SplitText
    const h1 = document.querySelector('#chars');
    if (h1) {
      const text = h1.textContent || '';
      h1.innerHTML = '';
      text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        h1.appendChild(span);
      });

      gsap.from(h1.querySelectorAll('span'), {
        x: 40,
        opacity: 0,
        stagger: 0.03,
        delay: 0.8,
        duration: 0.6,
        ease: 'back.out(1.7)'
      });
    }

    // ✅ Paragraph animation
    gsap.from(".hero-text p", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 1.2
    });

    // ✅ Buttons
    gsap.from(".actions button", {
      scale: 0.8,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      delay: 1.5,
      ease: "back.out(1.7)"
    });

    // ✅ Image
    gsap.from(".hero-image img", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 1
    });
  }

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
