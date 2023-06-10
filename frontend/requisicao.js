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

const fetchGames = () => {
    const url = `http://localhost:8080/players/games/`;
    fetch(url)
        .then(response => response.json())
        .then(lpl => {
            const dataGame = document.getElementById('dataGames');
            dataGame.innerHTML = JSON.stringify(lpl);
            console.log(lpl);
            console.log(dataGame);
        })
}

const fetchFotos = () => {
    const url = `http://localhost:8080/players/fotos`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imagensContainer = document.getElementById('imagensContainer');

            data.forEach(imagem => {
                const imagemData = imagem.imagem.data; // Obtém os dados binários da imagem
                const imagemBase64 = btoa(String.fromCharCode(...imagemData)); // Converte para base64
                const imagemSrc = `data:image/webp;base64,${imagemBase64}`; // Define o atributo src da imagem

                const imgElement = document.createElement('img');
                imgElement.src = imagemSrc;
                console.log(imagemSrc);
                imgElement.alt = imagem.nome;

                imagensContainer.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('Erro ao obter as imagens:', error);
        });
}

const fetchFotoEDG = (nomeImagem) => {
    const url = `http://localhost:8080/players/fotos`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imagensContainer = document.getElementById('edgContainer');

            const imagem = data.find(imagem => imagem.nome === nomeImagem);
            if (imagem) {
                const imagemData = imagem.imagem.data; // Obtém os dados binários da imagem
                const imagemBase64 = btoa(String.fromCharCode(...imagemData)); // Converte para base64
                const imagemSrc = `data:image/webp;base64,${imagemBase64}`; // Define o atributo src da imagem

                const imgElement = document.createElement('img');
                imgElement.src = imagemSrc;
                console.log(imagemSrc);
                imgElement.alt = imagem.nome;

                imagensContainer.appendChild(imgElement);
            } else {
                console.log('Imagem não encontrada');
            }
        })
        .catch(error => {
            console.error('Erro ao obter as imagens:', error);
        });
}



//fetchTOP()
//fetchJG()
//fetchMid()
//fetchAdc()
//fetchSUP()
//fetchGames()
//fetchFotos()
fetchFotoEDG('AL_logo.webp');
fetchFotoEDG('BLG_logo.webp');
fetchFotoEDG('EDG_logo.webp');
fetchFotoEDG('FPX_logo.webp');
fetchFotoEDG('IG_logo.webp');
fetchFotoEDG('JDG_logo.webp');
fetchFotoEDG('LGD_logo.webp');
fetchFotoEDG('LNG_logo.webp');
fetchFotoEDG('NIP_logo.webp');
fetchFotoEDG('OMG_logo.webp');
fetchFotoEDG('RA_logo.webp');
fetchFotoEDG('RNG_logo.webp');
fetchFotoEDG('TES_logo.webp');
fetchFotoEDG('TT_logo.webp');
fetchFotoEDG('UP_logo.webp');
fetchFotoEDG('WE_logo.webp');
fetchFotoEDG('Weibo_logo.webp');
