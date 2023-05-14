const fetchTOP = () => {
    const url = `http://localhost:8080/players/toplaner`;

    fetch(url)
        .then(response => response.json())
        .then(lpl => {
            const dataTop = document.getElementById('dataTop');
            const justID = lpl.map(player => player.id);
            const justIDString = justID.join(', ');
            dataTop.innerHTML = `<h2>${justIDString}</h2>`;
            console.log(lpl)
            console.log(justIDString)
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
            const dataJunlger = document.getElementById('dataJungler')
            dataJungler.innerHTML = JSON.stringify(lpl)
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
            const dataMid = document.getElementById('dataMid')
            dataMid.innerHTML = JSON.stringify(lpl)
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
            dataAdc.innerHTML = JSON.stringify(lpl)
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
            dataSUP.innerHTML = JSON.stringify(lpl)
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