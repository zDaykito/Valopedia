const routes = [
    { path: '/', action: 'inicio'},
    { path: '/agentes', action: 'agentes'},
    { path: '/mapas', action: 'mapas'},
    { path: '/armas', action: 'armas'}
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const findActionByPath = (path, routes) => routes.find(r => r.path == path || undefined); 

const router = () => {
    const path = parseLocation();
    const action = findActionByPath(path, routes).action;

    switch (action) {
        case 'inicio':
            app.homeController.index('#app');
            break;
        case 'agentes':
            app.agentsController.index('#app');
            break;
        case 'mapas':
            app.mapsController.index('#app');
            break;
        case 'armas':
            app.weaponsController.index('#app');
            break;
        default:
            ErrorComponent('#app')
            break;  
    }
}

$( window ).on( 'load', function() {
    router();
});

$( window ).on( 'hashchange', function() {
    router();
});