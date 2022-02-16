class MapsController {
    index(app) {
        const view = new MapsView();
        view.index(app);
    }
}

class MapsView {
    index(app) {
        $(app).html(`
            <section id="iniciomapas">
                <div class="containermapas">
                    <div class="titleiniciomapas">
                        <h1>MAPAS</h1>
                    </div>

                    <div class="titlemapas">
                        <h1>ASCENT</h1>
                    </div>

                    <div class="imgmapas">
                        <img src="img/mapas/ascent.png">
                    </div>

                    <div>
                        <p>Un campo abierto para pequeñas batallas de posicionamiento y desgaste dividen Ascenso en dos sitios. Puedes 
                            fortificar cada uno con puertas de bombas irreversibles; una vez puestas, tendrás que destruirlas o encontrar 
                            otra forma de pasar. Cede el menor territorio posible.</p>
                    </div>

                    <div class="imgminimapas">
                        <img src="img/mapas/ascent2.png">
                    </div>

                    <div class="titlemapas">
                        <h1>SPLIT</h1>
                    </div>

                    <div class="imgmapas">
                        <img src="img/mapas/split.jpg">
                    </div>

                    <div>
                        <p>Si quieres ir lejos, debes subir. Un par de sitios divididos por un centro elevado permite un movimiento rápido 
                            por medio de dos ascensores de cuerda. Cada sitio cuenta con una gran torre vital para el control. Recuerda mirar 
                            arriba antes de que todo vuele por los aires.</p>
                    </div>

                    <div class="imgminimapas">
                        <img src="img/mapas/split.png">
                    </div>

                    <div class="titlemapas">
                        <h1>BIND</h1>
                    </div>

                    <div class="imgmapas">
                        <img src="img/mapas/bind.png">
                    </div>

                    <div>
                        <p>Dos sitios. No existe un centro. Debes elegir derecha o izquierda. ¿Cuál será tu elección? Ambos ofrecen caminos directos 
                            para los atacantes y un par de teletransportadores unidireccionales facilitan el flanqueo.</p>
                    </div>

                    <div class="imgminimapas">
                        <img src="img/mapas/bind2.png">
                    </div>

                    <div class="titlemapas">
                        <h1>HAVEN</h1>
                    </div>

                    <div class="imgmapas">
                        <img src="img/mapas/haven.png">
                    </div>

                    <div>
                        <p>Bajo un monasterio olvidado, emerge un clamor entre los agentes rivales que se enfrentan para controlar tres sitios.
                            Hay más territorio por controlar, pero los defensores pueden usar el terreno adicional para realizar ataques agresivos.</p>
                    </div>

                    <div class="imgminimapas">
                        <img src="img/mapas/haven2.png">
                    </div>

                    <div class="titlemapas">
                        <h1>ICEBOX</h1>
                    </div>

                    <div class="imgmapas">
                        <img src="img/mapas/icebox.png">
                    </div>

                    <div>
                        <p>Tu próximo campo de batalla es un sitio de excavación secreto de Kingdom en algún lugar del ártico. Los dos sitios para 
                            plantar están protegidos tanto por nieve como por metal, y no es fácil acceder a ellos de forma horizontal. Aprovecha las 
                            tirolesas y nunca te verán venir.</p>
                    </div>

                    <div class="imgminimapas">
                        <img src="img/mapas/icebox2.png">
                    </div>

                    <div class="titlemapas">
                        <h1>BREEZE</h1>
                    </div>

                    <div class="imgmapas">
                        <img src="img/mapas/breeze.png">
                    </div>

                    <div>
                        <p>Tu próximo campo de batalla es un sitio de excavación secreto de Kingdom en algún lugar del ártico. Los dos sitios 
                            para plantar están protegidos tanto por nieve como por metal, y no es fácil acceder a ellos de forma horizontal.
                            Aprovecha las tirolesas y nunca te verán venir.</p>
                    </div>

                    <div class="imgminimapas">
                        <img src="img/mapas/breeze2.png">
                    </div>

                    <div class="titlemapas">
                        <h1>FRACTURE</h1>
                    </div>

                    <div class="imgmapas">
                        <img src="img/mapas/fracture.png">
                    </div>

                    <div>
                        <p>Un centro de investigación ultrasecreto dividido por un experimento fallido de radianita. Con opciones de defensa tan 
                            divididas como el mismo mapa, la elección es tuya: enfrentar a los atacantes en su propio territorio o cerrar las escotillas 
                            y resistir el asalto.</p>
                    </div>

                    <div class="imgminimapas">
                        <img src="img/mapas/fracture2.png">
                    </div>
                </div>
            </section>
        `);
    }
}