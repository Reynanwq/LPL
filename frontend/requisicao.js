const fetchLPL = () => {
    const url = `http://localhost:8080/players/toplaner`

    fetch(url)
        .then(response => response.json())
        .then(lpl => {
            console.log(lpl);
        })
        .catch(error => {
          console.error(error);
    });
}

fetchLPL()
