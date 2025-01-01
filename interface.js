window.queryTest = function() {
    fetch('./credentials.json')
    .then(response => response.json())
    .then(data => {
        sessionStorage.setItem('apiKey', JSON.stringify(data.apiKey));
        sessionStorage.setItem('steamId', JSON.stringify(data.steamId));
    });
    const apiKey = JSON.parse(sessionStorage.getItem('apiKey'));
    const steamId = JSON.parse(sessionStorage.getItem('steamId'));
    console.log(apiKey, steamId);

    fetch(
        `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json`,
      )
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
}

window.toggleTheme = function() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}