class App {
    constructor() {
        this.homeController = new HomeController();
        this.agentsController = new AgentsController();
        this.mapsController = new MapsController();
        this.weaponsController = new WeaponsController();
    }   
}

const ErrorComponent = (app) => {
    $(app).html("<h2>Error 404</h2>");
}

