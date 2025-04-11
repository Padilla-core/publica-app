const parametersData = [
    {
        "id": "rooms_quantity",
        "required": true,
        "name": "Número de Habitaciones",
        "options": [],
        "type": "Number"
    },
    {
        "id": "bathrooms_quantity",
        "required": true,
        "name": "Número de Baños",
        "options": [],
        "type": "Number"
    },
    {
        "id": "mini_bathrooms_quantity",
        "required": true,
        "name": "Número de Baños Medios",
        "options": [],
        "type": "Number"
    },
    {
        "id": "square_meters",
        "required": true,
        "name": "Metros cuadrados",
        "options": [],
        "type": "Number"
    },
    {
        "id": "property_type",
        "required": true,
        "name": "Tipo",
        "options": [
            {
                "id": 27,
                "name": "Amueblado"
            },
            {
                "id": 28,
                "name": "Con linea blanca"
            },
            {
                "id": 29,
                "name": "Sin Amueblar"
            }
        ],
        "type": "Select"
    },
    {
        "id": "build_square_meters",
        "name": "Construcción (m²)",
        "options": [],
        "type": "Number"
    },
    {
        "id": "terrain_square_meters",
        "name": "Solar (m²)",
        "options": [],
        "type": "Number"
    },
    {
        "id": "offices_quantity",
        "name": "Número de Oficinas",
        "options": [],
        "type": "Number"
    },
    {
        "id": "terrain_usage_type",
        "name": "Tipo de uso",
        "options": [
            {
                "id": 34,
                "name": "Comercial"
            },
            {
                "id": 35,
                "name": "Finca"
            },
            {
                "id": 36,
                "name": "Industrial"
            },
            {
                "id": 37,
                "name": "Otros"
            },
            {
                "id": 38,
                "name": "Residencial"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_condition",
        "name": "Condición",
        "required": true,
        "options": [
            {
                "id": 57,
                "name": "Nuevo"
            },
            {
                "id": 58,
                "name": "Usado"
            }
        ],
        "type": "Select"
    },
    {
        "id": "building_condition",
        "name": "Condición de construcción",
        "required": true,
        "options": [
            {
                "id": 30,
                "name": "En construcción"
            },
            {
                "id": 31,
                "name": "En planos"
            },
            {
                "id": 32,
                "name": "Nuevo"
            },
            {
                "id": 33,
                "name": "Segundo uso"
            }
        ],
        "type": "Select"
    },
    {
        "id": "condition",
        "name": "Condición",
        "required": true,
        "options": [
            {
                "id": 1805,
                "name": "Defectuoso"
            },
            {
                "id": 57,
                "name": "Nuevo"
            },
            {
                "id": 1802,
                "name": "Nuevo - Abierto"
            },
            {
                "id": 1806,
                "name": "Restaurado"
            },
            {
                "id": 58,
                "name": "Usado"
            },
            {
                "id": 1804,
                "name": "Usado - Aceptable"
            },
            {
                "id": 1803,
                "name": "Usado - Como Nuevo"
            }
        ],
        "type": "Select"
    },
    {
        "id": "bike_brand",
        "name": "Marca",
        "options": [
            {
                "id": 170,
                "name": "BH"
            },
            {
                "id": 172,
                "name": "Bianchi"
            },
            {
                "id": 171,
                "name": "BMC"
            },
            {
                "id": 173,
                "name": "Cannondale"
            },
            {
                "id": 174,
                "name": "Code Intense"
            },
            {
                "id": 175,
                "name": "Colnago"
            },
            {
                "id": 176,
                "name": "Fuji"
            },
            {
                "id": 178,
                "name": "Giant"
            },
            {
                "id": 177,
                "name": "GT"
            },
            {
                "id": 179,
                "name": "Haro"
            },
            {
                "id": 180,
                "name": "Hufy"
            },
            {
                "id": 181,
                "name": "Jamis"
            },
            {
                "id": 182,
                "name": "Kona"
            },
            {
                "id": 183,
                "name": "Magna"
            },
            {
                "id": 184,
                "name": "Merida"
            },
            {
                "id": 185,
                "name": "Mongoose"
            },
            {
                "id": 186,
                "name": "Next"
            },
            {
                "id": 187,
                "name": "Orbea"
            },
            {
                "id": 188,
                "name": "Otro"
            },
            {
                "id": 189,
                "name": "Santa Cruz"
            },
            {
                "id": 190,
                "name": "Schwinn"
            },
            {
                "id": 191,
                "name": "Scott"
            },
            {
                "id": 192,
                "name": "Specialized"
            },
            {
                "id": 193,
                "name": "Trek"
            },
            {
                "id": 194,
                "name": "Yeti"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_brand",
        "required": true,
        "name": "Marca",
        "options": [
            {
                "id": 112,
                "name": "Acura"
            },
            {
                "id": 113,
                "name": "Alfa Romeo"
            },
            {
                "id": 114,
                "name": "Audi"
            },
            {
                "id": 1354,
                "name": "Baic"
            },
            {
                "id": 115,
                "name": "Bentley"
            },
            {
                "id": 116,
                "name": "BMW"
            },
            {
                "id": 117,
                "name": "Brilliance"
            },
            {
                "id": 118,
                "name": "Buick"
            },
            {
                "id": 119,
                "name": "BYD"
            },
            {
                "id": 120,
                "name": "Cadillac"
            },
            {
                "id": 121,
                "name": "Chana"
            },
            {
                "id": 122,
                "name": "Changan"
            },
            {
                "id": 123,
                "name": "Chery"
            },
            {
                "id": 124,
                "name": "Chevrolet"
            },
            {
                "id": 125,
                "name": "Chrysler"
            },
            {
                "id": 126,
                "name": "Citroën"
            },
            {
                "id": 127,
                "name": "Corvette"
            },
            {
                "id": 128,
                "name": "Daewoo"
            },
            {
                "id": 129,
                "name": "Daihatsu"
            },
            {
                "id": 130,
                "name": "Datsun"
            },
            {
                "id": 131,
                "name": "Dodge"
            },
            {
                "id": 132,
                "name": "Dongfeng"
            },
            {
                "id": 133,
                "name": "Ferrari"
            },
            {
                "id": 134,
                "name": "Fiat"
            },
            {
                "id": 135,
                "name": "Ford"
            },
            {
                "id": 136,
                "name": "Foton"
            },
            {
                "id": 137,
                "name": "Honda"
            },
            {
                "id": 138,
                "name": "Hyundai"
            },
            {
                "id": 139,
                "name": "Infiniti"
            },
            {
                "id": 140,
                "name": "Jaguar"
            },
            {
                "id": 141,
                "name": "Kia"
            },
            {
                "id": 1740,
                "name": "Lamborghini"
            },
            {
                "id": 1628,
                "name": "Lamborghini"
            },
            {
                "id": 1572,
                "name": "Lamborghini"
            },
            {
                "id": 1684,
                "name": "Lamborghini"
            },
            {
                "id": 142,
                "name": "Lexus"
            },
            {
                "id": 143,
                "name": "Lincoln"
            },
            {
                "id": 144,
                "name": "Maserati"
            },
            {
                "id": 145,
                "name": "Mazda"
            },
            {
                "id": 146,
                "name": "Mercedes"
            },
            {
                "id": 147,
                "name": "Mercury"
            },
            {
                "id": 148,
                "name": "MG"
            },
            {
                "id": 149,
                "name": "Mini"
            },
            {
                "id": 150,
                "name": "Mitsubishi"
            },
            {
                "id": 151,
                "name": "Nissan"
            },
            {
                "id": 152,
                "name": "Oldsmobile"
            },
            {
                "id": 153,
                "name": "Otra"
            },
            {
                "id": 154,
                "name": "Peugeot"
            },
            {
                "id": 155,
                "name": "Plymouth"
            },
            {
                "id": 156,
                "name": "Pontiac"
            },
            {
                "id": 157,
                "name": "Porsche"
            },
            {
                "id": 158,
                "name": "Proton"
            },
            {
                "id": 159,
                "name": "Renault"
            },
            {
                "id": 160,
                "name": "Saturn"
            },
            {
                "id": 161,
                "name": "Seat"
            },
            {
                "id": 162,
                "name": "Skoda"
            },
            {
                "id": 163,
                "name": "Smart"
            },
            {
                "id": 164,
                "name": "Subaru"
            },
            {
                "id": 165,
                "name": "Suzuki"
            },
            {
                "id": 1300,
                "name": "Tesla"
            },
            {
                "id": 166,
                "name": "Tianma"
            },
            {
                "id": 167,
                "name": "Toyota"
            },
            {
                "id": 168,
                "name": "Volkswagen"
            },
            {
                "id": 169,
                "name": "Volvo"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_model",
        "name": "Modelo",
        "required": true,
        "dependOf": "car_brand",
        "options": [],
        "type": "Select"
    },
    {
        "id": 195,
        "name": "107",
        "ref": "car_model",
        "refValue": "Peugeot",
        "refId": 154
    },
    {
        "id": 196,
        "name": "1200",
        "ref": "car_model",
        "refValue": "Datsun",
        "refId": 130
    },
    {
        "id": 197,
        "name": "156",
        "ref": "car_model",
        "refValue": "Alfa Romeo",
        "refId": 113
    },
    {
        "id": 198,
        "name": "159",
        "ref": "car_model",
        "refValue": "Alfa Romeo",
        "refId": 113
    },
    {
        "id": 199,
        "name": "2",
        "ref": "car_model",
        "refValue": "Mazda",
        "refId": 145
    },
    {
        "id": 200,
        "name": "206",
        "ref": "car_model",
        "refValue": "Peugeot",
        "refId": 154
    },
    {
        "id": 201,
        "name": "207",
        "ref": "car_model",
        "refValue": "Peugeot",
        "refId": 154
    },
    {
        "id": 202,
        "name": "3",
        "ref": "car_model",
        "refValue": "Mazda",
        "refId": 145
    },
    {
        "id": 203,
        "name": "300",
        "ref": "car_model",
        "refValue": "Chrysler",
        "refId": 125
    },
    {
        "id": 1425,
        "name": "300 ZX",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 204,
        "name": "306",
        "ref": "car_model",
        "refValue": "Peugeot",
        "refId": 154
    },
    {
        "id": 205,
        "name": "307",
        "ref": "car_model",
        "refValue": "Peugeot",
        "refId": 154
    },
    {
        "id": 206,
        "name": "308",
        "ref": "car_model",
        "refValue": "Peugeot",
        "refId": 154
    },
    {
        "id": 207,
        "name": "323",
        "ref": "car_model",
        "refValue": "Mazda",
        "refId": 145
    },
    {
        "id": 208,
        "name": "350-Z",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 209,
        "name": "370-Z",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 210,
        "name": "406",
        "ref": "car_model",
        "refValue": "Peugeot",
        "refId": 154
    },
    {
        "id": 211,
        "name": "407",
        "ref": "car_model",
        "refValue": "Peugeot",
        "refId": 154
    },
    {
        "id": 212,
        "name": "458",
        "ref": "car_model",
        "refValue": "Ferrari",
        "refId": 133
    },
    {
        "id": 213,
        "name": "5",
        "ref": "car_model",
        "refValue": "Mazda",
        "refId": 145
    },
    {
        "id": 214,
        "name": "5",
        "ref": "car_model",
        "refValue": "Mg",
        "refId": 148
    },
    {
        "id": 215,
        "name": "500",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 216,
        "name": "508",
        "ref": "car_model",
        "refValue": "Peugeot",
        "refId": 154
    },
    {
        "id": 217,
        "name": "6",
        "ref": "car_model",
        "refValue": "Mazda",
        "refId": 145
    },
    {
        "id": 218,
        "name": "607",
        "ref": "car_model",
        "refValue": "Peugeot",
        "refId": 154
    },
    {
        "id": 1418,
        "name": "626",
        "ref": "car_model",
        "refValue": "Mazda",
        "refId": 145
    },
    {
        "id": 219,
        "name": "86",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 220,
        "name": "911",
        "ref": "car_model",
        "refValue": "Porsche",
        "refId": 157
    },
    {
        "id": 221,
        "name": "987",
        "ref": "car_model",
        "refValue": "Porsche",
        "refId": 157
    },
    {
        "id": 222,
        "name": "A1",
        "ref": "car_model",
        "refValue": "Audi",
        "refId": 114
    },
    {
        "id": 223,
        "name": "A3",
        "ref": "car_model",
        "refValue": "Audi",
        "refId": 114
    },
    {
        "id": 224,
        "name": "A4",
        "ref": "car_model",
        "refValue": "Audi",
        "refId": 114
    },
    {
        "id": 225,
        "name": "A5",
        "ref": "car_model",
        "refValue": "Audi",
        "refId": 114
    },
    {
        "id": 226,
        "name": "A6",
        "ref": "car_model",
        "refValue": "Audi",
        "refId": 114
    },
    {
        "id": 227,
        "name": "A7",
        "ref": "car_model",
        "refValue": "Audi",
        "refId": 114
    },
    {
        "id": 228,
        "name": "A8",
        "ref": "car_model",
        "refValue": "Audi",
        "refId": 114
    },
    {
        "id": 229,
        "name": "Accent",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 230,
        "name": "Accord",
        "ref": "car_model",
        "refValue": "Honda",
        "refId": 137
    },
    {
        "id": 231,
        "name": "AD Van",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 232,
        "name": "AD Wagon",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 233,
        "name": "Aerio",
        "ref": "car_model",
        "refValue": "Suzuki",
        "refId": 165
    },
    {
        "id": 1429,
        "name": "Agya",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 234,
        "name": "Almera",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 235,
        "name": "Alsvin",
        "ref": "car_model",
        "refValue": "Chana",
        "refId": 121
    },
    {
        "id": 236,
        "name": "Altea",
        "ref": "car_model",
        "refValue": "Seat",
        "refId": 161
    },
    {
        "id": 237,
        "name": "Altezza",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 238,
        "name": "Altima",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 239,
        "name": "Alto",
        "ref": "car_model",
        "refValue": "Suzuki",
        "refId": 165
    },
    {
        "id": 1430,
        "name": "Aqua",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 240,
        "name": "Astra",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 241,
        "name": "Atos",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 242,
        "name": "Aura",
        "ref": "car_model",
        "refValue": "Saturn",
        "refId": 160
    },
    {
        "id": 243,
        "name": "Avalon",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 244,
        "name": "Avante",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 245,
        "name": "Avenger",
        "ref": "car_model",
        "refValue": "Dodge",
        "refId": 131
    },
    {
        "id": 246,
        "name": "Avensis",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 1692,
        "name": "Aventador",
        "ref": "car_model",
        "refValue": "Lamborghini",
        "refId": 1572
    },
    {
        "id": 1748,
        "name": "Aventador",
        "ref": "car_model",
        "refValue": "Lamborghini",
        "refId": 1572
    },
    {
        "id": 1636,
        "name": "Aventador",
        "ref": "car_model",
        "refValue": "Lamborghini",
        "refId": 1572
    },
    {
        "id": 1580,
        "name": "Aventador",
        "ref": "car_model",
        "refValue": "Lamborghini",
        "refId": 1572
    },
    {
        "id": 247,
        "name": "Aveo",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 248,
        "name": "Azera",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 1397,
        "name": "B7",
        "ref": "car_model",
        "refValue": "Bmw",
        "refId": 116
    },
    {
        "id": 249,
        "name": "Baleno",
        "ref": "car_model",
        "refValue": "Suzuki",
        "refId": 165
    },
    {
        "id": 250,
        "name": "Beetle",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 1401,
        "name": "Bolt",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 251,
        "name": "Boon",
        "ref": "car_model",
        "refValue": "Daihatsu",
        "refId": 129
    },
    {
        "id": 252,
        "name": "Bora",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 253,
        "name": "Boxster",
        "ref": "car_model",
        "refValue": "Porsche",
        "refId": 157
    },
    {
        "id": 254,
        "name": "Brava",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 255,
        "name": "Bravo",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 256,
        "name": "C3",
        "ref": "car_model",
        "refValue": "Citroën",
        "refId": 126
    },
    {
        "id": 257,
        "name": "C30",
        "ref": "car_model",
        "refValue": "Volvo",
        "refId": 169
    },
    {
        "id": 258,
        "name": "C4",
        "ref": "car_model",
        "refValue": "Citroën",
        "refId": 126
    },
    {
        "id": 259,
        "name": "C5",
        "ref": "car_model",
        "refValue": "Citroën",
        "refId": 126
    },
    {
        "id": 260,
        "name": "C70",
        "ref": "car_model",
        "refValue": "Volvo",
        "refId": 169
    },
    {
        "id": 262,
        "name": "Cabrio",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 261,
        "name": "Cabrio",
        "ref": "car_model",
        "refValue": "Mini",
        "refId": 149
    },
    {
        "id": 263,
        "name": "Cadenza",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 264,
        "name": "Camaro",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 265,
        "name": "Camry",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 266,
        "name": "Capa",
        "ref": "car_model",
        "refValue": "Honda",
        "refId": 137
    },
    {
        "id": 1402,
        "name": "Caprice Classic",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 267,
        "name": "Carens",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 1419,
        "name": "Carol",
        "ref": "car_model",
        "refValue": "Mazda",
        "refId": 145
    },
    {
        "id": 268,
        "name": "Carrera",
        "ref": "car_model",
        "refValue": "Porsche",
        "refId": 157
    },
    {
        "id": 269,
        "name": "Cayman",
        "ref": "car_model",
        "refValue": "Porsche",
        "refId": 157
    },
    {
        "id": 270,
        "name": "CC",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 271,
        "name": "Celerio",
        "ref": "car_model",
        "refValue": "Suzuki",
        "refId": 165
    },
    {
        "id": 272,
        "name": "Celica",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 273,
        "name": "Centennial",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 274,
        "name": "Cerato",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 275,
        "name": "Challenger",
        "ref": "car_model",
        "refValue": "Dodge",
        "refId": 131
    },
    {
        "id": 276,
        "name": "Charade",
        "ref": "car_model",
        "refValue": "Daihatsu",
        "refId": 129
    },
    {
        "id": 277,
        "name": "Charger",
        "ref": "car_model",
        "refValue": "Dodge",
        "refId": 131
    },
    {
        "id": 278,
        "name": "Charmant",
        "ref": "car_model",
        "refValue": "Daihatsu",
        "refId": 129
    },
    {
        "id": 279,
        "name": "Chevy",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 280,
        "name": "Chieftain",
        "ref": "car_model",
        "refValue": "Pontiac",
        "refId": 156
    },
    {
        "id": 281,
        "name": "Cinquecento C",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 282,
        "name": "City",
        "ref": "car_model",
        "refValue": "Honda",
        "refId": 137
    },
    {
        "id": 283,
        "name": "Civic",
        "ref": "car_model",
        "refValue": "Honda",
        "refId": 137
    },
    {
        "id": 1407,
        "name": "Clarity",
        "ref": "car_model",
        "refValue": "Honda",
        "refId": 137
    },
    {
        "id": 284,
        "name": "Clase A",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 285,
        "name": "Clase B",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 286,
        "name": "Clase C",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 287,
        "name": "Clase CLA",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 288,
        "name": "Clase CLK",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 289,
        "name": "Clase CLS",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 290,
        "name": "Clase E",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 1420,
        "name": "Clase GT",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 291,
        "name": "Clase S",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 292,
        "name": "Clase Sl",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 293,
        "name": "Clase Slk",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 294,
        "name": "Clio",
        "ref": "car_model",
        "refValue": "Renault",
        "refId": 159
    },
    {
        "id": 295,
        "name": "Clubman",
        "ref": "car_model",
        "refValue": "Mini",
        "refId": 149
    },
    {
        "id": 296,
        "name": "Cobalt",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 297,
        "name": "Colt",
        "ref": "car_model",
        "refValue": "Mitsubishi",
        "refId": 150
    },
    {
        "id": 298,
        "name": "Concorde",
        "ref": "car_model",
        "refValue": "Chrysler",
        "refId": 125
    },
    {
        "id": 299,
        "name": "Continental",
        "ref": "car_model",
        "refValue": "Bentley",
        "refId": 115
    },
    {
        "id": 300,
        "name": "Cordoba",
        "ref": "car_model",
        "refValue": "Seat",
        "refId": 161
    },
    {
        "id": 301,
        "name": "Corolla",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 302,
        "name": "Corona",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 303,
        "name": "Corsa",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 304,
        "name": "Corvette",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 305,
        "name": "Countryman",
        "ref": "car_model",
        "refValue": "Mini",
        "refId": 149
    },
    {
        "id": 306,
        "name": "Coupe",
        "ref": "car_model",
        "refValue": "Mini",
        "refId": 149
    },
    {
        "id": 307,
        "name": "Coupé",
        "ref": "car_model",
        "refValue": "Maserati",
        "refId": 144
    },
    {
        "id": 308,
        "name": "Cressida",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 309,
        "name": "CRL",
        "ref": "car_model",
        "refValue": "Buick",
        "refId": 118
    },
    {
        "id": 310,
        "name": "Croma",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 311,
        "name": "Crosstour",
        "ref": "car_model",
        "refValue": "Honda",
        "refId": 137
    },
    {
        "id": 312,
        "name": "Crown",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 313,
        "name": "Cruze",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 1416,
        "name": "CT",
        "ref": "car_model",
        "refValue": "Lexus",
        "refId": 142
    },
    {
        "id": 314,
        "name": "CTS",
        "ref": "car_model",
        "refValue": "Cadillac",
        "refId": 120
    },
    {
        "id": 315,
        "name": "Cube",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 316,
        "name": "Cuore",
        "ref": "car_model",
        "refValue": "Daihatsu",
        "refId": 129
    },
    {
        "id": 318,
        "name": "Delta",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 319,
        "name": "Delta",
        "ref": "car_model",
        "refValue": "Oldsmobile",
        "refId": 152
    },
    {
        "id": 320,
        "name": "Deluxe",
        "ref": "car_model",
        "refValue": "Plymouth",
        "refId": 155
    },
    {
        "id": 321,
        "name": "Demio",
        "ref": "car_model",
        "refValue": "Mazda",
        "refId": 145
    },
    {
        "id": 317,
        "name": "De Ville",
        "ref": "car_model",
        "refValue": "Cadillac",
        "refId": 120
    },
    {
        "id": 322,
        "name": "Diamante",
        "ref": "car_model",
        "refValue": "Mitsubishi",
        "refId": 150
    },
    {
        "id": 1776,
        "name": "Dolphin",
        "ref": "car_model",
        "refValue": "Byd",
        "refId": 119
    },
    {
        "id": 1608,
        "name": "Dolphin",
        "ref": "car_model",
        "refValue": "Byd",
        "refId": 119
    },
    {
        "id": 1664,
        "name": "Dolphin",
        "ref": "car_model",
        "refValue": "Byd",
        "refId": 119
    },
    {
        "id": 1720,
        "name": "Dolphin",
        "ref": "car_model",
        "refValue": "Byd",
        "refId": 119
    },
    {
        "id": 323,
        "name": "DS3",
        "ref": "car_model",
        "refValue": "Citroën",
        "refId": 126
    },
    {
        "id": 324,
        "name": "DS4",
        "ref": "car_model",
        "refValue": "Citroën",
        "refId": 126
    },
    {
        "id": 325,
        "name": "DS5",
        "ref": "car_model",
        "refValue": "Citroën",
        "refId": 126
    },
    {
        "id": 326,
        "name": "Duet",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 1358,
        "name": "EC 180",
        "ref": "car_model",
        "refValue": "Baic",
        "refId": 1354
    },
    {
        "id": 1359,
        "name": "EC 220",
        "ref": "car_model",
        "refValue": "Baic",
        "refId": 1354
    },
    {
        "id": 327,
        "name": "Echo",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 328,
        "name": "Eclipse",
        "ref": "car_model",
        "refValue": "Mitsubishi",
        "refId": 150
    },
    {
        "id": 329,
        "name": "Elantra",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 1403,
        "name": "El Camino",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 330,
        "name": "Eos",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 331,
        "name": "Epica",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 332,
        "name": "ES",
        "ref": "car_model",
        "refValue": "Lexus",
        "refId": 142
    },
    {
        "id": 1360,
        "name": "EU 260",
        "ref": "car_model",
        "refValue": "Baic",
        "refId": 1354
    },
    {
        "id": 333,
        "name": "Evolution",
        "ref": "car_model",
        "refValue": "Mitsubishi",
        "refId": 150
    },
    {
        "id": 334,
        "name": "F0",
        "ref": "car_model",
        "refValue": "Byd",
        "refId": 119
    },
    {
        "id": 335,
        "name": "F3",
        "ref": "car_model",
        "refValue": "Byd",
        "refId": 119
    },
    {
        "id": 336,
        "name": "F430",
        "ref": "car_model",
        "refValue": "Ferrari",
        "refId": 133
    },
    {
        "id": 337,
        "name": "F6",
        "ref": "car_model",
        "refValue": "Byd",
        "refId": 119
    },
    {
        "id": 338,
        "name": "Fabia",
        "ref": "car_model",
        "refValue": "Skoda",
        "refId": 162
    },
    {
        "id": 1405,
        "name": "Fiesta",
        "ref": "car_model",
        "refValue": "Ford",
        "refId": 135
    },
    {
        "id": 1406,
        "name": "Figo",
        "ref": "car_model",
        "refValue": "Ford",
        "refId": 135
    },
    {
        "id": 339,
        "name": "Firebird",
        "ref": "car_model",
        "refValue": "Pontiac",
        "refId": 156
    },
    {
        "id": 340,
        "name": "Fit",
        "ref": "car_model",
        "refValue": "Honda",
        "refId": 137
    },
    {
        "id": 341,
        "name": "Five Hundred",
        "ref": "car_model",
        "refValue": "Ford",
        "refId": 135
    },
    {
        "id": 342,
        "name": "Fluence",
        "ref": "car_model",
        "refValue": "Renault",
        "refId": 159
    },
    {
        "id": 343,
        "name": "Focus",
        "ref": "car_model",
        "refValue": "Ford",
        "refId": 135
    },
    {
        "id": 344,
        "name": "Forenza",
        "ref": "car_model",
        "refValue": "Suzuki",
        "refId": 165
    },
    {
        "id": 345,
        "name": "Forte",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 346,
        "name": "Fox",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 347,
        "name": "FRV",
        "ref": "car_model",
        "refValue": "Brilliance",
        "refId": 117
    },
    {
        "id": 348,
        "name": "FRV Cross",
        "ref": "car_model",
        "refValue": "Brilliance",
        "refId": 117
    },
    {
        "id": 349,
        "name": "FSV",
        "ref": "car_model",
        "refValue": "Brilliance",
        "refId": 117
    },
    {
        "id": 350,
        "name": "Fusion",
        "ref": "car_model",
        "refValue": "Ford",
        "refId": 135
    },
    {
        "id": 351,
        "name": "G-25",
        "ref": "car_model",
        "refValue": "Infiniti",
        "refId": 139
    },
    {
        "id": 352,
        "name": "G-35",
        "ref": "car_model",
        "refValue": "Infiniti",
        "refId": 139
    },
    {
        "id": 353,
        "name": "G-37",
        "ref": "car_model",
        "refValue": "Infiniti",
        "refId": 139
    },
    {
        "id": 354,
        "name": "G6",
        "ref": "car_model",
        "refValue": "Pontiac",
        "refId": 156
    },
    {
        "id": 355,
        "name": "Galant",
        "ref": "car_model",
        "refValue": "Mitsubishi",
        "refId": 150
    },
    {
        "id": 1421,
        "name": "Gazelle",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 356,
        "name": "Genesis",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 357,
        "name": "Getz",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 358,
        "name": "Giulietta",
        "ref": "car_model",
        "refValue": "Alfa Romeo",
        "refId": 113
    },
    {
        "id": 359,
        "name": "GLI",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 360,
        "name": "Golf",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 363,
        "name": "Grande Punto",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 364,
        "name": "Grandeur",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 1408,
        "name": "Grand I 10",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 361,
        "name": "Grand Marquis",
        "ref": "car_model",
        "refValue": "Ford",
        "refId": 135
    },
    {
        "id": 362,
        "name": "Grand Siena",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 365,
        "name": "Gransport",
        "ref": "car_model",
        "refValue": "Maserati",
        "refId": 144
    },
    {
        "id": 366,
        "name": "Granturismo",
        "ref": "car_model",
        "refValue": "Maserati",
        "refId": 144
    },
    {
        "id": 367,
        "name": "GS",
        "ref": "car_model",
        "refValue": "Lexus",
        "refId": 142
    },
    {
        "id": 368,
        "name": "GT California",
        "ref": "car_model",
        "refValue": "Ferrari",
        "refId": 133
    },
    {
        "id": 370,
        "name": "GTI",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 369,
        "name": "GT-R",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 371,
        "name": "H530",
        "ref": "car_model",
        "refValue": "Brilliance",
        "refId": 117
    },
    {
        "id": 1719,
        "name": "Han",
        "ref": "car_model",
        "refValue": "Byd",
        "refId": 119
    },
    {
        "id": 1607,
        "name": "Han",
        "ref": "car_model",
        "refValue": "Byd",
        "refId": 119
    },
    {
        "id": 1663,
        "name": "Han",
        "ref": "car_model",
        "refValue": "Byd",
        "refId": 119
    },
    {
        "id": 1775,
        "name": "Han",
        "ref": "car_model",
        "refValue": "Byd",
        "refId": 119
    },
    {
        "id": 372,
        "name": "Hard Top",
        "ref": "car_model",
        "refValue": "Mini",
        "refId": 149
    },
    {
        "id": 1749,
        "name": "Huracan",
        "ref": "car_model",
        "refValue": "Lamborghini",
        "refId": 1572
    },
    {
        "id": 1637,
        "name": "Huracan",
        "ref": "car_model",
        "refValue": "Lamborghini",
        "refId": 1572
    },
    {
        "id": 1581,
        "name": "Huracan",
        "ref": "car_model",
        "refValue": "Lamborghini",
        "refId": 1572
    },
    {
        "id": 1693,
        "name": "Huracan",
        "ref": "car_model",
        "refValue": "Lamborghini",
        "refId": 1572
    },
    {
        "id": 373,
        "name": "I.10",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 1398,
        "name": "i3",
        "ref": "car_model",
        "refValue": "Bmw",
        "refId": 116
    },
    {
        "id": 374,
        "name": "I.30",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 1399,
        "name": "i8",
        "ref": "car_model",
        "refValue": "Bmw",
        "refId": 116
    },
    {
        "id": 375,
        "name": "Ibiza",
        "ref": "car_model",
        "refValue": "Seat",
        "refId": 161
    },
    {
        "id": 376,
        "name": "Idea",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 377,
        "name": "Impala",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 378,
        "name": "Impreza",
        "ref": "car_model",
        "refValue": "Subaru",
        "refId": 164
    },
    {
        "id": 379,
        "name": "Insight",
        "ref": "car_model",
        "refValue": "Honda",
        "refId": 137
    },
    {
        "id": 381,
        "name": "Integra",
        "ref": "car_model",
        "refValue": "Honda",
        "refId": 137
    },
    {
        "id": 380,
        "name": "Integra",
        "ref": "car_model",
        "refValue": "Acura",
        "refId": 112
    },
    {
        "id": 382,
        "name": "Ion",
        "ref": "car_model",
        "refValue": "Saturn",
        "refId": 160
    },
    {
        "id": 1409,
        "name": "Ioniq",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 383,
        "name": "IS",
        "ref": "car_model",
        "refValue": "Lexus",
        "refId": 142
    },
    {
        "id": 384,
        "name": "Jetta",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 1412,
        "name": "K3",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 385,
        "name": "K-5",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 386,
        "name": "K-7",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 1570,
        "name": "K8",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 387,
        "name": "Kisachi",
        "ref": "car_model",
        "refValue": "Suzuki",
        "refId": 165
    },
    {
        "id": 388,
        "name": "Laguna",
        "ref": "car_model",
        "refValue": "Renault",
        "refId": 159
    },
    {
        "id": 389,
        "name": "Lancer",
        "ref": "car_model",
        "refValue": "Mitsubishi",
        "refId": 150
    },
    {
        "id": 390,
        "name": "Lanos",
        "ref": "car_model",
        "refValue": "Daewoo",
        "refId": 128
    },
    {
        "id": 1426,
        "name": "Latio",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 391,
        "name": "LE",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 1427,
        "name": "Leaf",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 392,
        "name": "Legacy",
        "ref": "car_model",
        "refValue": "Subaru",
        "refId": 164
    },
    {
        "id": 393,
        "name": "Legend",
        "ref": "car_model",
        "refValue": "Honda",
        "refId": 137
    },
    {
        "id": 394,
        "name": "Leon",
        "ref": "car_model",
        "refValue": "Seat",
        "refId": 161
    },
    {
        "id": 395,
        "name": "Linea",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 396,
        "name": "Logan",
        "ref": "car_model",
        "refValue": "Renault",
        "refId": 159
    },
    {
        "id": 397,
        "name": "Logo",
        "ref": "car_model",
        "refValue": "Honda",
        "refId": 137
    },
    {
        "id": 398,
        "name": "Lotze",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 399,
        "name": "LS",
        "ref": "car_model",
        "refValue": "Lexus",
        "refId": 142
    },
    {
        "id": 400,
        "name": "M-37",
        "ref": "car_model",
        "refValue": "Infiniti",
        "refId": 139
    },
    {
        "id": 402,
        "name": "M37S",
        "ref": "car_model",
        "refValue": "Infiniti",
        "refId": 139
    },
    {
        "id": 401,
        "name": "M3 Sport",
        "ref": "car_model",
        "refValue": "Brilliance",
        "refId": 117
    },
    {
        "id": 403,
        "name": "Magna",
        "ref": "car_model",
        "refValue": "Mitsubishi",
        "refId": 150
    },
    {
        "id": 404,
        "name": "Magnum",
        "ref": "car_model",
        "refValue": "Dodge",
        "refId": 131
    },
    {
        "id": 405,
        "name": "Malibu",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 406,
        "name": "March",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 407,
        "name": "Marea",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 408,
        "name": "Mark",
        "ref": "car_model",
        "refValue": "Lincoln",
        "refId": 143
    },
    {
        "id": 409,
        "name": "Materia",
        "ref": "car_model",
        "refValue": "Daihatsu",
        "refId": 129
    },
    {
        "id": 411,
        "name": "Matrix",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 410,
        "name": "Matrix",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 412,
        "name": "Matriz",
        "ref": "car_model",
        "refValue": "Daewoo",
        "refId": 128
    },
    {
        "id": 413,
        "name": "Maxima",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 414,
        "name": "Megane",
        "ref": "car_model",
        "refValue": "Renault",
        "refId": 159
    },
    {
        "id": 415,
        "name": "MG3",
        "ref": "car_model",
        "refValue": "Mg",
        "refId": 148
    },
    {
        "id": 416,
        "name": "MG350",
        "ref": "car_model",
        "refValue": "Mg",
        "refId": 148
    },
    {
        "id": 417,
        "name": "MG550",
        "ref": "car_model",
        "refValue": "Mg",
        "refId": 148
    },
    {
        "id": 418,
        "name": "MG6",
        "ref": "car_model",
        "refValue": "Mg",
        "refId": 148
    },
    {
        "id": 419,
        "name": "Milan",
        "ref": "car_model",
        "refValue": "Mercury",
        "refId": 147
    },
    {
        "id": 420,
        "name": "Mira",
        "ref": "car_model",
        "refValue": "Daihatsu",
        "refId": 129
    },
    {
        "id": 421,
        "name": "Mirage",
        "ref": "car_model",
        "refValue": "Mitsubishi",
        "refId": 150
    },
    {
        "id": 422,
        "name": "Mito",
        "ref": "car_model",
        "refValue": "Alfa Romeo",
        "refId": 113
    },
    {
        "id": 424,
        "name": "MKS",
        "ref": "car_model",
        "refValue": "Lincoln",
        "refId": 143
    },
    {
        "id": 423,
        "name": "MK VI",
        "ref": "car_model",
        "refValue": "Bentley",
        "refId": 115
    },
    {
        "id": 425,
        "name": "MKZ",
        "ref": "car_model",
        "refValue": "Lincoln",
        "refId": 143
    },
    {
        "id": 1428,
        "name": "Moco",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 1304,
        "name": "Model 3",
        "ref": "car_model",
        "refValue": "Tesla",
        "refId": 1300
    },
    {
        "id": 1305,
        "name": "Model S",
        "ref": "car_model",
        "refValue": "Tesla",
        "refId": 1300
    },
    {
        "id": 1306,
        "name": "Model Y",
        "ref": "car_model",
        "refValue": "Tesla",
        "refId": 1300
    },
    {
        "id": 426,
        "name": "Mondeo",
        "ref": "car_model",
        "refValue": "Ford",
        "refId": 135
    },
    {
        "id": 1413,
        "name": "Morning",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 427,
        "name": "Move",
        "ref": "car_model",
        "refValue": "Daihatsu",
        "refId": 129
    },
    {
        "id": 428,
        "name": "MR2",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 429,
        "name": "Mustang",
        "ref": "car_model",
        "refValue": "Ford",
        "refId": 135
    },
    {
        "id": 430,
        "name": "MX-5",
        "ref": "car_model",
        "refValue": "Mazda",
        "refId": 145
    },
    {
        "id": 431,
        "name": "N-260",
        "ref": "car_model",
        "refValue": "Datsun",
        "refId": 130
    },
    {
        "id": 432,
        "name": "Note",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 433,
        "name": "Nubira",
        "ref": "car_model",
        "refValue": "Daewoo",
        "refId": 128
    },
    {
        "id": 434,
        "name": "Octavia",
        "ref": "car_model",
        "refValue": "Skoda",
        "refId": 162
    },
    {
        "id": 435,
        "name": "Opirus",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 436,
        "name": "Optima",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 437,
        "name": "Optra",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 438,
        "name": "Oriental Son",
        "ref": "car_model",
        "refValue": "Chery",
        "refId": 123
    },
    {
        "id": 476,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 439,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Acura",
        "refId": 112
    },
    {
        "id": 440,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Alfa Romeo",
        "refId": 113
    },
    {
        "id": 441,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Audi",
        "refId": 114
    },
    {
        "id": 442,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Bentley",
        "refId": 115
    },
    {
        "id": 443,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Bmw",
        "refId": 116
    },
    {
        "id": 444,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Brilliance",
        "refId": 117
    },
    {
        "id": 445,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Buick",
        "refId": 118
    },
    {
        "id": 446,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Byd",
        "refId": 119
    },
    {
        "id": 447,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Cadillac",
        "refId": 120
    },
    {
        "id": 448,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Chana",
        "refId": 121
    },
    {
        "id": 449,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Changan",
        "refId": 122
    },
    {
        "id": 450,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Chery",
        "refId": 123
    },
    {
        "id": 451,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 452,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Chrysler",
        "refId": 125
    },
    {
        "id": 453,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Citroën",
        "refId": 126
    },
    {
        "id": 454,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Corvette",
        "refId": 127
    },
    {
        "id": 455,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Daewoo",
        "refId": 128
    },
    {
        "id": 456,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Daihatsu",
        "refId": 129
    },
    {
        "id": 457,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Datsun",
        "refId": 130
    },
    {
        "id": 458,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Dodge",
        "refId": 131
    },
    {
        "id": 459,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Dongfeng",
        "refId": 132
    },
    {
        "id": 460,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Ferrari",
        "refId": 133
    },
    {
        "id": 461,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 462,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Ford",
        "refId": 135
    },
    {
        "id": 463,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Foton",
        "refId": 136
    },
    {
        "id": 464,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Honda",
        "refId": 137
    },
    {
        "id": 465,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 466,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Jaguar",
        "refId": 140
    },
    {
        "id": 467,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 468,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Lexus",
        "refId": 142
    },
    {
        "id": 469,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Lincoln",
        "refId": 143
    },
    {
        "id": 470,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Maserati",
        "refId": 144
    },
    {
        "id": 471,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Mazda",
        "refId": 145
    },
    {
        "id": 472,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 473,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Mg",
        "refId": 148
    },
    {
        "id": 474,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Mini",
        "refId": 149
    },
    {
        "id": 475,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Mitsubishi",
        "refId": 150
    },
    {
        "id": 477,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Oldsmobile",
        "refId": 152
    },
    {
        "id": 478,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Peugeot",
        "refId": 154
    },
    {
        "id": 479,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Plymouth",
        "refId": 155
    },
    {
        "id": 480,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Pontiac",
        "refId": 156
    },
    {
        "id": 481,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Porsche",
        "refId": 157
    },
    {
        "id": 482,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Proton",
        "refId": 158
    },
    {
        "id": 483,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Renault",
        "refId": 159
    },
    {
        "id": 484,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Saturn",
        "refId": 160
    },
    {
        "id": 485,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Seat",
        "refId": 161
    },
    {
        "id": 486,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Skoda",
        "refId": 162
    },
    {
        "id": 487,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Smart",
        "refId": 163
    },
    {
        "id": 488,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Subaru",
        "refId": 164
    },
    {
        "id": 489,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Suzuki",
        "refId": 165
    },
    {
        "id": 490,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Tianma",
        "refId": 166
    },
    {
        "id": 491,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 492,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 493,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Volvo",
        "refId": 169
    },
    {
        "id": 1556,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Baic",
        "refId": 1354
    },
    {
        "id": 1557,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Infiniti",
        "refId": 139
    },
    {
        "id": 1558,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Mercury",
        "refId": 147
    },
    {
        "id": 1559,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Tesla",
        "refId": 1300
    },
    {
        "id": 1582,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Lamborghini",
        "refId": 1572
    },
    {
        "id": 1638,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Lamborghini",
        "refId": 1572
    },
    {
        "id": 1694,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Lamborghini",
        "refId": 1572
    },
    {
        "id": 1750,
        "name": "Otro",
        "ref": "car_model",
        "refValue": "Lamborghini",
        "refId": 1572
    },
    {
        "id": 494,
        "name": "Otros",
        "ref": "car_model",
        "refValue": "Otra",
        "refId": 153
    },
    {
        "id": 495,
        "name": "Palio",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 496,
        "name": "Panamera",
        "ref": "car_model",
        "refValue": "Porsche",
        "refId": 157
    },
    {
        "id": 497,
        "name": "Panda",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 498,
        "name": "Parati",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 499,
        "name": "Passat",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 500,
        "name": "Passion",
        "ref": "car_model",
        "refValue": "Smart",
        "refId": 163
    },
    {
        "id": 501,
        "name": "Passo",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 502,
        "name": "Phaeton",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 503,
        "name": "Picanto",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 1431,
        "name": "Pixis",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 504,
        "name": "Platina",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 505,
        "name": "Platz",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 506,
        "name": "Polo",
        "ref": "car_model",
        "refValue": "Volkswagen",
        "refId": 168
    },
    {
        "id": 507,
        "name": "Primera",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 508,
        "name": "Prius",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 509,
        "name": "Proton",
        "ref": "car_model",
        "refValue": "Mitsubishi",
        "refId": 150
    },
    {
        "id": 510,
        "name": "Punto",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 511,
        "name": "Q-50",
        "ref": "car_model",
        "refValue": "Infiniti",
        "refId": 139
    },
    {
        "id": 512,
        "name": "Q-70S",
        "ref": "car_model",
        "refValue": "Infiniti",
        "refId": 139
    },
    {
        "id": 513,
        "name": "QQ",
        "ref": "car_model",
        "refValue": "Chery",
        "refId": 123
    },
    {
        "id": 514,
        "name": "Quattroporte",
        "ref": "car_model",
        "refValue": "Maserati",
        "refId": 144
    },
    {
        "id": 515,
        "name": "R8",
        "ref": "car_model",
        "refValue": "Audi",
        "refId": 114
    },
    {
        "id": 516,
        "name": "Ractis",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 517,
        "name": "Rapid",
        "ref": "car_model",
        "refValue": "Skoda",
        "refId": 162
    },
    {
        "id": 1414,
        "name": "Ray",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 1417,
        "name": "RC F",
        "ref": "car_model",
        "refValue": "Lexus",
        "refId": 142
    },
    {
        "id": 518,
        "name": "RCZ",
        "ref": "car_model",
        "refValue": "Peugeot",
        "refId": 154
    },
    {
        "id": 519,
        "name": "Reno",
        "ref": "car_model",
        "refValue": "Suzuki",
        "refId": 165
    },
    {
        "id": 520,
        "name": "Rio",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 521,
        "name": "Rl",
        "ref": "car_model",
        "refValue": "Acura",
        "refId": 112
    },
    {
        "id": 1307,
        "name": "Roadster",
        "ref": "car_model",
        "refValue": "Tesla",
        "refId": 1300
    },
    {
        "id": 522,
        "name": "Roadster",
        "ref": "car_model",
        "refValue": "Mini",
        "refId": 149
    },
    {
        "id": 523,
        "name": "RX-7",
        "ref": "car_model",
        "refValue": "Mazda",
        "refId": 145
    },
    {
        "id": 524,
        "name": "RX-8",
        "ref": "car_model",
        "refValue": "Mazda",
        "refId": 145
    },
    {
        "id": 526,
        "name": "S2000",
        "ref": "car_model",
        "refValue": "Honda",
        "refId": 137
    },
    {
        "id": 527,
        "name": "S40",
        "ref": "car_model",
        "refValue": "Volvo",
        "refId": 169
    },
    {
        "id": 528,
        "name": "S6",
        "ref": "car_model",
        "refValue": "Audi",
        "refId": 114
    },
    {
        "id": 529,
        "name": "S60",
        "ref": "car_model",
        "refValue": "Volvo",
        "refId": 169
    },
    {
        "id": 530,
        "name": "S7",
        "ref": "car_model",
        "refValue": "Audi",
        "refId": 114
    },
    {
        "id": 531,
        "name": "S8",
        "ref": "car_model",
        "refValue": "Audi",
        "refId": 114
    },
    {
        "id": 532,
        "name": "S80",
        "ref": "car_model",
        "refValue": "Volvo",
        "refId": 169
    },
    {
        "id": 533,
        "name": "Satria",
        "ref": "car_model",
        "refValue": "Proton",
        "refId": 158
    },
    {
        "id": 534,
        "name": "Saxo",
        "ref": "car_model",
        "refValue": "Citroën",
        "refId": 126
    },
    {
        "id": 535,
        "name": "SC",
        "ref": "car_model",
        "refValue": "Lexus",
        "refId": 142
    },
    {
        "id": 536,
        "name": "Scion",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 537,
        "name": "Sebring",
        "ref": "car_model",
        "refValue": "Chrysler",
        "refId": 125
    },
    {
        "id": 1422,
        "name": "SEC",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 1423,
        "name": "SEL",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 538,
        "name": "Sentra",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 539,
        "name": "Sephia",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 540,
        "name": "Serie 1",
        "ref": "car_model",
        "refValue": "Bmw",
        "refId": 116
    },
    {
        "id": 541,
        "name": "Serie 3",
        "ref": "car_model",
        "refValue": "Bmw",
        "refId": 116
    },
    {
        "id": 1400,
        "name": "Serie 4",
        "ref": "car_model",
        "refValue": "Bmw",
        "refId": 116
    },
    {
        "id": 542,
        "name": "Serie 5",
        "ref": "car_model",
        "refValue": "Bmw",
        "refId": 116
    },
    {
        "id": 543,
        "name": "Serie 6",
        "ref": "car_model",
        "refValue": "Bmw",
        "refId": 116
    },
    {
        "id": 544,
        "name": "Serie 7",
        "ref": "car_model",
        "refValue": "Bmw",
        "refId": 116
    },
    {
        "id": 545,
        "name": "Serie M",
        "ref": "car_model",
        "refValue": "Bmw",
        "refId": 116
    },
    {
        "id": 546,
        "name": "Serie Z",
        "ref": "car_model",
        "refValue": "Bmw",
        "refId": 116
    },
    {
        "id": 547,
        "name": "Seville",
        "ref": "car_model",
        "refValue": "Cadillac",
        "refId": 120
    },
    {
        "id": 548,
        "name": "Shuma",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 549,
        "name": "Siena",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 550,
        "name": "Sirion",
        "ref": "car_model",
        "refValue": "Daihatsu",
        "refId": 129
    },
    {
        "id": 551,
        "name": "Sky",
        "ref": "car_model",
        "refValue": "Saturn",
        "refId": 160
    },
    {
        "id": 552,
        "name": "Skyline",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 553,
        "name": "SM3",
        "ref": "car_model",
        "refValue": "Renault",
        "refId": 159
    },
    {
        "id": 1571,
        "name": "SM5",
        "ref": "car_model",
        "refValue": "Renault",
        "refId": 159
    },
    {
        "id": 1424,
        "name": "Smart",
        "ref": "car_model",
        "refValue": "Mercedes",
        "refId": 146
    },
    {
        "id": 554,
        "name": "Solara",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 555,
        "name": "Solstice",
        "ref": "car_model",
        "refValue": "Pontiac",
        "refId": 156
    },
    {
        "id": 1415,
        "name": "Soluto",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 556,
        "name": "Sonata",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 557,
        "name": "Sonic",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 558,
        "name": "Spark",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 559,
        "name": "Special",
        "ref": "car_model",
        "refValue": "Buick",
        "refId": 118
    },
    {
        "id": 560,
        "name": "Spectra",
        "ref": "car_model",
        "refValue": "Kia",
        "refId": 141
    },
    {
        "id": 561,
        "name": "Spider",
        "ref": "car_model",
        "refValue": "Ferrari",
        "refId": 133
    },
    {
        "id": 562,
        "name": "Splash",
        "ref": "car_model",
        "refValue": "Suzuki",
        "refId": 165
    },
    {
        "id": 1404,
        "name": "SSR",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 563,
        "name": "Starfire",
        "ref": "car_model",
        "refValue": "Pontiac",
        "refId": 156
    },
    {
        "id": 564,
        "name": "Starlet",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 565,
        "name": "Stilo",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 566,
        "name": "Stingray",
        "ref": "car_model",
        "refValue": "Corvette",
        "refId": 127
    },
    {
        "id": 567,
        "name": "Storia",
        "ref": "car_model",
        "refValue": "Daihatsu",
        "refId": 129
    },
    {
        "id": 568,
        "name": "Stratus",
        "ref": "car_model",
        "refValue": "Dodge",
        "refId": 131
    },
    {
        "id": 569,
        "name": "STS",
        "ref": "car_model",
        "refValue": "Cadillac",
        "refId": 120
    },
    {
        "id": 525,
        "name": "S Type",
        "ref": "car_model",
        "refValue": "Jaguar",
        "refId": 140
    },
    {
        "id": 570,
        "name": "Sunny",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 571,
        "name": "Superb",
        "ref": "car_model",
        "refValue": "Skoda",
        "refId": 162
    },
    {
        "id": 572,
        "name": "Supra",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 573,
        "name": "Swift",
        "ref": "car_model",
        "refValue": "Suzuki",
        "refId": 165
    },
    {
        "id": 574,
        "name": "Swing",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 575,
        "name": "SX4 Hatchback",
        "ref": "car_model",
        "refValue": "Suzuki",
        "refId": 165
    },
    {
        "id": 576,
        "name": "SX4 Sedan",
        "ref": "car_model",
        "refValue": "Suzuki",
        "refId": 165
    },
    {
        "id": 577,
        "name": "Taurus",
        "ref": "car_model",
        "refValue": "Ford",
        "refId": 135
    },
    {
        "id": 578,
        "name": "Teana",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 579,
        "name": "Tiburón",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 580,
        "name": "Tiida",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 581,
        "name": "Tl",
        "ref": "car_model",
        "refValue": "Acura",
        "refId": 112
    },
    {
        "id": 582,
        "name": "Toledo",
        "ref": "car_model",
        "refValue": "Seat",
        "refId": 161
    },
    {
        "id": 583,
        "name": "Town Car",
        "ref": "car_model",
        "refValue": "Lincoln",
        "refId": 143
    },
    {
        "id": 584,
        "name": "TSX",
        "ref": "car_model",
        "refValue": "Acura",
        "refId": 112
    },
    {
        "id": 585,
        "name": "TT",
        "ref": "car_model",
        "refValue": "Audi",
        "refId": 114
    },
    {
        "id": 586,
        "name": "Uno",
        "ref": "car_model",
        "refValue": "Fiat",
        "refId": 134
    },
    {
        "id": 587,
        "name": "V40",
        "ref": "car_model",
        "refValue": "Volvo",
        "refId": 169
    },
    {
        "id": 588,
        "name": "V50",
        "ref": "car_model",
        "refValue": "Volvo",
        "refId": 169
    },
    {
        "id": 589,
        "name": "V70",
        "ref": "car_model",
        "refValue": "Volvo",
        "refId": 169
    },
    {
        "id": 590,
        "name": "Valiant",
        "ref": "car_model",
        "refValue": "Plymouth",
        "refId": 155
    },
    {
        "id": 591,
        "name": "Vectra",
        "ref": "car_model",
        "refValue": "Chevrolet",
        "refId": 124
    },
    {
        "id": 1555,
        "name": "Veloster",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 1410,
        "name": "Venue",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 592,
        "name": "Verisa",
        "ref": "car_model",
        "refValue": "Mazda",
        "refId": 145
    },
    {
        "id": 1411,
        "name": "Verna",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 593,
        "name": "Versa",
        "ref": "car_model",
        "refValue": "Nissan",
        "refId": 151
    },
    {
        "id": 594,
        "name": "Vitz",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 595,
        "name": "Windcloud",
        "ref": "car_model",
        "refValue": "Chery",
        "refId": 123
    },
    {
        "id": 597,
        "name": "XF",
        "ref": "car_model",
        "refValue": "Jaguar",
        "refId": 140
    },
    {
        "id": 598,
        "name": "XG",
        "ref": "car_model",
        "refValue": "Hyundai",
        "refId": 138
    },
    {
        "id": 599,
        "name": "XJ",
        "ref": "car_model",
        "refValue": "Jaguar",
        "refId": 140
    },
    {
        "id": 600,
        "name": "XK",
        "ref": "car_model",
        "refValue": "Jaguar",
        "refId": 140
    },
    {
        "id": 601,
        "name": "XLR",
        "ref": "car_model",
        "refValue": "Cadillac",
        "refId": 120
    },
    {
        "id": 602,
        "name": "Xsara",
        "ref": "car_model",
        "refValue": "Citroën",
        "refId": 126
    },
    {
        "id": 596,
        "name": "X Type",
        "ref": "car_model",
        "refValue": "Jaguar",
        "refId": 140
    },
    {
        "id": 603,
        "name": "Yaris",
        "ref": "car_model",
        "refValue": "Toyota",
        "refId": 167
    },
    {
        "id": 604,
        "name": "Yrv",
        "ref": "car_model",
        "refValue": "Daihatsu",
        "refId": 129
    },
    {
        "id": 605,
        "name": "ZDX",
        "ref": "car_model",
        "refValue": "Acura",
        "refId": 112
    },
    {
        "id": "car_year",
        "name": "Año",
        "required": true,
        "options": [],
        "type": "Number"
    },
    {
        "id": "car_type",
        "name": "Tipo",
        "required": true,
        "options": [
            {
                "id": 59,
                "name": "Convertible"
            },
            {
                "id": 60,
                "name": "Coupe"
            },
            {
                "id": 62,
                "name": "Hatchback"
            },
            {
                "id": 65,
                "name": "Sedán (4 puertas)"
            }
        ],
        "type": "Select"
    },
    {
        "id": "suv_truck_brand",
        "name": "Marca",
        "required": true,
        "options": [
            {
                "id": 606,
                "name": "Acura"
            },
            {
                "id": 607,
                "name": "Alfa Romeo"
            },
            {
                "id": 608,
                "name": "Audi"
            },
            {
                "id": 1355,
                "name": "Baic"
            },
            {
                "id": 609,
                "name": "Bentley"
            },
            {
                "id": 1575,
                "name": "Bestune"
            },
            {
                "id": 610,
                "name": "BMW"
            },
            {
                "id": 611,
                "name": "Brilliance"
            },
            {
                "id": 612,
                "name": "Buick"
            },
            {
                "id": 613,
                "name": "BYD"
            },
            {
                "id": 614,
                "name": "Cadillac"
            },
            {
                "id": 615,
                "name": "Chana"
            },
            {
                "id": 616,
                "name": "Changan"
            },
            {
                "id": 617,
                "name": "Changfeng"
            },
            {
                "id": 618,
                "name": "Changhe"
            },
            {
                "id": 619,
                "name": "Chery"
            },
            {
                "id": 620,
                "name": "Chevrolet"
            },
            {
                "id": 621,
                "name": "Chrysler"
            },
            {
                "id": 622,
                "name": "Citroën"
            },
            {
                "id": 623,
                "name": "Corvette"
            },
            {
                "id": 624,
                "name": "Daewoo"
            },
            {
                "id": 625,
                "name": "Daihatsu"
            },
            {
                "id": 626,
                "name": "Datsun"
            },
            {
                "id": 627,
                "name": "Dodge"
            },
            {
                "id": 628,
                "name": "Dongfeng"
            },
            {
                "id": 629,
                "name": "\n    Fiat"
            },
            {
                "id": 630,
                "name": "Ford"
            },
            {
                "id": 631,
                "name": "Foton"
            },
            {
                "id": 1574,
                "name": "GAC"
            },
            {
                "id": 1742,
                "name": "GAC"
            },
            {
                "id": 1686,
                "name": "GAC"
            },
            {
                "id": 1630,
                "name": "GAC"
            },
            {
                "id": 632,
                "name": "Gmc"
            },
            {
                "id": 1745,
                "name": "Haval"
            },
            {
                "id": 1689,
                "name": "Haval"
            },
            {
                "id": 1577,
                "name": "Haval"
            },
            {
                "id": 1633,
                "name": "Haval"
            },
            {
                "id": 633,
                "name": "Honda"
            },
            {
                "id": 634,
                "name": "Huanghai"
            },
            {
                "id": 635,
                "name": "Hummer"
            },
            {
                "id": 636,
                "name": "Hyundai"
            },
            {
                "id": 637,
                "name": "Infiniti"
            },
            {
                "id": 638,
                "name": "Isuzu"
            },
            {
                "id": 639,
                "name": "Jac"
            },
            {
                "id": 640,
                "name": "Jaguar"
            },
            {
                "id": 641,
                "name": "Jeep"
            },
            {
                "id": 1747,
                "name": "Jetour"
            },
            {
                "id": 1579,
                "name": "Jetour"
            },
            {
                "id": 1635,
                "name": "Jetour"
            },
            {
                "id": 1691,
                "name": "Jetour"
            },
            {
                "id": 642,
                "name": "Jinbei"
            },
            {
                "id": 643,
                "name": "Kia"
            },
            {
                "id": 1685,
                "name": "Lamborghini"
            },
            {
                "id": 1573,
                "name": "Lamborghini"
            },
            {
                "id": 1741,
                "name": "Lamborghini"
            },
            {
                "id": 1629,
                "name": "Lamborghini"
            },
            {
                "id": 644,
                "name": "Land Rover"
            },
            {
                "id": 645,
                "name": "Lexus"
            },
            {
                "id": 646,
                "name": "Lincoln"
            },
            {
                "id": 647,
                "name": "Luxgen"
            },
            {
                "id": 648,
                "name": "Maserati"
            },
            {
                "id": 1356,
                "name": "Maxus"
            },
            {
                "id": 649,
                "name": "Mazda"
            },
            {
                "id": 650,
                "name": "Mercedes"
            },
            {
                "id": 651,
                "name": "Mercury"
            },
            {
                "id": 652,
                "name": "MG"
            },
            {
                "id": 653,
                "name": "Mitsubishi"
            },
            {
                "id": 654,
                "name": "Nissan"
            },
            {
                "id": 655,
                "name": "Oldsmobile"
            },
            {
                "id": 656,
                "name": "Opel"
            },
            {
                "id": 657,
                "name": "Otra"
            },
            {
                "id": 658,
                "name": "Peugeot"
            },
            {
                "id": 659,
                "name": "Plymouth"
            },
            {
                "id": 660,
                "name": "Pontiac"
            },
            {
                "id": 661,
                "name": "Porsche"
            },
            {
                "id": 662,
                "name": "Proton"
            },
            {
                "id": 663,
                "name": "Renault"
            },
            {
                "id": 664,
                "name": "Saturn"
            },
            {
                "id": 665,
                "name": "Seat"
            },
            {
                "id": 666,
                "name": "Skoda"
            },
            {
                "id": 667,
                "name": "Smart"
            },
            {
                "id": 668,
                "name": "Ssangyong"
            },
            {
                "id": 669,
                "name": "Subaru"
            },
            {
                "id": 670,
                "name": "Suzuki"
            },
            {
                "id": 1690,
                "name": "SWM"
            },
            {
                "id": 1746,
                "name": "SWM"
            },
            {
                "id": 1634,
                "name": "SWM"
            },
            {
                "id": 1578,
                "name": "SWM"
            },
            {
                "id": 1301,
                "name": "Tesla"
            },
            {
                "id": 671,
                "name": "Tianma"
            },
            {
                "id": 672,
                "name": "Toyota"
            },
            {
                "id": 673,
                "name": "Volkswagen"
            },
            {
                "id": 674,
                "name": "Volvo"
            },
            {
                "id": 1576,
                "name": "ZXAUTO"
            },
            {
                "id": 1744,
                "name": "ZXAUTO"
            },
            {
                "id": 1688,
                "name": "ZXAUTO"
            },
            {
                "id": 1632,
                "name": "ZXAUTO"
            }
        ],
        "type": "Select"
    },
    {
        "id": "suv_truck_model",
        "required": true,
        "name": "Modelo",
        "dependOf": "suv_truck_brand",
        "options": [],
        "type": "Select"
    },
    {
        "id": 675,
        "name": "3008",
        "ref": "suv_truck_model",
        "refValue": "Peugeot",
        "refId": 658
    },
    {
        "id": 1441,
        "name": "4500",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 676,
        "name": "4 Runner",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 677,
        "name": "Acadia",
        "ref": "suv_truck_model",
        "refValue": "Gmc",
        "refId": 632
    },
    {
        "id": 678,
        "name": "Actyon",
        "ref": "suv_truck_model",
        "refValue": "Ssangyong",
        "refId": 668
    },
    {
        "id": 679,
        "name": "Amarok",
        "ref": "suv_truck_model",
        "refValue": "Volkswagen",
        "refId": 673
    },
    {
        "id": 680,
        "name": "Apv",
        "ref": "suv_truck_model",
        "refValue": "Suzuki",
        "refId": 670
    },
    {
        "id": 1473,
        "name": "Armada",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 681,
        "name": "Asx",
        "ref": "suv_truck_model",
        "refValue": "Mitsubishi",
        "refId": 653
    },
    {
        "id": 1666,
        "name": "Atto3 I Yuan Plus",
        "ref": "suv_truck_model",
        "refValue": "Byd",
        "refId": 613
    },
    {
        "id": 1778,
        "name": "Atto3 I Yuan Plus",
        "ref": "suv_truck_model",
        "refValue": "Byd",
        "refId": 613
    },
    {
        "id": 1722,
        "name": "Atto3 I Yuan Plus",
        "ref": "suv_truck_model",
        "refValue": "Byd",
        "refId": 613
    },
    {
        "id": 1610,
        "name": "Atto3 I Yuan Plus",
        "ref": "suv_truck_model",
        "refValue": "Byd",
        "refId": 613
    },
    {
        "id": 682,
        "name": "Aurora",
        "ref": "suv_truck_model",
        "refValue": "Huanghai",
        "refId": 634
    },
    {
        "id": 683,
        "name": "Avalanche",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 1736,
        "name": "AX7",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1624,
        "name": "AX7",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1792,
        "name": "AX7",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1680,
        "name": "AX7",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 684,
        "name": "Axiom",
        "ref": "suv_truck_model",
        "refValue": "Isuzu",
        "refId": 638
    },
    {
        "id": 685,
        "name": "B2000",
        "ref": "suv_truck_model",
        "refValue": "Mazda",
        "refId": 649
    },
    {
        "id": 686,
        "name": "B2200",
        "ref": "suv_truck_model",
        "refValue": "Mazda",
        "refId": 649
    },
    {
        "id": 687,
        "name": "B2500",
        "ref": "suv_truck_model",
        "refValue": "Mazda",
        "refId": 649
    },
    {
        "id": 688,
        "name": "B2900",
        "ref": "suv_truck_model",
        "refValue": "Mazda",
        "refId": 649
    },
    {
        "id": 1646,
        "name": "B70S",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1590,
        "name": "B70S",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1702,
        "name": "B70S",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1758,
        "name": "B70S",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 689,
        "name": "Berlingo",
        "ref": "suv_truck_model",
        "refValue": "Citroën",
        "refId": 622
    },
    {
        "id": 690,
        "name": "Berlingo Furgoneta",
        "ref": "suv_truck_model",
        "refValue": "Citroën",
        "refId": 622
    },
    {
        "id": 691,
        "name": "Berlingo Pasajero",
        "ref": "suv_truck_model",
        "refValue": "Citroën",
        "refId": 622
    },
    {
        "id": 1366,
        "name": "BJ20",
        "ref": "suv_truck_model",
        "refValue": "Baic",
        "refId": 1355
    },
    {
        "id": 1365,
        "name": "BJ40",
        "ref": "suv_truck_model",
        "refValue": "Baic",
        "refId": 1355
    },
    {
        "id": 692,
        "name": "Blazer",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 693,
        "name": "Bongo",
        "ref": "suv_truck_model",
        "refValue": "Kia",
        "refId": 643
    },
    {
        "id": 694,
        "name": "Borrego",
        "ref": "suv_truck_model",
        "refValue": "Kia",
        "refId": 643
    },
    {
        "id": 695,
        "name": "Bronco",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 696,
        "name": "Bt-50",
        "ref": "suv_truck_model",
        "refValue": "Mazda",
        "refId": 649
    },
    {
        "id": 697,
        "name": "C 15",
        "ref": "suv_truck_model",
        "refValue": "Citroën",
        "refId": 622
    },
    {
        "id": 698,
        "name": "Caliber",
        "ref": "suv_truck_model",
        "refValue": "Dodge",
        "refId": 627
    },
    {
        "id": 699,
        "name": "Camioneta",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1447,
        "name": "Cantus",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 700,
        "name": "Canyon",
        "ref": "suv_truck_model",
        "refValue": "Gmc",
        "refId": 632
    },
    {
        "id": 701,
        "name": "Captiva",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 703,
        "name": "Caravan",
        "ref": "suv_truck_model",
        "refValue": "Dodge",
        "refId": 627
    },
    {
        "id": 704,
        "name": "Caravan",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 702,
        "name": "Caravan",
        "ref": "suv_truck_model",
        "refValue": "Chrysler",
        "refId": 621
    },
    {
        "id": 1723,
        "name": "Cargo Box",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1611,
        "name": "Cargo Box",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1667,
        "name": "Cargo Box",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1779,
        "name": "Cargo Box",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 705,
        "name": "Cargo Van",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 706,
        "name": "Carnival",
        "ref": "suv_truck_model",
        "refValue": "Kia",
        "refId": 643
    },
    {
        "id": 707,
        "name": "Cayenne",
        "ref": "suv_truck_model",
        "refValue": "Porsche",
        "refId": 661
    },
    {
        "id": 708,
        "name": "Ch6390E",
        "ref": "suv_truck_model",
        "refValue": "Changhe",
        "refId": 618
    },
    {
        "id": 709,
        "name": "Chariot",
        "ref": "suv_truck_model",
        "refValue": "Mitsubishi",
        "refId": 653
    },
    {
        "id": 710,
        "name": "Cherokee",
        "ref": "suv_truck_model",
        "refValue": "Jeep",
        "refId": 641
    },
    {
        "id": 1479,
        "name": "C-HR",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 1442,
        "name": "City Express",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 1464,
        "name": "Clase G",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 711,
        "name": "Clase Gl",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 1465,
        "name": "Clase GLA",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 1466,
        "name": "Clase GLB",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 1467,
        "name": "Clase GLC",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 1468,
        "name": "Clase GLE",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 712,
        "name": "Clase Glk",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 1469,
        "name": "Clase GLS",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 713,
        "name": "Clase Ml",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 1470,
        "name": "Clase R",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 1471,
        "name": "Clase V",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 714,
        "name": "Cmp",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 715,
        "name": "Cmv",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 716,
        "name": "Colorado",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 717,
        "name": "Combo",
        "ref": "suv_truck_model",
        "refValue": "Opel",
        "refId": 656
    },
    {
        "id": 718,
        "name": "Commander",
        "ref": "suv_truck_model",
        "refValue": "Jeep",
        "refId": 641
    },
    {
        "id": 719,
        "name": "Compass",
        "ref": "suv_truck_model",
        "refValue": "Jeep",
        "refId": 641
    },
    {
        "id": 1480,
        "name": "Corolla Cross",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 720,
        "name": "Crossfox",
        "ref": "suv_truck_model",
        "refValue": "Volkswagen",
        "refId": 673
    },
    {
        "id": 721,
        "name": "Crosspolo",
        "ref": "suv_truck_model",
        "refValue": "Volkswagen",
        "refId": 673
    },
    {
        "id": 722,
        "name": "Crv",
        "ref": "suv_truck_model",
        "refValue": "Honda",
        "refId": 633
    },
    {
        "id": 1724,
        "name": "CS 15",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1612,
        "name": "CS 15",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1780,
        "name": "CS 15",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1668,
        "name": "CS 15",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1669,
        "name": "CS 35",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1725,
        "name": "CS 35",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1613,
        "name": "CS 35",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1781,
        "name": "CS 35",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1614,
        "name": "CS 55",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1670,
        "name": "CS 55",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1726,
        "name": "CS 55",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1782,
        "name": "CS 55",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1727,
        "name": "CS 75",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1783,
        "name": "CS 75",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1671,
        "name": "CS 75",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1615,
        "name": "CS 75",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1728,
        "name": "CS 85",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1672,
        "name": "CS 85",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1616,
        "name": "CS 85",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1784,
        "name": "CS 85",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1462,
        "name": "CX-3",
        "ref": "suv_truck_model",
        "refValue": "Mazda",
        "refId": 649
    },
    {
        "id": 1463,
        "name": "CX-30",
        "ref": "suv_truck_model",
        "refValue": "Mazda",
        "refId": 649
    },
    {
        "id": 723,
        "name": "Cx-5",
        "ref": "suv_truck_model",
        "refValue": "Mazda",
        "refId": 649
    },
    {
        "id": 724,
        "name": "Cx-7",
        "ref": "suv_truck_model",
        "refValue": "Mazda",
        "refId": 649
    },
    {
        "id": 725,
        "name": "Cx-9",
        "ref": "suv_truck_model",
        "refValue": "Mazda",
        "refId": 649
    },
    {
        "id": 1303,
        "name": "Cybertruck",
        "ref": "suv_truck_model",
        "refValue": "Tesla",
        "refId": 1301
    },
    {
        "id": 726,
        "name": "D21",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 727,
        "name": "D22",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 1378,
        "name": "D60",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1379,
        "name": "D90",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 728,
        "name": "Dakota",
        "ref": "suv_truck_model",
        "refValue": "Dodge",
        "refId": 627
    },
    {
        "id": 729,
        "name": "Damas",
        "ref": "suv_truck_model",
        "refValue": "Daewoo",
        "refId": 624
    },
    {
        "id": 1443,
        "name": "DAMAS",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 1659,
        "name": "Dashing",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 1771,
        "name": "Dashing",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 1715,
        "name": "Dashing",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 1603,
        "name": "Dashing",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 730,
        "name": "Defender",
        "ref": "suv_truck_model",
        "refValue": "Land Rover",
        "refId": 644
    },
    {
        "id": 1681,
        "name": "DFSK",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1793,
        "name": "DFSK",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1625,
        "name": "DFSK",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1737,
        "name": "DFSK",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 731,
        "name": "Discovery",
        "ref": "suv_truck_model",
        "refValue": "Land Rover",
        "refId": 644
    },
    {
        "id": 732,
        "name": "Dmax",
        "ref": "suv_truck_model",
        "refValue": "Isuzu",
        "refId": 638
    },
    {
        "id": 733,
        "name": "Doblo",
        "ref": "suv_truck_model",
        "refValue": "\n    Fiat",
        "refId": 629
    },
    {
        "id": 734,
        "name": "Dolphin",
        "ref": "suv_truck_model",
        "refValue": "Changhe",
        "refId": 618
    },
    {
        "id": 735,
        "name": "Ducato",
        "ref": "suv_truck_model",
        "refValue": "\n    Fiat",
        "refId": 629
    },
    {
        "id": 736,
        "name": "Durango",
        "ref": "suv_truck_model",
        "refValue": "Dodge",
        "refId": 627
    },
    {
        "id": 737,
        "name": "Duster",
        "ref": "suv_truck_model",
        "refValue": "Renault",
        "refId": 663
    },
    {
        "id": 738,
        "name": "Econoline",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 739,
        "name": "Ecosport",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 740,
        "name": "Edge",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 1373,
        "name": "EG10",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 741,
        "name": "Element",
        "ref": "suv_truck_model",
        "refValue": "Honda",
        "refId": 633
    },
    {
        "id": 742,
        "name": "Enclave",
        "ref": "suv_truck_model",
        "refValue": "Buick",
        "refId": 612
    },
    {
        "id": 743,
        "name": "Endeavor",
        "ref": "suv_truck_model",
        "refValue": "Mitsubishi",
        "refId": 653
    },
    {
        "id": 744,
        "name": "Envoy",
        "ref": "suv_truck_model",
        "refValue": "Gmc",
        "refId": 632
    },
    {
        "id": 745,
        "name": "Equator",
        "ref": "suv_truck_model",
        "refValue": "Suzuki",
        "refId": 670
    },
    {
        "id": 746,
        "name": "Equinox",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 747,
        "name": "Escalade",
        "ref": "suv_truck_model",
        "refValue": "Cadillac",
        "refId": 614
    },
    {
        "id": 748,
        "name": "Escape",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 749,
        "name": "Escudo",
        "ref": "suv_truck_model",
        "refValue": "Suzuki",
        "refId": 670
    },
    {
        "id": 1376,
        "name": "EUNIQ 5",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1622,
        "name": "EUNIQ 6",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1790,
        "name": "EUNIQ 6",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1734,
        "name": "EUNIQ 6",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1678,
        "name": "EUNIQ 6",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1394,
        "name": "EV30",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 750,
        "name": "Everest",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 751,
        "name": "Ex-35",
        "ref": "suv_truck_model",
        "refValue": "Infiniti",
        "refId": 637
    },
    {
        "id": 752,
        "name": "Expedition",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 753,
        "name": "Explorer",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 754,
        "name": "Express",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 755,
        "name": "Extol",
        "ref": "suv_truck_model",
        "refValue": "Daihatsu",
        "refId": 625
    },
    {
        "id": 1729,
        "name": "F 70",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1617,
        "name": "F 70",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1785,
        "name": "F 70",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1673,
        "name": "F 70",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 757,
        "name": "Fengchi",
        "ref": "suv_truck_model",
        "refValue": "Tianma",
        "refId": 671
    },
    {
        "id": 756,
        "name": "Feng Rui",
        "ref": "suv_truck_model",
        "refValue": "Tianma",
        "refId": 671
    },
    {
        "id": 758,
        "name": "Fengyi",
        "ref": "suv_truck_model",
        "refValue": "Tianma",
        "refId": 671
    },
    {
        "id": 759,
        "name": "Fenling",
        "ref": "suv_truck_model",
        "refValue": "Tianma",
        "refId": 671
    },
    {
        "id": 760,
        "name": "Fine",
        "ref": "suv_truck_model",
        "refValue": "Changfeng",
        "refId": 617
    },
    {
        "id": 761,
        "name": "Fiorino",
        "ref": "suv_truck_model",
        "refValue": "\n    Fiat",
        "refId": 629
    },
    {
        "id": 762,
        "name": "Fj Cruiser",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 763,
        "name": "Flex",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 764,
        "name": "Forester",
        "ref": "suv_truck_model",
        "refValue": "Subaru",
        "refId": 669
    },
    {
        "id": 765,
        "name": "Fortuner",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 766,
        "name": "Freelander",
        "ref": "suv_truck_model",
        "refValue": "Land Rover",
        "refId": 644
    },
    {
        "id": 767,
        "name": "Freestar",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 768,
        "name": "Freestyle",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 769,
        "name": "Frontera",
        "ref": "suv_truck_model",
        "refValue": "Opel",
        "refId": 656
    },
    {
        "id": 770,
        "name": "Frontier",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 771,
        "name": "Furgoneta",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 772,
        "name": "Fx-35",
        "ref": "suv_truck_model",
        "refValue": "Infiniti",
        "refId": 637
    },
    {
        "id": 773,
        "name": "Fx-45",
        "ref": "suv_truck_model",
        "refValue": "Infiniti",
        "refId": 637
    },
    {
        "id": 774,
        "name": "Fx-50",
        "ref": "suv_truck_model",
        "refValue": "Infiniti",
        "refId": 637
    },
    {
        "id": 1657,
        "name": "G01F",
        "ref": "suv_truck_model",
        "refValue": "SWM",
        "refId": 1578
    },
    {
        "id": 1601,
        "name": "G01F",
        "ref": "suv_truck_model",
        "refValue": "SWM",
        "refId": 1578
    },
    {
        "id": 1769,
        "name": "G01F",
        "ref": "suv_truck_model",
        "refValue": "SWM",
        "refId": 1578
    },
    {
        "id": 1713,
        "name": "G01F",
        "ref": "suv_truck_model",
        "refValue": "SWM",
        "refId": 1578
    },
    {
        "id": 1372,
        "name": "G10",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1385,
        "name": "G10 Cargo",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1390,
        "name": "G10 ejecutiva",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1386,
        "name": "G10 escolar",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1370,
        "name": "G10 MPV",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1389,
        "name": "G10 pasajeros",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1374,
        "name": "G20 MPV",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1387,
        "name": "G50",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1377,
        "name": "G50 eléctrico",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1375,
        "name": "G50 MPV",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 775,
        "name": "Galloper",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 776,
        "name": "Galloper",
        "ref": "suv_truck_model",
        "refValue": "Mitsubishi",
        "refId": 653
    },
    {
        "id": 1453,
        "name": "Gladiator",
        "ref": "suv_truck_model",
        "refValue": "Jeep",
        "refId": 641
    },
    {
        "id": 1738,
        "name": "GLORY",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1682,
        "name": "GLORY",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1626,
        "name": "GLORY",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1794,
        "name": "GLORY",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 777,
        "name": "Gmc",
        "ref": "suv_truck_model",
        "refValue": "Gmc",
        "refId": 632
    },
    {
        "id": 778,
        "name": "Grand Cherokee",
        "ref": "suv_truck_model",
        "refValue": "Jeep",
        "refId": 641
    },
    {
        "id": 1454,
        "name": "Grand Cherokee L",
        "ref": "suv_truck_model",
        "refValue": "Jeep",
        "refId": 641
    },
    {
        "id": 780,
        "name": "Grandis",
        "ref": "suv_truck_model",
        "refValue": "Mitsubishi",
        "refId": 653
    },
    {
        "id": 1448,
        "name": "Grand Santa Fe",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 1449,
        "name": "Grand Starex",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 779,
        "name": "Grand Vitara",
        "ref": "suv_truck_model",
        "refValue": "Suzuki",
        "refId": 670
    },
    {
        "id": 1697,
        "name": "GS3",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 1641,
        "name": "GS3",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 1753,
        "name": "GS3",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 1585,
        "name": "GS3",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 1754,
        "name": "GS4",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 1586,
        "name": "GS4",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 1642,
        "name": "GS4",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 1698,
        "name": "GS4",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 1587,
        "name": "GS8",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 1643,
        "name": "GS8",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 1699,
        "name": "GS8",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 1755,
        "name": "GS8",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 781,
        "name": "Gx",
        "ref": "suv_truck_model",
        "refValue": "Lexus",
        "refId": 645
    },
    {
        "id": 782,
        "name": "H-1",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 783,
        "name": "H2",
        "ref": "suv_truck_model",
        "refValue": "Hummer",
        "refId": 635
    },
    {
        "id": 784,
        "name": "H3",
        "ref": "suv_truck_model",
        "refValue": "Hummer",
        "refId": 635
    },
    {
        "id": 785,
        "name": "Haise",
        "ref": "suv_truck_model",
        "refValue": "Jinbei",
        "refId": 642
    },
    {
        "id": 786,
        "name": "Haiser",
        "ref": "suv_truck_model",
        "refValue": "Tianma",
        "refId": 671
    },
    {
        "id": 787,
        "name": "Hhr",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 1481,
        "name": "Hiace",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 788,
        "name": "Highlander",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 789,
        "name": "Hijet",
        "ref": "suv_truck_model",
        "refValue": "Daihatsu",
        "refId": 625
    },
    {
        "id": 790,
        "name": "Hilux",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 791,
        "name": "Himax",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1446,
        "name": "HR-V",
        "ref": "suv_truck_model",
        "refValue": "Honda",
        "refId": 633
    },
    {
        "id": 1618,
        "name": "HUNTER",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1786,
        "name": "HUNTER",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1674,
        "name": "HUNTER",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1730,
        "name": "HUNTER",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 792,
        "name": "Inca",
        "ref": "suv_truck_model",
        "refValue": "Seat",
        "refId": 665
    },
    {
        "id": 793,
        "name": "Jimny",
        "ref": "suv_truck_model",
        "refValue": "Suzuki",
        "refId": 670
    },
    {
        "id": 1599,
        "name": "Jolion",
        "ref": "suv_truck_model",
        "refValue": "Haval",
        "refId": 1577
    },
    {
        "id": 1767,
        "name": "Jolion",
        "ref": "suv_truck_model",
        "refValue": "Haval",
        "refId": 1577
    },
    {
        "id": 1655,
        "name": "Jolion",
        "ref": "suv_truck_model",
        "refValue": "Haval",
        "refId": 1577
    },
    {
        "id": 1711,
        "name": "Jolion",
        "ref": "suv_truck_model",
        "refValue": "Haval",
        "refId": 1577
    },
    {
        "id": 794,
        "name": "Juke",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 795,
        "name": "Kangoo",
        "ref": "suv_truck_model",
        "refValue": "Renault",
        "refId": 663
    },
    {
        "id": 796,
        "name": "Kb",
        "ref": "suv_truck_model",
        "refValue": "Isuzu",
        "refId": 638
    },
    {
        "id": 1474,
        "name": "Kicks",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 797,
        "name": "Kodiak",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 798,
        "name": "Koleos",
        "ref": "suv_truck_model",
        "refValue": "Renault",
        "refId": 663
    },
    {
        "id": 1450,
        "name": "KONA",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 799,
        "name": "Korando",
        "ref": "suv_truck_model",
        "refValue": "Ssangyong",
        "refId": 668
    },
    {
        "id": 800,
        "name": "Kyron",
        "ref": "suv_truck_model",
        "refValue": "Ssangyong",
        "refId": 668
    },
    {
        "id": 801,
        "name": "L200",
        "ref": "suv_truck_model",
        "refValue": "Mitsubishi",
        "refId": 653
    },
    {
        "id": 802,
        "name": "L300",
        "ref": "suv_truck_model",
        "refValue": "Mitsubishi",
        "refId": 653
    },
    {
        "id": 803,
        "name": "Land Cruiser",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 804,
        "name": "Land Cruiser Prado",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 805,
        "name": "Landscape",
        "ref": "suv_truck_model",
        "refValue": "Huanghai",
        "refId": 634
    },
    {
        "id": 806,
        "name": "Liberty",
        "ref": "suv_truck_model",
        "refValue": "Jeep",
        "refId": 641
    },
    {
        "id": 1482,
        "name": "Lite-Ace",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 807,
        "name": "Lr2",
        "ref": "suv_truck_model",
        "refValue": "Land Rover",
        "refId": 644
    },
    {
        "id": 808,
        "name": "Lr3",
        "ref": "suv_truck_model",
        "refValue": "Land Rover",
        "refId": 644
    },
    {
        "id": 809,
        "name": "Lx",
        "ref": "suv_truck_model",
        "refValue": "Lexus",
        "refId": 645
    },
    {
        "id": 1368,
        "name": "M50",
        "ref": "suv_truck_model",
        "refValue": "Baic",
        "refId": 1355
    },
    {
        "id": 1367,
        "name": "M50S",
        "ref": "suv_truck_model",
        "refValue": "Baic",
        "refId": 1355
    },
    {
        "id": 810,
        "name": "Macan",
        "ref": "suv_truck_model",
        "refValue": "Porsche",
        "refId": 661
    },
    {
        "id": 811,
        "name": "Major",
        "ref": "suv_truck_model",
        "refValue": "Huanghai",
        "refId": 634
    },
    {
        "id": 812,
        "name": "Mariner",
        "ref": "suv_truck_model",
        "refValue": "Mercury",
        "refId": 651
    },
    {
        "id": 813,
        "name": "Mdx",
        "ref": "suv_truck_model",
        "refValue": "Acura",
        "refId": 606
    },
    {
        "id": 814,
        "name": "Midi",
        "ref": "suv_truck_model",
        "refValue": "Foton",
        "refId": 631
    },
    {
        "id": 815,
        "name": "Minitruck",
        "ref": "suv_truck_model",
        "refValue": "Changhe",
        "refId": 618
    },
    {
        "id": 818,
        "name": "Minivan",
        "ref": "suv_truck_model",
        "refValue": "Jinbei",
        "refId": 642
    },
    {
        "id": 816,
        "name": "Minivan",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 817,
        "name": "Minivan",
        "ref": "suv_truck_model",
        "refValue": "Changhe",
        "refId": 618
    },
    {
        "id": 819,
        "name": "Mkt",
        "ref": "suv_truck_model",
        "refValue": "Lincoln",
        "refId": 646
    },
    {
        "id": 820,
        "name": "Mkx",
        "ref": "suv_truck_model",
        "refValue": "Lincoln",
        "refId": 646
    },
    {
        "id": 1302,
        "name": "Model X",
        "ref": "suv_truck_model",
        "refValue": "Tesla",
        "refId": 1301
    },
    {
        "id": 821,
        "name": "Montero",
        "ref": "suv_truck_model",
        "refValue": "Mitsubishi",
        "refId": 653
    },
    {
        "id": 822,
        "name": "Mountaineer",
        "ref": "suv_truck_model",
        "refValue": "Mercury",
        "refId": 651
    },
    {
        "id": 824,
        "name": "Mpv",
        "ref": "suv_truck_model",
        "refValue": "Luxgen",
        "refId": 647
    },
    {
        "id": 823,
        "name": "Mpv",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 825,
        "name": "Mpv Refine",
        "ref": "suv_truck_model",
        "refValue": "Jac",
        "refId": 639
    },
    {
        "id": 826,
        "name": "Murano",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 827,
        "name": "Musso",
        "ref": "suv_truck_model",
        "refValue": "Ssangyong",
        "refId": 668
    },
    {
        "id": 828,
        "name": "Mux",
        "ref": "suv_truck_model",
        "refValue": "Isuzu",
        "refId": 638
    },
    {
        "id": 829,
        "name": "N300",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 1444,
        "name": "N 400",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 1701,
        "name": "NAT E05",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1757,
        "name": "NAT E05",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1589,
        "name": "NAT E05",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1645,
        "name": "NAT E05",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 830,
        "name": "Nativa",
        "ref": "suv_truck_model",
        "refValue": "Mitsubishi",
        "refId": 653
    },
    {
        "id": 831,
        "name": "Navara",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 832,
        "name": "Navigator",
        "ref": "suv_truck_model",
        "refValue": "Lincoln",
        "refId": 646
    },
    {
        "id": 1456,
        "name": "Niro",
        "ref": "suv_truck_model",
        "refValue": "Kia",
        "refId": 643
    },
    {
        "id": 833,
        "name": "Nitro",
        "ref": "suv_truck_model",
        "refValue": "Dodge",
        "refId": 627
    },
    {
        "id": 1475,
        "name": "NV",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 1460,
        "name": "NX",
        "ref": "suv_truck_model",
        "refValue": "Lexus",
        "refId": 645
    },
    {
        "id": 834,
        "name": "Odyssey",
        "ref": "suv_truck_model",
        "refValue": "Honda",
        "refId": 633
    },
    {
        "id": 1445,
        "name": "Orlando",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 835,
        "name": "Oting",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 840,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Bmw",
        "refId": 610
    },
    {
        "id": 1662,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 841,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Brilliance",
        "refId": 611
    },
    {
        "id": 1658,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "SWM",
        "refId": 1578
    },
    {
        "id": 842,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Buick",
        "refId": 612
    },
    {
        "id": 1656,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Haval",
        "refId": 1577
    },
    {
        "id": 1696,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Lamborghini",
        "refId": 1573
    },
    {
        "id": 1654,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "ZXAUTO",
        "refId": 1576
    },
    {
        "id": 1651,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1700,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 843,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Byd",
        "refId": 613
    },
    {
        "id": 1644,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 1707,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1710,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "ZXAUTO",
        "refId": 1576
    },
    {
        "id": 1712,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Haval",
        "refId": 1577
    },
    {
        "id": 1640,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Lamborghini",
        "refId": 1573
    },
    {
        "id": 844,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Cadillac",
        "refId": 614
    },
    {
        "id": 1714,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "SWM",
        "refId": 1578
    },
    {
        "id": 845,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Chana",
        "refId": 615
    },
    {
        "id": 1718,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 846,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 847,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Changfeng",
        "refId": 617
    },
    {
        "id": 848,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Changhe",
        "refId": 618
    },
    {
        "id": 849,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Chery",
        "refId": 619
    },
    {
        "id": 850,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 851,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Chrysler",
        "refId": 621
    },
    {
        "id": 852,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Citroën",
        "refId": 622
    },
    {
        "id": 853,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Corvette",
        "refId": 623
    },
    {
        "id": 854,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Daewoo",
        "refId": 624
    },
    {
        "id": 1606,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 855,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Daihatsu",
        "refId": 625
    },
    {
        "id": 1602,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "SWM",
        "refId": 1578
    },
    {
        "id": 856,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Datsun",
        "refId": 626
    },
    {
        "id": 1600,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Haval",
        "refId": 1577
    },
    {
        "id": 1752,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Lamborghini",
        "refId": 1573
    },
    {
        "id": 1598,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "ZXAUTO",
        "refId": 1576
    },
    {
        "id": 1595,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1756,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 857,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Dodge",
        "refId": 627
    },
    {
        "id": 1588,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "GAC",
        "refId": 1574
    },
    {
        "id": 1763,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1766,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "ZXAUTO",
        "refId": 1576
    },
    {
        "id": 1768,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Haval",
        "refId": 1577
    },
    {
        "id": 1584,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Lamborghini",
        "refId": 1573
    },
    {
        "id": 1562,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Tesla",
        "refId": 1301
    },
    {
        "id": 1561,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1560,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Baic",
        "refId": 1355
    },
    {
        "id": 858,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1770,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "SWM",
        "refId": 1578
    },
    {
        "id": 860,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 1774,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 861,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Foton",
        "refId": 631
    },
    {
        "id": 862,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Gmc",
        "refId": 632
    },
    {
        "id": 863,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Honda",
        "refId": 633
    },
    {
        "id": 864,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Huanghai",
        "refId": 634
    },
    {
        "id": 859,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "\n    Fiat",
        "refId": 629
    },
    {
        "id": 865,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Hummer",
        "refId": 635
    },
    {
        "id": 866,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 867,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Infiniti",
        "refId": 637
    },
    {
        "id": 868,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Isuzu",
        "refId": 638
    },
    {
        "id": 869,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Jac",
        "refId": 639
    },
    {
        "id": 870,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Jaguar",
        "refId": 640
    },
    {
        "id": 871,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Jeep",
        "refId": 641
    },
    {
        "id": 872,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Jinbei",
        "refId": 642
    },
    {
        "id": 874,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Land Rover",
        "refId": 644
    },
    {
        "id": 838,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Audi",
        "refId": 608
    },
    {
        "id": 837,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Alfa Romeo",
        "refId": 607
    },
    {
        "id": 836,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Acura",
        "refId": 606
    },
    {
        "id": 873,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Kia",
        "refId": 643
    },
    {
        "id": 878,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Maserati",
        "refId": 648
    },
    {
        "id": 877,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Luxgen",
        "refId": 647
    },
    {
        "id": 876,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Lincoln",
        "refId": 646
    },
    {
        "id": 875,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Lexus",
        "refId": 645
    },
    {
        "id": 839,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Bentley",
        "refId": 609
    },
    {
        "id": 904,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Volvo",
        "refId": 674
    },
    {
        "id": 903,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Volkswagen",
        "refId": 673
    },
    {
        "id": 902,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 901,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Tianma",
        "refId": 671
    },
    {
        "id": 900,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Suzuki",
        "refId": 670
    },
    {
        "id": 899,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Subaru",
        "refId": 669
    },
    {
        "id": 898,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Ssangyong",
        "refId": 668
    },
    {
        "id": 897,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Smart",
        "refId": 667
    },
    {
        "id": 896,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Skoda",
        "refId": 666
    },
    {
        "id": 895,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Seat",
        "refId": 665
    },
    {
        "id": 894,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Saturn",
        "refId": 664
    },
    {
        "id": 893,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Renault",
        "refId": 663
    },
    {
        "id": 892,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Proton",
        "refId": 662
    },
    {
        "id": 891,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Porsche",
        "refId": 661
    },
    {
        "id": 890,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Pontiac",
        "refId": 660
    },
    {
        "id": 889,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Plymouth",
        "refId": 659
    },
    {
        "id": 888,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Peugeot",
        "refId": 658
    },
    {
        "id": 887,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Otra",
        "refId": 657
    },
    {
        "id": 886,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Opel",
        "refId": 656
    },
    {
        "id": 885,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Oldsmobile",
        "refId": 655
    },
    {
        "id": 884,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 883,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Mitsubishi",
        "refId": 653
    },
    {
        "id": 882,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Mg",
        "refId": 652
    },
    {
        "id": 881,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Mercury",
        "refId": 651
    },
    {
        "id": 880,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 879,
        "name": "Otro",
        "ref": "suv_truck_model",
        "refValue": "Mazda",
        "refId": 649
    },
    {
        "id": 905,
        "name": "Outback",
        "ref": "suv_truck_model",
        "refValue": "Subaru",
        "refId": 669
    },
    {
        "id": 906,
        "name": "Outlander",
        "ref": "suv_truck_model",
        "refValue": "Mitsubishi",
        "refId": 653
    },
    {
        "id": 907,
        "name": "Pacifica",
        "ref": "suv_truck_model",
        "refValue": "Chrysler",
        "refId": 621
    },
    {
        "id": 908,
        "name": "Pajero",
        "ref": "suv_truck_model",
        "refValue": "Mitsubishi",
        "refId": 653
    },
    {
        "id": 1451,
        "name": "Palisade",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 909,
        "name": "Partner",
        "ref": "suv_truck_model",
        "refValue": "Peugeot",
        "refId": 658
    },
    {
        "id": 910,
        "name": "Passport",
        "ref": "suv_truck_model",
        "refValue": "Honda",
        "refId": 633
    },
    {
        "id": 911,
        "name": "Pathfinder",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 912,
        "name": "Patriot",
        "ref": "suv_truck_model",
        "refValue": "Jeep",
        "refId": 641
    },
    {
        "id": 913,
        "name": "Patrol",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 1483,
        "name": "Pick Up",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 914,
        "name": "Pick Up",
        "ref": "suv_truck_model",
        "refValue": "Isuzu",
        "refId": 638
    },
    {
        "id": 915,
        "name": "Pilot",
        "ref": "suv_truck_model",
        "refValue": "Honda",
        "refId": 633
    },
    {
        "id": 916,
        "name": "Plutus",
        "ref": "suv_truck_model",
        "refValue": "Huanghai",
        "refId": 634
    },
    {
        "id": 917,
        "name": "Praktik",
        "ref": "suv_truck_model",
        "refValue": "Skoda",
        "refId": 666
    },
    {
        "id": 1484,
        "name": "Probox",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 918,
        "name": "Q3",
        "ref": "suv_truck_model",
        "refValue": "Audi",
        "refId": 608
    },
    {
        "id": 919,
        "name": "Q5",
        "ref": "suv_truck_model",
        "refValue": "Audi",
        "refId": 608
    },
    {
        "id": 920,
        "name": "Q7",
        "ref": "suv_truck_model",
        "refValue": "Audi",
        "refId": 608
    },
    {
        "id": 921,
        "name": "Qashqai",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 922,
        "name": "Quest",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 923,
        "name": "Qx-56",
        "ref": "suv_truck_model",
        "refValue": "Infiniti",
        "refId": 637
    },
    {
        "id": 924,
        "name": "Qx-60",
        "ref": "suv_truck_model",
        "refValue": "Infiniti",
        "refId": 637
    },
    {
        "id": 925,
        "name": "Qx-70",
        "ref": "suv_truck_model",
        "refValue": "Infiniti",
        "refId": 637
    },
    {
        "id": 926,
        "name": "Qx-80",
        "ref": "suv_truck_model",
        "refValue": "Infiniti",
        "refId": 637
    },
    {
        "id": 1485,
        "name": "Raize",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 927,
        "name": "Ram",
        "ref": "suv_truck_model",
        "refValue": "Dodge",
        "refId": 627
    },
    {
        "id": 929,
        "name": "Ranger",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 928,
        "name": "Range Rover",
        "ref": "suv_truck_model",
        "refValue": "Land Rover",
        "refId": 644
    },
    {
        "id": 930,
        "name": "Rav-4",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 931,
        "name": "Rdx",
        "ref": "suv_truck_model",
        "refValue": "Acura",
        "refId": 606
    },
    {
        "id": 932,
        "name": "Regulus",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 933,
        "name": "Rein",
        "ref": "suv_truck_model",
        "refValue": "Jac",
        "refId": 639
    },
    {
        "id": 934,
        "name": "Rendezvous",
        "ref": "suv_truck_model",
        "refValue": "Buick",
        "refId": 612
    },
    {
        "id": 1455,
        "name": "Renegade",
        "ref": "suv_truck_model",
        "refValue": "Jeep",
        "refId": 641
    },
    {
        "id": 935,
        "name": "Rexton",
        "ref": "suv_truck_model",
        "refValue": "Ssangyong",
        "refId": 668
    },
    {
        "id": 1371,
        "name": "RG10",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 936,
        "name": "Rich",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1683,
        "name": "RICH6",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1739,
        "name": "RICH6",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1795,
        "name": "RICH6",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1627,
        "name": "RICH6",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 937,
        "name": "Ridgeline",
        "ref": "suv_truck_model",
        "refValue": "Honda",
        "refId": 633
    },
    {
        "id": 938,
        "name": "Rodeo",
        "ref": "suv_truck_model",
        "refValue": "Isuzu",
        "refId": 638
    },
    {
        "id": 939,
        "name": "Rogue",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 940,
        "name": "Rondo",
        "ref": "suv_truck_model",
        "refValue": "Kia",
        "refId": 643
    },
    {
        "id": 941,
        "name": "Roomster",
        "ref": "suv_truck_model",
        "refValue": "Skoda",
        "refId": 666
    },
    {
        "id": 942,
        "name": "Rubicon",
        "ref": "suv_truck_model",
        "refValue": "Jeep",
        "refId": 641
    },
    {
        "id": 1486,
        "name": "Rush",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 943,
        "name": "Rx",
        "ref": "suv_truck_model",
        "refValue": "Lexus",
        "refId": 645
    },
    {
        "id": 945,
        "name": "S10",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 946,
        "name": "S6",
        "ref": "suv_truck_model",
        "refValue": "Byd",
        "refId": 613
    },
    {
        "id": 947,
        "name": "Sahara",
        "ref": "suv_truck_model",
        "refValue": "Jeep",
        "refId": 641
    },
    {
        "id": 948,
        "name": "Samurai",
        "ref": "suv_truck_model",
        "refValue": "Suzuki",
        "refId": 670
    },
    {
        "id": 949,
        "name": "Sandero",
        "ref": "suv_truck_model",
        "refValue": "Renault",
        "refId": 663
    },
    {
        "id": 950,
        "name": "Santa Fe",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 951,
        "name": "Saveiro",
        "ref": "suv_truck_model",
        "refValue": "Volkswagen",
        "refId": 673
    },
    {
        "id": 952,
        "name": "Scenic",
        "ref": "suv_truck_model",
        "refValue": "Renault",
        "refId": 663
    },
    {
        "id": 944,
        "name": "S-Cross",
        "ref": "suv_truck_model",
        "refValue": "Suzuki",
        "refId": 670
    },
    {
        "id": 953,
        "name": "Sedona",
        "ref": "suv_truck_model",
        "refValue": "Kia",
        "refId": 643
    },
    {
        "id": 1457,
        "name": "Seltos",
        "ref": "suv_truck_model",
        "refValue": "Kia",
        "refId": 643
    },
    {
        "id": 954,
        "name": "Sequoia",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 1476,
        "name": "Serena",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 955,
        "name": "Serie E",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 956,
        "name": "Serie F",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 957,
        "name": "Serie X",
        "ref": "suv_truck_model",
        "refValue": "Bmw",
        "refId": 610
    },
    {
        "id": 958,
        "name": "Sidekick",
        "ref": "suv_truck_model",
        "refValue": "Suzuki",
        "refId": 670
    },
    {
        "id": 1487,
        "name": "Sienna",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 959,
        "name": "Sierra",
        "ref": "suv_truck_model",
        "refValue": "Gmc",
        "refId": 632
    },
    {
        "id": 960,
        "name": "Silverado",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 1458,
        "name": "Sonet",
        "ref": "suv_truck_model",
        "refValue": "Kia",
        "refId": 643
    },
    {
        "id": 961,
        "name": "Sonora",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 962,
        "name": "Sorento",
        "ref": "suv_truck_model",
        "refValue": "Kia",
        "refId": 643
    },
    {
        "id": 963,
        "name": "Soul",
        "ref": "suv_truck_model",
        "refValue": "Kia",
        "refId": 643
    },
    {
        "id": 964,
        "name": "Space Wagon",
        "ref": "suv_truck_model",
        "refValue": "Mitsubishi",
        "refId": 653
    },
    {
        "id": 966,
        "name": "Sportage",
        "ref": "suv_truck_model",
        "refValue": "Kia",
        "refId": 643
    },
    {
        "id": 965,
        "name": "Sport Trac",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 1472,
        "name": "Sprinter",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 967,
        "name": "Star",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 1675,
        "name": "STAR 5",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1787,
        "name": "STAR 5",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1731,
        "name": "STAR 5",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1619,
        "name": "STAR 5",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 968,
        "name": "Starex",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 1452,
        "name": "Staria",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 969,
        "name": "Stavic",
        "ref": "suv_truck_model",
        "refValue": "Ssangyong",
        "refId": 668
    },
    {
        "id": 970,
        "name": "Steed",
        "ref": "suv_truck_model",
        "refValue": "Huanghai",
        "refId": 634
    },
    {
        "id": 971,
        "name": "Strada",
        "ref": "suv_truck_model",
        "refValue": "\n    Fiat",
        "refId": 629
    },
    {
        "id": 972,
        "name": "Suburban",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 973,
        "name": "Suburvan",
        "ref": "suv_truck_model",
        "refValue": "Gmc",
        "refId": 632
    },
    {
        "id": 974,
        "name": "Succe",
        "ref": "suv_truck_model",
        "refValue": "Dongfeng",
        "refId": 628
    },
    {
        "id": 975,
        "name": "Sup",
        "ref": "suv_truck_model",
        "refValue": "Foton",
        "refId": 631
    },
    {
        "id": 976,
        "name": "Suv",
        "ref": "suv_truck_model",
        "refValue": "Luxgen",
        "refId": 647
    },
    {
        "id": 977,
        "name": "Sx4 Suv Awd",
        "ref": "suv_truck_model",
        "refValue": "Suzuki",
        "refId": 670
    },
    {
        "id": 1759,
        "name": "T-33",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1591,
        "name": "T-33",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1647,
        "name": "T-33",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1703,
        "name": "T-33",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1704,
        "name": "T-55",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1592,
        "name": "T-55",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1760,
        "name": "T-55",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1648,
        "name": "T-55",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1623,
        "name": "T60",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1735,
        "name": "T60",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1791,
        "name": "T60",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1679,
        "name": "T60",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1382,
        "name": "T60 cabina simple",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1388,
        "name": "T60 D20",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1383,
        "name": "T60 DX",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1384,
        "name": "T60 GL",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1391,
        "name": "T60 GLX",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1705,
        "name": "T-77",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1649,
        "name": "T-77",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1761,
        "name": "T-77",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1593,
        "name": "T-77",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1380,
        "name": "T90",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1706,
        "name": "T-99",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1762,
        "name": "T-99",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1594,
        "name": "T-99",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 1650,
        "name": "T-99",
        "ref": "suv_truck_model",
        "refValue": "Bestune",
        "refId": 1575
    },
    {
        "id": 978,
        "name": "Tacoma",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 979,
        "name": "Tahoe",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 1665,
        "name": "Tang",
        "ref": "suv_truck_model",
        "refValue": "Byd",
        "refId": 613
    },
    {
        "id": 1609,
        "name": "Tang",
        "ref": "suv_truck_model",
        "refValue": "Byd",
        "refId": 613
    },
    {
        "id": 1721,
        "name": "Tang",
        "ref": "suv_truck_model",
        "refValue": "Byd",
        "refId": 613
    },
    {
        "id": 1777,
        "name": "Tang",
        "ref": "suv_truck_model",
        "refValue": "Byd",
        "refId": 613
    },
    {
        "id": 1459,
        "name": "Telluride",
        "ref": "suv_truck_model",
        "refValue": "Kia",
        "refId": 643
    },
    {
        "id": 980,
        "name": "Terios",
        "ref": "suv_truck_model",
        "refValue": "Daihatsu",
        "refId": 625
    },
    {
        "id": 981,
        "name": "Terracan",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 1596,
        "name": "Terralord",
        "ref": "suv_truck_model",
        "refValue": "ZXAUTO",
        "refId": 1576
    },
    {
        "id": 1764,
        "name": "Terralord",
        "ref": "suv_truck_model",
        "refValue": "ZXAUTO",
        "refId": 1576
    },
    {
        "id": 1708,
        "name": "Terralord",
        "ref": "suv_truck_model",
        "refValue": "ZXAUTO",
        "refId": 1576
    },
    {
        "id": 1652,
        "name": "Terralord",
        "ref": "suv_truck_model",
        "refValue": "ZXAUTO",
        "refId": 1576
    },
    {
        "id": 1709,
        "name": "Terralord At Esc",
        "ref": "suv_truck_model",
        "refValue": "ZXAUTO",
        "refId": 1576
    },
    {
        "id": 1653,
        "name": "Terralord At Esc",
        "ref": "suv_truck_model",
        "refValue": "ZXAUTO",
        "refId": 1576
    },
    {
        "id": 1597,
        "name": "Terralord At Esc",
        "ref": "suv_truck_model",
        "refValue": "ZXAUTO",
        "refId": 1576
    },
    {
        "id": 1765,
        "name": "Terralord At Esc",
        "ref": "suv_truck_model",
        "refValue": "ZXAUTO",
        "refId": 1576
    },
    {
        "id": 982,
        "name": "Terrano",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 983,
        "name": "Tiggo",
        "ref": "suv_truck_model",
        "refValue": "Chery",
        "refId": 619
    },
    {
        "id": 984,
        "name": "Tiguan",
        "ref": "suv_truck_model",
        "refValue": "Volkswagen",
        "refId": 673
    },
    {
        "id": 985,
        "name": "Titan",
        "ref": "suv_truck_model",
        "refValue": "Mazda",
        "refId": 649
    },
    {
        "id": 1477,
        "name": "TITAN",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 986,
        "name": "Torrent",
        "ref": "suv_truck_model",
        "refValue": "Pontiac",
        "refId": 660
    },
    {
        "id": 987,
        "name": "Touareg",
        "ref": "suv_truck_model",
        "refValue": "Volkswagen",
        "refId": 673
    },
    {
        "id": 988,
        "name": "Touran",
        "ref": "suv_truck_model",
        "refValue": "Volkswagen",
        "refId": 673
    },
    {
        "id": 990,
        "name": "Townace",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 989,
        "name": "Town & Country",
        "ref": "suv_truck_model",
        "refValue": "Chrysler",
        "refId": 621
    },
    {
        "id": 991,
        "name": "Towner",
        "ref": "suv_truck_model",
        "refValue": "Kia",
        "refId": 643
    },
    {
        "id": 992,
        "name": "Tracker",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 993,
        "name": "Trailblazer",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 994,
        "name": "Trajet",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 995,
        "name": "Transit",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 996,
        "name": "Traverse",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 997,
        "name": "Trax",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 998,
        "name": "Tribeca",
        "ref": "suv_truck_model",
        "refValue": "Subaru",
        "refId": 669
    },
    {
        "id": 999,
        "name": "Tribute",
        "ref": "suv_truck_model",
        "refValue": "Mazda",
        "refId": 649
    },
    {
        "id": 1000,
        "name": "Trooper",
        "ref": "suv_truck_model",
        "refValue": "Isuzu",
        "refId": 638
    },
    {
        "id": 1001,
        "name": "Tucson",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 1002,
        "name": "Tundra",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 1788,
        "name": "UNI-K",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1620,
        "name": "UNI-K",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1676,
        "name": "UNI-K",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1732,
        "name": "UNI-K",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1789,
        "name": "UNI-T",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1621,
        "name": "UNI-T",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1677,
        "name": "UNI-T",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1733,
        "name": "UNI-T",
        "ref": "suv_truck_model",
        "refValue": "Changan",
        "refId": 616
    },
    {
        "id": 1751,
        "name": "Urus",
        "ref": "suv_truck_model",
        "refValue": "Lamborghini",
        "refId": 1573
    },
    {
        "id": 1583,
        "name": "Urus",
        "ref": "suv_truck_model",
        "refValue": "Lamborghini",
        "refId": 1573
    },
    {
        "id": 1639,
        "name": "Urus",
        "ref": "suv_truck_model",
        "refValue": "Lamborghini",
        "refId": 1573
    },
    {
        "id": 1695,
        "name": "Urus",
        "ref": "suv_truck_model",
        "refValue": "Lamborghini",
        "refId": 1573
    },
    {
        "id": 1478,
        "name": "Urvan",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 1461,
        "name": "UX",
        "ref": "suv_truck_model",
        "refValue": "Lexus",
        "refId": 645
    },
    {
        "id": 1003,
        "name": "V5",
        "ref": "suv_truck_model",
        "refValue": "Brilliance",
        "refId": 611
    },
    {
        "id": 1392,
        "name": "V80",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1488,
        "name": "V80 FL",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1393,
        "name": "V80 PASAJEROS",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1381,
        "name": "V90",
        "ref": "suv_truck_model",
        "refValue": "Maxus",
        "refId": 1356
    },
    {
        "id": 1004,
        "name": "Vanette",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 1006,
        "name": "Venture",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 1007,
        "name": "Venza",
        "ref": "suv_truck_model",
        "refValue": "Toyota",
        "refId": 672
    },
    {
        "id": 1008,
        "name": "Veracruz",
        "ref": "suv_truck_model",
        "refValue": "Hyundai",
        "refId": 636
    },
    {
        "id": 1009,
        "name": "Viano",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 1010,
        "name": "Vibes",
        "ref": "suv_truck_model",
        "refValue": "Pontiac",
        "refId": 660
    },
    {
        "id": 1369,
        "name": "Vigus 3",
        "ref": "suv_truck_model",
        "refValue": "Baic",
        "refId": 1355
    },
    {
        "id": 1011,
        "name": "Vitara",
        "ref": "suv_truck_model",
        "refValue": "Suzuki",
        "refId": 670
    },
    {
        "id": 1012,
        "name": "Vito",
        "ref": "suv_truck_model",
        "refValue": "Mercedes",
        "refId": 650
    },
    {
        "id": 1013,
        "name": "Vue",
        "ref": "suv_truck_model",
        "refValue": "Saturn",
        "refId": 664
    },
    {
        "id": 1014,
        "name": "Wagoneer",
        "ref": "suv_truck_model",
        "refValue": "Jeep",
        "refId": 641
    },
    {
        "id": 1015,
        "name": "Way",
        "ref": "suv_truck_model",
        "refValue": "\n    Fiat",
        "refId": 629
    },
    {
        "id": 1016,
        "name": "Windstar",
        "ref": "suv_truck_model",
        "refValue": "Ford",
        "refId": 630
    },
    {
        "id": 1017,
        "name": "Wrangler",
        "ref": "suv_truck_model",
        "refValue": "Jeep",
        "refId": 641
    },
    {
        "id": 1363,
        "name": "X25",
        "ref": "suv_truck_model",
        "refValue": "Baic",
        "refId": 1355
    },
    {
        "id": 1361,
        "name": "X30",
        "ref": "suv_truck_model",
        "refValue": "Baic",
        "refId": 1355
    },
    {
        "id": 1362,
        "name": "X35",
        "ref": "suv_truck_model",
        "refValue": "Baic",
        "refId": 1355
    },
    {
        "id": 1364,
        "name": "X55",
        "ref": "suv_truck_model",
        "refValue": "Baic",
        "refId": 1355
    },
    {
        "id": 1772,
        "name": "X70",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 1604,
        "name": "X70",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 1716,
        "name": "X70",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 1660,
        "name": "X70",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 1661,
        "name": "X90",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 1717,
        "name": "X90",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 1773,
        "name": "X90",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 1605,
        "name": "X90",
        "ref": "suv_truck_model",
        "refValue": "Jetour",
        "refId": 1579
    },
    {
        "id": 1020,
        "name": "Xc60",
        "ref": "suv_truck_model",
        "refValue": "Volvo",
        "refId": 674
    },
    {
        "id": 1021,
        "name": "Xc70",
        "ref": "suv_truck_model",
        "refValue": "Volvo",
        "refId": 674
    },
    {
        "id": 1022,
        "name": "Xc90",
        "ref": "suv_truck_model",
        "refValue": "Volvo",
        "refId": 674
    },
    {
        "id": 1023,
        "name": "Xl-7",
        "ref": "suv_truck_model",
        "refValue": "Suzuki",
        "refId": 670
    },
    {
        "id": 1018,
        "name": "X-Terra",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 1019,
        "name": "X-Trail",
        "ref": "suv_truck_model",
        "refValue": "Nissan",
        "refId": 654
    },
    {
        "id": 1024,
        "name": "Xv",
        "ref": "suv_truck_model",
        "refValue": "Subaru",
        "refId": 669
    },
    {
        "id": 1025,
        "name": "Yeti",
        "ref": "suv_truck_model",
        "refValue": "Skoda",
        "refId": 666
    },
    {
        "id": 1026,
        "name": "Yuhu",
        "ref": "suv_truck_model",
        "refValue": "Tianma",
        "refId": 671
    },
    {
        "id": 1027,
        "name": "Yukon",
        "ref": "suv_truck_model",
        "refValue": "Gmc",
        "refId": 632
    },
    {
        "id": 1028,
        "name": "Zafira",
        "ref": "suv_truck_model",
        "refValue": "Chevrolet",
        "refId": 620
    },
    {
        "id": 1029,
        "name": "Zinger",
        "ref": "suv_truck_model",
        "refValue": "Mitsubishi",
        "refId": 653
    },
    {
        "id": "boat_brand",
        "name": "Marca",
        "required": true,
        "options": [
            {
                "id": 1515,
                "name": "Bayliner"
            },
            {
                "id": 1516,
                "name": "Bertram"
            },
            {
                "id": 1517,
                "name": "Boston"
            },
            {
                "id": 1519,
                "name": "Maxum 19 Pies"
            },
            {
                "id": 1518,
                "name": "Otro"
            },
            {
                "id": 1520,
                "name": "Sea Doo"
            },
            {
                "id": 1521,
                "name": "Sea Pro"
            },
            {
                "id": 1522,
                "name": "Sea Ray"
            },
            {
                "id": 1523,
                "name": "Tempest"
            },
            {
                "id": 1524,
                "name": "Wellcraft"
            },
            {
                "id": 1525,
                "name": "Yamaha"
            }
        ],
        "type": "Select"
    },
    {
        "id": "boat_model",
        "name": "Modelo",
        "required": true,
        "dependOf": "boat_brand",
        "options": [],
        "type": "Select"
    },
    {
        "id": 1532,
        "name": "1800 SR-3 Sport",
        "ref": "boat_model",
        "refValue": "Maxum 19 Pies",
        "refId": 1519
    },
    {
        "id": 1542,
        "name": "242",
        "ref": "boat_model",
        "refValue": "Yamaha",
        "refId": 1525
    },
    {
        "id": 1526,
        "name": "Capry",
        "ref": "boat_model",
        "refValue": "Bayliner",
        "refId": 1515
    },
    {
        "id": 1540,
        "name": "Fisherman 262",
        "ref": "boat_model",
        "refValue": "Wellcraft",
        "refId": 1524
    },
    {
        "id": 1544,
        "name": "FX",
        "ref": "boat_model",
        "refValue": "Yamaha",
        "refId": 1525
    },
    {
        "id": 1545,
        "name": "FZ",
        "ref": "boat_model",
        "refValue": "Yamaha",
        "refId": 1525
    },
    {
        "id": 1546,
        "name": "Grizzly",
        "ref": "boat_model",
        "refValue": "Yamaha",
        "refId": 1525
    },
    {
        "id": 1547,
        "name": "Majesty",
        "ref": "boat_model",
        "refValue": "Yamaha",
        "refId": 1525
    },
    {
        "id": 1539,
        "name": "Otro",
        "ref": "boat_model",
        "refValue": "Tempest",
        "refId": 1523
    },
    {
        "id": 1541,
        "name": "Otro",
        "ref": "boat_model",
        "refValue": "Wellcraft",
        "refId": 1524
    },
    {
        "id": 1543,
        "name": "Otro",
        "ref": "boat_model",
        "refValue": "Yamaha",
        "refId": 1525
    },
    {
        "id": 1566,
        "name": "Otro",
        "ref": "boat_model",
        "refValue": "Sea Pro",
        "refId": 1521
    },
    {
        "id": 1527,
        "name": "Otro",
        "ref": "boat_model",
        "refValue": "Bayliner",
        "refId": 1515
    },
    {
        "id": 1528,
        "name": "Otro",
        "ref": "boat_model",
        "refValue": "Bertram",
        "refId": 1516
    },
    {
        "id": 1530,
        "name": "Otro",
        "ref": "boat_model",
        "refValue": "Boston",
        "refId": 1517
    },
    {
        "id": 1531,
        "name": "Otro",
        "ref": "boat_model",
        "refValue": "Otro",
        "refId": 1518
    },
    {
        "id": 1533,
        "name": "Otro",
        "ref": "boat_model",
        "refValue": "Maxum 19 Pies",
        "refId": 1519
    },
    {
        "id": 1536,
        "name": "Otro",
        "ref": "boat_model",
        "refValue": "Sea Doo",
        "refId": 1520
    },
    {
        "id": 1538,
        "name": "Otro",
        "ref": "boat_model",
        "refValue": "Sea Ray",
        "refId": 1522
    },
    {
        "id": 1548,
        "name": "Raptor",
        "ref": "boat_model",
        "refValue": "Yamaha",
        "refId": 1525
    },
    {
        "id": 1534,
        "name": "RXP",
        "ref": "boat_model",
        "refValue": "Sea Doo",
        "refId": 1520
    },
    {
        "id": 1535,
        "name": "RXT",
        "ref": "boat_model",
        "refValue": "Sea Doo",
        "refId": 1520
    },
    {
        "id": 1537,
        "name": "Sedan Bridge 44",
        "ref": "boat_model",
        "refValue": "Sea Ray",
        "refId": 1522
    },
    {
        "id": 1549,
        "name": "Stryker",
        "ref": "boat_model",
        "refValue": "Yamaha",
        "refId": 1525
    },
    {
        "id": 1550,
        "name": "V Star",
        "ref": "boat_model",
        "refValue": "Yamaha",
        "refId": 1525
    },
    {
        "id": 1551,
        "name": "WaveRunner",
        "ref": "boat_model",
        "refValue": "Yamaha",
        "refId": 1525
    },
    {
        "id": 1529,
        "name": "Whaler",
        "ref": "boat_model",
        "refValue": "Boston",
        "refId": 1517
    },
    {
        "id": 1552,
        "name": "YFZ 450 R",
        "ref": "boat_model",
        "refValue": "Yamaha",
        "refId": 1525
    },
    {
        "id": 1553,
        "name": "YXZ 1000",
        "ref": "boat_model",
        "refValue": "Yamaha",
        "refId": 1525
    },
    {
        "id": 1554,
        "name": "YZF-R1",
        "ref": "boat_model",
        "refValue": "Yamaha",
        "refId": 1525
    },
    {
        "id": "suv_truck_type",
        "name": "Tipo",
        "options": [
            {
                "id": 39,
                "name": "Camioneta"
            },
            {
                "id": 40,
                "name": "Furgoneta"
            },
            {
                "id": 41,
                "name": "Jeepeta"
            },
            {
                "id": 42,
                "name": "Minivan"
            },
            {
                "id": 43,
                "name": "Station wagon"
            },
            {
                "id": 44,
                "name": "Van"
            }
        ],
        "type": "Select"
    },
    {
        "id": "motorcycle_brand",
        "name": "Marca",
        "required": true,
        "options": [
            {
                "id": 1030,
                "name": "Artic Cat"
            },
            {
                "id": 1031,
                "name": "BMW"
            },
            {
                "id": 1032,
                "name": "Ducati"
            },
            {
                "id": 1033,
                "name": "Harley Davidson"
            },
            {
                "id": 1034,
                "name": "Honda"
            },
            {
                "id": 1035,
                "name": "Kawasaki"
            },
            {
                "id": 1036,
                "name": "KTM"
            },
            {
                "id": 1308,
                "name": "Loncin"
            },
            {
                "id": 1037,
                "name": "Otra"
            },
            {
                "id": 1038,
                "name": "Polaris"
            },
            {
                "id": 1039,
                "name": "Sherco"
            },
            {
                "id": 1309,
                "name": "Super Gato"
            },
            {
                "id": 1040,
                "name": "Suzuki"
            },
            {
                "id": 1041,
                "name": "Triumph"
            },
            {
                "id": 1310,
                "name": "TVS"
            },
            {
                "id": 1042,
                "name": "Vespa"
            },
            {
                "id": 1043,
                "name": "Yamaha"
            }
        ],
        "type": "Select"
    },
    {
        "id": "motorcycle_model",
        "name": "Modelo",
        "required": true,
        "dependOf": "motorcycle_brand",
        "options": [],
        "type": "Select"
    },
    {
        "id": 1044,
        "name": "1050 Adventure",
        "ref": "motorcycle_model",
        "refValue": "KTM",
        "refId": 1036
    },
    {
        "id": 1045,
        "name": "150 Super",
        "ref": "motorcycle_model",
        "refValue": "Vespa",
        "refId": 1042
    },
    {
        "id": 1046,
        "name": "250 FX",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1047,
        "name": "300",
        "ref": "motorcycle_model",
        "refValue": "Sherco",
        "refId": 1039
    },
    {
        "id": 1049,
        "name": "525-HC",
        "ref": "motorcycle_model",
        "refValue": "KTM",
        "refId": 1036
    },
    {
        "id": 1050,
        "name": "800",
        "ref": "motorcycle_model",
        "refValue": "Polaris",
        "refId": 1038
    },
    {
        "id": 1051,
        "name": "85",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1327,
        "name": "AC4",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1343,
        "name": "APACHE RTR 160",
        "ref": "motorcycle_model",
        "refValue": "TVS",
        "refId": 1310
    },
    {
        "id": 1344,
        "name": "APACHE RTR 180",
        "ref": "motorcycle_model",
        "refValue": "TVS",
        "refId": 1310
    },
    {
        "id": 1345,
        "name": "APACHE RTR 200 4V",
        "ref": "motorcycle_model",
        "refValue": "TVS",
        "refId": 1310
    },
    {
        "id": 1331,
        "name": "ATV 250",
        "ref": "motorcycle_model",
        "refValue": "Super Gato",
        "refId": 1309
    },
    {
        "id": 1052,
        "name": "Burgman",
        "ref": "motorcycle_model",
        "refValue": "Suzuki",
        "refId": 1040
    },
    {
        "id": 1332,
        "name": "BWS 150 RACING",
        "ref": "motorcycle_model",
        "refValue": "Super Gato",
        "refId": 1309
    },
    {
        "id": 1432,
        "name": "C600 Sport",
        "ref": "motorcycle_model",
        "refValue": "BMW",
        "refId": 1031
    },
    {
        "id": 1322,
        "name": "CG125/CG150 Clásico",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1333,
        "name": "CG 125 STANDARD",
        "ref": "motorcycle_model",
        "refValue": "Super Gato",
        "refId": 1309
    },
    {
        "id": 1334,
        "name": "CG 200 COLITA RACING",
        "ref": "motorcycle_model",
        "refValue": "Super Gato",
        "refId": 1309
    },
    {
        "id": 1335,
        "name": "CG 200 SE COLITA RACING",
        "ref": "motorcycle_model",
        "refValue": "Super Gato",
        "refId": 1309
    },
    {
        "id": 1336,
        "name": "CG 250 COLITA RACING",
        "ref": "motorcycle_model",
        "refValue": "Super Gato",
        "refId": 1309
    },
    {
        "id": 1337,
        "name": "CG 250 Racing",
        "ref": "motorcycle_model",
        "refValue": "Super Gato",
        "refId": 1309
    },
    {
        "id": 1338,
        "name": "CG 300 RACING",
        "ref": "motorcycle_model",
        "refValue": "Super Gato",
        "refId": 1309
    },
    {
        "id": 1053,
        "name": "Ciaz",
        "ref": "motorcycle_model",
        "refValue": "Suzuki",
        "refId": 1040
    },
    {
        "id": 1436,
        "name": "CR",
        "ref": "motorcycle_model",
        "refValue": "Honda",
        "refId": 1034
    },
    {
        "id": 1314,
        "name": "CR1s-200CC",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1320,
        "name": "CR5 Pro",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1318,
        "name": "CRX",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1321,
        "name": "CRX Eléctrico",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1054,
        "name": "Custom",
        "ref": "motorcycle_model",
        "refValue": "Harley Davidson",
        "refId": 1033
    },
    {
        "id": 1323,
        "name": "DS1 200",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1055,
        "name": "DT",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1056,
        "name": "Dyna Super Glide",
        "ref": "motorcycle_model",
        "refValue": "Harley Davidson",
        "refId": 1033
    },
    {
        "id": 1057,
        "name": "Equator",
        "ref": "motorcycle_model",
        "refValue": "Suzuki",
        "refId": 1040
    },
    {
        "id": 1058,
        "name": "F-800",
        "ref": "motorcycle_model",
        "refValue": "BMW",
        "refId": 1031
    },
    {
        "id": 1062,
        "name": "Fat Boy",
        "ref": "motorcycle_model",
        "refValue": "Harley Davidson",
        "refId": 1033
    },
    {
        "id": 1339,
        "name": "FLEX 130",
        "ref": "motorcycle_model",
        "refValue": "Super Gato",
        "refId": 1309
    },
    {
        "id": 1059,
        "name": "FLH",
        "ref": "motorcycle_model",
        "refValue": "Harley Davidson",
        "refId": 1033
    },
    {
        "id": 1060,
        "name": "FX",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1061,
        "name": "FZS",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1340,
        "name": "GATO 125",
        "ref": "motorcycle_model",
        "refValue": "Super Gato",
        "refId": 1309
    },
    {
        "id": 1063,
        "name": "GS",
        "ref": "motorcycle_model",
        "refValue": "BMW",
        "refId": 1031
    },
    {
        "id": 1341,
        "name": "GY 200",
        "ref": "motorcycle_model",
        "refValue": "Super Gato",
        "refId": 1309
    },
    {
        "id": 1316,
        "name": "JL150-58 (CR1-150)",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1064,
        "name": "Jog",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1350,
        "name": "KING 200",
        "ref": "motorcycle_model",
        "refValue": "TVS",
        "refId": 1310
    },
    {
        "id": 1065,
        "name": "Kizashi",
        "ref": "motorcycle_model",
        "refValue": "Suzuki",
        "refId": 1040
    },
    {
        "id": 1329,
        "name": "Luna",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1311,
        "name": "LX110-12A SPORT POWER",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1317,
        "name": "LX110-59 Panther",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1312,
        "name": "LX200GY-3 (Pruss)",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1315,
        "name": "LX200ZK-10",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1313,
        "name": "LX250GY-3 (SX2)",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1066,
        "name": "Maxam",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1437,
        "name": "Navi",
        "ref": "motorcycle_model",
        "refValue": "Honda",
        "refId": 1034
    },
    {
        "id": 1067,
        "name": "Ninja",
        "ref": "motorcycle_model",
        "refValue": "Kawasaki",
        "refId": 1035
    },
    {
        "id": 1565,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "TVS",
        "refId": 1310
    },
    {
        "id": 1068,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "Artic Cat",
        "refId": 1030
    },
    {
        "id": 1069,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "BMW",
        "refId": 1031
    },
    {
        "id": 1070,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "Ducati",
        "refId": 1032
    },
    {
        "id": 1071,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "Harley Davidson",
        "refId": 1033
    },
    {
        "id": 1072,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "Honda",
        "refId": 1034
    },
    {
        "id": 1073,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "Kawasaki",
        "refId": 1035
    },
    {
        "id": 1074,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "KTM",
        "refId": 1036
    },
    {
        "id": 1075,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "Polaris",
        "refId": 1038
    },
    {
        "id": 1076,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "Sherco",
        "refId": 1039
    },
    {
        "id": 1077,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "Suzuki",
        "refId": 1040
    },
    {
        "id": 1078,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "Triumph",
        "refId": 1041
    },
    {
        "id": 1079,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "Vespa",
        "refId": 1042
    },
    {
        "id": 1080,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1081,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "Otra",
        "refId": 1037
    },
    {
        "id": 1563,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1564,
        "name": "Otro",
        "ref": "motorcycle_model",
        "refValue": "Super Gato",
        "refId": 1309
    },
    {
        "id": 1082,
        "name": "Predator",
        "ref": "motorcycle_model",
        "refValue": "Polaris",
        "refId": 1038
    },
    {
        "id": 1083,
        "name": "Prowler",
        "ref": "motorcycle_model",
        "refValue": "Artic Cat",
        "refId": 1030
    },
    {
        "id": 1433,
        "name": "R 1250",
        "ref": "motorcycle_model",
        "refValue": "BMW",
        "refId": 1031
    },
    {
        "id": 1084,
        "name": "R 6",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1434,
        "name": "R75",
        "ref": "motorcycle_model",
        "refValue": "BMW",
        "refId": 1031
    },
    {
        "id": 1087,
        "name": "Raptor",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1088,
        "name": "Reno",
        "ref": "motorcycle_model",
        "refValue": "Suzuki",
        "refId": 1040
    },
    {
        "id": 1438,
        "name": "Repsol",
        "ref": "motorcycle_model",
        "refValue": "Honda",
        "refId": 1034
    },
    {
        "id": 1089,
        "name": "Road King",
        "ref": "motorcycle_model",
        "refValue": "Harley Davidson",
        "refId": 1033
    },
    {
        "id": 1085,
        "name": "ROCKER",
        "ref": "motorcycle_model",
        "refValue": "Harley Davidson",
        "refId": 1033
    },
    {
        "id": 1435,
        "name": "RR",
        "ref": "motorcycle_model",
        "refValue": "BMW",
        "refId": 1031
    },
    {
        "id": 1342,
        "name": "RS 150",
        "ref": "motorcycle_model",
        "refValue": "Super Gato",
        "refId": 1309
    },
    {
        "id": 1319,
        "name": "Runner 125",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1086,
        "name": "RZR",
        "ref": "motorcycle_model",
        "refValue": "Polaris",
        "refId": 1038
    },
    {
        "id": 1090,
        "name": "Scrambler",
        "ref": "motorcycle_model",
        "refValue": "Ducati",
        "refId": 1032
    },
    {
        "id": 1330,
        "name": "SM1",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1092,
        "name": "Softail",
        "ref": "motorcycle_model",
        "refValue": "Harley Davidson",
        "refId": 1033
    },
    {
        "id": 1346,
        "name": "SPORT 100",
        "ref": "motorcycle_model",
        "refValue": "TVS",
        "refId": 1310
    },
    {
        "id": 1347,
        "name": "STRYKER 125",
        "ref": "motorcycle_model",
        "refValue": "TVS",
        "refId": 1310
    },
    {
        "id": 1439,
        "name": "Super Cub",
        "ref": "motorcycle_model",
        "refValue": "Honda",
        "refId": 1034
    },
    {
        "id": 1328,
        "name": "SX3",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1093,
        "name": "Teryx",
        "ref": "motorcycle_model",
        "refValue": "Kawasaki",
        "refId": 1035
    },
    {
        "id": 1326,
        "name": "Travel 150",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1324,
        "name": "Turing LX150T-24",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": 1094,
        "name": "V Star",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1095,
        "name": "VX Cruiser",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1097,
        "name": "Wave Runner",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1348,
        "name": "WEGO",
        "ref": "motorcycle_model",
        "refValue": "TVS",
        "refId": 1310
    },
    {
        "id": 1098,
        "name": "Wildcat",
        "ref": "motorcycle_model",
        "refValue": "Artic Cat",
        "refId": 1030
    },
    {
        "id": 1096,
        "name": "WR",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1099,
        "name": "XL7",
        "ref": "motorcycle_model",
        "refValue": "Suzuki",
        "refId": 1040
    },
    {
        "id": 1440,
        "name": "XR",
        "ref": "motorcycle_model",
        "refValue": "Honda",
        "refId": 1034
    },
    {
        "id": 1100,
        "name": "YFZ 450 R",
        "ref": "motorcycle_model",
        "refValue": "Yamaha",
        "refId": 1043
    },
    {
        "id": 1349,
        "name": "ZEST",
        "ref": "motorcycle_model",
        "refValue": "TVS",
        "refId": 1310
    },
    {
        "id": 1325,
        "name": "ZX150",
        "ref": "motorcycle_model",
        "refValue": "Loncin",
        "refId": 1308
    },
    {
        "id": "recreation_car_brand",
        "name": "Marca",
        "required": true,
        "options": [
            {
                "id": 1233,
                "name": "Can-Am"
            },
            {
                "id": 1234,
                "name": "Hisun"
            },
            {
                "id": 1235,
                "name": "Hitachi"
            },
            {
                "id": 1236,
                "name": "Honda"
            },
            {
                "id": 1237,
                "name": "Kawasaki"
            },
            {
                "id": 1238,
                "name": "Polaris"
            },
            {
                "id": 1239,
                "name": "Yamaha"
            }
        ],
        "type": "Select"
    },
    {
        "id": "recreation_car_model",
        "name": "Modelo",
        "required": true,
        "dependOf": "recreation_car_brand",
        "options": [],
        "type": "Select"
    },
    {
        "id": 1240,
        "name": "250X",
        "ref": "recreation_car_model",
        "refValue": "Honda",
        "refId": 1236
    },
    {
        "id": 1241,
        "name": "Bruin",
        "ref": "recreation_car_model",
        "refValue": "Yamaha",
        "refId": 1239
    },
    {
        "id": 1242,
        "name": "Brute Force 300",
        "ref": "recreation_car_model",
        "refValue": "Kawasaki",
        "refId": 1237
    },
    {
        "id": 1243,
        "name": "Brute Force 750",
        "ref": "recreation_car_model",
        "refValue": "Kawasaki",
        "refId": 1237
    },
    {
        "id": 1244,
        "name": "Brutus",
        "ref": "recreation_car_model",
        "refValue": "Polaris",
        "refId": 1238
    },
    {
        "id": 1245,
        "name": "Commander",
        "ref": "recreation_car_model",
        "refValue": "Can-Am",
        "refId": 1233
    },
    {
        "id": 1246,
        "name": "Defender",
        "ref": "recreation_car_model",
        "refValue": "Can-Am",
        "refId": 1233
    },
    {
        "id": 1247,
        "name": "Defender DPS",
        "ref": "recreation_car_model",
        "refValue": "Can-Am",
        "refId": 1233
    },
    {
        "id": 1248,
        "name": "Defender Max",
        "ref": "recreation_car_model",
        "refValue": "Can-Am",
        "refId": 1233
    },
    {
        "id": 1249,
        "name": "Defender XT",
        "ref": "recreation_car_model",
        "refValue": "Can-Am",
        "refId": 1233
    },
    {
        "id": 1250,
        "name": "Foreman",
        "ref": "recreation_car_model",
        "refValue": "Honda",
        "refId": 1236
    },
    {
        "id": 1251,
        "name": "FourTrax",
        "ref": "recreation_car_model",
        "refValue": "Honda",
        "refId": 1236
    },
    {
        "id": 1252,
        "name": "Golf",
        "ref": "recreation_car_model",
        "refValue": "Hitachi",
        "refId": 1235
    },
    {
        "id": 1253,
        "name": "Grizzly",
        "ref": "recreation_car_model",
        "refValue": "Yamaha",
        "refId": 1239
    },
    {
        "id": 1254,
        "name": "Hawkeye",
        "ref": "recreation_car_model",
        "refValue": "Polaris",
        "refId": 1238
    },
    {
        "id": 1255,
        "name": "KFX 50",
        "ref": "recreation_car_model",
        "refValue": "Kawasaki",
        "refId": 1237
    },
    {
        "id": 1256,
        "name": "KFX 90",
        "ref": "recreation_car_model",
        "refValue": "Kawasaki",
        "refId": 1237
    },
    {
        "id": 1257,
        "name": "Kodiak",
        "ref": "recreation_car_model",
        "refValue": "Yamaha",
        "refId": 1239
    },
    {
        "id": 1258,
        "name": "Magnum",
        "ref": "recreation_car_model",
        "refValue": "Polaris",
        "refId": 1238
    },
    {
        "id": 1259,
        "name": "Maverick Sport",
        "ref": "recreation_car_model",
        "refValue": "Can-Am",
        "refId": 1233
    },
    {
        "id": 1260,
        "name": "Maverick Trail",
        "ref": "recreation_car_model",
        "refValue": "Can-Am",
        "refId": 1233
    },
    {
        "id": 1261,
        "name": "Maverick X3",
        "ref": "recreation_car_model",
        "refValue": "Can-Am",
        "refId": 1233
    },
    {
        "id": 1262,
        "name": "Mule",
        "ref": "recreation_car_model",
        "refValue": "Kawasaki",
        "refId": 1237
    },
    {
        "id": 1268,
        "name": "Otro",
        "ref": "recreation_car_model",
        "refValue": "Yamaha",
        "refId": 1239
    },
    {
        "id": 1567,
        "name": "Otro",
        "ref": "recreation_car_model",
        "refValue": "Kawasaki",
        "refId": 1237
    },
    {
        "id": 1263,
        "name": "Otro",
        "ref": "recreation_car_model",
        "refValue": "Hitachi",
        "refId": 1235
    },
    {
        "id": 1264,
        "name": "Otro",
        "ref": "recreation_car_model",
        "refValue": "Can-Am",
        "refId": 1233
    },
    {
        "id": 1265,
        "name": "Otro",
        "ref": "recreation_car_model",
        "refValue": "Hisun",
        "refId": 1234
    },
    {
        "id": 1266,
        "name": "Otro",
        "ref": "recreation_car_model",
        "refValue": "Honda",
        "refId": 1236
    },
    {
        "id": 1267,
        "name": "Otro",
        "ref": "recreation_car_model",
        "refValue": "Polaris",
        "refId": 1238
    },
    {
        "id": 1269,
        "name": "Outlander",
        "ref": "recreation_car_model",
        "refValue": "Can-Am",
        "refId": 1233
    },
    {
        "id": 1270,
        "name": "Outlaw",
        "ref": "recreation_car_model",
        "refValue": "Polaris",
        "refId": 1238
    },
    {
        "id": 1271,
        "name": "Phoenix 200",
        "ref": "recreation_car_model",
        "refValue": "Polaris",
        "refId": 1238
    },
    {
        "id": 1513,
        "name": "Pioneer",
        "ref": "recreation_car_model",
        "refValue": "Honda",
        "refId": 1236
    },
    {
        "id": 1274,
        "name": "Rancher",
        "ref": "recreation_car_model",
        "refValue": "Honda",
        "refId": 1236
    },
    {
        "id": 1275,
        "name": "Ranger",
        "ref": "recreation_car_model",
        "refValue": "Polaris",
        "refId": 1238
    },
    {
        "id": 1276,
        "name": "Raptor",
        "ref": "recreation_car_model",
        "refValue": "Yamaha",
        "refId": 1239
    },
    {
        "id": 1277,
        "name": "Recon",
        "ref": "recreation_car_model",
        "refValue": "Honda",
        "refId": 1236
    },
    {
        "id": 1278,
        "name": "Renegade",
        "ref": "recreation_car_model",
        "refValue": "Can-Am",
        "refId": 1233
    },
    {
        "id": 1279,
        "name": "Rincon",
        "ref": "recreation_car_model",
        "refValue": "Honda",
        "refId": 1236
    },
    {
        "id": 1272,
        "name": "R-SPEC",
        "ref": "recreation_car_model",
        "refValue": "Yamaha",
        "refId": 1239
    },
    {
        "id": 1280,
        "name": "Rubicon",
        "ref": "recreation_car_model",
        "refValue": "Honda",
        "refId": 1236
    },
    {
        "id": 1273,
        "name": "RZR",
        "ref": "recreation_car_model",
        "refValue": "Polaris",
        "refId": 1238
    },
    {
        "id": 1281,
        "name": "Scrambler",
        "ref": "recreation_car_model",
        "refValue": "Polaris",
        "refId": 1238
    },
    {
        "id": 1282,
        "name": "Slingshot",
        "ref": "recreation_car_model",
        "refValue": "Polaris",
        "refId": 1238
    },
    {
        "id": 1283,
        "name": "Spider",
        "ref": "recreation_car_model",
        "refValue": "Can-Am",
        "refId": 1233
    },
    {
        "id": 1284,
        "name": "Sportsman",
        "ref": "recreation_car_model",
        "refValue": "Polaris",
        "refId": 1238
    },
    {
        "id": 1514,
        "name": "Talon",
        "ref": "recreation_car_model",
        "refValue": "Honda",
        "refId": 1236
    },
    {
        "id": 1289,
        "name": "Teryx",
        "ref": "recreation_car_model",
        "refValue": "Kawasaki",
        "refId": 1237
    },
    {
        "id": 1290,
        "name": "Trail Blazer",
        "ref": "recreation_car_model",
        "refValue": "Polaris",
        "refId": 1238
    },
    {
        "id": 1291,
        "name": "Trail Boss",
        "ref": "recreation_car_model",
        "refValue": "Polaris",
        "refId": 1238
    },
    {
        "id": 1285,
        "name": "TRX250X",
        "ref": "recreation_car_model",
        "refValue": "Honda",
        "refId": 1236
    },
    {
        "id": 1286,
        "name": "TRX400X",
        "ref": "recreation_car_model",
        "refValue": "Honda",
        "refId": 1236
    },
    {
        "id": 1287,
        "name": "TRX450R",
        "ref": "recreation_car_model",
        "refValue": "Honda",
        "refId": 1236
    },
    {
        "id": 1288,
        "name": "TRX90X",
        "ref": "recreation_car_model",
        "refValue": "Honda",
        "refId": 1236
    },
    {
        "id": 1292,
        "name": "UTV",
        "ref": "recreation_car_model",
        "refValue": "Hisun",
        "refId": 1234
    },
    {
        "id": 1293,
        "name": "Viking",
        "ref": "recreation_car_model",
        "refValue": "Yamaha",
        "refId": 1239
    },
    {
        "id": 1294,
        "name": "Wolverine",
        "ref": "recreation_car_model",
        "refValue": "Yamaha",
        "refId": 1239
    },
    {
        "id": 1295,
        "name": "YFZ450R",
        "ref": "recreation_car_model",
        "refValue": "Yamaha",
        "refId": 1239
    },
    {
        "id": 1296,
        "name": "YFZ50",
        "ref": "recreation_car_model",
        "refValue": "Yamaha",
        "refId": 1239
    },
    {
        "id": 1298,
        "name": "Youth",
        "ref": "recreation_car_model",
        "refValue": "Can-Am",
        "refId": 1233
    },
    {
        "id": 1299,
        "name": "Youth",
        "ref": "recreation_car_model",
        "refValue": "Polaris",
        "refId": 1238
    },
    {
        "id": 1297,
        "name": "YXZ1000R",
        "ref": "recreation_car_model",
        "refValue": "Yamaha",
        "refId": 1239
    },
    {
        "id": "recreation_car_type",
        "name": "Tipo",
        "required": true,
        "options": [
            {
                "id": 45,
                "name": "4 Wheel"
            },
            {
                "id": 46,
                "name": "Buggy"
            },
            {
                "id": 47,
                "name": "Carro de golf"
            },
            {
                "id": 48,
                "name": "Go kart"
            },
            {
                "id": 49,
                "name": "Otro"
            }
        ],
        "type": "Select"
    },
    {
        "id": "semi_trailer_brand",
        "name": "Marca",
        "required": true,
        "options": [
            {
                "id": 1101,
                "name": "Blued Birt"
            },
            {
                "id": 1102,
                "name": "Bobcat"
            },
            {
                "id": 1103,
                "name": "Bross"
            },
            {
                "id": 1104,
                "name": "Case"
            },
            {
                "id": 1105,
                "name": "Caterpillar"
            },
            {
                "id": 1106,
                "name": "CDW"
            },
            {
                "id": 1353,
                "name": "Chevrolet"
            },
            {
                "id": 1107,
                "name": "Daihatsu"
            },
            {
                "id": 1108,
                "name": "Dynapac"
            },
            {
                "id": 1109,
                "name": "Elgin"
            },
            {
                "id": 1110,
                "name": "Fiat"
            },
            {
                "id": 1111,
                "name": "Ford"
            },
            {
                "id": 1112,
                "name": "Forland"
            },
            {
                "id": 1113,
                "name": "Freightliner"
            },
            {
                "id": 1114,
                "name": "GMC"
            },
            {
                "id": 1115,
                "name": "Hafei"
            },
            {
                "id": 1116,
                "name": "Hino"
            },
            {
                "id": 1351,
                "name": "Honda"
            },
            {
                "id": 1117,
                "name": "Hyundai"
            },
            {
                "id": 1118,
                "name": "Ingersoll Rand"
            },
            {
                "id": 1119,
                "name": "International"
            },
            {
                "id": 1120,
                "name": "Isuzu"
            },
            {
                "id": 1121,
                "name": "Iveco"
            },
            {
                "id": 1122,
                "name": "Jac"
            },
            {
                "id": 1123,
                "name": "JCB"
            },
            {
                "id": 1124,
                "name": "JMC"
            },
            {
                "id": 1125,
                "name": "Kia"
            },
            {
                "id": 1126,
                "name": "Kintgstar"
            },
            {
                "id": 1127,
                "name": "Mack"
            },
            {
                "id": 1357,
                "name": "Maxus"
            },
            {
                "id": 1128,
                "name": "Maxus"
            },
            {
                "id": 1352,
                "name": "Mazda"
            },
            {
                "id": 1129,
                "name": "Mercedes-Benz"
            },
            {
                "id": 1130,
                "name": "Mitsubishi"
            },
            {
                "id": 1131,
                "name": "New Holland"
            },
            {
                "id": 1132,
                "name": "Nissan"
            },
            {
                "id": 1133,
                "name": "Otra"
            },
            {
                "id": 1134,
                "name": "Peterbilt"
            },
            {
                "id": 1135,
                "name": "Scania"
            },
            {
                "id": 1136,
                "name": "Toyota"
            },
            {
                "id": 1137,
                "name": "Volkswagen"
            },
            {
                "id": 1138,
                "name": "Volvo"
            }
        ],
        "type": "Select"
    },
    {
        "id": "semi_trailer_model",
        "name": "Modelo",
        "required": true,
        "dependOf": "semi_trailer_brand",
        "options": [],
        "type": "Select"
    },
    {
        "id": 1139,
        "name": "1000",
        "ref": "semi_trailer_model",
        "refValue": "Ingersoll Rand",
        "refId": 1118
    },
    {
        "id": 1140,
        "name": "214-E",
        "ref": "semi_trailer_model",
        "refValue": "JCB",
        "refId": 1123
    },
    {
        "id": 1141,
        "name": "220",
        "ref": "semi_trailer_model",
        "refValue": "JCB",
        "refId": 1123
    },
    {
        "id": 1507,
        "name": "2425",
        "ref": "semi_trailer_model",
        "refValue": "Mercedes-Benz",
        "refId": 1129
    },
    {
        "id": 1142,
        "name": "416C",
        "ref": "semi_trailer_model",
        "refValue": "Caterpillar",
        "refId": 1105
    },
    {
        "id": 1143,
        "name": "420D",
        "ref": "semi_trailer_model",
        "refValue": "Caterpillar",
        "refId": 1105
    },
    {
        "id": 1144,
        "name": "4300",
        "ref": "semi_trailer_model",
        "refValue": "International",
        "refId": 1119
    },
    {
        "id": 1145,
        "name": "430D",
        "ref": "semi_trailer_model",
        "refValue": "Caterpillar",
        "refId": 1105
    },
    {
        "id": 1146,
        "name": "4400",
        "ref": "semi_trailer_model",
        "refValue": "International",
        "refId": 1119
    },
    {
        "id": 1147,
        "name": "4700",
        "ref": "semi_trailer_model",
        "refValue": "International",
        "refId": 1119
    },
    {
        "id": 1148,
        "name": "4900",
        "ref": "semi_trailer_model",
        "refValue": "International",
        "refId": 1119
    },
    {
        "id": 1149,
        "name": "717",
        "ref": "semi_trailer_model",
        "refValue": "CDW",
        "refId": 1106
    },
    {
        "id": 1150,
        "name": "773",
        "ref": "semi_trailer_model",
        "refValue": "Bobcat",
        "refId": 1102
    },
    {
        "id": 1490,
        "name": "7810",
        "ref": "semi_trailer_model",
        "refValue": "Ford",
        "refId": 1111
    },
    {
        "id": 1151,
        "name": "821 C",
        "ref": "semi_trailer_model",
        "refValue": "Case",
        "refId": 1104
    },
    {
        "id": 1152,
        "name": "928G",
        "ref": "semi_trailer_model",
        "refValue": "Caterpillar",
        "refId": 1105
    },
    {
        "id": 1153,
        "name": "Acadia",
        "ref": "semi_trailer_model",
        "refValue": "GMC",
        "refId": 1114
    },
    {
        "id": 1491,
        "name": "Acty",
        "ref": "semi_trailer_model",
        "refValue": "Honda",
        "refId": 1351
    },
    {
        "id": 1492,
        "name": "Aero",
        "ref": "semi_trailer_model",
        "refValue": "Hyundai",
        "refId": 1117
    },
    {
        "id": 1493,
        "name": "Aero Space",
        "ref": "semi_trailer_model",
        "refValue": "Hyundai",
        "refId": 1117
    },
    {
        "id": 1508,
        "name": "Atego",
        "ref": "semi_trailer_model",
        "refValue": "Mercedes-Benz",
        "refId": 1129
    },
    {
        "id": 1509,
        "name": "ATLAS",
        "ref": "semi_trailer_model",
        "refValue": "Nissan",
        "refId": 1132
    },
    {
        "id": 1154,
        "name": "B-95",
        "ref": "semi_trailer_model",
        "refValue": "New Holland",
        "refId": 1131
    },
    {
        "id": 1155,
        "name": "BJ",
        "ref": "semi_trailer_model",
        "refValue": "Forland",
        "refId": 1112
    },
    {
        "id": 1505,
        "name": "Bongo",
        "ref": "semi_trailer_model",
        "refValue": "Mazda",
        "refId": 1352
    },
    {
        "id": 1157,
        "name": "C-25",
        "ref": "semi_trailer_model",
        "refValue": "Dynapac",
        "refId": 1108
    },
    {
        "id": 1396,
        "name": "C35",
        "ref": "semi_trailer_model",
        "refValue": "Maxus",
        "refId": 1357
    },
    {
        "id": 1156,
        "name": "C 7500",
        "ref": "semi_trailer_model",
        "refValue": "GMC",
        "refId": 1114
    },
    {
        "id": 1160,
        "name": "Cabezote",
        "ref": "semi_trailer_model",
        "refValue": "Mack",
        "refId": 1127
    },
    {
        "id": 1494,
        "name": "Cama Larga",
        "ref": "semi_trailer_model",
        "refValue": "Hyundai",
        "refId": 1117
    },
    {
        "id": 1161,
        "name": "Camion",
        "ref": "semi_trailer_model",
        "refValue": "Mack",
        "refId": 1127
    },
    {
        "id": 1158,
        "name": "CH-600",
        "ref": "semi_trailer_model",
        "refValue": "Mack",
        "refId": 1127
    },
    {
        "id": 1510,
        "name": "clipper",
        "ref": "semi_trailer_model",
        "refValue": "Nissan",
        "refId": 1132
    },
    {
        "id": 1162,
        "name": "Coaster",
        "ref": "semi_trailer_model",
        "refValue": "Toyota",
        "refId": 1136
    },
    {
        "id": 1495,
        "name": "County",
        "ref": "semi_trailer_model",
        "refValue": "Hyundai",
        "refId": 1117
    },
    {
        "id": 1159,
        "name": "CS",
        "ref": "semi_trailer_model",
        "refValue": "Mack",
        "refId": 1127
    },
    {
        "id": 1163,
        "name": "D8N",
        "ref": "semi_trailer_model",
        "refValue": "Caterpillar",
        "refId": 1105
    },
    {
        "id": 1164,
        "name": "D8R",
        "ref": "semi_trailer_model",
        "refValue": "Caterpillar",
        "refId": 1105
    },
    {
        "id": 1165,
        "name": "DA 28",
        "ref": "semi_trailer_model",
        "refValue": "Ingersoll Rand",
        "refId": 1118
    },
    {
        "id": 1166,
        "name": "DD 110",
        "ref": "semi_trailer_model",
        "refValue": "Ingersoll Rand",
        "refId": 1118
    },
    {
        "id": 1168,
        "name": "DM-6865",
        "ref": "semi_trailer_model",
        "refValue": "Mack",
        "refId": 1127
    },
    {
        "id": 1167,
        "name": "DM 690 sx",
        "ref": "semi_trailer_model",
        "refValue": "Mack",
        "refId": 1127
    },
    {
        "id": 1169,
        "name": "DMAX",
        "ref": "semi_trailer_model",
        "refValue": "Isuzu",
        "refId": 1120
    },
    {
        "id": 1512,
        "name": "Dyna",
        "ref": "semi_trailer_model",
        "refValue": "Toyota",
        "refId": 1136
    },
    {
        "id": 1170,
        "name": "Endeavor",
        "ref": "semi_trailer_model",
        "refValue": "Mitsubishi",
        "refId": 1130
    },
    {
        "id": 1496,
        "name": "EX9",
        "ref": "semi_trailer_model",
        "refValue": "Hyundai",
        "refId": 1117
    },
    {
        "id": 1171,
        "name": "FG",
        "ref": "semi_trailer_model",
        "refValue": "Hino",
        "refId": 1116
    },
    {
        "id": 1172,
        "name": "Fuso",
        "ref": "semi_trailer_model",
        "refValue": "Mitsubishi",
        "refId": 1130
    },
    {
        "id": 1173,
        "name": "G10",
        "ref": "semi_trailer_model",
        "refValue": "Maxus",
        "refId": 1128
    },
    {
        "id": 1503,
        "name": "Granbird",
        "ref": "semi_trailer_model",
        "refValue": "Kia",
        "refId": 1125
    },
    {
        "id": 1174,
        "name": "Granite",
        "ref": "semi_trailer_model",
        "refValue": "Mack",
        "refId": 1127
    },
    {
        "id": 1497,
        "name": "H-100",
        "ref": "semi_trailer_model",
        "refValue": "Hyundai",
        "refId": 1117
    },
    {
        "id": 1498,
        "name": "H350",
        "ref": "semi_trailer_model",
        "refValue": "Hyundai",
        "refId": 1117
    },
    {
        "id": 1499,
        "name": "HD",
        "ref": "semi_trailer_model",
        "refValue": "Hyundai",
        "refId": 1117
    },
    {
        "id": 1175,
        "name": "HFC",
        "ref": "semi_trailer_model",
        "refValue": "Jac",
        "refId": 1122
    },
    {
        "id": 1504,
        "name": "K2700",
        "ref": "semi_trailer_model",
        "refValue": "Kia",
        "refId": 1125
    },
    {
        "id": 1489,
        "name": "Labo",
        "ref": "semi_trailer_model",
        "refValue": "Chevrolet",
        "refId": 1353
    },
    {
        "id": 1176,
        "name": "Mariner",
        "ref": "semi_trailer_model",
        "refValue": null,
        "refId": null
    },
    {
        "id": 1500,
        "name": "Mighty",
        "ref": "semi_trailer_model",
        "refValue": "Hyundai",
        "refId": 1117
    },
    {
        "id": 1177,
        "name": "Minyi",
        "ref": "semi_trailer_model",
        "refValue": "Hafei",
        "refId": 1115
    },
    {
        "id": 1178,
        "name": "Mux",
        "ref": "semi_trailer_model",
        "refValue": "Isuzu",
        "refId": 1120
    },
    {
        "id": 1179,
        "name": "NPR",
        "ref": "semi_trailer_model",
        "refValue": "Isuzu",
        "refId": 1120
    },
    {
        "id": 1569,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Honda",
        "refId": 1351
    },
    {
        "id": 1180,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Blued Birt",
        "refId": 1101
    },
    {
        "id": 1181,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Bobcat",
        "refId": 1102
    },
    {
        "id": 1182,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Bross",
        "refId": 1103
    },
    {
        "id": 1183,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Case",
        "refId": 1104
    },
    {
        "id": 1184,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Caterpillar",
        "refId": 1105
    },
    {
        "id": 1185,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "CDW",
        "refId": 1106
    },
    {
        "id": 1186,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Daihatsu",
        "refId": 1107
    },
    {
        "id": 1187,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Dynapac",
        "refId": 1108
    },
    {
        "id": 1188,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Elgin",
        "refId": 1109
    },
    {
        "id": 1189,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Fiat",
        "refId": 1110
    },
    {
        "id": 1190,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Ford",
        "refId": 1111
    },
    {
        "id": 1191,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Forland",
        "refId": 1112
    },
    {
        "id": 1192,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Freightliner",
        "refId": 1113
    },
    {
        "id": 1193,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "GMC",
        "refId": 1114
    },
    {
        "id": 1194,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Hafei",
        "refId": 1115
    },
    {
        "id": 1195,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Hino",
        "refId": 1116
    },
    {
        "id": 1196,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Hyundai",
        "refId": 1117
    },
    {
        "id": 1197,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Ingersoll Rand",
        "refId": 1118
    },
    {
        "id": 1198,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "International",
        "refId": 1119
    },
    {
        "id": 1199,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Isuzu",
        "refId": 1120
    },
    {
        "id": 1200,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Iveco",
        "refId": 1121
    },
    {
        "id": 1201,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Jac",
        "refId": 1122
    },
    {
        "id": 1202,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "JCB",
        "refId": 1123
    },
    {
        "id": 1203,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "JMC",
        "refId": 1124
    },
    {
        "id": 1204,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Kia",
        "refId": 1125
    },
    {
        "id": 1205,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Kintgstar",
        "refId": 1126
    },
    {
        "id": 1206,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Mack",
        "refId": 1127
    },
    {
        "id": 1207,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Maxus",
        "refId": 1128
    },
    {
        "id": 1208,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Mercedes-Benz",
        "refId": 1129
    },
    {
        "id": 1209,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Mitsubishi",
        "refId": 1130
    },
    {
        "id": 1210,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "New Holland",
        "refId": 1131
    },
    {
        "id": 1211,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Nissan",
        "refId": 1132
    },
    {
        "id": 1212,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Peterbilt",
        "refId": 1134
    },
    {
        "id": 1213,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Scania",
        "refId": 1135
    },
    {
        "id": 1214,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Toyota",
        "refId": 1136
    },
    {
        "id": 1215,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Volkswagen",
        "refId": 1137
    },
    {
        "id": 1216,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Volvo",
        "refId": 1138
    },
    {
        "id": 1217,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Otra",
        "refId": 1133
    },
    {
        "id": 1568,
        "name": "Otro",
        "ref": "semi_trailer_model",
        "refValue": "Chevrolet",
        "refId": 1353
    },
    {
        "id": 1219,
        "name": "Palla",
        "ref": "semi_trailer_model",
        "refValue": "Kintgstar",
        "refId": 1126
    },
    {
        "id": 1220,
        "name": "Pelican",
        "ref": "semi_trailer_model",
        "refValue": "Elgin",
        "refId": 1109
    },
    {
        "id": 1218,
        "name": "PINNACLE",
        "ref": "semi_trailer_model",
        "refValue": "Mack",
        "refId": 1127
    },
    {
        "id": 1501,
        "name": "Porter",
        "ref": "semi_trailer_model",
        "refValue": "Hyundai",
        "refId": 1117
    },
    {
        "id": 1221,
        "name": "Power Daily",
        "ref": "semi_trailer_model",
        "refValue": "Iveco",
        "refId": 1121
    },
    {
        "id": 1222,
        "name": "RB",
        "ref": "semi_trailer_model",
        "refValue": "Mack",
        "refId": 1127
    },
    {
        "id": 1223,
        "name": "RD",
        "ref": "semi_trailer_model",
        "refValue": "Mack",
        "refId": 1127
    },
    {
        "id": 1224,
        "name": "Renault",
        "ref": "semi_trailer_model",
        "refValue": "Mack",
        "refId": 1127
    },
    {
        "id": 1225,
        "name": "S2",
        "ref": "semi_trailer_model",
        "refValue": "Jac",
        "refId": 1122
    },
    {
        "id": 1226,
        "name": "S3",
        "ref": "semi_trailer_model",
        "refValue": "Jac",
        "refId": 1122
    },
    {
        "id": 1506,
        "name": "Scrum",
        "ref": "semi_trailer_model",
        "refValue": "Mazda",
        "refId": 1352
    },
    {
        "id": 1227,
        "name": "SP 400",
        "ref": "semi_trailer_model",
        "refValue": "Bross",
        "refId": 1103
    },
    {
        "id": 1228,
        "name": "T6",
        "ref": "semi_trailer_model",
        "refValue": "Jac",
        "refId": 1122
    },
    {
        "id": 1511,
        "name": "UD",
        "ref": "semi_trailer_model",
        "refValue": "Nissan",
        "refId": 1132
    },
    {
        "id": 1229,
        "name": "V80",
        "ref": "semi_trailer_model",
        "refValue": "Maxus",
        "refId": 1128
    },
    {
        "id": 1395,
        "name": "V80 chasis cabina",
        "ref": "semi_trailer_model",
        "refValue": "Maxus",
        "refId": 1357
    },
    {
        "id": 1230,
        "name": "Vision",
        "ref": "semi_trailer_model",
        "refValue": "Mack",
        "refId": 1127
    },
    {
        "id": 1502,
        "name": "VOLTEO",
        "ref": "semi_trailer_model",
        "refValue": "Hyundai",
        "refId": 1117
    },
    {
        "id": 1231,
        "name": "WU-300 L",
        "ref": "semi_trailer_model",
        "refValue": "Hino",
        "refId": 1116
    },
    {
        "id": 1232,
        "name": "Yukon",
        "ref": "semi_trailer_model",
        "refValue": "GMC",
        "refId": 1114
    },
    {
        "id": "semi_trailer_type",
        "name": "Tipo",
        "required": true,
        "options": [
            {
                "id": 50,
                "name": "Autobús"
            },
            {
                "id": 51,
                "name": "Camión"
            },
            {
                "id": 52,
                "name": "Grúa"
            },
            {
                "id": 56,
                "name": "Otro"
            },
            {
                "id": 53,
                "name": "Pala mecánica"
            },
            {
                "id": 54,
                "name": "Retroexcavadora"
            },
            {
                "id": 55,
                "name": "Tractor"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_mileage",
        "name": "Kilometraje",
        "required": true,
        "options": [],
        "type": "Number"
    },
    {
        "id": "car_fuel",
        "name": "Combustible",
        "required": true,
        "options": [
            {
                "id": 66,
                "name": "Diesel"
            },
            {
                "id": 67,
                "name": "Eléctrico"
            },
            {
                "id": 68,
                "name": "Gas"
            },
            {
                "id": 69,
                "name": "Gasolina"
            },
            {
                "id": 70,
                "name": "Híbrido"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_transmission",
        "name": "Transmisión",
        "required": true,
        "options": [
            {
                "id": 71,
                "name": "Automática"
            },
            {
                "id": 72,
                "name": "Manual"
            },
            {
                "id": 73,
                "name": "Sincronizada"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_traction",
        "name": "Tracción",
        "options": [
            {
                "id": 74,
                "name": "2WD"
            },
            {
                "id": 75,
                "name": "4WD"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_external_color",
        "name": "Color exterior",
        "required": true,
        "options": [
            {
                "id": 76,
                "name": "Amarillo"
            },
            {
                "id": 77,
                "name": "Azul"
            },
            {
                "id": 78,
                "name": "Blanco"
            },
            {
                "id": 79,
                "name": "Crema"
            },
            {
                "id": 80,
                "name": "Dorado"
            },
            {
                "id": 81,
                "name": "Gris"
            },
            {
                "id": 82,
                "name": "Marrón"
            },
            {
                "id": 83,
                "name": "Morado"
            },
            {
                "id": 84,
                "name": "Naranja"
            },
            {
                "id": 85,
                "name": "Negro"
            },
            {
                "id": 86,
                "name": "Otro"
            },
            {
                "id": 87,
                "name": "Rojo"
            },
            {
                "id": 88,
                "name": "Verde"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_internal_color",
        "name": "Color interior",
        "required": true,
        "options": [
            {
                "id": 89,
                "name": "Amarillo"
            },
            {
                "id": 90,
                "name": "Azul"
            },
            {
                "id": 91,
                "name": "Blanco"
            },
            {
                "id": 92,
                "name": "Crema"
            },
            {
                "id": 93,
                "name": "Dorado"
            },
            {
                "id": 94,
                "name": "Gris"
            },
            {
                "id": 95,
                "name": "Marrón"
            },
            {
                "id": 96,
                "name": "Morado"
            },
            {
                "id": 97,
                "name": "Naranja"
            },
            {
                "id": 98,
                "name": "Negro"
            },
            {
                "id": 99,
                "name": "Otro"
            },
            {
                "id": 100,
                "name": "Rojo"
            },
            {
                "id": 101,
                "name": "Verde"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_doors",
        "name": "Cantidad de puertas",
        "options": [],
        "type": "Number"
    },
    {
        "id": "car_engine_cc",
        "name": "Motor/CC",
        "options": [],
        "type": "Number"
    },
    {
        "id": "car_cylinder",
        "name": "Cilindros",
        "options": [
            {
                "id": 1800,
                "name": "10"
            },
            {
                "id": 1801,
                "name": "12"
            },
            {
                "id": 1796,
                "name": "3"
            },
            {
                "id": 1797,
                "name": "4"
            },
            {
                "id": 1798,
                "name": "6"
            },
            {
                "id": 1799,
                "name": "8"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_has_unique_owner",
        "name": "Único dueño",
        "options": [
            {
                "id": 2,
                "name": "No"
            },
            {
                "id": 1,
                "name": "Sí"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_has_air_conditioner",
        "name": "Aire acondicionado",
        "options": [
            {
                "id": 4,
                "name": "No"
            },
            {
                "id": 3,
                "name": "Sí"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_has_rear_wiper",
        "name": "Limpia vidrios trasero",
        "options": [
            {
                "id": 6,
                "name": "No"
            },
            {
                "id": 5,
                "name": "Sí"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_has_factory_painting",
        "name": "Pintura de fábrica",
        "options": [
            {
                "id": 8,
                "name": "No"
            },
            {
                "id": 7,
                "name": "Sí"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_has_automatic_windows",
        "name": "Vidrios eléctrico",
        "options": [
            {
                "id": 10,
                "name": "No"
            },
            {
                "id": 9,
                "name": "Sí"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_has_factory_rims",
        "name": "Aros de fábrica",
        "options": [
            {
                "id": 12,
                "name": "No"
            },
            {
                "id": 11,
                "name": "Sí"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_headlights",
        "name": "Faros",
        "options": [
            {
                "id": 102,
                "name": "Halógeno"
            },
            {
                "id": 103,
                "name": "Xenón"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_has_alarm",
        "name": "Alarma",
        "options": [
            {
                "id": 14,
                "name": "No"
            },
            {
                "id": 13,
                "name": "Sí"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_has_airbags",
        "name": "Bolsas de aire",
        "options": [
            {
                "id": 18,
                "name": "No"
            },
            {
                "id": 17,
                "name": "Sí"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_has_leather_seats",
        "name": "Asientos en piel",
        "options": [
            {
                "id": 20,
                "name": "No"
            },
            {
                "id": 19,
                "name": "Sí"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_has_am_fm_radio",
        "name": "Radio AM/FM",
        "options": [
            {
                "id": 22,
                "name": "No"
            },
            {
                "id": 21,
                "name": "Sí"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_has_cd_player",
        "name": "Reproductor de CD",
        "options": [
            {
                "id": 24,
                "name": "No"
            },
            {
                "id": 23,
                "name": "Sí"
            }
        ],
        "type": "Select"
    },
    {
        "id": "car_has_bluetooth_player",
        "name": "Reproductor Bluetooth",
        "options": [
            {
                "id": 26,
                "name": "No"
            },
            {
                "id": 25,
                "name": "Sí"
            }
        ],
        "type": "Select"
    },
    {
        "id": "has_delivery",
        "name": "Entrega a domicilio",
        "required": true,
        "options": [
            {
                "id": 16,
                "name": "No"
            },
            {
                "id": 15,
                "name": "Sí"
            }
        ],
        "type": "Select"
    },
    {
        "id": "size_in_feet",
        "name": "Tamaño en pies",
        "options": [],
        "type": "Number"
    },
    {
        "id": "btu",
        "name": "BTU",
        "options": [],
        "type": "Number"
    },
    {
        "id": "beauty_product_type",
        "name": "Tipo",
        "options": [
            {
                "id": 104,
                "name": "Cosmiatría"
            },
            {
                "id": 106,
                "name": "Cuidado de la piel"
            },
            {
                "id": 107,
                "name": "Cuidado del cabello"
            },
            {
                "id": 105,
                "name": "Cuidado oral"
            },
            {
                "id": 108,
                "name": "Cuidado personal"
            },
            {
                "id": 109,
                "name": "Herramientas y accesorios"
            },
            {
                "id": 110,
                "name": "Maquillaje"
            },
            {
                "id": 111,
                "name": "Otro"
            }
        ],
        "type": "Select"
    },
    {
        "id": "is_cv_reception_enabled",
        "name": "Deseas recibir CV",
        "options": [
            {
                "id": 1808,
                "name": "No"
            },
            {
                "id": 1807,
                "name": "Sí"
            }
        ],
        "type": "Select"
    },
    {
        "id": "catFriendly",
        "name": "Gatos permitidos",
        "type": "Select",
        "options": [
            {
                "id": 1808,
                "name": "No"
            },
            {
                "id": 1807,
                "name": "Sí"
            }
        ]
    },
    {
        "id": "dogFriendly",
        "name": "Perros permitidos",
        "type": "Select",
        "options": [
            {
                "id": 1808,
                "name": "No"
            },
            {
                "id": 1807,
                "name": "Sí"
            }
        ]
    },
    {
        "id": "heatingType",
        "name": "Tipo de calefacción",
        "type": "Select",
        "options": [
            {
                "id": "central",
                "name": "calefacción central"
            },
            {
                "id": "electric",
                "name": "calefacción eléctrica"
            },
            {
                "id": "gas",
                "name": "calefacción a gas"
            },
            {
                "id": "available",
                "name": "calefacción disponible"
            },
            {
                "id": "none",
                "name": "Ninguno"
            }
        ]
    },
    {
        "id": "acType",
        "name": "Tipo de aire acondicionado",
        "type": "Select",
        "options": [
            {
                "id": "central",
                "name": "aire acondicionado central"
            },
            {
                "id": "available",
                "name": "aire acondicionado disponible"
            },
            {
                "id": "none",
                "name": "Ninguno"
            }
        ]
    },
    {
        "id": "laundryType",
        "name": "Tipo de lavandería",
        "type": "Select",
        "options": [
            {
                "id": "in_unit",
                "name": "Lavadero en la unidad"
            },
            {
                "id": "in_building",
                "name": "Lavadero en el edificio"
            },
            {
                "id": "available",
                "name": "Lavadero disponible"
            },
            {
                "id": "none",
                "name": "Ninguno"
            }
        ]
    },
    {
        "id": "titleStatus",
        "name": "Estado del Título",
        "value": "CLEAN",
        "type": "Boolean"
    },
    {
        "id": "is_inicial",
        "name": "Inicial",
        "type": "Boolean"
    },
    {
        "id": "numeracion",
        "name": "Numeración",
        "type": "Number"
    }
]