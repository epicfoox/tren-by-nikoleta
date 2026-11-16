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
      id: "zad",
      name: "Žad",
      price: "",
      sold: false,
      desc: {
        hr: "Stolni sat na postolju od tirkiznog stakla. Zelena i bijela smola, crno kamenje s obje strane. Crne rimske brojke i kazaljke.",
        en: "A standing clock on a base of teal glass. Green and white resin with black stones down both sides. Black Roman numerals and hands.",
      },
      images: ["images/zad-studio.jpg"],
    },
    {
      id: "mjesecina",
      name: "Mjesečina",
      price: "",
      sold: false,
      desc: {
        hr: "Zidni sat s punim mjesecom nad kobaltno plavim morem i tirkiznim granama. Crne rimske brojke i kazaljke, crvena sekundna kazaljka.",
        en: "A wall clock with a full moon over a cobalt-blue sea and turquoise branches. Black Roman numerals and hands, red second hand.",
      },
      images: ["images/mjesecina-studio.jpg"],
    },
    {
      id: "kronos",
      name: "Kronos",
      price: "",
      sold: false,
      desc: {
        hr: "Zidni sat od crne smole sa zlatnim kapima, razlomljenim zlatnim brojčanikom, zupčanicima i zlatnim listićima. Zlatne kazaljke.",
        en: "A wall clock in black resin with gold drips, a broken gold dial, gears and gold leaf. Gold hands.",
      },
      images: ["images/kronos-studio.jpg"],
    },
    {
      id: "biser",
      name: "Biser",
      price: "",
      sold: false,
      desc: {
        hr: "Stolni sat od prozirne smole s valovitim rubom, zlatnom morskom zvijezdom i školjkama. Na postolju kristali i velika morska školjka. Crne kazaljke.",
        en: "A standing clock in clear resin with a wavy edge, a gold starfish and shells. Crystals and a large seashell on the base. Black hands.",
      },
      images: ["images/biser-studio.jpg"],
    },
    {
      id: "as",
      name: "As",
      price: "",
      sold: false,
      desc: {
        hr: "Stolni sat na crnom postolju. Mint zelena smola sa zlatnim žilama, četiri crna asa, kockice i crne perle. Crne rimske brojke i kazaljke.",
        en: "A standing clock on a black base. Mint-green resin with gold veining, four black aces, dice and black beads. Black Roman numerals and hands.",
      },
      images: ["images/as-studio.jpg"],
    },
    {
      id: "meduza",
      name: "Meduza",
      price: "",
      sold: false,
      desc: {
        hr: "Zidni sat na crnoj teksturiranoj podlozi: zlatna Meduza pod sjajnom smolom i reljefna zlatna zmija. Crni brojčanik sa zlatnim kazaljkama.",
        en: "A wall clock on a black textured panel: a gold Medusa under glossy resin and a raised gold snake. Black dial with gold hands.",
      },
      images: ["images/meduza-studio.jpg"],
    },
    {
      id: "pomrcina",
      name: "Pomrčina",
      price: "",
      sold: false,
      desc: {
        hr: "Veliki zidni sat prekriven crnim kamenjem. Gore mjesečev brojčanik u zlatnom prstenu, dolje krug koji svijetli toplim zlatnim sjajem.",
        en: "A large wall clock covered in black stones. A moon dial in a gold ring above, and below it a disc that lights up with a warm golden glow.",
      },
      images: ["images/pomrcina-svjetlo.jpg", "images/pomrcina-studio.jpg"],
    },
    {
      id: "krijesnice",
      name: "Krijesnice",
      price: "",
      sold: false,
      desc: {
        hr: "Zidna slika sa svjetlom: smaragdno zelena smola, spirala staklenih perli i fluorita te ugrađene lampice koje svijetle toplim sjajem.",
        en: "Wall art with light: emerald-green resin, a spiral of glass beads and fluorite, and built-in lights with a warm glow.",
      },
      images: ["images/krijesnice-svjetlo.jpg", "images/krijesnice-studio.jpg"],
    },
    {
      id: "pijesak",
      name: "Pijesak",
      price: "",
      sold: false,
      desc: {
        hr: "Zidna slika: crna podloga, trake zlatnog pijeska i niz školjki u zlatu.",
        en: "Wall art: a black panel with bands of gold sand and a line of gilded shells.",
      },
      images: ["images/pijesak-studio.jpg"],
    },
  ],
};
