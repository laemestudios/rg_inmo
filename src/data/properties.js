export const PROPERTIES_DATA = [
  {
    id: "prop-1",
    ref: "CO-2026-01",
    title: "Ático Exclusivo con Terraza Panorámica en La Malagueta",
    type: "atico",
    transaction: "comprar",
    price: 685000,
    bedrooms: 3,
    bathrooms: 2,
    area: 145,
    garage: true,
    terrace: true,
    pool: false,
    elevator: true,
    zone: "La Malagueta - Paseo Marítimo",
    city: "Málaga",
    address: "Paseo de Reding, La Malagueta",
    energyRating: "A",
    badge: "Exclusiva Casaoro",
    badgeColor: "bg-gold-500",
    image: "/images/hero.jpg",
    gallery: [
      "/images/hero.jpg",
      "/images/piso_teatinos.jpg",
      "/images/chalet_limonar.jpg"
    ],
    description: "Impresionante ático recién reformado con materiales de primerísima calidad frente a la playa de La Malagueta y el Puerto de Málaga. Dispone de una fantástica terraza orientada al sur de 35 m² con vistas abiertas al mar Mediterráneo y al Muelle Uno. Cocina de diseño totalmente equipada, amplio salón comedor de doble altura y suite principal con vestidor.",
    features: [
      "Vistas frontales al mar y Muelle Uno",
      "Terraza privada de 35 m²",
      "Plaza de garaje incluida",
      "Reforma integral de lujo 2025",
      "Climatización por aerotermia",
      "Trastero independiente"
    ]
  },
  {
    id: "prop-2",
    ref: "CO-2026-02",
    title: "Chalet Independiente de Lujo con Piscina en El Limonar",
    type: "chalet",
    transaction: "comprar",
    price: 1250000,
    bedrooms: 5,
    bathrooms: 4,
    area: 380,
    garage: true,
    terrace: true,
    pool: true,
    elevator: false,
    zone: "El Limonar - Mayorazgo",
    city: "Málaga",
    address: "Paseo del Limonar, Málaga",
    energyRating: "A",
    badge: "Destacado",
    badgeColor: "bg-emerald-600",
    image: "/images/chalet_limonar.jpg",
    gallery: [
      "/images/chalet_limonar.jpg",
      "/images/hero.jpg",
      "/images/piso_teatinos.jpg"
    ],
    description: "Exclusiva villa señorial ubicada en una de las zonas residenciales más prestigiosas de Málaga Capital. Construida sobre parcela de 750 m² con jardín consolidado, piscina desbordante y porche cubierto con barbacoa. Máxima privacidad y tranquilidad a escasos 5 minutos del centro histórico y la playa.",
    features: [
      "Parcela privada de 750 m²",
      "Piscina salina desbordante",
      "Garaje para 3 vehículos",
      "Jardín mediterráneo",
      "Paneles solares fotovoltaicos",
      "Bodega y zona de ocio"
    ]
  },
  {
    id: "prop-3",
    ref: "CO-2026-03",
    title: "Piso Moderno de Residencia en Complejo Teatinos con Piscina",
    type: "piso",
    transaction: "comprar",
    price: 340000,
    bedrooms: 3,
    bathrooms: 2,
    area: 110,
    garage: true,
    terrace: true,
    pool: true,
    elevator: true,
    zone: "Teatinos - Universidad",
    city: "Málaga",
    address: "Bulevar Louis Pasteur, Teatinos",
    energyRating: "B",
    badge: "Oportunidad",
    badgeColor: "bg-amber-600",
    image: "/images/piso_teatinos.jpg",
    gallery: [
      "/images/piso_teatinos.jpg",
      "/images/hero.jpg",
      "/images/chalet_limonar.jpg"
    ],
    description: "Luminoso piso en urbanización cerrada con zonas infantiles, pista de pádel y gran piscina comunitaria. Consta de 3 amplios dormitorios, salón independiente con salida directa a terraza, cocina con lavadero y 2 baños completos (uno en suite). Incluye garaje y trastero.",
    features: [
      "Urbanización privada con piscina y pádel",
      "Terraza orientación oeste",
      "Garaje y trastero incluidos",
      "Cerca de metro y universidad",
      "Excelente estado de conservación",
      "Aire acondicionado centralizado"
    ]
  },
  {
    id: "prop-4",
    ref: "CO-2026-04",
    title: "Piso Histórico Reformado en Calle Marqués de Larios",
    type: "piso",
    transaction: "comprar",
    price: 520000,
    bedrooms: 2,
    bathrooms: 2,
    area: 98,
    garage: false,
    terrace: false,
    pool: false,
    elevator: true,
    zone: "Centro Histórico",
    city: "Málaga",
    address: "Calle Larios, Centro Histórico",
    energyRating: "C",
    badge: "Centro Histórico",
    badgeColor: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "/images/hero.jpg",
      "/images/piso_teatinos.jpg"
    ],
    description: "Espectacular inmueble señorial en pleno corazón de Málaga, con techos de 3.5m de altura, suelos hidráulicos originales restaurados y amplios balcones a la calle principal. Ideal como vivienda habitual de lujo o inversión de alta rentabilidad.",
    features: [
      "Ubicación inmejorable en Calle Larios",
      "Balcones tradicionales malagueños",
      "Suelos hidráulicos protegidos",
      "Licencia turística consultable",
      "Ascensor en edificio clásico"
    ]
  },
  {
    id: "prop-5",
    ref: "CO-2026-05",
    title: "Ático en Alquiler Residencial en Carretera de Cádiz",
    type: "atico",
    transaction: "alquilar",
    price: 1400, // €/mes
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    garage: true,
    terrace: true,
    pool: true,
    elevator: true,
    zone: "Carretera de Cádiz - Pacífico",
    city: "Málaga",
    address: "Avenida de Velázquez, Málaga",
    energyRating: "B",
    badge: "Alquiler Larga Temporada",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "/images/piso_teatinos.jpg"
    ],
    description: "Fantástico ático amueblado a 300 metros de la playa de la Misericordia. Cuenta con terraza descubierta de 20 m², cocina con electrodomésticos balay de gama alta y plaza de aparcamiento subterráneo. Listo para entrar a vivir.",
    features: [
      "A 300m del Paseo Marítimo Antonio Banderas",
      "Terraza de 20 m² equipada",
      "Completamente amueblado de diseño",
      "Garaje privado incluido",
      "Larga temporada"
    ]
  },
  {
    id: "prop-6",
    ref: "CO-2026-06",
    title: "Villa Familiar en Cerrado de Calderón con Vistas al Mar",
    type: "chalet",
    transaction: "comprar",
    price: 890000,
    bedrooms: 4,
    bathrooms: 3,
    area: 290,
    garage: true,
    terrace: true,
    pool: true,
    elevator: false,
    zone: "Cerrado de Calderón",
    city: "Málaga",
    address: "Calle Flamencos, Málaga",
    energyRating: "B",
    badge: "Exclusiva",
    badgeColor: "bg-gold-500",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "/images/chalet_limonar.jpg"
    ],
    description: "Amplio chalet independiente rodeado de colegios internacionales (Lycée Français, St. George) y zona comercial. Vistas panorámicas a la bahía de Málaga, jardín con césped natural y salón con chimenea de mármol.",
    features: [
      "Junto a colegios internacionales",
      "Gran salón con chimenea",
      "Piscina propia con solárium",
      "Garaje para 2 coches y trastero",
      "Excelente orientación sur"
    ]
  }
];

export const ZONES_MALAGA = [
  "Todas las zonas",
  "Centro Histórico",
  "La Malagueta - Paseo Marítimo",
  "El Limonar - Mayorazgo",
  "Teatinos - Universidad",
  "Carretera de Cádiz - Pacífico",
  "Cerrado de Calderón",
  "Pedregalejo - El Candado"
];
