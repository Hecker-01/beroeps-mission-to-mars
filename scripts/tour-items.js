const items = [
  {
    location: "Amsterdam, Nederland",
    date: "Donderdag 12 November 2024",
    address: "Kalverstraat 92, 1012 PH Amsterdam",
  },

  {
    location: "Rotterdam, Nederland",
    date: "Vrijdag 13 November 2024",
    address: "Lijnbaan 72, 3012 EP Rotterdam",
  },
  {
    location: "Parijs, Frankrijk",
    date: "Zaterdag 14 November 2024",
    address: "Champs-Élysées 125, 75008 Parijs",
  },
  {
    location: "Londen, Verenigd Koninkrijk",
    date: "Zondag 15 November 2024",
    address: "Oxford Street 300, W1D 1LN Londen",
  },
  {
    location: "Berlijn, Duitsland",
    date: "Maandag 16 November 2024",
    address: "Kurfürstendamm 237, 10719 Berlijn",
  },
  {
    location: "New York, Verenigde Staten",
    date: "Dinsdag 17 November 2024",
    address: "Fifth Avenue 350, NY 10018 New York",
  },
  {
    location: "Tokyo, Japan",
    date: "Woensdag 18 November 2024",
    address: "Shibuya Crossing 5-24, 150-0002 Tokyo",
  },
  {
    location: "Sydney, Australië",
    date: "Donderdag 19 November 2024",
    address: "George Street 456, NSW 2000 Sydney",
  },
  {
    location: "Dubai, Verenigde Arabische Emiraten",
    date: "Vrijdag 20 November 2024",
    address: "The Dubai Mall, Financial Center Road, Dubai",
  },
  {
    location: "São Paulo, Brazilië",
    date: "Zaterdag 21 November 2024",
    address: "Avenida Paulista 1578, 01310-200 São Paulo",
  },
  {
    location: "Toronto, Canada",
    date: "Zondag 22 November 2024",
    address: "Queen Street West 287, M5V 2A2 Toronto",
  },
  {
    location: "Istanbul, Turkije",
    date: "Maandag 23 November 2024",
    address: "İstiklal Caddesi 64, 34430 Istanbul",
  },
  {
    location: "Kaapstad, Zuid-Afrika",
    date: "Dinsdag 24 November 2024",
    address: "V&A Waterfront, Dock Road, 8001 Kaapstad",
  },
  {
    location: "Mexico-Stad, Mexico",
    date: "Woensdag 25 November 2024",
    address: "Avenida Reforma 235, 06600 Mexico-Stad",
  },
  {
    location: "Hongkong, China",
    date: "Donderdag 26 November 2024",
    address: "Nathan Road 88, Kowloon, Hongkong",
  },
];
items.forEach((item) => {
  document.write(`
      <div class="tour-item">
        <h2 class="tour-location">${item.location}</h2>
        <div class="tour-date">${item.date}</div>
        <p class="tour-adress">${item.address}</p>
      </div>
    `);
});
