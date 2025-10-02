// Lista de músicas
const playlist1 = [
  {
    title: "Sorry",
    artist: "Justin Bieber",
    file: "https://files.catbox.moe/gm6wog.mp3",
    cover: "https://i.postimg.cc/fTC0zgw5/Just-Bieber.jpg"
  },
  {
    title: "Ghost",
    artist: "Justin Bieber",
    file: "https://files.catbox.moe/82i0xx.mp3",
    cover: "https://i.postimg.cc/fb2GMsFZ/Ghost.jpg"
  },
  {
    title: "Kiss Me",
    artist: "Dermot Kennedy",
    file: "https://files.catbox.moe/8zb396.mp3",
    cover: "https://i.postimg.cc/ydCFgg2T/Kiss-Me.jpg"
  },
  {
    title: "Better Day",
    artist: "Dermot Kennedy",
    file: "https://files.catbox.moe/s6iin3.mp3",
    cover: "https://i.postimg.cc/ydCFgg2T/Kiss-Me.jpg"
  },
  {
    title: "Numb",
    artist: "Marshmello, Khalid",
    file: "https://files.catbox.moe/u9n81t.mp3",
    cover: "https://i.postimg.cc/kg6j1Njy/Numb.jpg"
  },
  {
    title: "Girls in Luv",
    artist: "DJane HouseKat feat. Rameez",
    file: "https://files.catbox.moe/0etv0s.mp3",
    cover: "https://i.postimg.cc/kgFj3Yy7/Girls-in-Luv.jpg"
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
    cover: "https://i.postimg.cc/XNTvCs6K/Whistle.png"
  },
  {
    title: "Hear Me Now",
    artist: "Alok,feat Zeeba",
    file: "https://files.catbox.moe/pixm40.mp3",
    cover: "https://i.postimg.cc/3NKWkRvy/Alok.jpg"
  },
  {
    title: "There For Me",
    artist: "Braaten & Victor Perry",
    file: "https://fine.sunproxy.net/file/NTMvWGg4T0dnL2M1SllIcDU0VjlJT2oydTdxS0pDTkJRa0lhU0pDTkIxaFdxTGQrUjBlWXVxMGJDaFJab3hlaE02QWtEMEVOUW9hWW4rWTY5ckJqUkdpbE1ickJCc2VNWXorcEF6d1pYOG89/Braaten_Victor_Perry_-_There_For_Me_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/ZYMhBn31/There-For-Me.png"
  },
  {
    title: "Burn",
    artist: "Ellie Goulding",
    file: "https://fine.sunproxy.net/file/NTMvWGg4T0dnL2M1SllIcDU0VjlJT2oydTdxS0pDTkJRa0lhU0pDTkIxaHJiUnFQemtXMmw1RlNFbitsOC9SV3BNZzFadEdMWVpJNi9VRkZzS2VDMk0vclhLbXcvSGJPYkF3em9EaFJJSlk9/Ellie_Goulding_-_Burn_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/XYD2xBNb/Ellie-Goulding-Burn.png"
  },
  {
    title: "She Doesn t Mind",
    artist: "Sean Paul",
    file: "https://fine.sunproxy.net/file/NTMvWGg4T0dnL2M1SllIcDU0VjlJT2oydTdxS0pDTkJRa0lhU0pDTkIxaWlJbGQ1bmY1ZE9zRlNmZmtTbGE4M2dub1lyZGZDR3FUUktkc0d3SkdSY3N0c3dDTHJ5RTdPcjF5UXZOeTNFeTA9/Sean_Paul_-_She_Doesn_t_Mind_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/DwsgQjNq/She-Doesn-t-Mind.jpg"
  },
  {
    title: "What The Hell",
    artist: "Avril Lavigne",
    file: "https://files.catbox.moe/3xrm6t.mp3",
    cover: "https://i.postimg.cc/Vkmy2VCF/Avril-Lavigne-What-the-Hell.jpg"
  },
  {
    title: "Girl On The Moon",
    artist: "Naya",
    file: "https://fine.sunproxy.net/file/NTMvWGg4T0dnL2M1SllIcDU0VjlJT2oydTdxS0pDTkJRa0lhU0pDTkIxaHJiUnFQemtXMmw1RlNFbitsOC9SV05iRHFONlFxaVNVOGRJQURBYVRpMFVwM2JHMlBoRzk0LzU5RFN0NW5qcG89/Naya_-_Girl_On_The_Moon_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/fR93gkYd/Naya-Ruby.jpg"
  },
  
  {
    title: "One More Night",
    artist: "Lost Frequencies",
    file: "https://files.catbox.moe/0yy4cy.mp3",
    cover: "https://i.postimg.cc/4NcswY0c/One-More-Night.jpg"
  },
  {
    title: "Dont Leave Me Now",
    artist: "Lost Frequencies",
    file: "https://dl.muzofan.net/mp3/Lost_Frequencies__Mathieu_Koss_-_Dont_Leave_Me_Now_(www.muzofan.net).mp3",
    cover: "https://i.postimg.cc/9Fst5n1S/Lzf.jpg"
  },
  {
    title: "Play",
    artist: "Alan Walker & Tungevaag",
    file: "https://dl.muzofan.net/mp3/Alan_Walker__K-391_Ft._Tungevaag__Mangoo_-_Play_(www.muzofan.net).mp3",
    cover: "https://i.postimg.cc/qRMCCPp1/AW.jpg"
  },
  {
    title: "Knockout",
    artist: "Tungevaag",
    file: "https://dl.muzofan.net/mp3/Tungevaag_-_Knockout_(www.muzofan.net).mp3",
    cover: "https://i.postimg.cc/NfxyDwk7/Tungevaag-Dharma-Studio.jpg"
  },
  {
    title: "Make You Happy",
    artist: "Tungevaag",
    file: "https://dl.muzofan.net/mp3/Tungevaag_-_Make_You_Happy_(www.muzofan.net).mp3",
    cover: "https://i.postimg.cc/NfxyDwk7/Tungevaag-Dharma-Studio.jpg"
  },
  {
    title: "Kingdoms",
    artist: "Tungevaag & Jay Hardway",
    file: "https://dl.muzofan.net/mp3/Tungevaag__Jay_Hardway_-_Kingdoms_(www.muzofan.net).mp3",
    cover: "https://i.postimg.cc/NfxyDwk7/Tungevaag-Dharma-Studio.jpg"
  },
  {
    title: "Tusa",
    artist: "Karol",
    file: "https://files.catbox.moe/udl6zt.mp3",
    cover: "https://i.postimg.cc/XJ2z062F/Karol-G.jpg"
  },
  {
    title: "Tired",
    artist: "Alan Walker",
    file: "https://files.catbox.moe/52a0nh.mp3",
    cover: "https://i.postimg.cc/pXvq1TV7/Tired.jpg"
  },
  {
    title: "One More Light",
    artist: "Linkin Park",
    file: "https://files.catbox.moe/rnom3s.mp3",
    cover: "https://i.postimg.cc/W3M0MGZ4/Linkin-Park-One-More-Light.jpg"
  },
  {
    title: "Apocalypse",
    artist: "Cigarette After",
    file: "https://files.catbox.moe/gmsls0.mp3",
    cover: "https://i.postimg.cc/nhFyQ263/Apocalypse.jpg"
  },
  {
    title: "Dynasty",
    artist: "Miia",
    file: "https://files.catbox.moe/n4pgnt.mp3",
    cover: "https://i.postimg.cc/Z5PDjNhC/Miia.jpg"
  },
  {
    title: "Say Yes To Heaven",
    artist: "Lana Del Rey",
    file: "https://files.catbox.moe/q7o25y.mp3",
    cover: "https://i.postimg.cc/Jz9Zy6FX/Yes-To-Heaven.png"
  },
  {
    title: "Royalty",
    artist: "Egzod, Maestro Chives, Neoni",
    file: "https://files.catbox.moe/9ok0rh.mp3",
    cover: "https://i.postimg.cc/FKpSPrRy/Royalty.jpg"
  },
  {
    title: "Lovely",
    artist: "Billie Eilish",
    file: "https://fine.sunproxy.net/file/NTMvWGg4T0dnL2M1SllIcDU0VjlJT2oydTdxS0pDTkJRa0lhU0pDTkIxakg3a1BTUkxSR3psVnkya00vSHNIMTVZQW1IeWljRjd2VkMvODZCcWZIcWFueFlLVWtnakJaUmF5MUp1T2QxMUU9/Billie_Eilish_-_lovely_with_Khalid_Lyrics_Video_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/cL2wgxHT/Ly.png"
  },
  {
    title: "Let Me Down Slowly",
    artist: "#Alec Benjamin",
    file: "https://fine.sunproxy.net/file/NTMvWGg4T0dnL2M1SllIcDU0VjlJT2oydTdxS0pDTkJRa0lhU0pDTkIxaWlJbGQ1bmY1ZE9zRlNmZmtTbGE4M3NPVVFYazY5Qmkvbk1va2t6RnozTlp5dzRSSkZiVHpDUkFDQUU5cHNodUk9/Alec_Benjamin_-_Let_Me_Down_Slowly_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/ZRCrCWPf/Let-Me-Down-Slowly.jpg"
  }

];
