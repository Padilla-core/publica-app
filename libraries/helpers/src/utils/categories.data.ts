const categoriesData = [
    {
        "_id": 1,
        "name": "Inmuebles en alquiler",
        "slug": "inmuebles-en-alquiler",
        "subCategories": [
            {
                "_id": 1,
                "name": "Apartamentos",
                "slug": "apartamentos",
                "parametersIds": [
                    "rooms_quantity",
                    "bathrooms_quantity",
                    "mini_bathrooms_quantity",
                    "property_type",
                    "build_square_meters"
                ]
            },
            {
                "_id": 2,
                "name": "Casas",
                "slug": "casas",
                "parametersIds": [
                    "rooms_quantity",
                    "bathrooms_quantity",
                    "mini_bathrooms_quantity",
                    "terrain_square_meters",
                    "property_type",
                    "build_square_meters"
                ]
            },
            {
                "_id": 3,
                "name": "Casas vacacionales y Villas",
                "slug": "casas-vacacionales",
                "parametersIds": [
                    "rooms_quantity",
                    "bathrooms_quantity",
                    "mini_bathrooms_quantity",
                    "terrain_square_meters",
                    "property_type",
                    "build_square_meters"
                ]
            },
            {
                "_id": 4,
                "name": "Oficinas y Locales comerciales",
                "slug": "oficinas-comerciales",
                "parametersIds": [
                    "rooms_quantity",
                    "bathrooms_quantity",
                    "offices_quantity",
                    "terrain_square_meters",
                    "property_type",
                    "build_square_meters"
                ]
            },
            {
                "_id": 5,
                "name": "Solares y Terrenos",
                "slug": "solares-terrenos",
                "parametersIds": ["terrain_square_meters", "terrain_usage_type"]
            },
            {
                "_id": 6,
                "name": "Habitaciones y Viviendas compartidas",
                "slug": "habitaciones-compartidas",
                "parametersIds": [
                    "rooms_quantity",
                    "bathrooms_quantity",
                    "property_type",
                    "build_square_meters"
                ]
            },
            {
                "_id": 7,
                "name": "Penthouses",
                "slug": "penthouses",
                "parametersIds": [
                    "rooms_quantity",
                    "bathrooms_quantity",
                    "mini_bathrooms_quantity",
                    "property_type",
                    "build_square_meters"
                ]
            },
            {
                "_id": 8,
                "name": "Otros inmuebles",
                "slug": "otros-inmuebles",
                "parametersIds": [
                    "bathrooms_quantity",
                    "terrain_square_meters",
                    "build_square_meters"
                ]
            }
        ]
    },
    {
        "_id": 2,
        "name": "Inmuebles en venta",
        "slug": "inmuebles-en-venta",
        "subCategories": [
            {
                "_id": 9,
                "name": "Apartamentos",
                "slug": "apartamentos",
                "parametersIds": [
                    "rooms_quantity",
                    "bathrooms_quantity",
                    "mini_bathrooms_quantity",
                    "property_type",
                    "build_square_meters"
                ]
            },
            {
                "_id": 10,
                "name": "Casas",
                "slug": "casas",
                "parametersIds": [
                    "rooms_quantity",
                    "bathrooms_quantity",
                    "mini_bathrooms_quantity",
                    "terrain_square_meters",
                    "property_type",
                    "build_square_meters"
                ]
            },
            {
                "_id": 11,
                "name": "Casas vacacionales y Villas",
                "slug": "casas-vacacionales",
                "parametersIds": [
                    "rooms_quantity",
                    "bathrooms_quantity",
                    "mini_bathrooms_quantity",
                    "terrain_square_meters",
                    "property_type",
                    "build_square_meters"
                ]
            },
            {
                "_id": 12,
                "name": "Oficinas y Locales comerciales",
                "slug": "oficinas-comerciales",
                "parametersIds": [
                    "rooms_quantity",
                    "bathrooms_quantity",
                    "offices_quantity",
                    "terrain_square_meters",
                    "property_type",
                    "build_square_meters"
                ]
            },
            {
                "_id": 13,
                "name": "Solares y Terrenos",
                "slug": "solares-terrenos",
                "parametersIds": ["terrain_square_meters", "terrain_usage_type"]
            },
            {
                "_id": 14,
                "name": "Habitaciones y Viviendas compartidas",
                "slug": "habitaciones-compartidas",
                "parametersIds": [
                    "rooms_quantity",
                    "bathrooms_quantity",
                    "property_type",
                    "build_square_meters"
                ]
            },
            {
                "_id": 15,
                "name": "Penthouses",
                "slug": "penthouse",
                "parametersIds": [
                    "rooms_quantity",
                    "bathrooms_quantity",
                    "mini_bathrooms_quantity",
                    "property_type",
                    "build_square_meters"
                ]
            },
            {
                "_id": 16,
                "name": "Otros inmuebles",
                "slug": "otros-inmuebles",
                "parametersIds": [
                    "bathrooms_quantity",
                    "terrain_square_meters",
                    "build_square_meters"
                ]
            }
        ]
    },
    {
        "_id": 3,
        "name": "Vehículos",
        "slug": "vehiculos",
        "subCategories": [
            {
                "_id": 17,
                "name": "Carros",
                "slug": "carros",
                "parametersIds": [
                    "car_condition",
                    "car_brand",
                    "car_model",
                    "car_year",
                    "car_type",
                    "car_mileage",
                    "car_fuel",
                    "car_transmission",
                    "car_traction",
                    "car_external_color",
                    "car_internal_color",
                    "car_doors",
                    "car_engine_cc",
                    "car_cylinder",
                    "car_has_unique_owner",
                    "car_has_air_conditioner",
                    "car_has_rear_wiper",
                    "car_has_factory_painting",
                    "car_has_automatic_windows",
                    "car_has_factory_rims",
                    "car_headlights",
                    "car_has_alarm",
                    "car_has_airbags",
                    "car_has_leather_seats",
                    "car_has_am_fm_radio",
                    "car_has_cd_player"
                ]
            },
            {
                "_id": 18,
                "name": "Jeepetas y Camionetas",
                "slug": "jeepetas-camionetas",
                "parametersIds": [
                    "car_condition",
                    "suv_truck_brand",
                    "suv_truck_model",
                    "car_year",
                    "car_type",
                    "car_mileage",
                    "car_fuel",
                    "car_transmission",
                    "car_traction",
                    "car_external_color",
                    "car_internal_color",
                    "car_doors",
                    "car_engine_cc",
                    "car_cylinder",
                    "car_has_unique_owner",
                    "car_has_air_conditioner",
                    "car_has_rear_wiper",
                    "car_has_factory_painting",
                    "car_has_automatic_windows",
                    "car_has_factory_rims",
                    "car_headlights",
                    "car_has_alarm",
                    "car_has_airbags",
                    "car_has_leather_seats",
                    "car_has_am_fm_radio",
                    "car_has_cd_player"
                ]
            },
            {
                "_id": 19,
                "name": "Motores y Pasolas",
                "slug": "motores-pasolas",
                "parametersIds": [
                    "car_condition",
                    "motorcycle_brand",
                    "motorcycle_model",
                    "car_year",
                    "car_mileage",
                    "car_fuel",
                    "car_engine_cc",
                    "car_cylinder",
                    "car_has_unique_owner",
                    "car_has_factory_painting",
                    "car_has_factory_rims",
                    "car_headlights"
                ]
            },
            {
                "_id": 21,
                "name": "Botes",
                "slug": "botes",
                "parametersIds": [
                    "car_condition",
                    "boat_brand",
                    "boat_model",
                    "car_year",
                    "car_fuel",
                    "car_engine_cc",
                    "car_cylinder",
                    "car_has_unique_owner",
                    "car_has_factory_painting",
                    "car_has_factory_rims",
                    "car_headlights",
                    "size_in_feet"
                ]
            },
            {
                "_id": 22,
                "name": "Vehículos recreativos",
                "slug": "vehiculos-recreativos",
                "parametersIds": [
                    "car_condition",
                    "recreation_car_brand",
                    "recreation_car_model",
                    "recreation_car_type",
                    "car_mileage",
                    "car_fuel"
                ]
            },
            {
                "_id": 23,
                "name": "Camiones y Vehículos pesados",
                "slug": "camiones-vehiculos-pesados",
                "parametersIds": [
                    "semi_trailer_brand",
                    "semi_trailer_model",
                    "car_year",
                    "semi_trailer_type",
                    "car_mileage",
                    "car_fuel",
                    "car_engine_cc",
                    "car_cylinder",
                    "car_has_unique_owner",
                    "car_has_factory_painting",
                    "car_has_factory_rims",
                    "car_headlights",
                    "car_has_alarm",
                    "car_has_airbags",
                    "car_has_am_fm_radio",
                    "car_has_cd_player"
                ]
            },
            {
                "_id": 24,
                "name": "Otros vehículos",
                "slug": "otros-vehiculos",
                "parametersIds": []
            }
        ]
    },
    {
        "_id": 4,
        "name": "Hogar",
        "slug": "hogar",
        "subCategories": [
            {
                "_id": 25,
                "name": "Electrodomésticos",
                "slug": "electrodomesticos",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 26,
                "name": "Decoración y Accesorios",
                "slug": "decoracion-accesorios",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 27,
                "name": "Aires acondicionados y Abanicos",
                "slug": "aires-acondicionados-abanicos",
                "parametersIds": ["condition", "btu", "has_delivery"]
            },
            {
                "_id": 28,
                "name": "Muebles y Colchones",
                "slug": "muebles-colchones",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 29,
                "name": "Cocina",
                "slug": "cocina",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 30,
                "name": "Herramientas, Jardínes y Exterior",
                "slug": "herramientas-jardines-exterior",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 31,
                "name": "Arte y Antigüedades",
                "slug": "arte-antiguedades",
                "parametersIds": ["condition", "has_delivery"]
            }
        ]
    },
    {
        "_id": 5,
        "name": "Bebés y Niños",
        "slug": "bebes-ninos",
        "subCategories": [
            {
                "_id": 32,
                "name": "Ropa y Zapatos",
                "slug": "ropa-zapatos",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 33,
                "name": "Muebles",
                "slug": "muebles",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 34,
                "name": "Coches y Sillas",
                "slug": "coches-sillas",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 35,
                "name": "Cuidado y Nutrición",
                "slug": "cuidado-nutricion",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 36,
                "name": "Juguetes",
                "slug": "juguetes",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 37,
                "name": "Accesorios",
                "slug": "accesorios",
                "parametersIds": ["condition", "has_delivery"]
            }
        ]
    },
    {
        "_id": 6,
        "name": "Moda y Belleza",
        "slug": "moda-belleza",
        "subCategories": [
            {
                "_id": 38,
                "name": "Ropa para mujer",
                "slug": "ropa-para-mujer",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 39,
                "name": "Ropa para hombre",
                "slug": "ropa-para-hombre",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 40,
                "name": "Carteras y Maletas",
                "slug": "carteras-maletas",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 41,
                "name": "Joyas, Relojes y Accesorios",
                "slug": "joyas-relojes-accesorios",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 42,
                "name": "Zapatos para mujer",
                "slug": "zapatos-para-mujer",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 43,
                "name": "Zapatos para hombre",
                "slug": "zapatos-para-hombre",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 44,
                "name": "Zapatos unisex",
                "slug": "zapatos-unisex",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 45,
                "name": "Salud y Belleza",
                "slug": "salud-belleza",
                "parametersIds": ["condition", "has_delivery", "beauty_product_type"]
            }
        ]
    },
    {
        "_id": 7,
        "name": "Deportes y Entretenimiento",
        "slug": "deportes-entretenimiento",
        "subCategories": [
            {
                "_id": 46,
                "name": "Hobby y Colección",
                "slug": "hobby-coleccion",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 47,
                "name": "Taquillas para eventos",
                "slug": "taquillas-para-eventos",
                "parametersIds": ["has_delivery"]
            },
            {
                "_id": 48,
                "name": "Deportes",
                "slug": "deportes",
                "parametersIds": ["has_delivery"]
            },
            {
                "_id": 49,
                "name": "Bicicletas y Accesorios",
                "slug": "bicicletas-accesorios",
                "parametersIds": ["condition", "bike_brand", "has_delivery"]
            },
            {
                "_id": 50,
                "name": "Animales y Mascotas",
                "slug": "animales-mascotas",
                "parametersIds": ["has_delivery"]
            },
            {
                "_id": 51,
                "name": "Libros y Revistas",
                "slug": "libros-revistas",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 52,
                "name": "DVD's, Blu-Ray y Películas",
                "slug": "dvds-blue-ray-peliculas",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 53,
                "name": "Tours y Viajes",
                "slug": "tours-viajes",
                "parametersIds": ["has_delivery"]
            },
            {
                "_id": 54,
                "name": "Instrumentos Musicales",
                "slug": "intrumentos-musicales",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 55,
                "name": "CD's y Vinilos",
                "slug": "cds-vinilos",
                "parametersIds": ["condition", "has_delivery"]
            }
        ]
    },
    {
        "_id": 8,
        "name": "Electrónica",
        "slug": "electronica",
        "subCategories": [
            {
                "_id": 56,
                "name": "Celulares y Tabletas",
                "slug": "celulares-tabletas",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 57,
                "name": "TV",
                "slug": "tv",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 58,
                "name": "Computadoras y Laptops",
                "slug": "computadoras-laptops",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 59,
                "name": "Consolas y Videojuegos",
                "slug": "consolas-videojuegos",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 60,
                "name": "Accesorios para electrónica",
                "slug": "accesorios-para-electronica",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 61,
                "name": "Impresoras y Scanners",
                "slug": "impresoras-scanners",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 62,
                "name": "Cámaras y Audio",
                "slug": "camaras-audio",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 63,
                "name": "Plantas e Inversores",
                "slug": "plantas-inversores",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 64,
                "name": "Otros electrónicos",
                "slug": "otros",
                "parametersIds": ["condition", "has_delivery"]
            }
        ]
    },
    {
        "_id": 10,
        "name": "Negocios y Servicios",
        "slug": "negocios-servicios",
        "subCategories": [
            {
                "_id": 67,
                "name": "Servicios profesionales",
                "slug": "servicios-profesionales",
                "parametersIds": []
            },
            {
                "_id": 68,
                "name": "Cursos y Clases",
                "slug": "cursos-clases",
                "parametersIds": []
            },
            {
                "_id": 69,
                "name": "Equipos profesionales",
                "slug": "equipos-profesionales",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 70,
                "name": "Artículos de oficina",
                "slug": "articulos-de-oficina",
                "parametersIds": ["condition", "has_delivery"]
            },
            {
                "_id": 71,
                "name": "Negocios en venta",
                "slug": "negocios-en-venta",
                "parametersIds": []
            },
            {
                "_id": 72,
                "name": "Construcción e Industrial",
                "slug": "construccion-industrial",
                "parametersIds": ["condition", "has_delivery"]
            }
        ]
    },
    {
        "_id": 11,
        "name": "Otros",
        "slug": "otros",
        "subCategories": [
            {
                "_id": 73,
                "name": "Otros productos",
                "slug": "otros",
                "parametersIds": ["condition"]
            }
        ]
    }
]
