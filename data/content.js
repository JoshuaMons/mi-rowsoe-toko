/**
 * Site content — edit this file to change services, gallery images, and copy.
 * Image URLs: replace with local paths (e.g. "images/photo1.jpg") if Facebook links expire.
 */
const SITE_DATA = {
  hero: {
    badge: 'Tilburg',
    title: 'Mi Rowsoe',
    tagline: 'Tropische toko & verzending — Surinaamse producten, verse groenten en pakketpunt.'
  },

  about: {
    paragraphs: [
      'Mi Rowsoe is uw tropische toko in het hart van Tilburg. Wij verkopen Surinaamse en tropische producten, verse groenten en bieden maaltijden. Daarnaast fungeren wij als pakketpunt voor onder andere Mondial Relay.',
      'Kom langs op Molenbochtstraat 66 voor verse producten, specerijen en een vriendelijke service.'
    ]
  },

  services: [
    {
      title: 'Maaltijden',
      description: 'Surinaamse gerechten en maaltijden om mee te nemen of ter plaatse te genieten.',
      image: 'images/foods/banner1.png',
      alt: 'Surinaamse maaltijden',
      href: 'maaltijden.html'
    },
    {
      title: 'Tropische producten',
      description: 'Surinaamse en tropische levensmiddelen, specerijen en ingrediënten voor uw keuken.',
      image: 'images/foods/banner2.png',
      alt: 'Mi Rowsoe tropische producten',
      href: 'producten.html'
    },
    {
      title: 'Verse groenten',
      description: 'Verse tropische groenten en dagverse producten voor een gezonde maaltijd.',
      image: 'images/foods/banner3.png',
      alt: 'Verse groenten en producten',
      href: 'producten.html'
    },
    {
      title: 'Pakketpunt & verzending',
      description: 'Afhalen en verzenden van pakketten o.a. via Mondial Relay. Handig in de buurt.',
      image: 'images/foods/banner4.png',
      alt: 'Pakketpunt en verzending',
      href: '#pakketpunt'
    }
  ],

  /* Gallery "In de winkel" — only food images (local) */
  galleryFood: [
    { src: 'images/foods/banner1.png', alt: 'Surinaamse maaltijd 1' },
    { src: 'images/foods/banner2.png', alt: 'Surinaamse maaltijd 2' },
    { src: 'images/foods/banner3.png', alt: 'Surinaamse maaltijd 3' },
    { src: 'images/foods/banner4.png', alt: 'Surinaamse maaltijd 4' },
    { src: 'images/foods/banner5.png', alt: 'Surinaamse maaltijd 5' }
  ],

  gallery: [
    { src: 'https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-1/302446697_492648706200055_5345255096009086055_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=107&ccb=1-7&_nc_sid=244524&_nc_ohc=etwfLSbE1JkQ7kNvwFWgpvV&_nc_oc=Adm4aey6HRUJbkDtMxKKKr_zbBaoUexIw1BGB7atci2NNebfW9V6ruHlKsDa8RuTVnc&_nc_zt=24&_nc_ht=scontent-ord5-3.xx&_nc_gid=twR-o9zXZQLpmvYvF1AuHg&_nc_ss=8&oh=00_AfxVuxBqB6K2A8dPn5c42Lql543cPlYLpJdBDmsPkcpdrg&oe=69B6F4F7', alt: 'Mi Rowsoe winkel' },
    { src: 'https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/487420018_9613736528741144_1329880785049705234_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=107&ccb=1-7&_nc_sid=14ed46&_nc_ohc=Q2dcy-VGbyYQ7kNvwHF8Vfd&_nc_oc=AdkRcg_h9n29yhzsji0SH-ezzJxsFWepHoNiKzdfGlCj1JkwgYSu_9ym7nJPKbEX8Cw&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=twR-o9zXZQLpmvYvF1AuHg&_nc_ss=8&oh=00_Afz2To_usdgHxkiWf2ls-EgCTsQTXfpTIY51IOnZBpBtkw&oe=69B70C20', alt: 'Producten' },
    { src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/485800077_9558850654229732_662480427147911258_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=105&ccb=1-7&_nc_sid=14ed46&_nc_ohc=KXpWXOrNF-sQ7kNvwFueY5C&_nc_oc=Adn6WwnKG5uAbhwk22FzVfsZwfZp8qxzNiNMamVKk5rFFbFNAhMZGRnl3DhDPLxJHeg&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=twR-o9zXZQLpmvYvF1AuHg&_nc_ss=8&oh=00_Afz42CUxOF5yG5_dldRk1CjPprQ88Dt0Vktnx3MzNXCNJg&oe=69B71EA7', alt: 'Assortiment' },
    { src: 'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/484085056_9513424802105651_546889476659635679_n.jpg?stp=c52.0.1337.1337a_dst-jpg_s160x160_tt6&_nc_cat=101&ccb=1-7&_nc_sid=14ed46&_nc_ohc=IS1kpcSqI20Q7kNvwGMMd0U&_nc_oc=AdmBeCd4dbPIoHUMFgllyF37hQ7qYJxt8SDjE1F3LReCb1u3wuTatXURGY_bdzG-efc&_nc_zt=23&_nc_ht=scontent-ord5-1.xx&_nc_gid=twR-o9zXZQLpmvYvF1AuHg&_nc_ss=8&oh=00_AfxROjORhWvjmrz6YxOot-GyqFKcODsGPdzbjjnkzB27lQ&oe=69B6EDEA', alt: 'Winkel interieur' },
    { src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/484208287_9492072507574214_174222887427534548_n.jpg?stp=c180.0.1080.1080a_dst-jpg_s160x160_tt6&_nc_cat=110&ccb=1-7&_nc_sid=14ed46&_nc_ohc=zz1xTBIuxV8Q7kNvwGCTGdA&_nc_oc=Adk1FsX81RAQrluq7YDH2tXdBC-SOR1w5e0dudp_9Aivpgo_O596hSqNxaf685Kzth8&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=twR-o9zXZQLpmvYvF1AuHg&_nc_ss=8&oh=00_AfzbbiZhORQ-QhJCedFq6BxVCfSDyO5VCZddL76sKg6fGA&oe=69B6F572', alt: 'Tropische producten' }
  ],

  contact: {
    address: 'Molenbochtstraat 66, 5014 ER Tilburg',
    phone: '013-785 88 57',
    phoneHref: 'tel:0137858857',
    facebook: 'https://www.facebook.com/mirowsoetilburg'
  },

  hours: [
    { day: 'Maandag', time: 'Gesloten' },
    { day: 'Dinsdag – Zaterdag', time: '10:00 – 18:00' },
    { day: 'Zondag', time: 'Gesloten' }
  ]
};
