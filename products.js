/*
  Tren by Nikoleta — sav sadržaj shopa je u ovoj datoteci.

  KONTAKT
    email        adresa na koju stižu upiti
    whatsapp     broj s pozivnim, npr. "385911234567" (prazno = gumb se ne prikazuje)
    instagram    korisničko ime bez @ (prazno = link se ne prikazuje)
    formEndpoint opcionalno: Formspree / Web3Forms URL. Kad je postavljen,
                 obrasci šalju poruku izravno umjesto otvaranja e-maila / WhatsAppa.

  SATOVI — novi sat = novi blok { ... } u popisu ispod
    id      kratka oznaka bez razmaka (koristi se u linku: #/val)
    name    naziv sata
    price   npr. "180 €" — prazno prikazuje "Cijena na upit"
    sold    true = oznaka "Prodano" (sat ostaje vidljiv kao primjer rada)
    madeToOrder  true = oznaka "Po narudžbi" (dizajn koji još nije izrađen)
    desc    opis na hrvatskom i engleskom
    images  fotografije iz mape images/, prva je naslovna:
            ["images/val-studio.jpg", "images/val-detalj.jpg"]
            Portretne (3:4, kao s mobitela), min. 1200 px širine.
            Dok je popis prazan, prikazuje se nacrtani placeholder.
*/
window.TREN = {
  contact: {
    email: "hello@example.com",
    whatsapp: "",
    instagram: "",
    formEndpoint: "",
  },

  watches: [
    {
      id: "val",
      name: "Val",
      price: "",
      sold: false,
      desc: {
        hr: "Tamnoplava smola s bijelom pjenom valova, crna teksturirana obala i dva kamena. Bijele brojke i kazaljke.",
        en: "Deep blue resin with white wave foam, a black textured shore and two stones. White numerals and hands.",
      },
      images: ["images/val-studio.jpg"],
    },
    {
      id: "rubin",
      name: "Rubin",
      price: "",
      sold: false,
      desc: {
        hr: "Stolni sat na postolju. Rubin-crvena smola s bijelim žilama, okružena crnim kamenjem. Zlatne kazaljke.",
        en: "A standing clock on a base. Ruby-red resin with white veining, framed by black stones. Gold hands.",
      },
      images: ["images/rubin-studio.jpg"],
    },
    {
      id: "smaragd",
      name: "Smaragd",
      price: "",
      sold: false,
      madeToOrder: true,
      desc: {
        hr: "Okrugli sat od smaragdno zelene smole sa zlatnim žilama i polumjesecom crnog kamenja uz rub. Zlatne kazaljke i rimske brojke.",
        en: "A round clock in emerald-green resin with gold veining and a crescent of black stones along the edge. Gold hands and Roman numerals.",
      },
      images: ["images/smaragd-studio.jpg"],
    },
    {
      id: "laguna",
      name: "Laguna",
      price: "",
      sold: false,
      madeToOrder: true,
      desc: {
        hr: "Tirkizno more s bijelom pjenom valova i pješčana obala s oblucima i školjkama. Bijele brojke i kazaljke.",
        en: "A turquoise sea with white wave foam and a sandy shore with pebbles and shells. White numerals and hands.",
      },
      images: ["images/laguna-studio.jpg"],
    },
    {
      id: "ametist",
      name: "Ametist",
      price: "",
      sold: false,
      madeToOrder: true,
      desc: {
        hr: "Sat u obliku presjeka geode: ljubičasta i bijela smola, prsten kristala i zlatni rub. Zlatne kazaljke, bez brojki.",
        en: "A clock shaped like a geode slice: purple and white resin, a ring of crystals and a gold edge. Gold hands, no numerals.",
      },
      images: ["images/ametist-studio.jpg"],
    },
    {
      id: "jantar",
      name: "Jantar",
      price: "",
      sold: false,
      madeToOrder: true,
      desc: {
        hr: "Ovalni stolni sat na crnom postolju. Smola boje jantara i meda s bakrenim listićima, uz rub tamno kamenje. Crne kazaljke.",
        en: "An oval standing clock on a black base. Amber and honey resin with copper flakes, edged with dark stones. Black hands.",
      },
      images: ["images/jantar-studio.jpg"],
    },
    {
      id: "ponoc",
      name: "Ponoć",
      price: "",
      sold: false,
      madeToOrder: true,
      desc: {
        hr: "Kvadratni sat od crne smole sa zlatnim listićima i bijelom bisernom rijekom, s bijelim kvarcom u kutu. Zlatne kazaljke.",
        en: "A square clock in black resin with gold flakes and a river of white pearl, with white quartz in the corner. Gold hands.",
      },
      images: ["images/ponoc-studio.jpg"],
    },
  ],
};
