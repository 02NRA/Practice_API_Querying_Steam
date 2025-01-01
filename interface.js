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
        `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json&include_appinfo=true&include_played_free_games=true`,
      )
        .then(response => response.json())
        .then(data => sessionStorage.setItem('gamesOwned', JSON.stringify(data.response)))
        .catch(error => console.error("Error:", error));
    const rawSteamData = JSON.parse(sessionStorage.getItem('gamesOwned'));
    console.log(rawSteamData);
    let refinedSteamData = [];
    for (const game of rawSteamData.games) {
        if (game.playtime_forever > 0) {
            refinedSteamData.push([game.name, Math.floor(game.playtime_forever/60)]);
        }
    }
    console.log(refinedSteamData);
}

window.toggleTheme = function() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}