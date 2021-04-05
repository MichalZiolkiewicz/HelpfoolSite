export const toolsList = [
    {
        typeENG: "design",
        typePL: "Projektowanie",
        tools: [
            {
                name: "Figma",
                link: 'https://www.figma.com/',
                img: '/logos/figma.svg',
                price: true,
                descriptionPL: 'Zaawansowany program do projektowania interfejsów i grafik',
                descriptionENG: 'Advanced program for creating application layouts',
                id: '9b68973a-c0f0-4e30-8f98-364bfaeafd89',
                tagi: ['design', 'projektowanie', 'layout', 'webdesign', 'frontend', 'figma']
            },
            {
                name: "Adobe XD",
                link: 'https://www.adobe.com/pl/products/xd.html',
                img: '/logos/adobeXd.svg',
                price: true,
                descriptionPL: 'Zaawansowany program do projektowania interfejsów i grafik',
                descriptionENG: 'Advanced program for creating application layouts',
                id: '1dba07a6-0aa8-4d14-8425-ca9110cc068b',
                tagi: ['design', 'projektowanie', 'layout', 'webdesign', 'frontend', 'adobexd', 'xd']
            },
            {
                name: "Sketch",
                link: 'https://www.sketch.com/',
                img: '/logos/sketch.svg',
                price: false,
                descriptionPL: 'Zaawansowany program do projektowania interfejsów i grafik',
                descriptionENG: 'Advanced program for creating application layouts',
                id: '1dba07a6-0aa8-4d14-8425-ca9110cc068b',
                tagi: ['design', 'projektowanie', 'layout', 'webdesign', 'frontend', 'adobexd', 'xd']
            }
        ]
    },
    {
        typeENG: "icons",
        typePL: "Ikony",
        tools: [
            {
                name: "icons8",
                link: 'https://icons8.com/icons',
                img: '/logos/icons8.svg',
                price: true,
                descriptionPL: 'Polski',
                descriptionENG: 'English',
                id: '993ba6b4-f915-480e-ba53-381071ecfae2',
                tagi: ['design', 'projektowanie', 'layout', 'webdesign', 'frontend', 'icons8', 'icons',]
            },
            {
                name: "Font Awesome",
                link: 'https://fontawesome.com/',
                img: '/logos/fontAwesome.svg',
                price: true,
                descriptionPL: 'Polski',
                descriptionENG: 'English',
                id: '90d4bec8-6a42-473f-adc4-d5960159179a',
                tagi: ['design', 'projektowanie', 'layout', 'webdesign', 'frontend', 'icons8', 'icons',]
            },
        ]
    }
];

// przydatne - uuid, google font, awwwards, bit.dev, lottie, https://flatuicolors.com/palette/fr, www.frontendmentor.io,
//fajne https://www.phantom.house/

//Przykładowy plik json z listą pomocnych aplikacji, całość była by w bazie danych albo umieszczona na serwerze i by się
// na bieżąco wczytywała.

//jak się wciśnie enter obojętnei gdzie to się robi focus na szukajkę
//Przejrzeć listę co znam i jest przydatne i rozbudować tego jsona, potem zrobić strukturę i komponenty
//Admin ma mieć możlwość dodawać nowe z poziomu aplikacji
//jasny i ciemny motyw
//rezponsywne, żeby na telefonach też była gituwa
//wyszukiwanie po nazwie, tagach i słowach w opisie
//podpowiadanie w wyszukiwarce