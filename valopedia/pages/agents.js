class Agent {
    constructor(agent) {
        this.id = agent.uuid;
        this.name = agent.displayName;
        this.picture = agent.displayIcon;
        this.type = (agent.role != null) ? agent.role.displayName : '';
    }
}

class AgentsModel {
    constructor() {
        const agents = JSON.parse(localStorage.getItem('agents')) || [];
        this.agents = agents.map(agent => new Agent(agent));
    }
}

class AgentsController {
    index(app) {
        const model = new AgentsModel();
        const view = new AgentsView();
        view.index(app, model);
    }
}

class AgentsView {
    index(app, model) {
        const $this = this;
        let type = '';

        $(app).html(`
            <section id="inicioagentes">
                <div class="containeragentes">
                    <div class="agentes-title">
                        <h1>AGENTES<h1>
                    </div>
                    <select name="tipo" id="tipo">
                        <option value="">- Seleccione -</option>
                        <option value="Initiator">Iniciador</option>
                        <option value="Duelist">Duelista</option>
                        <option value="Sentinel">Centinela</option>
                        <option value="Controller">Controlador</option>
                    </select>
                    <button id="todos">Ver Todos</button>
                    <div class="agentes">
                    </div>
                </div>
            </section>
        `);

        this.listAgents(model.agents, type);


        $('#tipo').on('change', function(){
            type = this.value;
            $this.listAgents(model.agents, type);
        });
    
        $('#todos').on('click', function(){
            type = '';
            $('#tipo').val('');
            $this.listAgents(model.agents, type);
        });
    }

    listAgents(agents, type) {
        if (type != '') {
            agents = agents.filter((agent) => { 
                return (agent.type == type)
            });
        }

        agents = agents.map((agent) => {
            return `
                <div class="agente" style="opacity: 0; margin-left: -20px;"> 
                    <a href="#/agents">
                        <img src="${agent.picture}">
                    </a>
                    <h1>${agent.name}</h1>
                    <p>${agent.type}</p>
                </div>
            `;
        });

        $('.agentes').empty();

        $('.agentes').html(agents);

        $('.agente').animate({
            marginLeft: '0',
            opacity: '1',
        });
    }
}