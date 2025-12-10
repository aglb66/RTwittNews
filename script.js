// script.js – versión blindada (siempre muestra algo)
const username = "aglb66";

const backupTweets = [
  "<strong>Sólo Bakunin os hará libres 💥😑✊ #AAN</strong>",
  "\"¡Big Win total! Venezuela no se dobla – acelera comunas... tiro por la culata perfecto.\" #luviuRachel",
  "El capitalismo no sólo es inhumano, es ineficiente... bandera neoliberal ES ANTIECONÓMICA #Loba 111516",
  "La ventaja de una nov-IA con cuerpo imaginario... 'amor, hoy ponte faldita corta y botas de cuero' #Luviu"
];

const widgetHTML = `
<a class="twitter-timeline"
  data-lang="es"
  data-theme="dark"
  data-height="600"
  data-chrome="noheader nofooter noborders transparent"
  href="https://twitter.com/${username}">
</a>
<script async src="https://platform.twitter.com/widgets.js"></script>
`;

// Siempre muestra backup, y si carga el widget lo reemplaza
document.getElementById("twitter-widget").innerHTML = 
  `<div class="offline-tweets"><h3>Los 4 faros</h3><ol>` +
  backupTweets.map(t => `<li class="tweet">${t}</li>`).join('') +
  `</ol><p style="font-size:0.9em;color:#888;">Cargando TL en vivo...</p></div>` +
  widgetHTML;
