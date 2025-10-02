// Lista de músicas
const playlist1 = [
  {
    title: "Sorry",
    artist: "Justin Bieber",
    file: "https://topghanamusic.com/wp-content/uploads/2025/07/Justin-Bieber-Sorry-(TopGhanaMusic.Com).mp3",
    cover: "https://i.postimg.cc/fTC0zgw5/Just-Bieber.jpg"
  },
  {
    title: "Ghost",
    artist: "Justin Bieber",
    file: "https://www.thinkmusic.com.ng/thinknews/uploads/2025/06/Justin_Bieber_-_Ghost_thinknews.com.ng.mp3",
    cover: "https://i.postimg.cc/fb2GMsFZ/Ghost.jpg"
  },
  {
    title: "Kiss Me",
    artist: "Dermot Kennedy",
    file: "https://stream.nct.vn/Unv_Audio386/KissMe-DermotKennedy-12046970.mp3?st=dU0xoMzhqPEDUom83SUvxQ&e=1759089105&a=1&p=0&r=cffb803dbb5d364b02aa9708a781bb89",
    cover: "https://i.postimg.cc/ydCFgg2T/Kiss-Me.jpg"
  },
  {
    title: "Better Day",
    artist: "Dermot Kennedy",
    file: "https://cdn3.mp3gaa.xyz/swahilisongs/wp-content/uploads/2023/07/Dermot_Kennedy_-_Better_Days.mp3",
    cover: "https://i.postimg.cc/ydCFgg2T/Kiss-Me.jpg"
  },
  {
    title: "Numb",
    artist: "Marshmello, Khalid",
    file: "https://cs1.mp3.pm/download/209720228/WlFGR3krL2dkRHZmWW54cFVuaG5SYitRaEtLRm02L25aakt3WVQrQzlVUHNvTWx6WFFtZUJUc2pBNFlrM3RPZE1PNmhodEgvRVBQL3pJTXM4V0xHSnFVWitwNGc4OTY4UCtHYUJEaXRmNHpmSmJSK1FucldZd05OSzI2dnE5d04/Marshmello_Khalid_-_Numb_DJ_YUKI_Remix_(mp3.pm).mp3",
    cover: "https://i.postimg.cc/kg6j1Njy/Numb.jpg"
  },
  {
    title: "Girls in Luv",
    artist: "DJane HouseKat feat. Rameez",
    file: "https://cs1.mp3.pm/listen/92812357/WlFGR3krL2dkRHZmWW54cFVuaG5SYitRaEtLRm02L25aakt3WVQrQzlVTkRQZGwvZE5TeGhMMHFNQjBlc3J0TmV4RnZVc3c3ZGxUNXVMQytrZVdNVytWUnBmL094dkpvd0FyTFkxNTl2MVVFTngvazVhYWVJNWMwZkMvVzZZakE/Rameez_-_Girls_In_Luv_(mp3.pm).mp3",
    cover: "https://i.postimg.cc/kgFj3Yy7/Girls-in-Luv.jpg"
  },
  {
    title: "Good Feeling",
    artist: "Flo Rida",
    file: "https://fine.sunproxy.net/file/MnJqY0RNNDJxRVE2VTFIa3U0anF6NWJaeE5VVFIyUHFhSVhxUUJjbVBXTGc3dDFoQS8zOGFKWGxqQk5tVmRVbmNEQlNpMHkrQytaMG4zQ0ZLWlp1L2tBZGtCWFZsNHhJclAzK0plc25vZFE9/Flo_Rida_-_Good_Feeling_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/ZnpN4BN1/Good-Feeling-by-Flo-Rida-Rihanna-lyrics-Piano-sheet-music-Kar.jpg"
  },
  {
    title: "Whistle",
    artist: "Flo Rida",
    file: "https://fine.sunproxy.net/file/MnJqY0RNNDJxRVE2VTFIa3U0anF6NWJaeE5VVFIyUHFhSVhxUUJjbVBXTGc3dDFoQS8zOGFKWGxqQk5tVmRVbnhsUEVvUjJsdzUwSFNDZ3Vhc0NUQjJUWXFvQUVwRDdLaEtreEQzVEJaM009/Flo_Rida_-_Whistle_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/XNTvCs6K/Whistle.png"
  },
  {
    title: "Hear Me Now",
    artist: "Alok,feat Zeeba",
    file: "https://fine.sunproxy.net/file/NTMvWGg4T0dnL2M1SllIcDU0VjlJT2oydTdxS0pDTkJRa0lhU0pDTkIxaHJiUnFQemtXMmw1RlNFbitsOC9SV2J4SXRKQVJPZ2NBTFV4RkUyaFhDR0xrTUJkY2NoUzEwTzFHdmlSYUhlVE09/Alok_-_Hear_Me_Now_feat_Zeeba_(Rilds.com).mp3",
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
    file: "https://fine.sunproxy.net/file/NTMvWGg4T0dnL2M1SllIcDU0VjlJT2oydTdxS0pDTkJRa0lhU0pDTkIxakg3a1BTUkxSR3psVnkya00vSHNIMU5aU3prMVNRdXZ3NGo3NDgwTlpxUUZFRHRoRzR2Zy94UG9UaGlkOGxIVlE9/Avril_Lavigne_-_What_The_Hell_(Rilds.com).mp3",
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
    file: "https://stream.junodownload.com/?track_key=4688229-02-01-01",
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
    file: "https://dn720702.ca.archive.org/0/items/karol-g-tusa-ft.-nicki-minaj/Karol%20G-Tusa%20%28Ft.%20Nicki%20Minaj%29.mp3",
    cover: "https://i.postimg.cc/XJ2z062F/Karol-G.jpg"
  },
  {
    title: "Tired",
    artist: "Alan Walker",
    file: "https://fine.sunproxy.net/file/RHRHSVpnbDJvekRXUDZoOTcxZE9ySW53UG4yMVNwMm8yQWh4ZkV1UWg0cGx0TDZ6QjVCUVY5OFEvbGM5NjhvZW0yQ2lNWlNPVzVQYXYyeWx1Q0NZc3ExUFh5TkM2TDF3Q3cyeG93N3hBZGs9/Alan_Walker_-_Tired_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/pXvq1TV7/Tired.jpg"
  },
  {
    title: "One More Light",
    artist: "Linkin Park",
    file: "https://fine.sunproxy.net/file/RHRHSVpnbDJvekRXUDZoOTcxZE9ySW53UG4yMVNwMm8yQWh4ZkV1UWg0cklaeXVNUWtZWGhqa3Nnb1MyNFdqMlpZWGh6REVyTXQxeXJBOTVlQ1N1MjV5cjBmU21BTmZ0dXVwV2pZczUzVGc9/Linkin_Park_-_One_More_Light_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/W3M0MGZ4/Linkin-Park-One-More-Light.jpg"
  },
  {
    title: "Apocalypse",
    artist: "Cigarette After",
    file: "https://fine.sunproxy.net/file/NTMvWGg4T0dnL2M1SllIcDU0VjlJT2oydTdxS0pDTkJRa0lhU0pDTkIxaWFDZFR2NzhraGM5SWZ6WE1RMENPQ1FFSEpzV1ZOako0dEtuV0lDYWRmZUMvM1FOK0lxZUxLK2pHZkhTZ1RLMkE9/cigarette_after_sex_-_Apocalypse_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/nhFyQ263/Apocalypse.jpg"
  },
  {
    title: "Dynasty",
    artist: "Miia",
    file: "https://fine.sunproxy.net/file/NTMvWGg4T0dnL2M1SllIcDU0VjlJT2oydTdxS0pDTkJRa0lhU0pDTkIxaWlJbGQ1bmY1ZE9zRlNmZmtTbGE4M2cyNk9waUxiSW9IK3hvNHlBekowVmlxNExDUXVXWFhGam5qTmg0MlFaSkU9/MIIA_-_Dynasty_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/Z5PDjNhC/Miia.jpg"
  },
  {
    title: "Say Yes To Heaven",
    artist: "Lana Del Rey",
    file: "https://fine.sunproxy.net/file/NTMvWGg4T0dnL2M1SllIcDU0VjlJT2oydTdxS0pDTkJRa0lhU0pDTkIxZ25rS3k0WGRUNTUyekxLN05YN2NoYytzNFhUV3IvYjNvU1hqbHp4M2FjQnZTa1dsa0J0UG1mTWd1L2llblE5UU09/Lana_Del_Rey_-_Say_Yes_To_Heaven_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/Jz9Zy6FX/Yes-To-Heaven.png"
  },
  {
    title: "Royalty",
    artist: "Egzod, Maestro Chives, Neoni",
    file: "https://fine.sunproxy.net/file/NTMvWGg4T0dnL2M1SllIcDU0VjlJT2oydTdxS0pDTkJRa0lhU0pDTkIxaWlJbGQ1bmY1ZE9zRlNmZmtTbGE4M1lFb1AyMFEraXU3VXVIQUdSZ0hKWnluaThuZWxiWWJ4d01SS0cwZTFtRjQ9/Egzod_Maestro_Chives_Neoni_-_Royalty_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/FKpSPrRy/Royalty.jpg"
  },
  {
    title: "The Night We Met",
    artist: "Lord Huron",
    file: "https://fine.sunproxy.net/file/NTMvWGg4T0dnL2M1SllIcDU0VjlJT2oydTdxS0pDTkJRa0lhU0pDTkIxaWlJbGQ1bmY1ZE9zRlNmZmtTbGE4M3QxKyt4MWNOQmhCQ3owOW5GRTNwWVFWZWw4MjdpZXF6aEtveVZiNEJLdkU9/2.22_-_Lord_Huron_-_The_Night_We_Met_(Rilds.com).mp3",
    cover: "https://i.postimg.cc/5y0ZRSVx/The-Night-We-Met.jpg"
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
