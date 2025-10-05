// Lista de músicas
const playlist1 = [
  {
    title: "Pandora",
    artist: "David Win",
    file: "https://files.catbox.moe/ihelhc.mp3",
    cover: "https://i.postimg.cc/5y1s6kzm/Beauty-Plus-20251005004124136-save.jpg"
  },
  {
    title: "Sorry",
    artist: "Justin Bieber",
    file: "https://files.catbox.moe/gm6wog.mp3",
    cover: "https://i.postimg.cc/Qdrs1YC5/Pin-by-Emma-on-Singers-Justin-bieber-wallpaper-Justin-bieb.png"
  },
  {
    title: "Ghost",
    artist: "Justin Bieber",
    file: "https://files.catbox.moe/82i0xx.mp3",
    cover: "https://i.postimg.cc/gjgSnxLJ/Stream-Justin-Bieber-Ghost-by-Kixibee-Listen-online-for-free.jpg"
  },
  {
    title: "Kiss Me",
    artist: "Dermot Kennedy",
    file: "https://files.catbox.moe/8zb396.mp3",
    cover: "https://i.postimg.cc/V6MvCyNt/Dermot-Kennedy-Kiss-Me-Acoustic-Lyrics-Genius-Lyrics.jpg"
  },
  {
    title: "Better Day",
    artist: "Dermot Kennedy",
    file: "https://files.catbox.moe/s6iin3.mp3",
    cover: "https://i.postimg.cc/V6MvCyNt/Dermot-Kennedy-Kiss-Me-Acoustic-Lyrics-Genius-Lyrics.jpg"
  },
  {
    title: "Numb",
    artist: "Marshmello, Khalid",
    file: "https://files.catbox.moe/u9n81t.mp3",
    cover: "https://i.postimg.cc/02GS4SPS/Apple-Music-Marshmello-amp-Khalid-Numb-Single-1.jpg"
  },
  {
    title: "Girls in Luv",
    artist: "DJane HouseKat feat. Rameez",
    file: "https://files.catbox.moe/0etv0s.mp3",
    cover: "https://i.postimg.cc/wvSNCc1X/Girls-in-Luv-feat-DJane-House-Kat-You-Tube-Music-1.jpg"
  },
  {
    title: "Good Feeling",
    artist: "Flo Rida",
    file: "https://files.catbox.moe/6hhq9g.mp3",
    cover: "https://i.postimg.cc/ZnpN4BN1/Good-Feeling-by-Flo-Rida-Rihanna-lyrics-Piano-sheet-music-Kar.jpg"
  },
  {
    title: "Whistle",
    artist: "Flo Rida",
    file: "https://files.catbox.moe/clnap6.mp3",
    cover: "https://i.postimg.cc/LsQLTMR0/Flo-Rida-Whistle-Lyrics-Genius-Lyrics.png"
  },
  {
    title: "Hear Me Now",
    artist: "Alok,feat Zeeba",
    file: "https://files.catbox.moe/pixm40.mp3",
    cover: "https://i.postimg.cc/htgL4rpM/Alok-Wallpapers-4k-HD-Alok-Backgrounds-on-Wallpaper-Bat.jpg"
  },
  {
    title: "There For Me",
    artist: "Braaten & Victor Perry",
    file: "https://files.catbox.moe/55rhhy.mp3",
    cover: "https://i.postimg.cc/2jsdMmWs/Braaten-amp-Victor-Perry-There-For-Me-Lyrics-Genius-Lyrics.png"
  },
  {
    title: "Burn",
    artist: "Ellie Goulding",
    file: "https://files.catbox.moe/nagm5w.mp3",
    cover: "https://i.postimg.cc/bN10jMHs/Ellie-Goulding-Burn-Album.png"
  },
  {
    title: "She Doesn t Mind",
    artist: "Sean Paul",
    file: "https://files.catbox.moe/2sihut.mp3",
    cover: "https://i.postimg.cc/B6tc9nM0/Corrientes-de-M-sica-SEAN-PAUL-She-Doesn-t-Mind-Remix.jpg"
  },
  {
    title: "What The Hell",
    artist: "Avril Lavigne",
    file: "https://files.catbox.moe/3xrm6t.mp3",
    cover: "https://i.postimg.cc/Vsp4wnxH/Image-gallery-for-Avril-Lavigne-What-the-Hell-Music-Video-Fi.jpg"
  },
  {
    title: "Girl On The Moon",
    artist: "Naya",
    file: "https://files.catbox.moe/l25lw2.mp3",
    cover: "https://i.postimg.cc/SN9dxjqQ/Naya-une-girl-on-the-moon-prometteuse-interview-Ruby-1.jpg"
  },
  
  {
    title: "One More Night",
    artist: "Lost Frequencies",
    file: "https://files.catbox.moe/0yy4cy.mp3",
    cover: "https://i.postimg.cc/vm4cGxF3/Lost-Frequencies-Unveils-New-Track-039-One-More-Night-039-EDMTunes.jpg"
  },
  {
    title: "Dont Leave Me Now",
    artist: "Lost Frequencies",
    file: "https://files.catbox.moe/w6cggl.mp3",
    cover: "https://i.postimg.cc/sg6MF98M/PAST-EVENTS-Theory-Elevengg.jpg"
  },
  {
    title: "Play",
    artist: "Alan Walker & Tungevaag",
    file: "https://files.catbox.moe/1s4gxi.mp3",
    cover: "https://i.postimg.cc/cCRvVqyW/61-Alan-walker-ideas-alan-walker-walker-alany.jpg"
  },
  {
    title: "Knockout",
    artist: "Tungevaag",
    file: "https://files.catbox.moe/ulxi3h.mp3",
    cover: "https://i.postimg.cc/NfxyDwk7/Tungevaag-Dharma-Studio.jpg"
  },
  {
    title: "Make You Happy",
    artist: "Tungevaag",
    file: "https://files.catbox.moe/ef6oj6.mp3",
    cover: "https://i.postimg.cc/NfxyDwk7/Tungevaag-Dharma-Studio.jpg"
  },
  {
    title: "Kingdoms",
    artist: "Tungevaag & Jay Hardway",
    file: "https://files.catbox.moe/45ckcv.mp3",
    cover: "https://i.postimg.cc/NfxyDwk7/Tungevaag-Dharma-Studio.jpg"
  },
  {
    title: "Tusa",
    artist: "Karol",
    file: "https://files.catbox.moe/udl6zt.mp3",
    cover: "https://i.postimg.cc/15SnDzw3/Karol-G-Feat-Nicki-Minaj-Tusa-David-Dancos-Remix-by-David-D.jpg"
  },
  {
    title: "Tired",
    artist: "Alan Walker",
    file: "https://files.catbox.moe/52a0nh.mp3",
    cover: "https://i.postimg.cc/TPtZNfj0/Beauty-Plus-20251002041642052-save.jpg"
  },
  {
    title: "One More Light",
    artist: "Linkin Park",
    file: "https://files.catbox.moe/rnom3s.mp3",
    cover: "https://i.postimg.cc/8kMfFvFY/Linkin-Park-One-More-Light-2017-be-subjective-1.jpg"
  },
  {
    title: "Apocalypse",
    artist: "Cigarette After",
    file: "https://files.catbox.moe/gmsls0.mp3",
    cover: "https://i.postimg.cc/PqJ8NFZb/Cigarettes-After-Sex-Apocalypse-Lyrics-Genius-Lyrics.jpg"
  },
  {
    title: "Dynasty",
    artist: "Miia",
    file: "https://files.catbox.moe/n4pgnt.mp3",
    cover: "https://i.postimg.cc/FK6kSggM/1758591260433.jpg"
  },
  {
    title: "Say Yes To Heaven",
    artist: "Lana Del Rey",
    file: "https://files.catbox.moe/q7o25y.mp3",
    cover: "https://i.postimg.cc/t42xqH1C/Lana-Del-Rey-Yes-To-Heaven-by-Kallum-Lavigne-on-Deviant-Art.png"
  },
  {
    title: "Royalty",
    artist: "Egzod, Maestro Chives, Neoni",
    file: "https://files.catbox.moe/9ok0rh.mp3",
    cover: "https://i.postimg.cc/v8VfWjK3/Egzod-on-TIDAL.jpg"
  },
  {
    title: "Lovely",
    artist: "Billie Eilish",
    file: "https://files.catbox.moe/5i9juo.mp3",
    cover: "https://i.postimg.cc/133xG8wQ/Billie-Eilish-Lovely-1.jpg"
  },
  {
    title: "Let Me Down Slowly",
    artist: "Alec Benjamin",
    file: "https://files.catbox.moe/ndxvu0.mp3",
    cover: "https://i.postimg.cc/FsZ5kydr/Let-Me-Down-Slowly-Cover-You-Tube-Music-1.jpg"
  }

];
