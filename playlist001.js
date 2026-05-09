// Lançamentos
const playlist1 = [
  {
    title: "Amor é Sexo",
    artist: "Hungria  feat  Tribo da Periferia",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Hip-Hop (2025)/Amor é Sexo.mp3",
    cover: "https://i.postimg.cc/htJsffrJ/boss.webp"
  },
  {
    title: "Giuliana",
    artist: "KLB",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/KLB/Giuliana.mp3",
    cover: "https://i.postimg.cc/VkDm8zCb/klb.webp"
  },
  {
    title: "Vaqueira",
    artist: "Milsinho Toque Dez",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Toque Dez/Vaqueira.mp3",
    cover: "https://lh3.googleusercontent.com/wGlM3Iy2hpWgMuj7ZrL_py3XGOAERS7nm1w1g3eyLe2hNOnVf9olYIwrkqS5qzzymouQxnXMRrgHfFhD=w544-h544-l90-rj"
  },
  {
    title: "190",
    artist: "Iohannes Imperador",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Iohannes Imperador/190.mp3",
    cover: "https://i.postimg.cc/cLrbL0p8/ihoranes.webp"
  },
  {
    title: "Samara",
    artist: "Cintura de Mola",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Cintura de Mola/Samara.mp3",
    cover: "https://lh3.googleusercontent.com/7UDZtu3gz2KuD0B27MZr7pzdlIl5xRjKRYeUx5YiVS-Gr7UoKPqDS7fYdPhPfvKclwS9zBwCawyW6f_V=w544-h544-l90-rj"
  },
  {
    title: "Aquele Love",
    artist: "Grego do Piseiro",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Grego do Piseiro/Aquele Love.mp3",
    cover: "https://lh3.googleusercontent.com/fGWWEBHU2QOFRFxkEzR482sU3jV1V9H1DdF-4uQukD1yT6_DgWqTfqqcieEySaNyABgFVY1CKkX6xEtV=w544-h544-l90-rj"
  },
  {
    title: "Porta aberta",
    artist: "Luka",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Luka (MIX)/Porta aberta.mp3",
    cover: "https://i.postimg.cc/nL9tbTzd/luka.webp"
  },
  {
    title: "Olhar 43",
    artist: "KLB",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/KLB/Olhar 43.mp3",
    cover: "https://i.postimg.cc/VkDm8zCb/klb.webp"
  },
  {
    title: "Você é Mó Bagunçada",
    artist: "Milsinho Toque Dez",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Toque Dez/Você é mó bagunçada.mp3",
    cover: "https://lh3.googleusercontent.com/A5P8syU_D0iwghdja2Xt43DM-izKGXjHH3DiPpSiccYMT82J53pNHT_idV49bJw_indjrU3P-4dpMyII=w544-h544-l90-rj"
  },
  {
    title: "Sou Louco Por Ela",
    artist: "Iohannes Imperador",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Iohannes Imperador/Sou Louco Por Ela.mp3",
    cover: "https://i.postimg.cc/cLrbL0p8/ihoranes.webp"
  },
  {
    title: "Me Deixa Doidona",
    artist: "Cintura de Mola",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Cintura de Mola/Me Deixa Doidona.mp3",
    cover: "https://lh3.googleusercontent.com/7UDZtu3gz2KuD0B27MZr7pzdlIl5xRjKRYeUx5YiVS-Gr7UoKPqDS7fYdPhPfvKclwS9zBwCawyW6f_V=w544-h544-l90-rj"
  },
  {
    title: "Pane no Sistema",
    artist: "Grego do Piseiro & Paulo Pires",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Grego do Piseiro/Pane no Sistema.mp3",
    cover: "https://lh3.googleusercontent.com/CwFnVlWDyolBLFyrzRX9JEdE52gmzdjDKGG3wotLNb8hISPOWFrmHJ-Nm5fkMH94T36-apTnvykwTos6Dw=w544-h544-l90-rj"
  },
  {
    title: "Tô nem aí",
    artist: "Luka",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Luka (MIX)/Tô nem aí.mp3",
    cover: "https://i.postimg.cc/nL9tbTzd/luka.webp"
  },
  {
    title: "A Cada Dez Palavras",
    artist: "KLB",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/KLB/A Cada Dez Palavras.mp3",
    cover: "https://i.postimg.cc/VkDm8zCb/klb.webp"
  },
  {
    title: "Pensa Direito",
    artist: "Milsinho Toque Dez",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Toque Dez/Pensa direito.mp3",
    cover: "https://lh3.googleusercontent.com/wGlM3Iy2hpWgMuj7ZrL_py3XGOAERS7nm1w1g3eyLe2hNOnVf9olYIwrkqS5qzzymouQxnXMRrgHfFhD=w544-h544-l90-rj"
  },
  {
    title: "Batom Vermelho",
    artist: "Iohannes Imperador",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Iohannes Imperador/Batom Vermelho.mp3",
    cover: "https://i.postimg.cc/cLrbL0p8/ihoranes.webp"
  },
  {
    title: "Menina Pavoro",
    artist: "Cintura de Mola",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Cintura de Mola/Menina Pavorô.mp3",
    cover: "https://lh3.googleusercontent.com/7UDZtu3gz2KuD0B27MZr7pzdlIl5xRjKRYeUx5YiVS-Gr7UoKPqDS7fYdPhPfvKclwS9zBwCawyW6f_V=w544-h544-l90-rj"
  },
  {
    title: "Cheiro de Mato",
    artist: "Gabi Saiury, Kotim & MC Paiva ZS",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Gabi Saiury/Cheiro de Mato.mp3",
    cover: "https://lh3.googleusercontent.com/3Z3v-mLTZ99X48pJbEqZg0njWCqtM3jLyAZsmfGaZLo6NHNf0JCNHnpJ4srXFYN-080rriauclckziI=w544-h544-l90-rj"
  },
  {
    title: "Céu de Diamantes",
    artist: "Luka",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Luka (MIX)/Céu de Diamantes.mp3",
    cover: "https://i.postimg.cc/QMCdBpM5/luka.webp"
  },
  {
    title: "A Dor Desse Amor",
    artist: "KLB",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/KLB/A Dor Desse Amor.mp3",
    cover: "https://i.postimg.cc/VkDm8zCb/klb.webp"
  },
  {
    title: "Fabricada na Roça",
    artist: "Gabi Saiury",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Gabi Saiury/Fabricada na Roça.mp3",
    cover: "https://lh3.googleusercontent.com/8dpVCNgAmSWgf8ZjSbV6Bl-po-8Lqgjiix20Nvp5ixIUudK6fPmc4LogoMu6Y-6WllW5ysHTG9pSzUTPDQ=w544-h544-l90-rj"
  },
  {
    title: "Na Linha do Tempo",
    artist: "Victor & Leo",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Sertanejo (Clássico)/Na Linha do Tempo.mp3",
    cover: "https://i.postimg.cc/Ssh3BdCh/Na-Linha-do-Tempo.webp"
  },
  {
    title: "Querendo ou Não",
    artist: "Gabi Saiury, Japinha Conde & Jonatas Nascimento",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Gabi Saiury/Querendo ou Não.mp3",
    cover: "https://lh3.googleusercontent.com/OyyaVucCCKttbJj8bsm-VDhd1MOX9eHDL7vTvmXhU7Sja3Qcaim3ZgjRmcFtcCyA5uqRO1ntgRHvbQQ=w544-h544-l90-rj"
  },
  {
    title: "Destino",
    artist: "Lucas Lucco",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Sertanejo (Clássico)/Destino.mp3",
    cover: "https://i.postimg.cc/wTZfKFY2/Destino.webp"
  },
  {
    title: "Farra É Pra Quem Pode",
    artist: "Cintura de Mola",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Cintura de Mola/Farra É Pra Quem Pode.mp3",
    cover: "https://lh3.googleusercontent.com/7UDZtu3gz2KuD0B27MZr7pzdlIl5xRjKRYeUx5YiVS-Gr7UoKPqDS7fYdPhPfvKclwS9zBwCawyW6f_V=w544-h544-l90-rj"
  },
  {
    title: "Duas",
    artist: "Nadson O Ferinha",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Nadson O Ferinha/Duas.mp3",
    cover: "https://i.postimg.cc/tJf0tDKW/Nadson.webp"
  },
  {
    title: "Nosso Quadro",
    artist: "Nadson O Ferinha",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Nadson O Ferinha/Nosso Quadro.mp3",
    cover: "https://i.postimg.cc/tJf0tDKW/Nadson.webp"
  },
  {
    title: "Casa de Milhões",
    artist: "Nadson O Ferinha",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Nadson O Ferinha/Casa de Milhões.mp3",
    cover: "https://i.postimg.cc/tJf0tDKW/Nadson.webp"
  },
  {
    title: "Depois do Universo",
    artist: "Nadson O Ferinha",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Nadson O Ferinha/Depois do Universo.mp3",
    cover: "https://i.postimg.cc/tJf0tDKW/Nadson.webp"
  },
  {
    title: "Chuva",
    artist: "João Bosco & Vinicius",
    file: "https://pub-e00f997a056944a1ada4449909225910.r2.dev/Sertanejo (Clássico)/Chuva.mp3",
    cover: "https://i.postimg.cc/t4fHMF2K/Chuva.webp"
  },
];