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


/*EXIBE FOTO DOS TIMES */
const fetchFotoEDG = (nomeImagem) => {
    const url = `http://localhost:8080/players/fotos`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imagensContainer = document.getElementById('allContainer');

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

/* EXIBE O TIME DE ANYONES LEGENDS */
const alTime = (topImagem, jgImagem, midImagem, adcImagem, supImagem, containerID) => {
    const url = `http://localhost:8080/players/fotos`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imagensContainer = document.getElementById(containerID);

            const top = data.find(imagem => imagem.nome === topImagem);
            const jg = data.find(imagem => imagem.nome === jgImagem);
            const mid = data.find(imagem => imagem.nome === midImagem);
            const adc = data.find(imagem => imagem.nome === adcImagem);
            const sup = data.find(imagem => imagem.nome === supImagem);

            if (top && jg && mid && adc && sup) {
                //TOPLANER
                const imagemDataTop = top.imagem.data; // Obtém os dados binários da imagem
                const imagemBase64Top = btoa(String.fromCharCode(...imagemDataTop)); // Converte para base64
                const imagemSrcTop = `data:image/webp;base64,${imagemBase64Top}`; // Define o atributo src da imagem
                const imgElementTop = document.createElement('img');
                imgElementTop.src = imagemSrcTop;
                console.log(imagemSrcTop);
                imgElementTop.alt = top.nome;
                imagensContainer.appendChild(imgElementTop);

                //JUNGLER
                const imagemDataJg = jg.imagem.data;
                const imagemBase64Jg = btoa(String.fromCharCode(...imagemDataJg));
                const imagemSrcJg = `data:image/webp;base64,${imagemBase64Jg}`;
                const imgElementJg = document.createElement('img');
                imgElementJg.src = imagemSrcJg;
                console.log(imagemSrcJg);
                imgElementJg.alt = jg.nome;
                imagensContainer.appendChild(imgElementJg);

                //MIDLANER
                const imagemDataMid = mid.imagem.data;
                const imagemBase64Mid = btoa(String.fromCharCode(...imagemDataMid));
                const imagemSrcMid = `data:image/webp;base64,${imagemBase64Mid}`;
                const imgElementMid = document.createElement('img');
                imgElementMid.src = imagemSrcMid;
                console.log(imagemSrcMid);
                imgElementMid.alt = mid.nome;
                imagensContainer.appendChild(imgElementMid);

                //ADC
                const imagemDataAdc = adc.imagem.data;
                const imagemBase64Adc = btoa(String.fromCharCode(...imagemDataAdc));
                const imagemSrcAdc = `data:image/webp;base64,${imagemBase64Adc}`;
                const imgElementAdc = document.createElement('img');
                imgElementAdc.src = imagemSrcAdc;
                console.log(imagemSrcAdc);
                imgElementAdc.alt = adc.nome;
                imagensContainer.appendChild(imgElementAdc);

                //SUPORTE
                const imagemDataSup = sup.imagem.data;
                const imagemBase64Sup = btoa(String.fromCharCode(...imagemDataSup));
                const imagemSrcSup = `data:image/webp;base64,${imagemBase64Sup}`;
                const imgElementSup = document.createElement('img');
                imgElementSup.src = imagemSrcSup;
                console.log(imagemSrcSup);
                imgElementSup.alt = sup.nome;
                imagensContainer.appendChild(imgElementSup);

            } else {
                console.log('Alguma(s) imagem(ns) não encontrada(s)');
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
fetchFotoEDG('BLG_logo.png');
fetchFotoEDG('EDG_logo.webp');
fetchFotoEDG('FPX_logo.webp');
fetchFotoEDG('IG_logo.webp');
fetchFotoEDG('JDG_logo.webp');
fetchFotoEDG('LDG_logo.webp');
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
alTime('zdz.webp', 'Harder.webp', 'Xiaohao.webp', 'Betty.webp', 'SwordArt.webp', 'alContainer');
alTime('Bin.webp', 'Xun.webp', 'Yagao.webp', 'Elk.webp', 'ON.webp', 'blgContainer');
alTime('Ale.webp', 'Jiejie.webp', 'Fofo.webp', 'Leave.webp', 'Meiko.webp', 'edgContainer');
alTime('Xiaolaohu.webp', 'H4cker.webp', 'Care.webp', 'Lwx.webp', 'QiuQiu.webp', 'fpxContainer');
alTime('YSKM.webp', 'Gideon.webp', 'Dove.webp', 'Ahn.webp', 'Wink.webp', 'igContainer');
alTime('369.webp', 'Kanavi.webp', 'Knight.webp', 'Ruler.webp', 'Missing.webp', 'jdgContainer');
alTime('Meteor.webp', 'Meteor.webp', 'Haichao.webp', 'Lpc.webp', 'Xiaoxu.webp', 'lgdContainer');
alTime('Zika.webp', 'Tarzan.webp', 'Scout.webp', 'LP.webp', 'Hang.webp', 'lngContainer');
alTime('Invincible.webp', 'XLB.webp', 'Dream.webp', 'Photic.webp', 'Zhuo.webp', 'nipContainer');
alTime('Shanji.webp', 'Aki.webp', 'Creme.webp', 'Able.webp', 'ppgod.webp', 'omgContainer');
alTime('Cube.webp', 'Leyan.webp', 'Strive.webp', 'Assum.webp', 'Southwind.webp', 'raContainer');
alTime('Breathe.webp', 'Wei.webp', 'Tangyuan.webp', 'Gala.webp', 'Ming.webp', 'rngContainer');
alTime('Wayward.webp', 'Tian.webp', 'Rookie.webp', 'JackeyLove.webp', 'Mark.webp', 'tesContainer');
alTime('HOYA.webp', 'Beichuan.webp', 'UCAL.webp', 'Huanfeng.webp', 'Yaoyao.webp', 'ttContainer');
alTime('Hery.webp', 'Ning.webp', 'Forge.webp', 'Doggo.webp', 'Baolan.webp', 'upContainer');
alTime('Biubiu.webp', 'Heng.webp', 'Shanks.webp', 'Hope.webp', 'Iwandy.webp', 'weContainer');
alTime('TheShy.webp', 'Karsa.webp', 'Xiaohu.webp', 'Light.webp', 'Crisp.webp', 'weiboContainer');
