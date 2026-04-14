import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "casa-descalzo",
    title: { es: "Casa Descalzo", en: "Descalzo House" },
    description: {
      es: "Estar descalzo y libre. La casa se posa sobre la loma de Nosara y abre los ojos en todas las direcciones.",
      en: "Barefoot and free. The house rests on the hills of Nosara and opens its eyes in every direction.",
    },
    tagline: {
      es: "Estar en Costa Rica\nes esto: estar descalzo\ny libre.",
      en: "Being in Costa Rica\nis this: being barefoot\nand free.",
    },
    category: "residential",
    country: "Costa Rica",
    city: "Nosara",
    year: 2024,
    area: "465 m²",
    heroImage: "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_05.png",
    images: [
      "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_05.png",
      "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_04.png",
      "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_03.png",
      "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_00.jpg",
    ],
    featured: true,
    ficha: [
      { label: { es: "Tipología", en: "Typology" }, value: { es: "Residencia unifamiliar", en: "Single-family residence" } },
      { label: { es: "Ubicación", en: "Location" }, value: { es: "Nosara, Guanacaste", en: "Nosara, Guanacaste" } },
      { label: { es: "Año", en: "Year" }, value: { es: "2024", en: "2024" } },
      { label: { es: "Fotografía", en: "Photography" }, value: { es: "Topofilia Studio", en: "Topofilia Studio" } },
      { label: { es: "Arquitecta", en: "Architect" }, value: { es: "Fernanda Guzmán · Habitante Arquitectura", en: "Fernanda Guzmán · Habitante Arquitectura" } },
    ],
    sections: [
      {
        type: "concept",
        label: { es: "Concepto", en: "Concept" },
        lead: { es: "Una casa sin frente.\nSolo horizonte.", en: "A house with no front.\nOnly horizon." },
        body: {
          es: "El nombre lo pusieron los dueños. Para ellos, estar en Costa Rica es eso: estar descalzo y libre. Sin protocolo. Sin fachada. Sin la tensión de la vida que dejaron atrás.\n\nLa casa responde a eso con absoluta precisión. Se posa sobre la loma de Nosara — no se clava en ella, se posa — y abre los ojos en todas las direcciones. No hay una fachada principal porque el bosque rodea el terreno por todos lados y todos los lados merecen ser mirados.\n\nLa piscina infinita desaparece hacia el verde en el atardecer. Las terrazas corren a lo largo de la casa como corredores abiertos al bosque. Cada habitación tiene su propia ventana al paisaje, su propio momento de luz. La casa no organiza las vistas — las multiplica.",
          en: "The owners chose the name. For them, being in Costa Rica is exactly that: being barefoot and free. No protocol. No facade. No tension from the life they left behind.\n\nThe house responds with absolute precision. It rests on the hill of Nosara — it doesn't dig in, it rests — and opens its eyes in every direction. There is no main facade because the forest surrounds the site from all sides, and every side deserves to be seen.\n\nThe infinity pool disappears into the green at sunset. The terraces run along the house like open corridors to the forest. Each room has its own window to the landscape, its own moment of light. The house doesn't organize the views — it multiplies them.",
        },
      },
      {
        type: "quote",
        title: {
          es: "\"El bosque de Nosara rodea la casa por todas partes.\"",
          en: "\"The forest of Nosara surrounds the house from every side.\"",
        },
        body: {
          es: "La elección del sitio no fue casual. Nosara tiene un bosque que acompaña, que no intimida. Un bosque que entra por las ventanas como vegetación viva, que colorea los interiores de verde, que regula el clima con su presencia constante.\n\nLa casa está diseñada para que ese bosque sea el primer material de construcción. Las vistas, el sonido, la brisa, la luz filtrada por las copas — todo eso es arquitectura. Todo eso fue diseñado con la misma intención que el travertino del piso o la madera de teca del techo.\n\nDesde la cocina, desde el dormitorio, desde la terraza alta — el bosque siempre está. La casa no lo enmarca ni lo domestica. Lo invita a entrar.",
          en: "The site was no accident. Nosara has a forest that accompanies, that doesn't intimidate. A forest that enters through the windows as living vegetation, that colors the interiors green, that regulates the climate with its constant presence.\n\nThe house is designed so that forest is the first building material. The views, the sound, the breeze, the light filtered through the canopy — all of that is architecture. All of it was designed with the same intention as the travertine floor or the teak ceiling.\n\nFrom the kitchen, from the bedroom, from the upper terrace — the forest is always there. The house doesn't frame it or domesticate it. It invites it in.",
        },
        bgDark: true,
      },
      {
        type: "gallery",
        label: { es: "El espacio", en: "The space" },
        credit: "Topofilia Studio",
        images: [
          "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_05.png",
          "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_04.png",
          "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_03.png",
          "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_00.jpg",
        ],
      },
      {
        type: "materiality",
        label: { es: "Materialidad", en: "Materiality" },
        title: { es: "Travertino, teca y blanco.\nSin más.", en: "Travertine, teak and white.\nNothing more." },
        body: {
          es: "La paleta de materiales de Casa Descalzo es una decisión de humildad. Travertino natural en pisos y terrazas — cálido, poroso, honesto. Madera de teca en los techos — la misma calidez que el trópico ya tiene. Blanco en muros y estructura — para que nada compita con el verde del bosque al otro lado del vidrio.\n\nLos aceros negros de las ventanas y barandas trazan líneas precisas sobre el blanco. No son decoración — son la estructura honesta de la casa, visible porque no hay nada que esconder.\n\nLos baños son el único lugar donde la paleta se abre. El azul celeste hexagonal, el dorado geométrico — pequeños momentos de color que le pertenecen al interior, al espacio íntimo. Afuera, el color lo pone el bosque.",
          en: "The material palette of Casa Descalzo is a decision of humility. Natural travertine on floors and terraces — warm, porous, honest. Teak wood on the ceilings — the same warmth the tropics already have. White on walls and structure — so nothing competes with the green of the forest on the other side of the glass.\n\nThe black steel of windows and railings trace precise lines on the white. They're not decoration — they're the honest structure of the house, visible because there's nothing to hide.\n\nThe bathrooms are the only place where the palette opens up. The hexagonal sky blue, the geometric gold — small moments of color that belong to the interior, to the intimate space. Outside, the forest provides the color.",
        },
      },
      {
        type: "feature",
        label: { es: "El momento del día", en: "The moment of the day" },
        title: { es: "La piscina desaparece\nhacia el verde.\nEl atardecer, también.", en: "The pool disappears\ninto the green.\nThe sunset, too." },
        body: {
          es: "El diseño del borde de la piscina fue calculado para ese momento específico: cuando el sol baja sobre las colinas de Nosara y el agua refleja el cielo naranja. La línea del horizonte de la piscina y la línea del horizonte del paisaje se funden. No hay borde. No hay límite. Solo el verde, el agua y la luz que se va.",
          en: "The pool edge was designed for that specific moment: when the sun drops over the hills of Nosara and the water reflects the orange sky. The horizon line of the pool and the horizon line of the landscape merge. No edge. No limit. Only the green, the water, and the fading light.",
        },
      },
      {
        type: "strategy",
        label: { es: "Estrategia climática", en: "Climate strategy" },
        title: { es: "Diseñada para el trópico.", en: "Designed for the tropics." },
        items: [
          { title: { es: "Posición sobre la loma", en: "Position on the hill" }, text: { es: "La elevación sobre el terreno captura las brisas naturales que suben por las laderas del bosque, generando ventilación constante sin sistemas mecánicos.", en: "The elevation captures natural breezes rising through the forest slopes, generating constant ventilation without mechanical systems." } },
          { title: { es: "Terrazas como reguladores", en: "Terraces as regulators" }, text: { es: "Los corredores cubiertos de teca crean zonas de transición entre interior y exterior que modulan la temperatura y protegen de la lluvia tropical sin cerrar las vistas.", en: "Teak-covered corridors create transition zones between interior and exterior that modulate temperature and protect from tropical rain without blocking views." } },
          { title: { es: "Orientación solar 360°", en: "360° solar orientation" }, text: { es: "Al no tener una fachada dominante, la casa aprovecha la luz natural en todas las horas del día. Cada espacio recibe su momento óptimo de iluminación.", en: "With no dominant facade, the house takes advantage of natural light at all hours. Each space receives its optimal moment of illumination." } },
          { title: { es: "Vegetación existente", en: "Existing vegetation" }, text: { es: "El bosque natural alrededor de la casa actúa como primer filtro solar y acústico, reduciendo la carga térmica y generando un microclima más fresco.", en: "The natural forest around the house acts as the first solar and acoustic filter, reducing thermal load and creating a cooler microclimate." } },
        ],
      },
    ],
    nextProject: "qatar-house",
    ctaTitle: { es: "¿Tienes un lugar que\nquieres habitar descalzo?", en: "Have a place you want\nto inhabit barefoot?" },
  },
  {
    slug: "qatar-house",
    title: {
      es: "Qatar House",
      en: "Qatar House",
    },
    description: {
      es: "Residencia de lujo de dos pisos con diseño minimalista y estética tropical. Estructura rectangular con piscina alargada, líneas limpias y espacios abiertos que integran interior y exterior.",
      en: "Two-story luxury residence with minimalist design and tropical aesthetics. Rectangular structure with elongated pool, clean lines, and open spaces integrating indoor and outdoor.",
    },
    category: "residential",
    country: "Costa Rica",
    city: "Langosta, Tamarindo",
    year: 2024,
    area: "500 m²",
    heroImage:
      "https://www.habitante.co/wp-content/uploads/2024/04/QatarHouse_Habitante_01.jpg",
    images: [
      "https://www.habitante.co/wp-content/uploads/2024/04/QatarHouse_Habitante_01.jpg",
      "https://www.habitante.co/wp-content/uploads/2024/04/QatarHouse_Habitante_02.jpg",
      "https://www.habitante.co/wp-content/uploads/2024/04/QatarHouse_Habitante_03.jpg",
      "https://www.habitante.co/wp-content/uploads/2024/04/QatarHouse_Habitante_04.jpg",
      "https://www.habitante.co/wp-content/uploads/2024/04/QatarHouse_Habitante_05.jpg",
    ],
  },
  {
    slug: "testarossa-house",
    title: {
      es: "Testarossa House",
      en: "Testarossa House",
    },
    description: {
      es: "Casa de playa contemporánea de aproximadamente 5 niveles con vistas panorámicas y atardeceres. Piscina elevada en zona social, diseño multinivel que equilibra privacidad y vistas.",
      en: "Contemporary beach house of approximately 5 levels with panoramic views and sunsets. Elevated pool in social zone, multi-level design balancing privacy and views.",
    },
    category: "residential",
    country: "Costa Rica",
    city: "Tamarindo",
    year: 2024,
    area: "800 m²",
    heroImage:
      "https://www.habitante.co/wp-content/uploads/2024/04/Terrarossa_habitante_01.jpg",
    images: [
      "https://www.habitante.co/wp-content/uploads/2024/04/Terrarossa_habitante_01.jpg",
    ],
  },
  {
    slug: "house-89",
    title: {
      es: "Casa 89",
      en: "House 89",
    },
    description: {
      es: "Esta casa de playa no es solo una vivienda; es un testimonio del lujo sostenible. Su filosofía de diseño integra la naturaleza con la arquitectura moderna.",
      en: "This beach house is not just a dwelling; it's a testament to sustainable luxury living. Its design ethos integrates nature with modern architecture.",
    },
    category: "residential",
    country: "Costa Rica",
    city: "Tamarindo",
    year: 2023,
    area: "450 m²",
    heroImage:
      "https://www.habitante.co/wp-content/uploads/2024/04/Casa89_Habitante_4.jpg",
    images: [
      "https://www.habitante.co/wp-content/uploads/2024/04/Casa89_Habitante_4.jpg",
      "https://www.habitante.co/wp-content/uploads/2024/11/A7303565-scaled.jpg",
      "https://www.habitante.co/wp-content/uploads/2024/05/A7303580-scaled.jpg",
      "https://www.habitante.co/wp-content/uploads/2024/05/A7303607-scaled.jpg",
      "https://www.habitante.co/wp-content/uploads/2024/05/A7303757-scaled.jpg",
    ],
  },
  {
    slug: "casa-dosel",
    title: { es: "Casa Dosel", en: "Dosel House" },
    description: {
      es: "Una piscina entre las copas. La casa se organiza desde esa experiencia: una residencia elevada que habita el dosel del bosque tropical.",
      en: "A pool among the treetops. The house is organized around that experience: an elevated residence that inhabits the tropical forest canopy.",
    },
    tagline: { es: "Una piscina entre las copas.", en: "A pool among the treetops." },
    category: "residential",
    country: "Costa Rica",
    city: "Tamarindo",
    year: 2023,
    area: "450 m²",
    heroImage: "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_03.png",
    images: ["https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_03.png"],
    ficha: [
      { label: { es: "Tipología", en: "Typology" }, value: { es: "Residencia unifamiliar", en: "Single-family residence" } },
      { label: { es: "Ubicación", en: "Location" }, value: { es: "Tamarindo, Guanacaste", en: "Tamarindo, Guanacaste" } },
      { label: { es: "Área construida", en: "Built area" }, value: { es: "450 m²", en: "450 m²" } },
      { label: { es: "Año", en: "Year" }, value: { es: "2023", en: "2023" } },
      { label: { es: "Estrategia climática", en: "Climate strategy" }, value: { es: "Ventilación cruzada · Enfriamiento pasivo · Sombra vegetal", en: "Cross ventilation · Passive cooling · Canopy shade" } },
    ],
    sections: [
      {
        type: "concept",
        label: { es: "Concepto", en: "Concept" },
        lead: { es: "Hay proyectos que se resuelven\ndesde la forma. Este se resolvió\ndesde el árbol.", en: "Some projects are solved\nfrom form. This one was solved\nfrom the tree." },
        body: {
          es: "La piscina no está sobre el terreno — está suspendida entre las copas, a la altura donde el bosque tropical cierra su techo. Desde adentro, nadar es habitar el dosel. La casa entera se organiza desde esa experiencia.\n\nEl encargo era una residencia en Tamarindo. La respuesta fue una casa elevada — no para dominar el paisaje, sino para habitarlo desde adentro. La estructura se levanta para encontrar la sombra natural de la vegetación existente. La piscina flota entre las ramas: un espejo de agua que lleva la frescura y la luz refractada al interior de cada espacio.\n\nNo hay límite neto entre adentro y afuera. Los espacios se abren hacia la copa de los árboles, la brisa cruza libremente de fachada a fachada, y el calor se disipa sin sistemas mecánicos. La arquitectura hace lo que el bosque ya sabía hacer.",
          en: "The pool is not on the ground — it's suspended among the canopy, at the height where the tropical forest closes its roof. From inside, swimming is inhabiting the canopy. The entire house is organized around that experience.\n\nThe brief was a residence in Tamarindo. The answer was an elevated house — not to dominate the landscape, but to inhabit it from within. The structure rises to meet the natural shade of existing vegetation. The pool floats among the branches: a mirror of water that brings coolness and refracted light into every space.\n\nThere is no clear boundary between inside and outside. Spaces open toward the treetops, the breeze crosses freely from facade to facade, and heat dissipates without mechanical systems. The architecture does what the forest already knew how to do.",
        },
      },
      {
        type: "materiality",
        label: { es: "Materialidad", en: "Materiality" },
        title: { es: "Materiales que vienen del lugar.", en: "Materials that come from the place." },
        body: {
          es: "La paleta no fue elegida por estética — fue dictada por el entorno. Acero negro para la estructura, madera de teca en techos y muros, piedra y mármol en los interiores. Cada textura refuerza la misma idea: la casa es una extensión del bosque, no una imposición sobre él.\n\nLa celosía de acero corten en la fachada es el elemento que media entre interior y exterior. Su patrón orgánico filtra la luz, tamiza el viento y proyecta sombras que cambian a lo largo del día. No decora: protege y revela.",
          en: "The palette was not chosen for aesthetics — it was dictated by the environment. Black steel for the structure, teak wood on ceilings and walls, stone and marble in the interiors. Each texture reinforces the same idea: the house is an extension of the forest, not an imposition upon it.\n\nThe corten steel lattice on the facade mediates between interior and exterior. Its organic pattern filters light, sifts wind, and projects shadows that change throughout the day. It doesn't decorate: it protects and reveals.",
        },
      },
      {
        type: "strategy",
        label: { es: "Estrategia climática", en: "Climate strategy" },
        title: { es: "Diseñada para el trópico.", en: "Designed for the tropics." },
        items: [
          { title: { es: "Elevación sobre el terreno", en: "Elevation above ground" }, text: { es: "La estructura se levanta sobre pilotes. La brisa circula libremente bajo la casa y entra al interior sin obstáculos.", en: "The structure is raised on stilts. The breeze circulates freely under the house and enters the interior unobstructed." } },
          { title: { es: "Sombra vegetal activa", en: "Active canopy shade" }, text: { es: "La casa se posiciona bajo el dosel existente. Los árboles filtran el sol antes de que toque la estructura.", en: "The house is positioned under the existing canopy. Trees filter the sun before it touches the structure." } },
          { title: { es: "Piscina como regulador térmico", en: "Pool as thermal regulator" }, text: { es: "El espejo de agua entre las copas refresca el aire en movimiento antes de que ingrese a los espacios interiores.", en: "The water mirror among the treetops cools moving air before it enters interior spaces." } },
          { title: { es: "Ventilación cruzada total", en: "Total cross ventilation" }, text: { es: "El muro cortina se abre en fachadas opuestas, eliminando la necesidad de aire acondicionado en áreas sociales.", en: "The curtain wall opens on opposite facades, eliminating the need for air conditioning in social areas." } },
          { title: { es: "Celosía como filtro solar", en: "Lattice as solar filter" }, text: { es: "El patrón orgánico de acero corten regula la entrada de luz directa mientras mantiene la conexión visual con el bosque.", en: "The organic corten steel pattern regulates direct light entry while maintaining the visual connection with the forest." } },
        ],
      },
      {
        type: "feature",
        label: { es: "Elemento singular", en: "Singular element" },
        title: { es: "La celosía que\nfiltra y revela.", en: "The lattice that\nfilters and reveals." },
        body: {
          es: "El patrón orgánico de la celosía de acero corten no es decoración — es arquitectura activa. Regula la luz, protege del sol directo, proyecta sombras que cambian con las horas y dialogan con el bosque. Es el umbral entre lo construido y lo vivo.",
          en: "The organic pattern of the corten steel lattice is not decoration — it is active architecture. It regulates light, protects from direct sun, projects shadows that change with the hours and dialogue with the forest. It is the threshold between the built and the living.",
        },
      },
    ],
    nextProject: "casa-descalzo",
    ctaTitle: { es: "¿Tienes un proyecto que\nquiere conversar con su entorno?", en: "Have a project that wants\nto converse with its surroundings?" },
  },
  {
    slug: "villa-fuste",
    title: { es: "Villa Fuste", en: "Villa Fuste" },
    description: {
      es: "Una casa que te recuerda tu escala humana. Estructura que te habla de la naturaleza sin imitarla.",
      en: "A house that reminds you of your human scale. Structure that speaks of nature without imitating it.",
    },
    tagline: { es: "Una casa que te recuerda\ntu escala humana.", en: "A house that reminds you\nof your human scale." },
    category: "residential",
    country: "Costa Rica",
    city: "Senderos",
    year: 2026,
    area: "900 m²",
    heroImage: "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_04.png",
    images: ["https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_04.png"],
    ficha: [
      { label: { es: "Tipología", en: "Typology" }, value: { es: "Residencia unifamiliar", en: "Single-family residence" } },
      { label: { es: "Ubicación", en: "Location" }, value: { es: "Senderos, Guanacaste", en: "Senderos, Guanacaste" } },
      { label: { es: "Área construida", en: "Built area" }, value: { es: "900 m²", en: "900 m²" } },
      { label: { es: "Programa", en: "Program" }, value: { es: "7 dormitorios · Piscina infinita · Gym · Steam · Roof deck · Oficina", en: "7 bedrooms · Infinity pool · Gym · Steam · Roof deck · Office" } },
      { label: { es: "Estado", en: "Status" }, value: { es: "Proyecto en desarrollo", en: "In development" } },
      { label: { es: "Arquitecta", en: "Architect" }, value: { es: "Fernanda Guzmán · Habitante Arquitectura", en: "Fernanda Guzmán · Habitante Arquitectura" } },
    ],
    sections: [
      {
        type: "concept",
        label: { es: "Concepto", en: "Concept" },
        lead: { es: "El encargo era simple:\nuna casa que exaltara\nlas vistas por todas partes.", en: "The brief was simple:\na house that would exalt\nviews from everywhere." },
        body: {
          es: "La respuesta fue más ambiciosa. No solo ver el paisaje — habitarlo desde múltiples alturas, múltiples ángulos, múltiples estados emocionales. Una pieza única que se escalonara sobre la pendiente de Senderos como si siempre hubiera estado ahí, emergiendo del terreno en lugar de ser colocada sobre él.\n\nVilla Fuste nace de una idea de conexión total con la naturaleza — pero no la conexión suave y contemplativa. La conexión que te recuerda quién eres frente al paisaje. La que te aplasta cuando entras al volumen principal de triple altura. La que te hace sentir hormiga bajo los pilotes masivos de concreto, inmensos como troncos de árboles vistos desde el suelo del bosque.\n\nEso es el fuste: el cuerpo del tronco entre la raíz y las ramas. La parte que sostiene. La que tiene escala imposible cuando la miras desde abajo. Esta casa es eso — estructura que te habla de la naturaleza sin imitarla, que la recuerda sin copiarla.",
          en: "The answer was more ambitious. Not just to see the landscape — to inhabit it from multiple heights, multiple angles, multiple emotional states. A unique piece that would step down the slope of Senderos as if it had always been there, emerging from the terrain rather than placed upon it.\n\nVilla Fuste is born from an idea of total connection with nature — but not the soft, contemplative connection. The connection that reminds you who you are against the landscape. The one that overwhelms you when you enter the triple-height main volume. The one that makes you feel like an ant under the massive concrete pilotis, immense like tree trunks seen from the forest floor.\n\nThat is the fuste: the trunk body between root and branches. The part that supports. The one with impossible scale when you look up from below. This house is that — structure that speaks of nature without imitating it, that remembers it without copying it.",
        },
      },
      {
        type: "feature",
        label: { es: "Escala", en: "Scale" },
        title: { es: "Espacios que te aplastan.\nEspacios que te hacen sentir hormiga.", en: "Spaces that overwhelm you.\nSpaces that make you feel like an ant." },
        bgDark: true,
        items: [
          { title: { es: "La escala como herramienta emocional", en: "Scale as emotional tool" }, text: { es: "Cada espacio tiene una intención de escala. Los volúmenes que comprimen generan intimidad y recogimiento. Los que liberan — el living de triple altura, las terrazas voladizas — producen asombro y presencia.", en: "Each space has an intentional scale. Volumes that compress generate intimacy. Those that release — the triple-height living room, the cantilevered terraces — produce awe and presence." } },
          { title: { es: "Los pilotes como troncos", en: "Pilotis as trunks" }, text: { es: "La estructura que sostiene la casa sobre la pendiente se lee, desde abajo, como una arboleda de concreto. Masiva, vertical, primitiva. No imita la naturaleza — la recuerda.", en: "The structure supporting the house on the slope reads, from below, like a concrete grove. Massive, vertical, primitive. It doesn't imitate nature — it recalls it." } },
          { title: { es: "La cascada entre niveles", en: "The cascade between levels" }, text: { es: "El agua que cae entre los pisos no es ornamento — es un regulador emocional. Genera sonido, movimiento, frescura y ritmo. Es neuroarquitectura aplicada al recorrido de la casa.", en: "Water falling between floors is not ornament — it's an emotional regulator. It generates sound, movement, coolness and rhythm. It's neuroarchitecture applied to the journey through the house." } },
          { title: { es: "El escalonamiento como adaptación", en: "Stepping as adaptation" }, text: { es: "Los cuerpos no se apilan — descienden siguiendo la pendiente natural del terreno, cada nivel encontrando su propio punto de contacto con el paisaje.", en: "The volumes don't stack — they descend following the natural slope, each level finding its own point of contact with the landscape." } },
        ],
      },
      {
        type: "feature",
        label: { es: "Vistas", en: "Views" },
        title: { es: "Una casa diseñada para\nver desde todas partes.", en: "A house designed to\nsee from everywhere." },
        body: {
          es: "El programa se organiza alrededor de una premisa: ningún espacio sin horizonte. Desde el dormitorio principal hasta la sala de estar, desde el gym hasta el roof deck — cada nivel tiene su propia relación con el paisaje de Guanacaste y el océano en la distancia.\n\nLas celosías verticales en la fachada no bloquean las vistas. Las filtran, las ritman, las hacen conscientes. El paisaje no es el fondo de la casa — es parte de sus paredes. La piscina infinita en el tercer nivel desaparece hacia el horizonte, diluyendo el límite entre el agua construida y el cielo.\n\nLa orientación de cada volumen fue calculada para maximizar la entrada de luz natural y las vistas panorámicas, mientras la masa de concreto caliza genera sombra y protección del sol tropical.",
          en: "The program is organized around one premise: no space without a horizon. From the master bedroom to the living room, from the gym to the roof deck — each level has its own relationship with the Guanacaste landscape and the ocean in the distance.\n\nThe vertical lattices on the facade don't block views. They filter them, rhythm them, make them conscious. The landscape is not the background of the house — it's part of its walls. The infinity pool on the third level disappears toward the horizon, dissolving the boundary between built water and sky.\n\nThe orientation of each volume was calculated to maximize natural light and panoramic views, while the limestone concrete mass generates shade and protection from the tropical sun.",
        },
      },
      {
        type: "materiality",
        label: { es: "Materialidad", en: "Materiality" },
        title: { es: "Concreto, piedra caliza y madera.\nLo que dura.", en: "Concrete, limestone and wood.\nWhat lasts." },
        body: {
          es: "La paleta de materiales de Villa Fuste responde al paisaje seco de Guanacaste. Concreto expuesto en tonos arena caliza, piedra natural en la base, celosías verticales de madera clara que respiran y se mueven con la luz. No hay materiales de moda — hay materiales que envejecen con dignidad y que el tiempo vuelve más honestos.\n\nLa textura del concreto en las columnas masivas — los fustes — no es neutra: tiene presencia táctil, escala monumental, color de tierra. La misma honestidad material que el brief de Habitante exige en cada proyecto.",
          en: "Villa Fuste's material palette responds to the dry landscape of Guanacaste. Exposed concrete in limestone sand tones, natural stone at the base, light wood vertical lattices that breathe and move with light. There are no trendy materials — only materials that age with dignity and that time makes more honest.\n\nThe texture of concrete in the massive columns — the fustes — is not neutral: it has tactile presence, monumental scale, earth color. The same material honesty that Habitante's brief demands in every project.",
        },
      },
      {
        type: "strategy",
        label: { es: "Estrategia climática", en: "Climate strategy" },
        title: { es: "Diseñada para el clima seco de Guanacaste.", en: "Designed for the dry climate of Guanacaste." },
        items: [
          { title: { es: "Masa térmica en la estructura", en: "Thermal mass in structure" }, text: { es: "El concreto expuesto acumula temperatura durante el día y la libera por la noche, estabilizando el clima interior sin depender de sistemas mecánicos en las áreas sociales.", en: "Exposed concrete accumulates temperature during the day and releases it at night, stabilizing interior climate without mechanical systems in social areas." } },
          { title: { es: "Celosías como filtro solar", en: "Lattices as solar filter" }, text: { es: "Las celosías verticales en las fachadas expuestas al sol regulan la entrada de luz directa sin bloquear las vistas ni la ventilación.", en: "Vertical lattices on sun-exposed facades regulate direct light entry without blocking views or ventilation." } },
          { title: { es: "Escalonamiento y ventilación", en: "Stepping and ventilation" }, text: { es: "El diseño escalonado sobre la pendiente genera diferencias de presión que promueven ventilación natural entre los cuerpos del proyecto.", en: "The stepped design on the slope generates pressure differences that promote natural ventilation between the project's volumes." } },
          { title: { es: "Agua como regulador térmico", en: "Water as thermal regulator" }, text: { es: "La piscina infinita y la cascada entre niveles enfrían el aire en movimiento y humidifican el ambiente seco de la región.", en: "The infinity pool and the cascade between levels cool moving air and humidify the dry regional environment." } },
        ],
      },
    ],
    nextProject: "casa-descalzo",
    ctaTitle: { es: "¿Tienes un proyecto\nque quiere habitar\nel horizonte?", en: "Have a project\nthat wants to inhabit\nthe horizon?" },
  },
  {
    slug: "casa-enso",
    title: { es: "Casa Enso", en: "Enso House" },
    description: {
      es: "Un jardín en el centro. El mar en el horizonte. La piscina, entre los árboles.",
      en: "A garden at the center. The sea on the horizon. The pool, among the trees.",
    },
    tagline: { es: "Un jardín en el centro.\nEl mar en el horizonte.\nLa piscina, entre los árboles.", en: "A garden at the center.\nThe sea on the horizon.\nThe pool, among the trees." },
    category: "residential",
    country: "Costa Rica",
    city: "Senderos",
    year: 2026,
    area: "",
    heroImage: "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_00.jpg",
    images: ["https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_00.jpg"],
    ficha: [
      { label: { es: "Tipología", en: "Typology" }, value: { es: "Residencia unifamiliar", en: "Single-family residence" } },
      { label: { es: "Ubicación", en: "Location" }, value: { es: "Senderos, Guanacaste", en: "Senderos, Guanacaste" } },
      { label: { es: "Lote", en: "Lot" }, value: { es: "22F · Senderos", en: "22F · Senderos" } },
      { label: { es: "Estado", en: "Status" }, value: { es: "Proyecto en desarrollo · 2026", en: "In development · 2026" } },
      { label: { es: "Arquitecta", en: "Architect" }, value: { es: "Fernanda Guzmán · Habitante Arquitectura", en: "Fernanda Guzmán · Habitante Arquitectura" } },
    ],
    sections: [
      {
        type: "concept",
        label: { es: "Concepto", en: "Concept" },
        lead: { es: "Una casa diseñada para\ncontemplar y apreciar.", en: "A house designed to\ncontemplate and appreciate." },
        body: {
          es: "En el zen japonés, el enso es un círculo trazado de un solo gesto — imperfecto, completo. Casa Enso toma esa idea de contemplación como eje del diseño: una casa orientada hacia las vistas, con un jardín central de bonsái como punto focal de contemplación, y una piscina semiolímpica que se pierde entre los árboles hacia el horizonte del mar.\n\nLa idea no es rodear el paisaje — es habitarlo desde el mejor ángulo posible. La piscina y el jardín funcionan como un anfiteatro natural orientado al sunset: el momento del día en que el agua refleja los colores del cielo, el fogón se enciende y la casa encuentra su razón de ser.\n\nLa arquitectura está diseñada para eso — para que cada espacio, desde el living hasta la terraza más alta, tenga su propio momento de luz, su propia relación con el verde que lo rodea y el horizonte que lo corona.",
          en: "In Japanese zen, the enso is a circle drawn in a single gesture — imperfect, complete. Casa Enso takes that idea of contemplation as the axis of design: a house oriented toward the views, with a central bonsai garden as the focal point of contemplation, and a semi-Olympic pool that vanishes among the trees toward the sea horizon.\n\nThe idea is not to surround the landscape — it's to inhabit it from the best possible angle. The pool and garden function as a natural amphitheater oriented toward the sunset: the moment of the day when the water reflects the sky's colors, the fire pit ignites, and the house finds its reason for being.\n\nThe architecture is designed for that — so that each space, from the living room to the highest terrace, has its own moment of light, its own relationship with the green that surrounds it and the horizon that crowns it.",
        },
      },
      {
        type: "feature",
        label: { es: "La idea central", en: "The central idea" },
        title: { es: "El jardín y la piscina\ncomo anfiteatro\ndel sunset.", en: "The garden and the pool\nas amphitheater\nof the sunset." },
        body: {
          es: "El jardín central de bonsái no es decoración — es el punto focal desde el que se organiza la contemplación. Las piedras, la gravilla y el árbol singular crean un espacio que invita a detenerse, a mirar, a sentir el paso del tiempo.\n\nLa piscina semiolímpica se extiende desde ese jardín hacia el paisaje, perdiéndose entre los árboles en dirección al mar. Al atardecer, el agua refleja el cielo y el fogón encendido marca el momento más poderoso del día.\n\nDesde cualquier punto de la casa — desde el living, desde la terraza, desde el agua — la vista siempre termina en el mismo horizonte.",
          en: "The central bonsai garden is not decoration — it's the focal point from which contemplation is organized. The stones, the gravel, and the singular tree create a space that invites you to stop, to look, to feel the passage of time.\n\nThe semi-Olympic pool extends from that garden toward the landscape, disappearing among the trees toward the sea. At sunset, the water reflects the sky and the lit fire pit marks the most powerful moment of the day.\n\nFrom any point in the house — from the living room, from the terrace, from the water — the view always ends at the same horizon.",
        },
      },
      {
        type: "feature",
        label: { es: "El momento del día", en: "The moment of the day" },
        title: { es: "El fuego.\nEl agua.\nEl sunset.", en: "The fire.\nThe water.\nThe sunset." },
        body: {
          es: "El fogón integrado al borde de la piscina define el atardecer en Casa Enso. Es el punto de reunión donde el agua, el calor del fuego y las vistas del horizonte convergen en un solo momento. La arquitectura no termina en los muros: termina cuando el sol toca el océano y el reflejo llena la piscina de color.",
          en: "The fire pit integrated at the pool's edge defines the sunset at Casa Enso. It's the gathering point where water, fire's warmth, and horizon views converge in a single moment. The architecture doesn't end at the walls: it ends when the sun touches the ocean and the reflection fills the pool with color.",
        },
      },
      {
        type: "materiality",
        label: { es: "Materialidad", en: "Materiality" },
        title: { es: "Arena, madera y vidrio.\nLo que el trópico ya tiene.", en: "Sand, wood and glass.\nWhat the tropics already have." },
        body: {
          es: "La paleta de materiales de Casa Enso es deliberadamente neutra — tonos arena caliza en la estructura, celosías verticales de madera clara que filtran la luz sin cerrar las vistas, vidrio en las fachadas que devuelve el paisaje hacia adentro. No hay color que compita con el jardín central ni con el verde que lo rodea.\n\nLos volúmenes flotantes sobre pilotes de concreto elevan la casa sobre el terreno en pendiente, liberando las vistas desde los niveles inferiores y creando sombra y ventilación natural. El travertino en pisos y terrazas ata todos los planos exteriores en una misma lectura horizontal que refuerza el plano de contemplación orientado al mar.",
          en: "Casa Enso's material palette is deliberately neutral — limestone sand tones in the structure, light wood vertical lattices that filter light without closing views, glass on facades that returns the landscape inward. No color competes with the central garden or the green that surrounds it.\n\nFloating volumes on concrete pilotis raise the house above the sloped terrain, freeing views from lower levels and creating shade and natural ventilation. Travertine on floors and terraces ties all exterior planes in a single horizontal reading that reinforces the contemplation plane oriented toward the sea.",
        },
      },
      {
        type: "strategy",
        label: { es: "Estrategia climática", en: "Climate strategy" },
        title: { es: "Diseñada para el clima seco de Senderos.", en: "Designed for the dry climate of Senderos." },
        items: [
          { title: { es: "Jardín central como regulador térmico", en: "Central garden as thermal regulator" }, text: { es: "El jardín de bonsái crea un microclima más fresco en el núcleo de la casa, reduciendo la temperatura del aire que circula hacia los espacios interiores.", en: "The bonsai garden creates a cooler microclimate at the house's core, reducing the temperature of air circulating to interior spaces." } },
          { title: { es: "Volúmenes flotantes sobre pilotes", en: "Floating volumes on pilotis" }, text: { es: "Los cuerpos elevados permiten que la brisa circule libremente bajo la estructura, eliminando el calor acumulado en el suelo de la pendiente.", en: "Elevated volumes allow the breeze to circulate freely under the structure, eliminating heat accumulated on the slope's ground." } },
          { title: { es: "Celosías como filtro solar", en: "Lattices as solar filter" }, text: { es: "Las celosías verticales de madera en las fachadas más expuestas regulan la entrada de luz directa manteniendo las visuales y la ventilación cruzada.", en: "Vertical wood lattices on the most exposed facades regulate direct light entry while maintaining views and cross ventilation." } },
          { title: { es: "Orientación al sunset", en: "Sunset orientation" }, text: { es: "La orientación principal de la casa maximiza las vistas al atardecer y minimiza la exposición solar directa en las horas de mayor calor.", en: "The house's main orientation maximizes sunset views and minimizes direct solar exposure during peak heat hours." } },
        ],
      },
    ],
    nextProject: "villa-fuste",
    ctaTitle: { es: "¿Tienes un lugar que\nquiere contemplar\nel horizonte?", en: "Have a place that wants\nto contemplate\nthe horizon?" },
  },
  {
    slug: "office-tamarindo",
    title: {
      es: "Office Tamarindo",
      en: "Office Tamarindo",
    },
    description: {
      es: "Nuestra sede ubicada en el centro de Tamarindo. Un espacio de diseño contemporáneo que fusiona concreto, madera y luz natural.",
      en: "Our headquarters located in downtown Tamarindo. A contemporary design space fusing concrete, wood, and natural light.",
    },
    category: "commercial",
    country: "Costa Rica",
    city: "Tamarindo",
    year: 2023,
    area: "65 m²",
    heroImage:
      "https://www.habitante.co/wp-content/uploads/2024/04/Office_Tamarindo_Habitante_01.jpg",
    images: [
      "https://www.habitante.co/wp-content/uploads/2024/04/Office_Tamarindo_Habitante_01.jpg",
      "https://www.habitante.co/wp-content/uploads/2024/04/Office_Tamarindo_Habitante_02.jpg",
      "https://www.habitante.co/wp-content/uploads/2024/04/Office_Tamarindo_Habitante_03.jpg",
      "https://www.habitante.co/wp-content/uploads/2024/04/Office_Tamarindo_Habitante_04.jpg",
      "https://www.habitante.co/wp-content/uploads/2024/04/Office_Tamarindo_Habitante_05.jpg",
    ],
  },
  {
    slug: "parque-urbano",
    title: {
      es: "Parque Urbano",
      en: "Parque Urbano",
    },
    description: {
      es: "Proyecto de diseño comercial que fusiona funcionalidad, lujo y conexión con el entorno natural. Un espacio que redefine la arquitectura comercial.",
      en: "Commercial design project fusing functionality, luxury, and connection with the natural environment. A space that redefines commercial architecture.",
    },
    category: "commercial",
    country: "Costa Rica",
    city: "Cartago",
    year: 2024,
    area: "465 m²",
    heroImage:
      "https://www.habitante.co/wp-content/uploads/2024/06/bg_parqueUrbano-Habitante-architecture-luxury-costa-rica-arquitectos.png",
    images: [
      "https://www.habitante.co/wp-content/uploads/2024/06/bg_parqueUrbano-Habitante-architecture-luxury-costa-rica-arquitectos.png",
      "https://www.habitante.co/wp-content/uploads/2024/06/parqueUrbano-Habitante-architecture-luxury-costa-rica-arquitectos.png",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(
  category?: Project["category"]
): Project[] {
  if (!category) return projects;
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
