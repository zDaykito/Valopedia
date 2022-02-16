class WeaponsController {
    index(app) {
        const view = new WeaponsView();
        view.index(app);
    }
}

class WeaponsView {
    index(app) {
        $(app).html(`
            <section id="inicioarmas">
                <div class="containerarmas">
                    <div class="titleinicioarmas">
                        <h1>ARMAS</h1>
                    </div>

                    <div class="titlearmas">
                        <h1>PISTOLAS</h1>
                    </div>

                    <div class="imgarmas">
                        <img src="assets/img/armas/Classic.png">
                        <img src="assets/img/armas/Shorty.png">
                        <img src="assets/img/armas/Frenzy.png">
                        <img src="assets/img/armas/Ghost.png">
                        <img src="assets/img/armas/Sheriff.png">
                    </div>

                    <div class="titlearmas">
                        <h1>ESCOPETAS</h1>
                    </div>

                    <div class="imgarmas">
                        <img src="assets/img/armas/Bucky.png">
                        <img src="assets/img/armas/Judge.png">
                    </div>

                    <div class="titlearmas">
                        <h1>SUBFUSILES</h1>
                    </div>

                    <div class="imgarmas">
                        <img src="assets/img/armas/Stinger.png">
                        <img src="assets/img/armas/Spectre.png">
                    </div>

                    <div class="titlearmas">
                        <h1>RIFLES</h1>
                    </div>

                    <div class="imgarmas">
                        <img src="assets/img/armas/Bulldog.png">
                        <img src="assets/img/armas/Guardian.png">
                        <img src="assets/img/armas/Phantom.png">
                        <img src="assets/img/armas/Vandal.png">
                    </div>

                    <div class="titlearmas">
                        <h1>FRANCOTIRADORES</h1>
                    </div>

                    <div class="imgarmas">
                        <img src="assets/img/armas/Marshal.png">
                        <img src="assets/img/armas/Operator.png">
                    </div>

                    <div class="titlearmas">
                        <h1>ARMAS PESADAS</h1>
                    </div>

                    <div class="imgarmas">
                        <img src="assets/img/armas/Ares.png">
                        <img src="assets/img/armas/Odin.png">
                    </div>

                    <div class="titlearmas">
                        <h1>CUERPO A CUERPO</h1>
                    </div>

                    <div class="imgarmas">
                        <img src="assets/img/armas/Knife.png">
                    </div>
                </div>
            </section>
        `);
    }
}