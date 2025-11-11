// Lançamentos
const playlist1 = [
  {
    title: "Pandora",
    artist: "David Win",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Pandora.mp3",
    cover: "https://i.postimg.cc/br7hWvrz/Pandora.webp"
  },
  {
    title: "I Regret You",
    artist: "Bree Taylor",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/I Regret You.mp3",
    cover: "https://i.postimg.cc/vm4dY9ns/BT.webp"
  },
  {
    title: "Sorry",
    artist: "Justin Bieber",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Sorry.mp3",
    cover: "https://i.postimg.cc/BvB2vLGt/Sorry.webp"
  },
  {
    title: "Ghost",
    artist: "Justin Bieber",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Ghost.mp3",
    cover: "https://i.postimg.cc/zG177R5k/ghost.webp"
  },
  {
    title: "Kiss Me",
    artist: "Dermot Kennedy",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Kiss Me.mp3",
    cover: "https://i.postimg.cc/NfbFJ3vV/dm.webp"
  },
  {
    title: "Better Days",
    artist: "Dermot Kennedy",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Better Days.mp3",
    cover: "https://i.postimg.cc/NfbFJ3vV/dm.webp"
  },
  {
    title: "Numb",
    artist: "Marshmello, Khalid",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Numb.mp3",
    cover: "https://i.postimg.cc/y8FQCyvN/Apple-Music-Marshmello-Khalid-Numb-Single-1-2.webp"
  },
  {
    title: "Girls in Luv",
    artist: "DJane HouseKat feat. Rameez",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Girls in Luv.mp3",
    cover: "https://i.postimg.cc/Jz16mBg6/Girls-in-Luv.webp"
  },
  {
    title: "Good Feeling",
    artist: "Flo Rida",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Good Feeling.mp3",
    cover: "https://i.postimg.cc/QM7Wyfb6/FD.webp"
  },
  {
    title: "Whistle",
    artist: "Flo Rida",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Whistle.mp3",
    cover: "https://i.postimg.cc/hvYDgB4D/FRW.webp"
  },
  {
    title: "Hear Me Now",
    artist: "Alok,feat Zeeba",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Hear Me Now.mp3",
    cover: "https://i.postimg.cc/ydk6Gxsg/Alok.webp"
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Blinding Lights.mp3",
    cover: "https://i.postimg.cc/bwCKBTJG/TWB.webp"
  },
  {
    title: "Das Geht Boom",
    artist: "Harris & Ford, Gordon & Doyle, Lisah",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Das Geht Boom.mp3",
    cover: "https://i.postimg.cc/wxrR9KGQ/hz.webp"
  },
  {
    title: "From Up Above",
    artist: "Twinjabi",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/From Up Above.mp3",
    cover: "https://i.postimg.cc/6503TDHg/Twinjabi.webp"
  },
  {
    title: "Greedy",
    artist: "Tate McRae",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Greedy.mp3",
    cover: "https://i.postimg.cc/SxPmMqc7/GY.webp"
  },
  {
    title: "Hislerim",
    artist: "Serhat Durmus, Zerrin",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Hislerim.mp3",
    cover: "https://i.postimg.cc/W1BQV4GN/HZ.webp"
  },
  {
    title: "Ma Chérie",
    artist: "DJ Antoine, The Beatshakers",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Ma Chérie.mp3",
    cover: "https://i.postimg.cc/hG5zLB41/DJA.webp"
  },
  {
    title: "There For Me",
    artist: "Braaten & Victor Perry",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/There For Me.mp3",
    cover: "https://i.postimg.cc/QdPhSx5b/There-For-Me.webp"
  },
  {
    title: "Burn",
    artist: "Ellie Goulding",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Burn.mp3",
    cover: "https://i.postimg.cc/j28G5Z4g/Ellie-Goulding-Burn-Album.webp"
  },
  {
    title: "She Doesn t Mind",
    artist: "Sean Paul",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/She Doesn t Mind.mp3",
    cover: "https://i.postimg.cc/nzFRDqz7/Sean-Paul-She-Doesn-t-Mind-Dj-Pamen-Remix.webp"
  },
  {
    title: "What The Hell",
    artist: "Avril Lavigne",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/What The Hell.mp3",
    cover: "https://i.postimg.cc/4yK16PT9/wth.webp"
  },
  {
    title: "Girl On The Moon",
    artist: "Naya",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Girl On The Moon.mp3",
    cover: "https://i.postimg.cc/kXvyxB08/Naya-Ruby.webp"
  },
  {
    title: "One More Night",
    artist: "Lost Frequencies",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/One More Night.mp3",
    cover: "https://i.postimg.cc/JzPVd7kS/omn.webp"
  },
  {
    title: "Dont Leave Me Now",
    artist: "Lost Frequencies",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Dont Leave Me Now.mp3",
    cover: "https://i.postimg.cc/zv0VfZQH/Lost-Frequencies.webp"
  },
  {
    title: "Play",
    artist: "Alan Walker & Tungevaag",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Play.mp3",
    cover: "https://i.postimg.cc/43jJB4DF/Play.webp"
  },
  {
    title: "Knockout",
    artist: "Tungevaag",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Knockout.mp3",
    cover: "https://i.postimg.cc/KYfPMVCT/1000479222-2.webp"
  },
  {
    title: "Make You Happy",
    artist: "Tungevaag",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Make You Happy.mp3",
    cover: "https://i.postimg.cc/KYfPMVCT/1000479222-2.webp"
  },
  {
    title: "Kingdoms",
    artist: "Tungevaag & Jay Hardway",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Kingdoms.mp3",
    cover: "https://i.postimg.cc/KYfPMVCT/1000479222-2.webp"
  },
  {
    title: "Tusa",
    artist: "Karol",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Tusa.mp3",
    cover: "https://i.postimg.cc/W16f1s6Y/Tusa.webp"
  },
  {
    title: "Tired",
    artist: "Alan Walker",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Tired.mp3",
    cover: "https://i.postimg.cc/d3fcnwSD/Tired.webp"
  },
  {
    title: "One More Light",
    artist: "Linkin Park",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/One More Light.mp3",
    cover: "https://i.postimg.cc/MHHvvZQ8/One-More-Light.webp"
  },
  {
    title: "Apocalypse",
    artist: "Cigarette After",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Apocalypse.mp3",
    cover: "https://i.postimg.cc/9QdFXwnT/Apocalypse.webp"
  },
  {
    title: "Dynasty",
    artist: "Miia",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Dynasty.mp3",
    cover: "https://i.postimg.cc/Gtjnwv2J/Dynasty.webp"
  },
  {
    title: "Say Yes To Heaven",
    artist: "Lana Del Rey",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Say Yes To Heaven.mp3",
    cover: "https://i.postimg.cc/Pxh6G98c/Yes-To-Heaven.webpg"
  },
  {
    title: "Royalty",
    artist: "Egzod, Maestro Chives, Neoni",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Royalty.mp3",
    cover: "https://i.postimg.cc/8CbRv5jd/Egzod-on-TIDAL.webp"
  },
  {
    title: "Lovely",
    artist: "Billie Eilish",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Lovely.mp3",
    cover: "https://i.postimg.cc/J41Gyqbr/Beauty-Plus-20251008155100417-save-1.webp"
  },
  {
    title: "Let Me Down Slowly",
    artist: "Alec Benjamin",
    file: "https://nd.nl.tab.digital/public.php/dav/files/QjzyC5ZixygLoHL/Ty Músic/Let Me Down Slowly.mp3",
    cover: "https://i.postimg.cc/3wjsDgXC/LMDS.webp"
  }
];