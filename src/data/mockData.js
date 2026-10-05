export const CATEGORIES_DATA = [
    {
        id: 'tortas',
        title: 'Tortas Personalizadas',
        subtitle: 'Diseños únicos en buttercream',
        description: 'Tortas de autor decoradas a la medida para cumpleaños, bodas, aniversarios y momentos inolvidables.',
        priceFrom: 180,
        servings: '12 a 45 porciones',
        leadTime: 'Mínimo 5 a 7 días',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
        tag: 'Estrella de la casa'
    },
    {
        id: 'minicakes',
        title: 'Mini Cakes & Bento',
        subtitle: 'El detalle tierno y perfecto',
        description: 'Pastelitos individuales de 10 a 12 cm de diámetro en packaging ecológico con velita y dedicatoria.',
        priceFrom: 65,
        servings: '1 a 3 porciones',
        leadTime: 'Mínimo 3 días',
        image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
        tag: 'Tendencia viral'
    },
    {
        id: 'cupcakes',
        title: 'Cupcakes de Autor',
        subtitle: 'Bocados esponjosos y delicados',
        description: 'Packs de 6 o 12 unidades con rosetones de buttercream suizo, chispas artesanales y rellenos sorpresa.',
        priceFrom: 75,
        servings: 'Pack 6 / 12 unid.',
        leadTime: 'Mínimo 3 días',
        image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80',
        tag: 'Ideal para compartir'
    },
    {
        id: 'cookies',
        title: 'Cookies Decoradas',
        subtitle: 'Galletas de mantequilla y glaseado',
        description: 'Masa sableé de vainilla con glaseado real detallado a mano. Diseños temáticos que enamoran a primera vista.',
        priceFrom: 85,
        servings: 'Docena decorada',
        leadTime: 'Mínimo 5 días',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
        tag: 'Detalle para recuerdo'
    },
    {
        id: 'boxes',
        title: 'Boxes Dulces & Regalos',
        subtitle: 'La combinación más dulce',
        description: 'Cajas de regalo con mini cake, macarons, trufas de chocolate y flores secas. Listas para sorprender.',
        priceFrom: 140,
        servings: 'Box degustación',
        leadTime: 'Mínimo 4 días',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
        tag: 'Favorito para regalar'
    },
    {
        id: 'postres',
        title: 'Postres Individuales',
        subtitle: 'Vasitos & tartas boutique',
        description: 'Tartaletas de frutos rojos, shots de maracuyá, pavlovas y cheesecakes para mesas dulces de fiesta.',
        priceFrom: 90,
        servings: 'Docena surtida',
        leadTime: 'Mínimo 4 días',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
        tag: 'Para tu mesa dulce'
    }
];
export const PRODUCTS_MENU_DATA = [
    {
        id: 'torta-vintage-frambuesa',
        name: 'Torta Vintage Lambeth Frambuesa',
        category: 'tortas',
        description: 'Estilo clásico victoriano con delicados olanes en buttercream de vainilla y corazón de coulis de frambuesa fresca.',
        priceFrom: 220,
        servings: '15 a 18 porciones',
        leadTime: '5 días',
        badge: 'MÁS PEDIDO',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
        flavorsAvailable: ['Vainilla francesa', 'Red Velvet', 'Chocolate amargo'],
        sizes: ['Mediana (15 porciones)', 'Grande (25 porciones)', '2 Pisos (35 porciones)'],
        ingredientsHighlight: 'Mantequilla pura de rancho, frambuesas frescas y extracto natural de vainilla.'
    },
    {
        id: 'bento-cake-cherries',
        name: 'Bento Cake "Sweet Cherries"',
        category: 'minicakes',
        description: 'Mini torta estilo coreano con ilustración artesanal de cerezas en relieve y frase personalizada a mano.',
        priceFrom: 70,
        servings: '2 a 3 porciones (10 cm)',
        leadTime: '3 días',
        badge: 'MÁS PEDIDO',
        image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
        flavorsAvailable: ['Chocolate belga', 'Vainilla suave', 'Limón amapola'],
        sizes: ['Individual (10 cm)', 'Doble altura (12 cm)'],
        ingredientsHighlight: 'Bizcocho húmedo, buttercream suave no empalagoso y dedicatoria con manga pastelera.'
    },
    {
        id: 'torta-floral-botanica',
        name: 'Torta Botánica Silvestre & Higos',
        category: 'tortas',
        description: 'Semi naked cake con flores orgánicas prensadas, higos frescos, romero y toques de pan de oro comestible.',
        priceFrom: 260,
        servings: '20 a 24 porciones',
        leadTime: '6 días',
        badge: 'EDICIÓN ESPECIAL',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
        flavorsAvailable: ['Limón con semillas de amapola', 'Naranja especiada', 'Vainilla'],
        sizes: ['1 Piso (20 porciones)', '2 Pisos (35 porciones)'],
        ingredientsHighlight: 'Flores comestibles de huerto orgánico, frutas de estación y ganache blanco ligero.'
    },
    {
        id: 'cupcakes-rosas-champagne',
        name: 'Caja Bouquet de Cupcakes Floral',
        category: 'cupcakes',
        description: 'Pack de 12 cupcakes decorados como un ramo de rosas y peonías en buttercream con matices de rosa empolvado.',
        priceFrom: 110,
        servings: '12 unidades',
        leadTime: '3 días',
        badge: 'PERSONALIZABLE',
        image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80',
        flavorsAvailable: ['Red Velvet', 'Vainilla con crema', 'Chocolate con dulce de leche'],
        sizes: ['Caja 6 unidades', 'Caja 12 unidades'],
        ingredientsHighlight: 'Cacao holandés, queso crema philadelphia y colorantes naturales.'
    },
    {
        id: 'cookies-sablee-acuarela',
        name: 'Cookies Acuarela & Letras Doradas',
        category: 'cookies',
        description: 'Galletas de mantequilla con técnica de pintura en acuarela comestible y nombres caligrafiados en oro 24k comestible.',
        priceFrom: 95,
        servings: '12 galletas individuales',
        leadTime: '5 días',
        badge: 'NUEVO',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
        flavorsAvailable: ['Vainilla de Madagascar', 'Canela y nuez moscada', 'Limón y almendras'],
        sizes: ['Set de 12 unid.', 'Set de 24 unid.'],
        ingredientsHighlight: 'Mantequilla pura sin sal, glaseado royal elástico y polvos perlados aprobados.'
    },
    {
        id: 'box-celebracion-deluxe',
        name: 'Box "Celebración Dulce Momento"',
        category: 'boxes',
        description: 'Hermosa caja kraft con visor: contiene 1 mini cake personalizado + 4 macarons franceses + 2 cake pops + velita mágica.',
        priceFrom: 165,
        servings: 'Ideal para 2 personas',
        leadTime: '4 días',
        badge: 'MÁS PEDIDO',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
        flavorsAvailable: ['Mix del chef', 'Chocolate lover', 'Frutal vainilla'],
        sizes: ['Box Estándar', 'Box Premium con flores'],
        ingredientsHighlight: 'Presentación con cinta de raso frambuesa, tarjeta caligrafiada y cerillos artesanales.'
    },
    {
        id: 'torta-chocolate-ganache-supreme',
        name: 'Torta Cacao Supreme & Avellanas',
        category: 'tortas',
        description: 'Capas intensas de bizcochuelo de chocolate 70%, relleno de ganache batido y praliné crujiente de avellanas.',
        priceFrom: 240,
        servings: '18 a 22 porciones',
        leadTime: '5 días',
        badge: 'MÁS PEDIDO',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
        flavorsAvailable: ['Chocolate intenso', 'Marmoleado con manjar'],
        sizes: ['Mediana (18 porciones)', 'Grande (30 porciones)'],
        ingredientsHighlight: 'Chocolate belga semiamargo, crema de leche fresca y avellanas tostadas a mano.'
    },
    {
        id: 'tartaletas-frutos-rojos',
        name: 'Dúo Tartaletas Frutos del Valle',
        category: 'postres',
        description: 'Base crocante de masa brisée rellena de crema pastelera infusionada en vainas de vainilla y corona de frutillas y moras.',
        priceFrom: 85,
        servings: 'Caja x 4 tartaletas',
        leadTime: '3 días',
        badge: 'NUEVO',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
        flavorsAvailable: ['Frutos rojos', 'Lemon pie con merengue suizo'],
        sizes: ['Caja 4 unidades', 'Caja 8 unidades'],
        ingredientsHighlight: 'Fresas frescas de temporada, crema pastelera cocida a fuego lento.'
    },
    {
        id: 'torta-minimalista-bento-pasteles',
        name: 'Bento Cake Minimalista "Love Notes"',
        category: 'minicakes',
        description: 'Fondo rosa chantilly empolvado con corazones rojos miniatura y texto personalizable en tipografía script delicada.',
        priceFrom: 75,
        servings: '2 a 3 porciones',
        leadTime: '3 días',
        badge: 'PERSONALIZABLE',
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80',
        flavorsAvailable: ['Vainilla dulce', 'Red Velvet tradicional'],
        sizes: ['Bento Estándar (10 cm)'],
        ingredientsHighlight: 'Packaging térmico bagazo de caña biodegradable con tenedor de madera.'
    },
    {
        id: 'torta-infantil-osito-vintage',
        name: 'Torta Temática "Little Bear & Stars"',
        category: 'tortas',
        description: 'Diseño tierno modelado para primer añito o baby shower con osito en azúcar, nubes esponjosas y estrellitas doradas.',
        priceFrom: 290,
        servings: '25 a 30 porciones',
        leadTime: '7 días',
        badge: 'EDICIÓN ESPECIAL',
        image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=800&q=80',
        flavorsAvailable: ['Vainilla rellena de manjar', 'Marmoleado', 'Chocolate suave'],
        sizes: ['1 Piso alto (25 porciones)', '2 Pisos (40 porciones)'],
        ingredientsHighlight: 'Modelado 100% comestible sin alambres internos peligrosos.'
    }
];
export const FLAVOR_BASES = [
    {
        id: 'chocolate',
        name: 'Chocolate Belga Húmedo',
        description: 'Bizcocho profundo con cacao 70%, increíblemente tierno y húmedo gracias al toque de café.',
        tag: 'Intenso & Sedoso',
        colorHex: '#432818'
    },
    {
        id: 'vainilla',
        name: 'Vainilla Francesa Clásica',
        description: 'Aromático bizcocho con semillas naturales de vainilla de Madagascar y miga esponjosa.',
        tag: 'El Clásico Amado',
        colorHex: '#F5C49D'
    },
    {
        id: 'redvelvet',
        name: 'Red Velvet Terciopelo',
        description: 'Bizcocho carmesí suave con una pizca de cacao y textura sedosa que se derrite en boca.',
        tag: 'Elegante & Icónico',
        colorHex: '#C44E72'
    },
    {
        id: 'limon',
        name: 'Limón & Semillas de Amapola',
        description: 'Fresco y cítrico, infusionado con ralladura de limones sutiles y crujientes semillas de amapola.',
        tag: 'Refrescante',
        colorHex: '#EED971'
    },
    {
        id: 'naranja',
        name: 'Naranja Glaseada Especiada',
        description: 'Masa perfumada con jugo de naranja natural, canela suave y cardamomo ligero.',
        tag: 'Cálido & Aromático',
        colorHex: '#E28B52'
    },
    {
        id: 'marmoleado',
        name: 'Marmoleado Vainilla & Choco',
        description: 'La armonía perfecta entre el cacao oscuro y la vainilla dorada en espirales artesanales.',
        tag: 'Favorito de Todos',
        colorHex: '#8A645A'
    }
];
export const FLAVOR_FILLINGS = [
    {
        id: 'frambuesa',
        name: 'Frambuesa Confitada Natural',
        description: 'Coulis artesanal elaborado en nuestro taller con frambuesas enteras sin conservantes.',
        tag: 'Toque Ácido Perfecto'
    },
    {
        id: 'dulcedeleche',
        name: 'Dulce de Leche Artesanal',
        description: 'Elaboración lenta al estilo tradicional, denso, cremoso y con un brillo irresistible.',
        tag: 'Tradición Pura'
    },
    {
        id: 'ganache',
        name: 'Ganache de Chocolate Amargo',
        description: 'Emulsión untuosa de chocolate 60% cacao y crema de leche fresca.',
        tag: 'Chocoholic'
    },
    {
        id: 'creamcheese',
        name: 'Cream Cheese Suave & Sedoso',
        description: 'Crema batida de queso philadelphia con notas de limón y vainilla pura.',
        tag: 'Equilibrado & Ligero'
    },
    {
        id: 'oreo',
        name: 'Crema Cookies & Cream Oreo',
        description: 'Base de buttercream suave con tropezones crujientes de galleta oreo original.',
        tag: 'El Favorito Juvenil'
    },
    {
        id: 'frutilla',
        name: 'Fresas Frescas Maceradas',
        description: 'Fresas frescas troceadas y maceradas en jugo de naranja con crema pastelera sedosa.',
        tag: 'Fresco & Frutal'
    },
    {
        id: 'manjar',
        name: 'Cajeta / Dulce de Leche Casero',
        description: 'Receta de la abuela, con leche de rancho y un punto exacto de caramelo suave.',
        tag: 'Suave & Dulce'
    }
];
export const RECOMMENDED_COMBOS = [
    {
        name: 'La Consentida de Frambuesa',
        badge: 'Favorita de la casa',
        base: 'Vainilla Francesa Clásica',
        filling: 'Frambuesa Confitada + Cream Cheese',
        coating: 'Buttercream suizo de vainilla',
        description: 'El equilibrio soñado entre la dulzura suave de la vainilla y la acidez viva de las frambuesas silvestres.',
        pairingNote: 'Ideal para pasteles y tortas vintage, cumpleaños de 20 a 50 años y bodas civiles.'
    },
    {
        name: 'Choco-Dulce Marmoleado',
        badge: 'Más vendida',
        base: 'Bizcocho Marmoleado',
        filling: 'Dulce de Leche Casero + Ganache Choco',
        coating: 'Buttercream sedoso de chocolate con leche',
        description: 'Nuestra combinación más aplaudida por grandes y chicos. Textura húmeda y corazón chocolatoso irresistible.',
        pairingNote: 'Un acierto seguro si no conoces los gustos de todos tus invitados.'
    },
    {
        name: 'Red Velvet Romance',
        badge: 'Edición especial',
        base: 'Red Velvet Terciopelo',
        filling: 'Cream Cheese Batido + Frutos Rojos',
        coating: 'Buttercream blanco marfil liso',
        description: 'Sensual, delicada y con el contraste cromático más fotogénico en cada corte de porción.',
        pairingNote: 'La elegida para aniversarios, pedidas de mano y celebraciones románticas.'
    }
];
export const GALLERY_ITEMS = [
    {
        id: 'gal-1',
        title: 'Torta Vintage con Volados y Cerezas',
        category: 'vintage',
        categoryLabel: 'Vintage',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80',
        servings: '16 porciones',
        style: 'Lambeth Ruffles',
        occasion: 'Cumpleaños 25'
    },
    {
        id: 'gal-2',
        title: 'Bento Cake Minimalista Pastel',
        category: 'minimalista',
        categoryLabel: 'Minimalista',
        image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=900&q=80',
        servings: '2 porciones',
        style: 'Korean Bento',
        occasion: 'Aniversario'
    },
    {
        id: 'gal-3',
        title: 'Torta Floral con Flores Prensadas',
        category: 'floral',
        categoryLabel: 'Floral',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80',
        servings: '22 porciones',
        style: 'Botánico Silvestre',
        occasion: 'Boda Civil'
    },
    {
        id: 'gal-4',
        title: 'Cupcakes con Rosas en Degradé',
        category: 'floral',
        categoryLabel: 'Floral',
        image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=900&q=80',
        servings: '12 cupcakes',
        style: 'Bouquet de Rosas',
        occasion: 'Día de las Madres'
    },
    {
        id: 'gal-5',
        title: 'Torta Baby Shower Osito Soñador',
        category: 'babyshower',
        categoryLabel: 'Baby Shower',
        image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=900&q=80',
        servings: '25 porciones',
        style: 'Modelado en Azúcar',
        occasion: 'Bienvenida Bebé'
    },
    {
        id: 'gal-6',
        title: 'Cookies Temáticas Caligrafiadas',
        category: 'tematica',
        categoryLabel: 'Temática',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80',
        servings: '18 cookies',
        style: 'Royal Icing & Oro',
        occasion: 'Graduación'
    },
    {
        id: 'gal-7',
        title: 'Torta Graduación Elegante Blanco y Dorado',
        category: 'graduacion',
        categoryLabel: 'Graduación',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
        servings: '30 porciones',
        style: 'Texturas Modernas',
        occasion: 'Licenciatura Médica'
    },
    {
        id: 'gal-8',
        title: 'Torta Infantil Arcoíris Pastel',
        category: 'infantil',
        categoryLabel: 'Infantil',
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=80',
        servings: '20 porciones',
        style: 'Divertido & Tierno',
        occasion: '3er Cumpleaños'
    },
    {
        id: 'gal-9',
        title: 'Torta Cumpleaños con Perlas y Lazo Frambuesa',
        category: 'cumpleanos',
        categoryLabel: 'Cumpleaños',
        image: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=900&q=80',
        servings: '18 porciones',
        style: 'Coquette Vintage',
        occasion: 'Cumpleaños 30'
    },
    {
        id: 'gal-10',
        title: 'Tartaletas Gourmet de Frutas Frescas',
        category: 'minimalista',
        categoryLabel: 'Minimalista',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
        servings: 'Mesa de 24 bocados',
        style: 'Patisserie Francesa',
        occasion: 'Cena de Aniversario'
    },
    {
        id: 'gal-11',
        title: 'Box Dulce con Macarons y Flores',
        category: 'tematica',
        categoryLabel: 'Temática',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
        servings: 'Box Degustación',
        style: 'Gift Box Artesanal',
        occasion: 'Sorpresa a Domicilio'
    },
    {
        id: 'gal-12',
        title: 'Torta Temática Cuentos de Hadas',
        category: 'infantil',
        categoryLabel: 'Infantil',
        image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=80',
        servings: '24 porciones',
        style: 'Mágico en Tonos Pastel',
        occasion: '5to Cumpleaños'
    }
];
export const PROCESS_STEPS = [
    {
        number: '01',
        title: 'Elige tu producto',
        description: 'Torta tradicional, bento cake, cupcakes de autor o un box dulce para regalar.',
        iconName: 'Cake',
        detail: 'Te ayudamos a calcular las porciones de acuerdo con tus invitados.'
    },
    {
        number: '02',
        title: 'Elige sabores & rellenos',
        description: 'Combina nuestro bizcocho esponjoso con coulis de fruta natural, cajeta casera o ganache de chocolate belga.',
        iconName: 'Sparkles',
        detail: 'Todo fresco y sin premezclas industriales.'
    },
    {
        number: '03',
        title: 'Define tamaño & porciones',
        description: 'Desde un pastelito íntimo de 2 porciones hasta piezas imponentes de varios pisos.',
        iconName: 'Users',
        detail: 'Guiado por nuestra tabla de cortes exacta.'
    },
    {
        number: '04',
        title: 'Comparte tus referencias',
        description: 'Mándanos fotos de Pinterest, paleta de colores de tu evento, temática o tu invitación.',
        iconName: 'Image',
        detail: 'Creamos una versión única con nuestro propio sello artesanal.'
    },
    {
        number: '05',
        title: 'Agenda tu fecha con tiempo',
        description: 'Revisamos cupos disponibles y apartamos tu fecha con el 50% de anticipo.',
        iconName: 'CalendarCheck',
        detail: 'Cupos limitados por semana para garantizar perfección.'
    },
    {
        number: '06',
        title: 'Recibe magia en tu fiesta',
        description: 'Entrega cuidadosa a domicilio o recolección programada en nuestro taller listo para sorprender.',
        iconName: 'HeartHandshake',
        detail: 'Packaging reforzado y guía de conservación incluida.'
    }
];
export const AVAILABILITY_CARDS = [
    {
        type: 'Pedidos habituales',
        badge: 'Recomendado',
        leadTime: '5 a 7 días de anticipación',
        description: 'Para cumpleaños familiares, bento cakes, cupcakes y reuniones de fin de semana.',
        statusColor: 'bg-[#C44E72] text-white',
        borderStyle: 'border-[#F7D5D9]'
    },
    {
        type: 'Pedidos de último minuto / Express',
        badge: 'Cupos limitados',
        leadTime: '48 a 72 horas previas',
        description: 'Sujeto a disponibilidad de insumos y agenda libre del taller (aplica recargo express del 15%).',
        statusColor: 'bg-[#F5C49D] text-[#432818]',
        borderStyle: 'border-[#F5C49D]'
    },
    {
        type: 'Eventos grandes & Bodas',
        badge: 'Reserva anticipada',
        leadTime: '15 a 30 días de anticipación',
        description: 'Pasteles de 2 o más pisos, mesas dulces completas, catering corporativo o bodas.',
        statusColor: 'bg-[#432818] text-white',
        borderStyle: 'border-[#432818]'
    },
    {
        type: 'Fechas especiales del año',
        badge: 'Lanzamiento de temporada',
        leadTime: 'Lanzamiento 10 días antes',
        description: 'San Valentín, Día de las Madres, Navidad y Día del Niño cuentan con menú y cupos cerrados.',
        statusColor: 'bg-[#F7D5D9] text-[#432818]',
        borderStyle: 'border-[#F7D5D9]'
    }
];
export const TESTIMONIALS = [
    {
        id: 'test-1',
        name: 'Camila Villagómez',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        role: 'Cumpleañera',
        event: 'Cumpleaños 30 — Torta Vintage',
        rating: 5,
        date: 'Hace 2 semanas',
        productName: 'Torta Vintage Lambeth Frambuesa',
        comment: '¡Fue la sensación de mi fiesta! No solo era una belleza idéntica a lo que soñaba en Pinterest, sino que el relleno de frambuesa y el bizcocho de vainilla estaban súper suaves y para nada empalagosos. El cotizador en línea me facilitó todo el pedido.'
    },
    {
        id: 'test-2',
        name: 'Mateo & Valentina',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
        role: 'Novios',
        event: 'Boda Civil — Torta Botánica 2 Pisos',
        rating: 5,
        date: 'Hace 1 mes',
        productName: 'Torta Botánica Silvestre & Higos',
        comment: 'Sofi es increíble. Desde el primer mensaje nos brindó una atención cálida y súper profesional. El pastel con flores orgánicas e higos frescos fue aplaudido por todos los invitados. ¡Muchísimas gracias por tanto amor en su trabajo!'
    },
    {
        id: 'test-3',
        name: 'Luciana Morales',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
        role: 'Mamá de Joaquín',
        event: 'Baby Shower — Torta Osito & Cupcakes',
        rating: 5,
        date: 'Hace 3 semanas',
        productName: 'Torta Osito Soñador & Cupcakes Bouquet',
        comment: 'Jamás había visto detalles tan pulcros en azúcar. El osito modelado parecía de portada de cuento. Y los cupcakes de red velvet volaron en 10 minutos. Recomiendo Dulce Idea totalmente a ojos cerrados.'
    },
    {
        id: 'test-4',
        name: 'Diego Sanjinés',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        role: 'Detallista',
        event: 'Aniversario — Bento Cake "Love Notes"',
        rating: 5,
        date: 'Hace 1 mes',
        productName: 'Bento Cake Personalizado',
        comment: 'Quería sorprender a mi novia en su trabajo y el Bento Cake con las velitas y la dedicatoria fue el regalo perfecto. La atención al cliente fue de 10. ¡Son los mejores!'
    },
    {
        id: 'test-5',
        name: 'Andrea Terán',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
        role: 'Organizadora de eventos',
        event: 'Graduación Universitaria — Mesa Dulce',
        rating: 5,
        date: 'Hace 2 meses',
        productName: 'Cookies Caligrafiadas & Postres',
        comment: 'Trabajar con Dulce Idea es garantía de puntualidad y presentación impecable. Las galletas decoradas con detalles en oro tenían una precisión milimétrica. La textura es insuperable.'
    }
];
export const FAQ_DATA = [
    {
        id: 'faq-1',
        category: 'pedidos',
        question: '¿Con cuánta anticipación debo hacer mi pedido?',
        answer: 'Para pasteles personalizados y mini cakes recomendamos hacer el pedido con un mínimo de 5 a 7 días de anticipación. Para pasteles de boda o eventos grandes de más de 30 porciones, recomendamos entre 15 y 20 días. Trabajamos con cupos semanales reducidos para dedicarle a cada pieza el tiempo artesanal que merece.'
    },
    {
        id: 'faq-2',
        category: 'pagos',
        question: '¿Cómo se confirma y aparta la fecha de mi pedido?',
        answer: 'Tu fecha queda formalmente apartada en nuestra agenda una vez realizado el pago del 50% de anticipo (mediante transferencia bancaria o código QR en Bolivia). El 50% restante se liquida al momento de la entrega o recolección en el taller.'
    },
    {
        id: 'faq-3',
        category: 'sabores',
        question: '¿Puedo elegir y combinar sabores que no estén en el menú habitual?',
        answer: '¡Por supuesto! Nuestros pasteles son 100% personalizables. Puedes combinar cualquiera de nuestros bizcochos esponjosos (vainilla, chocolate belga, red velvet, limón amapola) con uno o dos rellenos de tu preferencia (frambuesas naturales, dulce de leche, cream cheese, ganache).'
    },
    {
        id: 'faq-4',
        category: 'pedidos',
        question: '¿Hacen diseños idénticos a fotos de Pinterest o Instagram?',
        answer: 'Usamos tus referencias visuales como punto de partida e inspiración estética (paleta de colores, textura del buttercream, temática), pero cada pastel es una creación artesanal con nuestro propio sello. No hacemos réplicas industriales en serie, sino interpretaciones únicas y refinadas.'
    },
    {
        id: 'faq-5',
        category: 'envios',
        question: '¿Cómo funciona la entrega o recolección de los pasteles?',
        answer: 'Puedes pasar a recoger personalmente tu pedido sin costo en nuestro taller ubicado en la zona de Sopocachi / San Miguel (La Paz, previa cita). También coordinamos entregas seguras con servicio de auto de confianza con tarifas según la zona de la ciudad. Todas las piezas se entregan en bases rígidas y cajas reforzadas con guías de cuidado.'
    },
    {
        id: 'faq-6',
        category: 'cambios',
        question: '¿Puedo hacer cambios de diseño o sabor una vez realizado el anticipo?',
        answer: 'Se aceptan ajustes menores en dedicatoria o detalles de color hasta 72 horas antes de la fecha de entrega. Pasado ese tiempo, los insumos específicos ya han sido preparados y el bizcocho horneado, por lo que no es posible modificar estructura ni sabor.'
    },
    {
        id: 'faq-7',
        category: 'cuidados',
        question: '¿Cómo debo conservar y transportar mi pastel?',
        answer: 'Nuestros pasteles están elaborados con buttercream suizo a base de mantequilla pura. Deben transportarse siempre en el piso plano del auto (nunca sobre las piernas ni en el asiento inclinado) con el aire acondicionado encendido. En destino, mantenlo en refrigeración y sácalo a temperatura ambiente unos 30 a 45 minutos antes de cantar las mañanitas para disfrutar su textura más cremosa.'
    },
    {
        id: 'faq-8',
        category: 'sabores',
        question: '¿Tienen opciones para personas con alergias alimentarias?',
        answer: 'Elaboramos recetas sin frutos secos a petición previa. Sin embargo, dado que en nuestro taller artesanal manipulamos habitualmente harina de trigo, huevos, lácteos y nueces, no podemos garantizar un ambiente 100% libre de trazas o contaminación cruzada para alergias severas.'
    },
    {
        id: 'faq-9',
        category: 'pedidos',
        question: '¿Qué pasa si necesito un pastel de urgencia para mañana o pasado mañana?',
        answer: 'Escríbenos directamente al botón de WhatsApp. Si tenemos un espacio en la producción de ese día o disponemos de bases frescas, podemos ofrecerte un Bento Cake express o cupcakes con diseño de la casa (aplica un 15% de recargo por producción express).'
    },
    {
        id: 'faq-10',
        category: 'pagos',
        question: '¿Cuál es la política de cancelación o reprogramación?',
        answer: 'En caso de fuerza mayor puedes reprogramar la fecha de tu pedido con al menos 4 días de anticipación (sujeto a disponibilidad de la nueva fecha). Debido a la reserva exclusiva de fecha y compra de insumos frescos, el 50% de anticipo no es reembolsable en caso de cancelación total.'
    }
];
// Días cerrados/llenos en la agenda de Septiembre 2026
export const BUSY_DAYS_SEPTEMBER_2026 = [1, 2, 6, 7, 12, 13, 19, 20, 26];
// Días con últimos cupos
export const FEW_DAYS_SEPTEMBER_2026 = [3, 11, 18, 25];
export const CALENDAR_DAYS_SEPTEMBER_2026 = Array.from({ length: 30 }, (_, idx) => {
    const day = idx + 1;
    const dayStr = day < 10 ? `0${day}` : `${day}`;
    const dateStr = `2026-09-${dayStr}`;
    if (BUSY_DAYS_SEPTEMBER_2026.includes(day)) {
        return {
            day,
            dateStr,
            status: 'busy',
            label: 'Lleno',
            badgeText: 'Sin cupos'
        };
    }
    if (FEW_DAYS_SEPTEMBER_2026.includes(day)) {
        return {
            day,
            dateStr,
            status: 'few',
            label: 'Últimos cupos',
            badgeText: 'Últimos 2 cupos'
        };
    }
    return {
        day,
        dateStr,
        status: 'available',
        label: 'Disponible',
        badgeText: 'Cupos disponibles'
    };
});
/**
 * Validador de disponibilidad de fechas para el cotizador
 */
export function checkDateAvailability(dateStr) {
    if (!dateStr) {
        return { isAvailable: false, status: 'busy', message: 'Por favor selecciona una fecha para tu evento.' };
    }
    // Parsear fecha
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const day = parseInt(parts[2], 10);
        // Si es septiembre 2026, validar contra el semáforo
        if (year === 2026 && month === 9) {
            if (BUSY_DAYS_SEPTEMBER_2026.includes(day)) {
                return {
                    isAvailable: false,
                    status: 'busy',
                    message: `🚫 El día ${day} de septiembre ya está LLENO (taller a capacidad completa). Por favor elige otra fecha con disponibilidad.`
                };
            }
            if (FEW_DAYS_SEPTEMBER_2026.includes(day)) {
                return {
                    isAvailable: true,
                    status: 'few',
                    message: `⚠️ El día ${day} de septiembre tiene ÚLTIMOS 2 CUPOS disponibles. ¡Te sugerimos apartar pronto!`
                };
            }
            return {
                isAvailable: true,
                status: 'available',
                message: `✅ ¡Excelente! El día ${day} de septiembre tenemos cupos disponibles para hornear tu pedido.`
            };
        }
    }
    return {
        isAvailable: true,
        status: 'available',
        message: 'Fecha sujeta a confirmación rápida por WhatsApp con el taller.'
    };
}
