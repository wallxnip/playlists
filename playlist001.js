// Lista de músicas
const playlist1 = [
  {
    title: "Pandora",
    artist: "David Win",
    file: "https://hs10.krakenfiles.com/uploads/06-10-2025/rOQRaw5XV5/music.m4a",
    cover: "https://hs10.krakenfiles.com/uploads/06-10-2025/rOQRaw5XV5/cover.png"
  },
  {
    title: "Sorry",
    artist: "Justin Bieber",
    file: "https://hs9.krakenfiles.com/uploads/06-10-2025/IV2ksX2ETu/music.m4a",
    cover: "https://hs9.krakenfiles.com/uploads/06-10-2025/IV2ksX2ETu/cover.png"
  },
  {
    title: "Ghost",
    artist: "Justin Bieber",
    file: "https://hs9.krakenfiles.com/uploads/06-10-2025/SnMiKZuYo7/music.m4a",
    cover: "https://hs9.krakenfiles.com/uploads/06-10-2025/SnMiKZuYo7/cover.png"
  },
  {
    title: "Kiss Me",
    artist: "Dermot Kennedy",
    file: "https://hs3.krakenfiles.com/uploads/06-10-2025/xhrUA4EHmg/music.m4a",
    cover: "https://hs3.krakenfiles.com/uploads/06-10-2025/xhrUA4EHmg/cover.png"
  },
  {
    title: "Better Days",
    artist: "Dermot Kennedy",
    file: "https://hs7.krakenfiles.com/uploads/06-10-2025/dYBxbBB34T/music.m4a",
    cover: "https://hs7.krakenfiles.com/uploads/06-10-2025/dYBxbBB34T/cover.png"
  },
  {
    title: "Numb",
    artist: "Marshmello, Khalid",
    file: "https://hs1.krakenfiles.com/uploads/06-10-2025/nPB5J9a5kw/music.m4a",
    cover: "https://hs1.krakenfiles.com/uploads/06-10-2025/nPB5J9a5kw/cover.png"
  },
  {
    title: "Girls in Luv",
    artist: "DJane HouseKat feat. Rameez",
    file: "https://hs10.krakenfiles.com/uploads/06-10-2025/iwRa8alSl7/music.m4a",
    cover: "https://hs10.krakenfiles.com/uploads/06-10-2025/iwRa8alSl7/cover.png"
  },
  {
    title: "Good Feeling",
    artist: "Flo Rida",
    file: "https://hs7.krakenfiles.com/uploads/06-10-2025/4RT7YWCOJD/music.m4a",
    cover: "https://hs7.krakenfiles.com/uploads/06-10-2025/4RT7YWCOJD/cover.png"
  },
  {
    title: "Whistle",
    artist: "Flo Rida",
    file: "https://hs1.krakenfiles.com/uploads/06-10-2025/QRH7UgswfQ/music.m4a",
    cover: "https://hs1.krakenfiles.com/uploads/06-10-2025/QRH7UgswfQ/cover.png"
  },
  {
    title: "Hear Me Now",
    artist: "Alok,feat Zeeba",
    file: "https://hs8.krakenfiles.com/uploads/06-10-2025/MdwPg2MaCg/music.m4a",
    cover: "https://hs8.krakenfiles.com/uploads/06-10-2025/MdwPg2MaCg/cover.png"
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    file: "https://hs4.krakenfiles.com/uploads/06-10-2025/9hUlzyy1ec/music.m4a",
    cover: "https://hs4.krakenfiles.com/uploads/06-10-2025/9hUlzyy1ec/cover.png"
  },
  {
    title: "Das Geht Boom",
    artist: "Harris & Ford, Gordon & Doyle, Lisah",
    file: "https://hs10.krakenfiles.com/uploads/06-10-2025/LY7F4vtiVh/music.m4a",
    cover: "https://hs10.krakenfiles.com/uploads/06-10-2025/LY7F4vtiVh/cover.png"
  },
  {
    title: "From Up Above",
    artist: "Twinjabi",
    file: "https://hs3.krakenfiles.com/uploads/06-10-2025/lixavGBf8l/music.m4a",
    cover: "https://hs3.krakenfiles.com/uploads/06-10-2025/lixavGBf8l/cover.png"
  },
  {
    title: "Greedy",
    artist: "Tate McRae",
    file: "https://hs2.krakenfiles.com/uploads/06-10-2025/cJutDJ1LLD/music.m4a",
    cover: "https://hs2.krakenfiles.com/uploads/06-10-2025/cJutDJ1LLD/cover.png"
  },
  {
    title: "Hislerim",
    artist: "Serhat Durmus, Zerrin",
    file: "https://hs3.krakenfiles.com/uploads/06-10-2025/E41Jgpd6k5/music.m4a",
    cover: "https://hs3.krakenfiles.com/uploads/06-10-2025/E41Jgpd6k5/cover.png"
  },
  {
    title: "Ma Chérie",
    artist: "DJ Antoine, The Beatshakers",
    file: "https://hs7.krakenfiles.com/uploads/06-10-2025/KeAyRNnOgT/music.m4a",
    cover: "https://hs7.krakenfiles.com/uploads/06-10-2025/KeAyRNnOgT/cover.png"
  },
  {
    title: "There For Me",
    artist: "Braaten & Victor Perry",
    file: "https://hs1.krakenfiles.com/uploads/06-10-2025/A94fJkjMck/music.m4a",
    cover: "https://hs1.krakenfiles.com/uploads/06-10-2025/A94fJkjMck/cover.png"
  },
  {
    title: "Burn",
    artist: "Ellie Goulding",
    file: "https://hs10.krakenfiles.com/uploads/06-10-2025/1q2icXbgwS/music.m4a",
    cover: "https://hs10.krakenfiles.com/uploads/06-10-2025/1q2icXbgwS/cover.png"
  },
  {
    title: "She Doesn t Mind",
    artist: "Sean Paul",
    file: "https://hs6.krakenfiles.com/uploads/06-10-2025/pY0CZDzyLb/music.m4a",
    cover: "https://hs6.krakenfiles.com/uploads/06-10-2025/pY0CZDzyLb/cover.png"
  },
  {
    title: "What The Hell",
    artist: "Avril Lavigne",
    file: "https://hs7.krakenfiles.com/uploads/06-10-2025/MOhZSrQHit/music.m4a",
    cover: "https://hs7.krakenfiles.com/uploads/06-10-2025/MOhZSrQHit/cover.png"
  },
  {
    title: "Girl On The Moon",
    artist: "Naya",
    file: "https://hs8.krakenfiles.com/uploads/06-10-2025/BA2R9LqBzH/music.m4a",
    cover: "https://hs8.krakenfiles.com/uploads/06-10-2025/BA2R9LqBzH/cover.png"
  },
  
  {
    title: "One More Night",
    artist: "Lost Frequencies",
    file: "https://hs1.krakenfiles.com/uploads/06-10-2025/XnqOt7Tc55/music.m4a",
    cover: "https://hs1.krakenfiles.com/uploads/06-10-2025/XnqOt7Tc55/cover.png"
  },
  {
    title: "Dont Leave Me Now",
    artist: "Lost Frequencies",
    file: "https://hs2.krakenfiles.com/uploads/06-10-2025/7Pv5GBz537/music.m4a",
    cover: "https://hs2.krakenfiles.com/uploads/06-10-2025/7Pv5GBz537/cover.png"
  },
  {
    title: "Play",
    artist: "Alan Walker & Tungevaag",
    file: "https://hs1.krakenfiles.com/uploads/06-10-2025/YtVI8fkq0H/music.m4a",
    cover: "https://hs1.krakenfiles.com/uploads/06-10-2025/YtVI8fkq0H/cover.png"
  },
  {
    title: "Knockout",
    artist: "Tungevaag",
    file: "https://hs1.krakenfiles.com/uploads/06-10-2025/4uQiAs0E6S/music.m4a",
    cover: "https://hs1.krakenfiles.com/uploads/06-10-2025/4uQiAs0E6S/cover.png"
  },
  {
    title: "Make You Happy",
    artist: "Tungevaag",
    file: "https://hs2.krakenfiles.com/uploads/06-10-2025/JGdg7n5kwG/music.m4a",
    cover: "https://hs2.krakenfiles.com/uploads/06-10-2025/JGdg7n5kwG/cover.png"
  },
  {
    title: "Kingdoms",
    artist: "Tungevaag & Jay Hardway",
    file: "https://hs9.krakenfiles.com/uploads/06-10-2025/QjG8TKoab9/music.m4a",
    cover: "https://hs9.krakenfiles.com/uploads/06-10-2025/QjG8TKoab9/cover.png"
  },
  {
    title: "Tusa",
    artist: "Karol",
    file: "https://hs10.krakenfiles.com/uploads/06-10-2025/NUr0FsoIFi/music.m4a",
    cover: "https://hs10.krakenfiles.com/uploads/06-10-2025/NUr0FsoIFi/cover.png"
  },
  {
    title: "Tired",
    artist: "Alan Walker",
    file: "https://hs8.krakenfiles.com/uploads/06-10-2025/v4MqA0PnKu/music.m4a",
    cover: "https://hs8.krakenfiles.com/uploads/06-10-2025/v4MqA0PnKu/cover.png"
  },
  {
    title: "One More Light",
    artist: "Linkin Park",
    file: "https://hs3.krakenfiles.com/uploads/06-10-2025/vtFh0H22B0/music.m4a",
    cover: "https://hs3.krakenfiles.com/uploads/06-10-2025/vtFh0H22B0/cover.png"
  },
  {
    title: "Apocalypse",
    artist: "Cigarette After",
    file: "https://hs2.krakenfiles.com/uploads/06-10-2025/QwwF7HF2eV/music.m4a",
    cover: "https://hs2.krakenfiles.com/uploads/06-10-2025/QwwF7HF2eV/cover.png"
  },
  {
    title: "Dynasty",
    artist: "Miia",
    file: "https://hs2.krakenfiles.com/uploads/06-10-2025/hjItJYEi7X/music.m4a",
    cover: "https://hs2.krakenfiles.com/uploads/06-10-2025/hjItJYEi7X/cover.png"
  },
  {
    title: "Say Yes To Heaven",
    artist: "Lana Del Rey",
    file: "https://hs5.krakenfiles.com/uploads/06-10-2025/OK1i6v6jzi/music.m4a",
    cover: "https://hs5.krakenfiles.com/uploads/06-10-2025/OK1i6v6jzi/cover.png"
  },
  {
    title: "Royalty",
    artist: "Egzod, Maestro Chives, Neoni",
    file: "https://hs2.krakenfiles.com/uploads/06-10-2025/3k5deJyn9O/music.m4a",
    cover: "https://hs2.krakenfiles.com/uploads/06-10-2025/3k5deJyn9O/cover.png"
  },
  {
    title: "Lovely",
    artist: "Billie Eilish",
    file: "https://hs2.krakenfiles.com/uploads/06-10-2025/BbXShsS2PL/music.m4a",
    cover: "https://hs2.krakenfiles.com/uploads/06-10-2025/BbXShsS2PL/cover.png"
  },
  {
    title: "Let Me Down Slowly",
    artist: "Alec Benjamin",
    file: "https://hs5.krakenfiles.com/uploads/06-10-2025/DhFDzNeYMF/music.m4a",
    cover: "https://hs5.krakenfiles.com/uploads/06-10-2025/DhFDzNeYMF/cover.png"
  }

];
