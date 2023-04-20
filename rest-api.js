/* ------------------------------ */
/* FREE IP INFO API THIRD PARTIES */
/* ------------------------------ */
// -> https://ipapi.co/json
// -> https://ipinfo.io/json
// -> https://get.geojs.io/v1/ip/country.json

/* ------------------- */
/* ACCESS DENIED ERROR */
/* ------------------- */
function display_access_denied_error() {
window.location.assign("/404.php")
}

/* ------------------------- */
/* BLOCK BLACKLIST COUNTRIES */
/* ------------------------- */
function block_blacklist_countries() {
    // Blacklist countries
    const blacklist_countries = [
"CN", // CHINA
"JP", // JAPAN
"DE", // GERMANY
"KR", // KOREA REPUBLIC OF
"BR", // BRAZIL
"FR", // FRANCE
"CA", // CANADA
"IT", // ITALY
"AU", // AUSTRALIA
"NL", // NETHERLANDS
"IN", // INDIA
"RU", // RUSSIAN FEDERATION
"TW", // TAIWAN PROVINCE OF CHINA
"ES", // SPAIN
"SE", // SWEDEN
"MX", // MEXICO
"ZA", // SOUTH AFRICA
"CH", // SWITZERLAND
"EG", // EGYPT
"PL", // POLAND
"HK", // HONG KONG
"AR", // ARGENTINA
"SG", // SINGAPORE
"CO", // COLOMBIA
"TR", // TURKEY
"VN", // VIET NAM
"NO", // NORWAY
"FI", // FINLAND
"IE", // IRELAND
"BE", // BELGIUM
"DK", // DENMARK
"IR", // IRAN ISLAMIC REPUBLIC OF
"MA", // MOROCCO
"AT", // AUSTRIA
"UA", // UKRAINE
"SA", // SAUDI ARABIA
"CL", // CHILE
"TH", // THAILAND
"CZ", // CZECH REPUBLIC
"IL", // ISRAEL
"TN", // TUNISIA
"RO", // ROMANIA
"NZ", // NEW ZEALAND
"VE", // VENEZUELA BOLIVARIAN REPUBLIC OF
"MY", // MALAYSIA
"PT", // PORTUGAL
"MU", // MAURITIUS
"PH", // PHILIPPINES
"KE", // KENYA
"PK", // PAKISTAN
"HU", // HUNGARY
"GR", // GREECE
"DZ", // ALGERIA
"BG", // BULGARIA
"AE", // UNITED ARAB EMIRATES
"PE", // PERU
"KZ", // KAZAKHSTAN
"NG", // NIGERIA
"LT", // LITHUANIA
"SK", // SLOVAKIA
"EC", // ECUADOR
"SI", // SLOVENIA
"UY", // URUGUAY
"RS", // SERBIA
"HR", // CROATIA
"CR", // COSTA RICA
"GH", // GHANA
"KW", // KUWAIT
"LV", // LATVIA
"SD", // SUDAN
"BY", // BELARUS
"BD", // BANGLADESH
"PA", // PANAMA
"ZM", // ZAMBIA
"CI", // COTE D'IVOIRE
"DO", // DOMINICAN REPUBLIC
"LU", // LUXEMBOURG
"EE", // ESTONIA
"UG", // UGANDA
"SY", // SYRIAN ARAB REPUBLIC
"PR", // PUERTO RICO
"GE", // GEORGIA
"AO", // ANGOLA
"PY", // PARAGUAY
"MD", // MOLDOVA REPUBLIC OF
"BO", // BOLIVIA PLURINATIONAL STATE OF
"TZ", // TANZANIA UNITED REPUBLIC OF
"OM", // OMAN
"QA", // QATAR
"CY", // CYPRUS
"BH", // BAHRAIN
"IS", // ICELAND
"PS", // PALESTINE STATE OF
"IQ", // IRAQ
"BA", // BOSNIA AND HERZEGOVINA
"AZ", // AZERBAIJAN
"MK", // NORTH MACEDONIA
"JO", // JORDAN
"SV", // EL SALVADOR
"MT", // MALTA
"CM", // CAMEROON
"GT", // GUATEMALA
"AM", // ARMENIA
"LB", // LEBANON
"NP", // NEPAL
"LK", // SRI LANKA
"MG", // MADAGASCAR
"MW", // MALAWI
"TT", // TRINIDAD AND TOBAGO
"RE", // REUNION
"HN", // HONDURAS
"GA", // GABON
"MZ", // MOZAMBIQUE
"KH", // CAMBODIA
"NA", // NAMIBIA
"NI", // NICARAGUA
"LY", // LIBYA
"SN", // SENEGAL
"MO", // MACAO
"AL", // ALBANIA
"SC", // SEYCHELLES
"ET", // ETHIOPIA
"TG", // TOGO
"UZ", // UZBEKISTAN
"BF", // BURKINA FASO
"RW", // RWANDA
"JM", // JAMAICA
"KG", // KYRGYZSTAN
"GM", // GAMBIA
"CU", // CUBA
"GU", // GUAM
"AF", // AFGHANISTAN
"YE", // YEMEN
"MM", // MYANMAR
"BN", // BRUNEI DARUSSALAM
"MN", // MONGOLIA
"GP", // GUADELOUPE
"ME", // MONTENEGRO
"CD", // CONGO THE DEMOCRATIC REPUBLIC OF THE
"CW", // CURACAO
"BW", // BOTSWANA
"ZW", // ZIMBABWE
"MQ", // MARTINIQUE
"NC", // NEW CALEDONIA
"HT", // HAITI
"BS", // BAHAMAS
"BJ", // BENIN
"CG", // CONGO
"FJ", // FIJI
"BB", // BARBADOS
"BZ", // BELIZE
"LS", // LESOTHO
"VI", // VIRGIN ISLANDS U.S.
"AW", // ARUBA
"BM", // BERMUDA
"IM", // ISLE OF MAN
"LI", // LIECHTENSTEIN
"SL", // SIERRA LEONE
"LR", // LIBERIA
"GF", // FRENCH GUIANA
"MV", // MALDIVES
"ML", // MALI
"LA", // LAO PEOPLE'S DEMOCRATIC REPUBLIC
"JE", // JERSEY
"TJ", // TAJIKISTAN
"GI", // GIBRALTAR
"SR", // SURINAME
"PG", // PAPUA NEW GUINEA
"PF", // FRENCH POLYNESIA
"GY", // GUYANA
"GG", // GUERNSEY
"DJ", // DJIBOUTI
"KY", // CAYMAN ISLANDS
"VG", // VIRGIN ISLANDS BRITISH
"AD", // ANDORRA
"MC", // MONACO
"SZ", // ESWATINI
"SO", // SOMALIA
"MR", // MAURITANIA
"AX", // ALAND ISLANDS
"FO", // FAROE ISLANDS
"NE", // NIGER
"AG", // ANTIGUA AND BARBUDA
"SM", // SAN MARINO
"BI", // BURUNDI
"BT", // BHUTAN
"KN", // SAINT KITTS AND NEVIS
"LC", // SAINT LUCIA
"GN", // GUINEA
"SX", // SINT MAARTEN (DUTCH PART)
"MF", // SAINT MARTIN (FRENCH PART)
"GL", // GREENLAND
"DM", // DOMINICA
"CV", // CABO VERDE
"GD", // GRENADA
"BQ", // BONAIRE SINT EUSTATIUS AND SABA
"YT", // MAYOTTE
"TD", // CHAD
"TM", // TURKMENISTAN
"SS", // SOUTH SUDAN
"VC", // SAINT VINCENT AND THE GRENADINES
"GQ", // EQUATORIAL GUINEA
"WS", // SAMOA
"VU", // VANUATU
"TL", // TIMOR-LESTE
"MP", // NORTHERN MARIANA ISLANDS
"SB", // SOLOMON ISLANDS
"TC", // TURKS AND CAICOS ISLANDS
"VA", // HOLY SEE
"TO", // TONGA
"ST", // SAO TOME AND PRINCIPE
"FM", // MICRONESIA FEDERATED STATES OF
"NR", // NAURU
"AI", // ANGUILLA
"TV", // TUVALU
"CK", // COOK ISLANDS
"KM", // COMOROS
"PW", // PALAU
"AS", // AMERICAN SAMOA
"CF", // CENTRAL AFRICAN REPUBLIC
"GW", // GUINEA-BISSAU
"FK", // FALKLAND ISLANDS (MALVINAS)
"KI", // KIRIBATI
"PM", // SAINT PIERRE AND MIQUELON
"MH", // MARSHALL ISLANDS
"ER", // ERITREA
"KP", // KOREA DEMOCRATIC PEOPLE'S REPUBLIC OF
"WF", // WALLIS AND FUTUNA
"IO", // BRITISH INDIAN OCEAN TERRITORY
"MS", // MONTSERRAT
"TK", // TOKELAU
"BL", // SAINT BARTHELEMY
"NF", // NORFOLK ISLAND
"NU", // NIUE
"BV", // BOUVET ISLAND
"SJ", // SVALBARD AND JAN MAYEN
"GS", // SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS
"AQ", // ANTARCTICA
"SH", // SAINT HELENA ASCENSION AND TRISTAN DA CUNHA
"PN", // PITCAIRN
"CX", // CHRISTMAS ISLAND
"CC", // COCOS (KEELING) ISLANDS
"TF", // FRENCH SOUTHERN TERRITORIES
"HM", // HEARD ISLAND AND MCDONALD ISLANDS
"EH", // WESTERN SAHARA
    ]

    // Detecting the users country
    function get_country_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (blacklist_countries.includes(result.country)) { // If my ip country code is in blacklist
                    window.location.assign('/404.php') // <- redirect at this point
                }
            })
            .catch(error => console.log(data.message))
    }

    // Getting country code from third party api
    get_country_code("https://get.geojs.io/v1/ip/country.json")
}

/* ------------------------- */
/* ALLOW WHITELIST COUNTRIES */
/* ------------------------- */
function allow_whitelist_countries() {
    // Whitelist countries
    const whitelist_countries = [
"US", // UNITED STATES
"GB", // UNITED KINGDOM
"ID", // INDONESIA
"UM", // UNITED STATES MINOR OUTLYING ISLANDS
    ]

    // Detecting the users country
    function get_country_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (!whitelist_countries.includes(result.country)) { // If my ip country code is not in whitelist
                    display_access_denied_error() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting country code from third party api
    get_country_code("https://get.geojs.io/v1/ip/country.json")
}

/* -------------- */
/* CALL FUNCTIONS */
/* -------------- */
block_blacklist_countries() // Block blacklist countries

// allow_whitelist_countries() // Allow whitelist countries