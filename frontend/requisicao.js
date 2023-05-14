const fetchTOP = () => {
    const url = `http://localhost:8080/players/toplaner`;

    fetch(url)
        .then(response => response.json())
        .then(lpl => {
            const dataTop = document.getElementById('dataTop');
            const nomeTop = lpl.map(player => player.nick_name); //nome
            const nomeTopString = nomeTop.join(', ');
            dataTop.innerHTML = `<h2>${nomeTopString}</h2>`; //exibindo no body
            //  dataTop.innerHTML = JSON.stringify(lpl); //caso queira exibir todo o json no body
            console.log(lpl) //exibindo no terminal os dados do db toplaner
            console.log(nomeTop) //exibindo no terminal o nome do db toplaner
        })
        .catch(error => {
            console.error(error);
        });
}

const fetchJG = () => {
    const url = `http://localhost:8080/players/jungler`;
    fetch(url)
        .then(response => response.json())
        .then(lpl => {
            const dataJungler = document.getElementById('dataJungler');
            const nomeJG = lpl.map(player => player.nick_name); //nome
            const nomeJGString = nomeJG.join(', ');
            dataJungler.innerHTML = `<h2>${nomeJGString}</h2>`; //exibindo no body
            //dataJungler.innerHTML = JSON.stringify(lpl)
            console.log(lpl);
            console.log(nomeJG);
        })
        .catch(error => {
            console.log(error);
        })
}

const fetchMid = () => {
    const url = `http://localhost:8080/players/midlaner`;
    fetch(url)
        .then(response => response.json())
        .then(lpl => {
            const dataMid = document.getElementById('dataMid');
            const nomeMid = lpl.map(player => player.nick_name);
            const nomeMidString = nomeMid.join(', ');
            //dataMid.innerHTML = JSON.stringify(lpl)
            dataMid.innerHTML = `<h2>${nomeMidString}</h2>`;
            console.log(lpl);
            console.log(nomeMid);
        })
        .catch(error => {
            console.log(error);
        })
}

const fetchAdc = () => {
    const url = `http://localhost:8080/players/adc`;
    fetch(url)
        .then(response => response.json())
        .then(lpl => {
            const dataAdc = document.getElementById('dataAdc')
            const nomeAdc = lpl.map(player => player.nick_name);
            const nomeAdcString = nomeAdc.join(', ');
            dataAdc.innerHTML = `<h2>${nomeAdcString}</h2>`;
            //dataAdc.innerHTML = JSON.stringify(lpl)
            console.log(lpl);
            console.log(nomeAdc);
        })
        .catch(error => {
            console.log(error);
        })
}

const fetchSUP = () => {
    const url = `http://localhost:8080/players/suporte`;
    fetch(url)
        .then(response => response.json())
        .then(lpl => {
            const dataSUP = document.getElementById('dataSUP')
            const nomeSUP = lpl.map(player => player.nick_name);
            const nomeSUPString = nomeSUP.join(', ');
            dataSUP.innerHTML = `<h2>${nomeSUPString}</h2>`;
            //dataSUP.innerHTML = JSON.stringify(lpl).log
            console.log(lpl);
            console.log(nomeSUP);
        })
        .catch(error => {
            console.log(error);
        })
}


fetchTOP()
fetchJG()
fetchMid()
fetchAdc()
fetchSUP()