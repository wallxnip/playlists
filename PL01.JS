const songs = [
    {
        "name": "Sorry",
        "artist": "Justin Bieber",
        "url": "https://topghanamusic.com/wp-content/uploads/2025/07/Justin-Bieber-Sorry-(TopGhanaMusic.Com).mp3",
        "cover_art_url": "https://i.postimg.cc/zf43vDq5/2025-09-22-20-44-16-artworks-000261882173-b14ar2-t240x240.jpg"
    },
    {
        "name": "Ghost",
        "artist": "Justin Bieber",
        "url": "https://www.thinkmusic.com.ng/thinknews/uploads/2025/06/Justin_Bieber_-_Ghost_thinknews.com.ng.mp3",
        "cover_art_url": "https://i.postimg.cc/gjgSnxLJ/Stream-Justin-Bieber-Ghost-by-Kixibee-Listen-online-for-free.jpg"
    }
];

// Inicializa o Amplitude
Amplitude.init({ songs: songs });

// Função de download
function baixarMusica(url) {
    if (!url) { alert("URL inválida."); return; }

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Erro ao acessar a URL.");
            return response.blob();
        })
        .then(blob => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = url.split('/').pop();
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(a.href);
        })
        .catch(err => console.error('Erro ao baixar:', err));
}

// Botão de download
const downloadBtn = document.getElementById('download-btn');

// Função para atualizar botão de forma segura
function atualizarBotao() {
    const activeIndex = Amplitude.getActiveIndex();
    const songs = Amplitude.getSongs();

    if (activeIndex !== null && songs[activeIndex] && songs[activeIndex].url) {
        downloadBtn.disabled = false;
        downloadBtn.onclick = () => baixarMusica(songs[activeIndex].url);
    } else {
        downloadBtn.disabled = true;
        downloadBtn.onclick = null;
    }
}

// Atualiza botão quando a música muda
Amplitude.bind("song_change", () => {
    atualizarBotao();
});

// Inicializa o estado do botão
atualizarBotao();