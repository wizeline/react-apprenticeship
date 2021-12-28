Having a list of players in the file `players.js`.

1. Make a hook that you can pass the array of players and return only two random players. The algorith most ensure not to return the same player twice in the same call so p1 and p2 most be different all the time.

        const [p1, p2] = usePlayers(players);
 

2. Implement a custom hook that you pass 2 players and calculate wich one won based on their elo rating, the one with more elo has more chances and the chances are proporcial to the elo.

        const winner = useGame(p1, p2);

3. Display the game, in the app.js file. Implement an onClick for the "play" button that gets 2 random players using the first hook, run the game with the second hook and displays who the players where and who won like in the hardcoded example.

