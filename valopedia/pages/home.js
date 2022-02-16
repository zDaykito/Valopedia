class HomeController {
    index(app) {
        const view = new HomeView();
        view.index(app);
    }
}

class HomeView {
    index(app) {
        $(app).html(`
            <section id="inicio">
                <div class="container">
                    <div class="titleinicio">   
                        <h1>INICIO</h1>
                    </div>
            
                    <div class="infoinicio">
                        <h1>VALORANT</h1>
                        <p>Valorant es un videojuego de disparos táctico en equipo y en primera persona ambientado en un futuro próximo.
                        Los jugadores asumen el control de agentes, personajes que provienen de una gran cantidad de países y culturas de 
                        todo el mundo. En el modo de juego principal, los jugadores se unen al equipo atacante o defensor con cada equipo que 
                        tiene cinco jugadores. Los agentes tienen habilidades únicas y usan un sistema económico para comprar sus habilidades 
                        y armas. El videojuego tiene una variedad de armas que incluyen pistolas, subfusiles, escopetas, ametralladoras, 
                        fusiles de asalto y fusiles de francotirador. Cada arma tiene un patrón de retroceso que debe ser controlado por 
                        el jugador para poder disparar con precisión. El equipo atacante tiene una bomba, llamada Spike, que necesitan plantar 
                        en un sitio. Si el equipo atacante protege con éxito la Spike durante 40 segundos y detona, obtendrán un punto. Si el 
                        equipo defensor desactiva con éxito la Spike, o el temporizador de la ronda de 100 segundos expira, el equipo defensor 
                        obtiene un punto. Si se eliminan todos los miembros de un equipo, el equipo contrario gana un punto. Después de doce rondas, 
                        el equipo atacante cambia al equipo defensor y viceversa. El primer equipo en ganar 13 rondas gana la partida. Exceptuando 
                        el tiempo extra, donde deberás conseguir 2 victorias/rondas seguidas.</p>
                    </div>

                    <div class="titlegaleria">
                        <h1>IMÁGENES DEL JUEGO</h1>
                    </div>

                    <div class="galeria">
                        <img src="assets/img/1.jpg">
                        <img src="assets/img/2.jpg">
                        <img src="assets/img/3.jpg">
                        <img src="assets/img/4.jpg">
                    </div>

                    <div class="titleredes">
                        <h1>REDES DEL JUEGO</h1>
                    </div>

                    <div class="redesimg">
                        <a href="https://www.instagram.com/playvalorantofficial/" target="_blank"><img src="assets/img/ig.png"></a>
                        <a href="https://www.youtube.com/PlayValorant" target="_blank"><img src="assets/img/yt.png"></a>
                        <a href="https://twitter.com/playvalorant" target="_blank"><img src="assets/img/tt.png"></a>
                        <a href="https://www.facebook.com/PlayVALORANT/" target="_blank"><img src="assets/img/fb.png"></a>
                    </div>

                    <div class="titledescarga">
                        <h1>DESCARGA</h1>
                    </div>

                    <div class="descarga">
                        <a href="https://playvalorant.com/en-us/" target="_blank"><img src="assets/img/dw.png"></a>
                    </div>
                </div>
            </section>
        `);
    }
}