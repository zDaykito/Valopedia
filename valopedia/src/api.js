class Api {
    constructor() {
        this.URL = 'https://valorant-api.com/v1';
    }

    loadAgents() {
        let data = []; 
        $.getJSON(`${this.URL}/agents`, function(res, status){
            if (status == 'success'){
                data = res.data;
                localStorage.setItem('agents', JSON.stringify(data));
            }
        });
    }

    loadWeapons() {
        let data = [];
        $.getJSON(`${this.URL}/weapons`, function(res, status){
            if(status == 'success'){
                data = res.data;
                localStorage.setItem('weapons', JSON.stringify(data));
            }
        });
    }
}

