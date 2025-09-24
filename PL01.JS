Amplitude.init({
    "songs": [
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
    ]
});

// Função para baixar qualquer arquivo a partir de URL
function baixarMusica(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao baixar arquivo.');
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

// Seleciona o botão e adiciona o evento
document.getElementById('download-btn').addEventListener('click', () => {
    const currentSong = Amplitude.getActiveSongMetadata(); // pega música atual
    if (currentSong && currentSong.url) {
        baixarMusica(currentSong.url);
    } else {
        alert("Nenhuma música está tocando no momento.");
    }
});