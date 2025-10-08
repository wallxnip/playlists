// Lançamentos
const playlist1 = [
  {
    title: "Pandora",
    artist: "David Win",
    file: "https://hs10.krakenfiles.com/uploads/06-10-2025/rOQRaw5XV5/music.m4a",
    cover: "https://i.postimg.cc/br7hWvrz/Pandora.webp"
  },
  {
    title: "I Regret You",
    artist: "Bree Taylor",
    file: "https://hs6.krakenfiles.com/uploads/08-10-2025/rJ87oimhgS/music.m4a",
    cover: "https://i.postimg.cc/vm4dY9ns/BT.webp"
  },
  {
    title: "Sorry",
    artist: "Justin Bieber",
    file: "https://hs9.krakenfiles.com/uploads/06-10-2025/IV2ksX2ETu/music.m4a",
    cover: "https://i.postimg.cc/BvB2vLGt/Sorry.webp"
  },
  {
    title: "Ghost",
    artist: "Justin Bieber",
    file: "https://hs9.krakenfiles.com/uploads/06-10-2025/SnMiKZuYo7/music.m4a",
    cover: "https://i.postimg.cc/zG177R5k/ghost.webp"
  },
  {
    title: "Kiss Me",
    artist: "Dermot Kennedy",
    file: "https://hs3.krakenfiles.com/uploads/06-10-2025/xhrUA4EHmg/music.m4a",
    cover: "https://i.postimg.cc/NfbFJ3vV/dm.webp"
  },
  {
    title: "Better Days",
    artist: "Dermot Kennedy",
    file: "https://hs7.krakenfiles.com/uploads/06-10-2025/dYBxbBB34T/music.m4a",
    cover: "https://i.postimg.cc/NfbFJ3vV/dm.webp"
  },
  {
    title: "Numb",
    artist: "Marshmello, Khalid",
    file: "https://hs1.krakenfiles.com/uploads/06-10-2025/nPB5J9a5kw/music.m4a",
    cover: "https://i.postimg.cc/y8FQCyvN/Apple-Music-Marshmello-Khalid-Numb-Single-1-2.webp"
  },
  {
    title: "Girls in Luv",
    artist: "DJane HouseKat feat. Rameez",
    file: "https://hs10.krakenfiles.com/uploads/06-10-2025/iwRa8alSl7/music.m4a",
    cover: "https://i.postimg.cc/Jz16mBg6/Girls-in-Luv.webp"
  },
  {
    title: "Good Feeling",
    artist: "Flo Rida",
    file: "https://hs7.krakenfiles.com/uploads/06-10-2025/4RT7YWCOJD/music.m4a",
    cover: "https://i.postimg.cc/QM7Wyfb6/FD.webp"
  },
  {
    title: "Whistle",
    artist: "Flo Rida",
    file: "https://hs1.krakenfiles.com/uploads/06-10-2025/QRH7UgswfQ/music.m4a",
    cover: "https://i.postimg.cc/hvYDgB4D/FRW.webp"
  },
  {
    title: "Hear Me Now",
    artist: "Alok,feat Zeeba",
    file: "https://hs8.krakenfiles.com/uploads/06-10-2025/MdwPg2MaCg/music.m4a",
    cover: "https://i.postimg.cc/ydk6Gxsg/Alok.webp"
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    file: "https://hs4.krakenfiles.com/uploads/06-10-2025/9hUlzyy1ec/music.m4a",
    cover: "https://i.postimg.cc/bwCKBTJG/TWB.webp"
  },
  {
    title: "Das Geht Boom",
    artist: "Harris & Ford, Gordon & Doyle, Lisah",
    file: "https://hs10.krakenfiles.com/uploads/06-10-2025/LY7F4vtiVh/music.m4a",
    cover: "https://i.postimg.cc/wxrR9KGQ/hz.webp"
  },
  {
    title: "From Up Above",
    artist: "Twinjabi",
    file: "https://hs3.krakenfiles.com/uploads/06-10-2025/lixavGBf8l/music.m4a",
    cover: "https://i.postimg.cc/6503TDHg/Twinjabi.webp"
  },
  {
    title: "Greedy",
    artist: "Tate McRae",
    file: "https://hs2.krakenfiles.com/uploads/06-10-2025/cJutDJ1LLD/music.m4a",
    cover: "https://i.postimg.cc/SxPmMqc7/GY.webp"
  },
  {
    title: "Hislerim",
    artist: "Serhat Durmus, Zerrin",
    file: "https://hs3.krakenfiles.com/uploads/06-10-2025/E41Jgpd6k5/music.m4a",
    cover: "https://i.postimg.cc/W1BQV4GN/HZ.webp"
  },
  {
    title: "Ma Chérie",
    artist: "DJ Antoine, The Beatshakers",
    file: "https://hs7.krakenfiles.com/uploads/06-10-2025/KeAyRNnOgT/music.m4a",
    cover: "https://i.postimg.cc/hG5zLB41/DJA.webp"
  },
  {
    title: "There For Me",
    artist: "Braaten & Victor Perry",
    file: "https://hs1.krakenfiles.com/uploads/06-10-2025/A94fJkjMck/music.m4a",
    cover: "https://i.postimg.cc/QdPhSx5b/There-For-Me.webp"
  },
  {
    title: "Burn",
    artist: "Ellie Goulding",
    file: "https://hs10.krakenfiles.com/uploads/06-10-2025/1q2icXbgwS/music.m4a",
    cover: "https://i.postimg.cc/j28G5Z4g/Ellie-Goulding-Burn-Album.webp"
  },
  {
    title: "She Doesn t Mind",
    artist: "Sean Paul",
    file: "https://hs6.krakenfiles.com/uploads/06-10-2025/pY0CZDzyLb/music.m4a",
    cover: "https://i.postimg.cc/nzFRDqz7/Sean-Paul-She-Doesn-t-Mind-Dj-Pamen-Remix.webp"
  },
  {
    title: "What The Hell",
    artist: "Avril Lavigne",
    file: "https://hs7.krakenfiles.com/uploads/06-10-2025/MOhZSrQHit/music.m4a",
    cover: "https://i.postimg.cc/4yK16PT9/wth.webp"
  },
  {
    title: "Girl On The Moon",
    artist: "Naya",
    file: "https://hs8.krakenfiles.com/uploads/06-10-2025/BA2R9LqBzH/music.m4a",
    cover: "https://i.postimg.cc/kXvyxB08/Naya-Ruby.webp"
  },
  
  {
    title: "One More Night",
    artist: "Lost Frequencies",
    file: "https://hs1.krakenfiles.com/uploads/06-10-2025/XnqOt7Tc55/music.m4a",
    cover: "https://i.postimg.cc/JzPVd7kS/omn.webp"
  },
  {
    title: "Dont Leave Me Now",
    artist: "Lost Frequencies",
    file: "https://hs2.krakenfiles.com/uploads/06-10-2025/7Pv5GBz537/music.m4a",
    cover: "https://i.postimg.cc/zv0VfZQH/Lost-Frequencies.webp"
  },
  {
    title: "Play",
    artist: "Alan Walker & Tungevaag",
    file: "https://hs1.krakenfiles.com/uploads/06-10-2025/YtVI8fkq0H/music.m4a",
    cover: "https://i.postimg.cc/43jJB4DF/Play.webp"
  },
  {
    title: "Knockout",
    artist: "Tungevaag",
    file: "https://hs1.krakenfiles.com/uploads/06-10-2025/4uQiAs0E6S/music.m4a",
    cover: "https://i.postimg.cc/KYfPMVCT/1000479222-2.webp"
  },
  {
    title: "Make You Happy",
    artist: "Tungevaag",
    file: "https://hs2.krakenfiles.com/uploads/06-10-2025/JGdg7n5kwG/music.m4a",
    cover: "https://i.postimg.cc/KYfPMVCT/1000479222-2.webp"
  },
  {
    title: "Kingdoms",
    artist: "Tungevaag & Jay Hardway",
    file: "https://hs9.krakenfiles.com/uploads/06-10-2025/QjG8TKoab9/music.m4a",
    cover: "https://i.postimg.cc/KYfPMVCT/1000479222-2.webp"
  },
  {
    title: "Tusa",
    artist: "Karol",
    file: "https://hs10.krakenfiles.com/uploads/06-10-2025/NUr0FsoIFi/music.m4a",
    cover: "https://i.postimg.cc/W16f1s6Y/Tusa.webp"
  },
  {
    title: "Tired",
    artist: "Alan Walker",
    file: "https://hs8.krakenfiles.com/uploads/06-10-2025/v4MqA0PnKu/music.m4a",
    cover: "https://i.postimg.cc/d3fcnwSD/Tired.webp"
  },
  {
    title: "One More Light",
    artist: "Linkin Park",
    file: "https://hs3.krakenfiles.com/uploads/06-10-2025/vtFh0H22B0/music.m4a",
    cover: "https://i.postimg.cc/MHHvvZQ8/One-More-Light.webp"
  },
  {
    title: "Apocalypse",
    artist: "Cigarette After",
    file: "https://hs2.krakenfiles.com/uploads/06-10-2025/QwwF7HF2eV/music.m4a",
    cover: "https://i.postimg.cc/9QdFXwnT/Apocalypse.webp"
  },
  {
    title: "Dynasty",
    artist: "Miia",
    file: "https://hs2.krakenfiles.com/uploads/06-10-2025/hjItJYEi7X/music.m4a",
    cover: "https://i.postimg.cc/Gtjnwv2J/Dynasty.webp"
  },
  {
    title: "Say Yes To Heaven",
    artist: "Lana Del Rey",
    file: "https://hs5.krakenfiles.com/uploads/06-10-2025/OK1i6v6jzi/music.m4a",
    cover: "https://i.postimg.cc/Pxh6G98c/Yes-To-Heaven.webpg"
  },
  {
    title: "Royalty",
    artist: "Egzod, Maestro Chives, Neoni",
    file: "https://hs2.krakenfiles.com/uploads/06-10-2025/3k5deJyn9O/music.m4a",
    cover: "https://i.postimg.cc/8CbRv5jd/Egzod-on-TIDAL.webp"
  },
  {
    title: "Lovely",
    artist: "Billie Eilish",
    file: "https://hs2.krakenfiles.com/uploads/06-10-2025/BbXShsS2PL/music.m4a",
    cover: "https://i.postimg.cc/J41Gyqbr/Beauty-Plus-20251008155100417-save-1.webp"
  },
  {
    title: "Let Me Down Slowly",
    artist: "Alec Benjamin",
    file: "https://hs5.krakenfiles.com/uploads/06-10-2025/DhFDzNeYMF/music.m4a",
    cover: "https://i.postimg.cc/3wjsDgXC/LMDS.webp"
  }

];
