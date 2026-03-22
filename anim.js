// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Letras + silencios instrumentales
var lyricsData = [
  // Intro instrumental
  { text: "", time: 0 },
  { text: "", time: 5 },
  { text: "", time: 10 },

  // Primera estrofa
  { text: "Rousing from dreams, craving for someone", time: 15 },
  { text: "Wept himself to sleep", time: 22 },
  { text: "He's waiting, no sign from above", time: 28 },
  { text: "Where is the love?", time: 34 },

  // Silencio
  { text: "", time: 40 },

  // Segunda estrofa
  { text: "The hourglass in pieces, dashed to the wall", time: 45 },
  { text: "The future is over", time: 52 },
  { text: "Tomorrow's been slipping away", time: 58 },
  { text: "And nothing remains", time: 64 },

  // Silencio
  { text: "", time: 70 },

  // Pre-coro
  { text: "He'd known it won't last forever", time: 75 },
  { text: "She'd go ahead for a while", time: 82 },

  // Coro
  { text: "When you open your eyes", time: 90 },
  { text: "When you gaze at the sky", time: 95 },
  { text: "When you look to the stars", time: 100 },
  { text: "As they shut down the night", time: 105 },
  { text: "You know the story ain't over", time: 110 },

  // Silencio
  { text: "", time: 115 },

  { text: "When you open your eyes", time: 120 },
  { text: "When you gaze at the sky", time: 125 },
  { text: "When you look to the stars", time: 130 },
  { text: "As they shut down the night", time: 135 },
  { text: "You feel the story ain't over", time: 140 },

  // Estrofa siguiente
  { text: "Where is the candle in this lonesome night?", time: 150 },
  { text: "Angel, why are you so wayward?", time: 156 },
  { text: "Abandoning me, try my belief", time: 162 },

  // Silencio
  { text: "", time: 168 },

  { text: "Where life is not words", time: 172 },
  { text: "And tongue is not answers", time: 178 },
  { text: "And we only can't see a reason", time: 184 },
  { text: "Why would it mean", time: 190 },
  { text: "That it's not meant to be?", time: 196 },

  { text: "He'd known it won't last forever", time: 205 },
  { text: "She'd go ahead for a while", time: 210 },

  // Coro repetido
  { text: "When you open your eyes", time: 215 },
  { text: "When you gaze at the sky", time: 220 },
  { text: "When you look to the stars", time: 225 },
  { text: "As they shut down the night", time: 230 },
  { text: "You know the story ain't over", time: 235 },

  // Silencio
  { text: "", time: 240 },

  { text: "When you open your eyes", time: 245 },
  { text: "When you gaze at the sky", time: 250 },
  { text: "When you look to the stars", time: 255 },
  { text: "As they shut down the night", time: 260 },
  { text: "You feel the story ain't over", time: 265 },

  // Repetición final
  { text: "The story ain't over", time: 275 },
  { text: "The story ain't over", time: 279 },
  { text: "The story ain't over", time: 283 },
  { text: "The story ain't over", time: 287 },
  { text: "The story ain't over", time: 291 },
  { text: "The story ain't over", time: 295 },
  { text: "The story ain't over", time: 299 },

  // Silencio final
  { text: "", time: 305 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);

//Función auxiliar para capturar tiempos exactos
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Tiempo actual:", Math.floor(audio.currentTime));
  }
});
