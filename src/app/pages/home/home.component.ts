import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface Tip {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
}

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [
        BadgeModule, AvatarModule, InputTextModule,
        RippleModule, CommonModule, ButtonModule,
        MenubarModule, FormsModule
    ]
})
export class HomeComponent implements OnInit {
    items: MenuItem[] | undefined;
    mobileMenuOpen = false;
    
    contactData: ContactData = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    services: Service[] = [
        {
            title: 'Desarrollo Web',
            description: 'Creamos sitios web modernos, responsivos y optimizados para tu negocio.',
            icon: 'pi pi-globe',
            features: [
                'Diseño responsive',
                'Optimización SEO',
                'Panel de administración',
                'Integración con APIs',
                'Hosting y dominio'
            ]
        },
        {
            title: 'Aplicaciones Móviles',
            description: 'Desarrollamos apps nativas e híbridas para iOS y Android.',
            icon: 'pi pi-mobile',
            features: [
                'Apps nativas',
                'Apps híbridas',
                'UI/UX optimizado',
                'Integración con servicios',
                'Publicación en stores'
            ]
        },
        {
            title: 'Sistemas Empresariales',
            description: 'Soluciones personalizadas para automatizar procesos de tu empresa.',
            icon: 'pi pi-cog',
            features: [
                'ERP personalizado',
                'CRM integrado',
                'Gestión de inventarios',
                'Reportes automáticos',
                'Soporte técnico'
            ]
        },
        {
            title: 'Consultoría IT',
            description: 'Asesoramiento tecnológico para optimizar tus procesos digitales.',
            icon: 'pi pi-users',
            features: [
                'Auditoría tecnológica',
                'Migración a la nube',
                'Seguridad informática',
                'Capacitación de personal',
                'Soporte continuo'
            ]
        }
    ];

    tips: Tip[] = [
        {
            title: 'Seguridad en Contraseñas',
            description: 'Usa contraseñas únicas y complejas para cada cuenta. Considera usar un gestor de contraseñas.',
            icon: 'pi pi-shield',
            tags: ['Seguridad', 'Contraseñas', 'Privacidad']
        },
        {
            title: 'Respaldos Automáticos',
            description: 'Configura respaldos automáticos de tus datos importantes en la nube y localmente.',
            icon: 'pi pi-cloud-upload',
            tags: ['Backup', 'Cloud', 'Datos']
        },
        {
            title: 'Actualizaciones de Software',
            description: 'Mantén siempre actualizado tu software y sistema operativo para mayor seguridad.',
            icon: 'pi pi-refresh',
            tags: ['Actualizaciones', 'Seguridad', 'Software']
        },
        {
            title: 'Optimización de Rendimiento',
            description: 'Limpia regularmente archivos temporales y desfragmenta tu disco duro.',
            icon: 'pi pi-bolt',
            tags: ['Rendimiento', 'Optimización', 'Mantenimiento']
        }
    ];

    portfolio: Project[] = [
        {
            title: 'E-commerce Fashion',
            description: 'Tienda online completa con carrito de compras y pasarela de pagos.',
            category: 'Desarrollo Web',
            image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
            technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe']
        },
        {
            title: 'App de Delivery',
            description: 'Aplicación móvil para pedidos de comida con tracking en tiempo real.',
            category: 'App Móvil',
            image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
            technologies: ['React Native', 'Firebase', 'Google Maps', 'PayPal']
        },
        {
            title: 'Sistema de Gestión',
            description: 'ERP personalizado para empresa manufacturera con módulos integrados.',
            category: 'Sistema Empresarial',
            image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
            technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker']
        },
        {
            title: 'Dashboard Analytics',
            description: 'Panel de control con métricas y reportes en tiempo real.',
            category: 'Desarrollo Web',
            image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
            technologies: ['React', 'D3.js', 'Python', 'PostgreSQL']
        }
    ];

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
                icon: 'pi pi-cog'
            },
            {
                label: 'Consejos',
                icon: 'pi pi-lightbulb'
            },
            {
                label: 'Portafolio',
                icon: 'pi pi-briefcase'
            }
        ];
    }

    ngAfterViewInit(): void {
        this.initAnimations();
        this.initScrollAnimations();
    }

    private initAnimations(): void {
        // Header animation
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

        // Hero Text Animation
        const h1 = document.querySelector('#chars');
        if (h1) {
            const text = h1.textContent || '';
            h1.innerHTML = '';
            text.split('').forEach(char => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
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

        // Paragraph animation
        gsap.from(".hero-text p", {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 1.2
        });

        // Buttons
        gsap.from(".actions button", {
            scale: 0.8,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
            delay: 1.5,
            ease: "back.out(1.7)"
        });

        // Image
        gsap.from(".hero-image img", {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            delay: 1
        });
    }

    private initScrollAnimations(): void {
        // Service cards animation
        gsap.from(".service-card", {
            scrollTrigger: {
                trigger: ".services-section",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out"
        });

        // Tips animation
        gsap.from(".tip-card", {
            scrollTrigger: {
                trigger: ".tips-section",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power2.out"
        });

        // Portfolio animation
        gsap.from(".portfolio-item", {
            scrollTrigger: {
                trigger: ".portfolio-section",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out"
        });

        // Stats animation
        gsap.from(".stat-item", {
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            scale: 0.8,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "back.out(1.7)"
        });
    }

    toggleMobileMenu(): void {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }

    closeMobileMenu(): void {
        this.mobileMenuOpen = false;
    }

    scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    openWhatsApp(service?: string): void {
        const phoneNumber = '5212345678901'; // Reemplaza con tu número real
        let message = '¡Hola! Me interesa conocer más sobre sus servicios de SOLUTEC.';
        
        if (service) {
            message += ` Específicamente sobre: ${service}`;
        }
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    viewProject(project: Project): void {
        // Aquí puedes implementar un modal o navegación a detalle del proyecto
        console.log('Ver proyecto:', project);
    }

    sendMessage(): void {
        if (this.contactData.name && this.contactData.email && this.contactData.message) {
            const message = `Hola, soy ${this.contactData.name}. ${this.contactData.message}. Mi email es: ${this.contactData.email}${this.contactData.phone ? ` y mi teléfono: ${this.contactData.phone}` : ''}.`;
            
            const phoneNumber = '5212345678901'; // Reemplaza con tu número real
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
            
            // Limpiar formulario
            this.contactData = {
                name: '',
                email: '',
                phone: '',
                message: ''
            };
        }
    }
}