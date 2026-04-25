// ============================================
// HEAVYTECH SOLUTIONS - FUNCIONES COMPLETAS
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // 1. MENÚ MÓVIL (HAMBURGUESA)
    // ============================================

    var mobileBtn = document.querySelector('.mobile-menu-btn');
    var menu = document.querySelector('.menu');

    if (mobileBtn && menu) {
        mobileBtn.addEventListener('click', function () {
            menu.classList.toggle('active');

            var spans = mobileBtn.querySelectorAll('span');
            if (menu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // ============================================
    // 2. CERRAR MENÚ AL HACER CLIC
    // ============================================

    var menuLinks = document.querySelectorAll('.menu a');
    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function () {
            if (menu && menu.classList.contains('active')) {
                menu.classList.remove('active');
                if (mobileBtn) {
                    var spans = mobileBtn.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
        });
    }

    // ============================================
    // 3. SMOOTH SCROLL
    // ============================================

    var allLinks = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < allLinks.length; i++) {
        allLinks[i].addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === "#" || href === "") return;

            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var headerOffset = 80;
                var elementPosition = target.offsetTop;
                var offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // ============================================
    // 4. ENLACE ACTIVO
    // ============================================

    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.menu a');

    function updateActiveLink() {
        var current = '';
        var scrollPosition = window.scrollY + 100;

        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            var sectionTop = section.offsetTop;
            var sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        }

        for (var i = 0; i < navLinks.length; i++) {
            var link = navLinks[i];
            link.classList.remove('active');
            var href = link.getAttribute('href').substring(1);
            if (href === current) {
                link.classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // ============================================
    // 5. ANIMACIÓN DE REVELADO
    // ============================================

    var revealElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .brand-item, .feature');

    var revealObserver = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        }
    }, { threshold: 0.1 });

    for (var i = 0; i < revealElements.length; i++) {
        var el = revealElements[i];
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        revealObserver.observe(el);
    }

    // ============================================
    // 6. TRADUCCIONES (ES, EN, NL)
    // ============================================

    var translations = {
        es: {
            nav_inicio: "Inicio",
            nav_servicios: "Servicios",
            nav_marcas: "Marcas",
            nav_nosotros: "Nosotros",
            nav_portafolio: "Portafolio",
            nav_testimonios: "Testimonios",
            nav_reservas: "Reservas",
            nav_contacto: "Contacto",
            hero_badge: "Expertos en maquinaria pesada",
            hero_title: "Experiencia global, <span>solución</span><br>local",
            hero_text: "Reparación, mantenimiento y servicio técnico especializado para maquinaria pesada, generadores, grúas y equipos de elevación.",
            btn_reserve: "Reservar cita",
            btn_services: "Ver servicios",
            services_title: "Nuestros servicios",
            services_subtitle: "Soluciones integrales para tu operación",
            service1_title: "Reparación mecánica",
            service1_text: "Motores, transmisiones, diferenciales y sistemas de frenos industriales.",
            service2_title: "Sistemas hidráulicos",
            service2_text: "Cilindros, bombas, válvulas y sistemas de alta presión.",
            service3_title: "Reparación eléctrica",
            service3_text: "Arrancadores, alternadores, tableros de control y cableado.",
            service4_title: "Diagnóstico electrónico",
            service4_text: "Escáner profesional, reprogramación de ECUs y sensores.",
            service5_title: "Grúas y elevación",
            service5_text: "Mantenimiento y reparación de grúas horquilla, telescópicas y puente grúa.",
            service6_title: "Generadores",
            service6_text: "Mantenimiento preventivo y correctivo de generadores diésel y gas.",
            brands_title: "Marcas que manejamos",
            brands_subtitle: "Equipos originales y repuestos certificados",
            about_title: "Más de 15 años de experiencia",
            about_text1: "En HeavyTech Solutions nos especializamos en el mantenimiento y reparación de maquinaria pesada y equipos industriales. Contamos con un equipo altamente capacitados.",
            about_text2: "Nuestra misión es minimizar el tiempo de inactividad de tus equipos, garantizando soluciones rápidas, eficientes y duraderas.",
            feature1_title: "Servicio tecnico especializado",
            feature1_text: "Emergencias las 24 horas",
            feature2_title: "Unidad móvil",
            feature2_text: "Servicio a domicilio",
            feature3_title: "Técnicos certificados",
            feature3_text: "Personal altamente calificado",
            feature4_title: "Garantía",
            feature4_text: "Todos los trabajos garantizados",
            portfolio_title: "Nuestros trabajos",
            portfolio_subtitle: "Proyectos recientes que demuestran nuestra calidad",
            portfolio1_title: "Excavadora Caterpillar",
            portfolio1_text: "Reparación completa de sistema hidráulico",
            portfolio2_title: "Generador Volvo",
            portfolio2_text: "Mantenimiento mayor y diagnóstico",
            portfolio3_title: "Grúa telescópica",
            portfolio3_text: "Reparación de sistema de elevación",
            portfolio4_title: "Bulldozer Komatsu",
            portfolio4_text: "Overhaul de motor completo",
            testimonials_title: "Lo que dicen nuestros clientes",
            testimonials_subtitle: "Confían en nosotros las mejores empresas",
            testimonial1_text: "Excelente servicio técnico. Diagnosticaron una falla que otros no encontraron. Muy profesionales.",
            testimonial1_name: "Carlos Méndez",
            testimonial1_company: "Constructora Andes",
            testimonial2_text: "Rápidos, eficientes y con gran conocimiento. Nuestros generadores nunca estuvieron mejor.",
            testimonial2_name: "Laura Fernández",
            testimonial2_company: "Energía Industrial",
            testimonial3_text: "La reparación hidráulica fue impecable. Llevamos 2 años sin problemas. Totalmente recomendados.",
            testimonial3_name: "Roberto Díaz",
            testimonial3_company: "Grúas del Pacífico",
            booking_title: "Reservar cita",
            booking_subtitle: "Solicita una revisión o mantenimiento",
            booking_name_label: "Nombre completo *",
            booking_name_placeholder: "Tu nombre completo",
            booking_email_label: "Correo electrónico *",
            booking_email_placeholder: "tu@email.com",
            booking_phone_label: "Teléfono *",
            booking_phone_placeholder: "+5999 5236873",
            booking_date_label: "Fecha preferida *",
            booking_time_label: "Hora preferida",
            booking_time_placeholder: "Selecciona una hora",
            booking_service_label: "Tipo de servicio *",
            booking_service_placeholder: "Selecciona un servicio",
            booking_equipo_label: "Equipo / Marca / Modelo",
            booking_equipo_placeholder: "Ej: Excavadora Caterpillar 320D",
            booking_message_label: "Descripción del problema o necesidad",
            booking_message_placeholder: "Describe la falla o el servicio que necesitas...",
            booking_submit_btn: "Reservar cita",
            time_0800: "08:00 - 09:00",
            time_0900: "09:00 - 10:00",
            time_1000: "10:00 - 11:00",
            time_1100: "11:00 - 12:00",
            time_1200: "12:00 - 13:00",
            time_1300: "13:00 - 14:00",
            time_1400: "14:00 - 15:00",
            time_1500: "15:00 - 16:00",
            time_1600: "16:00 - 17:00",
            time_1700: "17:00 - 18:00",
            service_mecanica: "Reparación mecánica",
            service_hidraulica: "Sistemas hidráulicos",
            service_electrica: "Reparación eléctrica",
            service_electronica: "Diagnóstico electrónico",
            service_gruas: "Grúas y elevación",
            service_generadores: "Generadores",
            service_mantenimiento: "Mantenimiento preventivo",
            contact_title: "Contacto",
            contact_subtitle: "Estamos disponibles para emergencias",
            contact_name_label: "Nombre completo *",
            contact_name_placeholder: "Tu nombre completo",
            contact_email_label: "Correo electrónico *",
            contact_email_placeholder: "tu@email.com",
            contact_phone_label: "Teléfono",
            contact_phone_placeholder: "+5999 5236873",
            contact_message_label: "Mensaje *",
            contact_message_placeholder: "Escribe tu mensaje aquí...",
            contact_submit_btn: "Enviar mensaje",
            contact_phone_title: "Teléfono 24/7",
            contact_whatsapp_title: "WhatsApp",
            contact_email_title: "Email",
            contact_location_title: "Taller central",
            contact_location_text: "Polígono Industrial Los Olivos<br>Madrid, España",
            contact_hours_title: "Horario",
            contact_hours_text: "Lun-Vie: 8:00 - 20:00   Sáb: 8:00 - 14:00",
            footer_about_text: "Especialistas en maquinaria pesada y servicios industriales.",
            footer_quick_links: "Enlaces rápidos",
            footer_services: "Servicios",
            footer_follow_us: "Síguenos",
            footer_copyright: "© 2026 HeavyTech Solutions - Todos los derechos reservados"
        },
        en: {
            nav_inicio: "Home",
            nav_servicios: "Services",
            nav_marcas: "Brands",
            nav_nosotros: "About Us",
            nav_portafolio: "Portfolio",
            nav_testimonios: "Testimonials",
            nav_reservas: "Booking",
            nav_contacto: "Contact",
            hero_badge: "Heavy machinery experts",
            hero_title: "Global expertise, local<span><br>solution</span>",
            hero_text: "Repair, maintenance and specialized technical service for heavy machinery, generators, cranes and lifting equipment.",
            btn_reserve: "Book appointment",
            btn_services: "View services",
            services_title: "Our services",
            services_subtitle: "Integrated solutions for your operation",
            service1_title: "Mechanical repair",
            service1_text: "Engines, transmissions, differentials and industrial brake systems.",
            service2_title: "Hydraulic systems",
            service2_text: "Cylinders, pumps, valves and high pressure systems.",
            service3_title: "Electrical repair",
            service3_text: "Starters, alternators, control panels and wiring.",
            service4_title: "Electronic diagnosis",
            service4_text: "Professional scanner, ECU reprogramming and sensors.",
            service5_title: "Cranes and lifting",
            service5_text: "Maintenance and repair of forklifts, telescopic and overhead cranes.",
            service6_title: "Generators",
            service6_text: "Preventive and corrective maintenance of diesel and gas generators.",
            brands_title: "Brands we handle",
            brands_subtitle: "Original equipment and certified parts",
            about_title: "Over 15 years of experience",
            about_text1: "At HeavyTech Solutions we specialize in the maintenance and repair of heavy machinery and industrial equipment. We have a team of highly trained technicians.",
            about_text2: "Our mission is to minimize your equipment downtime, guaranteeing fast, efficient and long-lasting solutions.",
            feature1_title: "Specialized technical service",
            feature1_text: "24-hour emergencies",
            feature2_title: "Mobile unit",
            feature2_text: "Home service",
            feature3_title: "Certified technicians",
            feature3_text: "Highly qualified personnel",
            feature4_title: "Warranty",
            feature4_text: "All work guaranteed",
            portfolio_title: "Our work",
            portfolio_subtitle: "Recent projects that demonstrate our quality",
            portfolio1_title: "Caterpillar Excavator",
            portfolio1_text: "Complete hydraulic system repair",
            portfolio2_title: "Volvo Generator",
            portfolio2_text: "Major maintenance and diagnosis",
            portfolio3_title: "Telescopic Crane",
            portfolio3_text: "Lifting system repair",
            portfolio4_title: "Komatsu Bulldozer",
            portfolio4_text: "Complete engine overhaul",
            testimonials_title: "What our clients say",
            testimonials_subtitle: "The best companies trust us",
            testimonial1_text: "Excellent technical service. They diagnosed a fault that others couldn't find. Very professional.",
            testimonial1_name: "Carlos Méndez",
            testimonial1_company: "Constructora Andes",
            testimonial2_text: "Fast, efficient and knowledgeable. Our generators have never been better.",
            testimonial2_name: "Laura Fernández",
            testimonial2_company: "Energía Industrial",
            testimonial3_text: "The hydraulic repair was flawless. 2 years without problems. Highly recommended.",
            testimonial3_name: "Roberto Díaz",
            testimonial3_company: "Grúas del Pacífico",
            booking_title: "Book appointment",
            booking_subtitle: "Request a review or maintenance",
            booking_name_label: "Full name *",
            booking_name_placeholder: "Your full name",
            booking_email_label: "Email address *",
            booking_email_placeholder: "your@email.com",
            booking_phone_label: "Phone *",
            booking_phone_placeholder: "+5999 5236873",
            booking_date_label: "Preferred date *",
            booking_time_label: "Preferred time",
            booking_time_placeholder: "Select a time",
            booking_service_label: "Service type *",
            booking_service_placeholder: "Select a service",
            booking_equipo_label: "Equipment / Brand / Model",
            booking_equipo_placeholder: "Ex: Caterpillar 320D Excavator",
            booking_message_label: "Problem description",
            booking_message_placeholder: "Describe the issue or service you need...",
            booking_submit_btn: "Book appointment",
            time_0800: "08:00 - 09:00",
            time_0900: "09:00 - 10:00",
            time_1000: "10:00 - 11:00",
            time_1100: "11:00 - 12:00",
            time_1200: "12:00 - 13:00",
            time_1300: "13:00 - 14:00",
            time_1400: "14:00 - 15:00",
            time_1500: "15:00 - 16:00",
            time_1600: "16:00 - 17:00",
            time_1700: "17:00 - 18:00",
            service_mecanica: "Mechanical repair",
            service_hidraulica: "Hydraulic systems",
            service_electrica: "Electrical repair",
            service_electronica: "Electronic diagnosis",
            service_gruas: "Cranes and lifting",
            service_generadores: "Generators",
            service_mantenimiento: "Preventive maintenance",
            contact_title: "Contact",
            contact_subtitle: "We are available for emergencies",
            contact_name_label: "Full name *",
            contact_name_placeholder: "Your full name",
            contact_email_label: "Email address *",
            contact_email_placeholder: "your@email.com",
            contact_phone_label: "Phone",
            contact_phone_placeholder: "+5999 5236873",
            contact_message_label: "Message *",
            contact_message_placeholder: "Write your message here...",
            contact_submit_btn: "Send message",
            contact_phone_title: "24/7 Phone",
            contact_whatsapp_title: "WhatsApp",
            contact_email_title: "Email",
            contact_location_title: "Main workshop",
            contact_location_text: "Los Olivos Industrial Park<br>Madrid, Spain",
            contact_hours_title: "Hours",
            contact_hours_text: "Mon-Fri: 8:00 - 20:00   Sat: 8:00 - 14:00",
            footer_about_text: "Specialists in heavy machinery and industrial services.",
            footer_quick_links: "Quick links",
            footer_services: "Services",
            footer_follow_us: "Follow us",
            footer_copyright: "© 2026 HeavyTech Solutions - All rights reserved"
        },
        nl: {
            nav_inicio: "Home",
            nav_servicios: "Diensten",
            nav_marcas: "Merken",
            nav_nosotros: "Over ons",
            nav_portafolio: "Portfolio",
            nav_testimonios: "Getuigenissen",
            nav_reservas: "Afspraak",
            nav_contacto: "Contact",
            hero_badge: "Experts in zware machines",
            hero_title: "Wereldwijde ervaring, lokale<span><br>oplossing</span>",
            hero_text: "Reparatie, onderhoud en gespecialiseerde technische service 24/7 voor zware machines, generatoren, kranen en hijsapparatuur.",
            btn_reserve: "Afspraak maken",
            btn_services: "Bekijk diensten",
            services_title: "Onze diensten",
            services_subtitle: "Geïntegreerde oplossingen voor uw operatie",
            service1_title: "Mechanische reparatie",
            service1_text: "Motoren, transmissies, differentiëlen en industriële remsystemen.",
            service2_title: "Hydraulische systemen",
            service2_text: "Cilinders, pompen, kleppen en hogedruksystemen.",
            service3_title: "Elektrische reparatie",
            service3_text: "Starters, alternatoren, bedieningspanelen en bedrading.",
            service4_title: "Elektronische diagnose",
            service4_text: "Professionele scanner, ECU-herprogrammering en sensoren.",
            service5_title: "Kranen en hijsen",
            service5_text: "Onderhoud en reparatie van heftrucks, telescoopkranen en brugkranen.",
            service6_title: "Generatoren",
            service6_text: "Preventief en correctief onderhoud van diesel- en gasgeneratoren.",
            brands_title: "Merken die we behandelen",
            brands_subtitle: "Originele apparatuur en gecertificeerde onderdelen",
            about_title: "Meer dan 15 jaar ervaring",
            about_text1: "Bij HeavyTech Solutions zijn we gespecialiseerd in het onderhoud en de reparatie van zware machines en industriële apparatuur. We beschikken over een team van hoogopgeleide technici.",
            about_text2: "Onze missie is om de stilstandtijd van uw apparatuur te minimaliseren en snelle, efficiënte en duurzame oplossingen te garanderen.",
            feature1_title: "Gespecialiseerde technische service",
            feature1_text: "24-uurs noodgevallen",
            feature2_title: "Mobiele eenheid",
            feature2_text: "Thuis service",
            feature3_title: "Gecertificeerde technici",
            feature3_text: "Hooggekwalificeerd personeel",
            feature4_title: "Garantie",
            feature4_text: "Alle werk gegarandeerd",
            portfolio_title: "Ons werk",
            portfolio_subtitle: "Recente projecten die onze kwaliteit aantonen",
            portfolio1_title: "Caterpillar Graafmachine",
            portfolio1_text: "Complete hydraulische systeemreparatie",
            portfolio2_title: "Volvo Generator",
            portfolio2_text: "Groot onderhoud en diagnose",
            portfolio3_title: "Telescoopkraan",
            portfolio3_text: "Reparatie hijssysteem",
            portfolio4_title: "Komatsu Bulldozer",
            portfolio4_text: "Complete motor revisie",
            testimonials_title: "Wat onze klanten zeggen",
            testimonials_subtitle: "De beste bedrijven vertrouwen ons",
            testimonial1_text: "Uitstekende technische service. Ze diagnosticeerden een fout die anderen niet konden vinden. Zeer professioneel.",
            testimonial1_name: "Carlos Méndez",
            testimonial1_company: "Constructora Andes",
            testimonial2_text: "Snel, efficiënt en deskundig. Onze generatoren waren nog nooit beter.",
            testimonial2_name: "Laura Fernández",
            testimonial2_company: "Energía Industrial",
            testimonial3_text: "De hydraulische reparatie was vlekkeloos. 2 jaar zonder problemen. Zeer aanbevolen.",
            testimonial3_name: "Roberto Díaz",
            testimonial3_company: "Grúas del Pacífico",
            booking_title: "Afspraak maken",
            booking_subtitle: "Vraag een beoordeling of onderhoud aan",
            booking_name_label: "Volledige naam *",
            booking_name_placeholder: "Uw volledige naam",
            booking_email_label: "E-mailadres *",
            booking_email_placeholder: "uw@email.com",
            booking_phone_label: "Telefoon *",
            booking_phone_placeholder: "+5999 5236873",
            booking_date_label: "Gewenste datum *",
            booking_time_label: "Gewenste tijd",
            booking_time_placeholder: "Selecteer een tijd",
            booking_service_label: "Type service *",
            booking_service_placeholder: "Selecteer een service",
            booking_equipo_label: "Apparatuur / Merk / Model",
            booking_equipo_placeholder: "Bijv: Caterpillar 320D Graafmachine",
            booking_message_label: "Probleembeschrijving",
            booking_message_placeholder: "Beschrijf het probleem of de service die u nodig heeft...",
            booking_submit_btn: " Afspraak maken",
            time_0800: "08:00 - 09:00",
            time_0900: "09:00 - 10:00",
            time_1000: "10:00 - 11:00",
            time_1100: "11:00 - 12:00",
            time_1200: "12:00 - 13:00",
            time_1300: "13:00 - 14:00",
            time_1400: "14:00 - 15:00",
            time_1500: "15:00 - 16:00",
            time_1600: "16:00 - 17:00",
            time_1700: "17:00 - 18:00",
            service_mecanica: "Mechanische reparatie",
            service_hidraulica: "Hydraulische systemen",
            service_electrica: "Elektrische reparatie",
            service_electronica: "Elektronische diagnose",
            service_gruas: "Kranen en hijsen",
            service_generadores: "Generatoren",
            service_mantenimiento: "Preventief onderhoud",
            contact_title: "Contact",
            contact_subtitle: "Beschikbaar voor noodgevallen",
            contact_name_label: "Volledige naam *",
            contact_name_placeholder: "Uw volledige naam",
            contact_email_label: "E-mailadres *",
            contact_email_placeholder: "uw@email.com",
            contact_phone_label: "Telefoon",
            contact_phone_placeholder: "+5999 5236873",
            contact_message_label: "Bericht *",
            contact_message_placeholder: "Schrijf uw bericht hier...",
            contact_submit_btn: "Bericht verzenden",
            contact_phone_title: "24/7 Telefoon",
            contact_whatsapp_title: "WhatsApp",
            contact_email_title: "E-mail",
            contact_location_title: "Hoofdwerkplaats",
            contact_location_text: "Los Olivos Industrieel Park<br>Madrid, Spanje",
            contact_hours_title: "Openingstijden",
            contact_hours_text: "Ma-Vr: 8:00 - 20:00  Za: 8:00 - 14:00",
            footer_about_text: "Specialisten in zware machines en industriële diensten.",
            footer_quick_links: "Snelle links",
            footer_services: "Diensten",
            footer_follow_us: "Volg ons",
            footer_copyright: "© 2026 HeavyTech Solutions - Alle rechten voorbehouden"
        }
    };

    var currentLang = 'es';

    function translatePage(lang) {
        currentLang = lang;

        var elements = document.querySelectorAll('[data-translate]');
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            var key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) {
                        el.placeholder = translations[lang][key];
                    }
                } else if (el.tagName === 'OPTION') {
                    el.textContent = translations[lang][key];
                } else {
                    if (key === 'hero_title') {
                        el.innerHTML = translations[lang][key];
                    } else {
                        el.textContent = translations[lang][key];
                    }
                }
            }
        }

        localStorage.setItem('language', lang);

        // Actualizar el botón activo del menú desplegable circular
        updateActiveFlag(lang);

        document.documentElement.lang = (lang === 'es' ? 'es' : (lang === 'en' ? 'en' : 'nl'));
    }

    // ============================================
    // SELECTOR DE IDIOMA - BOTÓN CIRCULAR CON MENÚ
    // ============================================

    var langActiveBtn = document.getElementById('langActiveBtn');
    var langDropdownMenu = document.getElementById('langDropdownMenu');
    var langOptions = document.querySelectorAll('.lang-option');

    // Función para actualizar la bandera del botón activo
function updateActiveFlag(lang) {
    var activeFlagImg = document.getElementById('activeFlag');
    if (!activeFlagImg) return;
    
    var flagMap = {
        'en': 'assets/images/flags/us.svg',
        'es': 'assets/images/flags/es.svg',
        'nl': 'assets/images/flags/nl.svg'
    };
    
    activeFlagImg.src = flagMap[lang] || 'assets/images/flags/us.svg';
    activeFlagImg.alt = lang === 'en' ? 'English' : (lang === 'es' ? 'Español' : 'Nederlands');
}

    // Abrir/cerrar menú al hacer clic en el botón
    if (langActiveBtn && langDropdownMenu) {
        langActiveBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            langDropdownMenu.classList.toggle('show');
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function (e) {
            if (langDropdownMenu && !langDropdownMenu.contains(e.target) && !langActiveBtn.contains(e.target)) {
                langDropdownMenu.classList.remove('show');
            }
        });
    }

    // Manejar selección de idioma
    if (langOptions.length > 0) {
        langOptions.forEach(function (option) {
            option.addEventListener('click', function () {
                var lang = this.getAttribute('data-lang');
                translatePage(lang);
                if (langDropdownMenu) {
                    langDropdownMenu.classList.remove('show');
                }
            });
        });
    }

    // Cargar idioma guardado
    var savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
        translatePage(savedLang);
    } else {
        translatePage('en');
    }

});

// ============================================
// SLIDE DE IMÁGENES (HERO)
// ============================================

var slides = document.querySelectorAll('.slides img');
var slideIndex = 0;

function changeSlide() {
    if (slides.length > 0) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add('active');
    }
}

if (slides.length > 0) {
    setInterval(changeSlide, 5000);
}

// ============================================
// FORMULARIOS CON FORMSPREE (SIN REDIRECCIÓN)
// ============================================

// Formulario de Contacto
var contactForm = document.getElementById('contactForm');
var contactMessage = document.getElementById('contactFormMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var formData = new FormData(contactForm);

        contactMessage.textContent = 'Enviando...';
        contactMessage.className = 'form-message info';
        contactMessage.style.display = 'block';

        fetch('https://formspree.io/f/mbdppday', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(function (response) {
            if (response.ok) {
                contactMessage.textContent = '✅ ¡Mensaje enviado con éxito! Te contactaremos pronto.';
                contactMessage.className = 'form-message success';
                contactForm.reset();
            } else {
                contactMessage.textContent = '❌ Hubo un error al enviar el mensaje. Intenta de nuevo.';
                contactMessage.className = 'form-message error';
            }

            setTimeout(function () {
                contactMessage.style.display = 'none';
            }, 5000);
        }).catch(function () {
            contactMessage.textContent = '❌ Error de conexión. Verifica tu internet.';
            contactMessage.className = 'form-message error';
            setTimeout(function () {
                contactMessage.style.display = 'none';
            }, 5000);
        });
    });
}

// Formulario de Reservas
var bookingForm = document.getElementById('bookingForm');
var bookingMessage = document.getElementById('bookingFormMessage');

if (bookingForm) {
    var dateInput = document.getElementById('book_date');
    if (dateInput) {
        var today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var formData = new FormData(bookingForm);

        bookingMessage.textContent = 'Enviando...';
        bookingMessage.className = 'form-message info';
        bookingMessage.style.display = 'block';

        fetch('https://formspree.io/f/mbdppday', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(function (response) {
            if (response.ok) {
                bookingMessage.textContent = '✅ ¡Cita reservada con éxito! Te confirmaremos por email o teléfono.';
                bookingMessage.className = 'form-message success';
                bookingForm.reset();
            } else {
                bookingMessage.textContent = '❌ Hubo un error al enviar la reserva. Intenta de nuevo.';
                bookingMessage.className = 'form-message error';
            }

            setTimeout(function () {
                bookingMessage.style.display = 'none';
            }, 5000);
        }).catch(function () {
            bookingMessage.textContent = '❌ Error de conexión. Verifica tu internet.';
            bookingMessage.className = 'form-message error';
            setTimeout(function () {
                bookingMessage.style.display = 'none';
            }, 5000);
        });
    });
}