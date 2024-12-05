document.querySelector('button').addEventListener('click', pokemonFinder);

function pokemonFinder(){
    let input = document.querySelector('input').value.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${input}`
    fetch(url)
        .then(res => res.json())
        .then(data => {

            //pokemon name//
            let pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);

            document.querySelector('h1').innerText = `This pokemon is called ${pokemonName}!`;

            //dex number//
            document.querySelector('#dexnum').innerText = `${pokemonName}'s dex number is ${data.id}`;

            //pokemon type//
            let pokemonType = document.querySelector('#type')

            if(data.types.length === 1){
                pokemonType.innerText = `${pokemonName}'s typing is ${data.types[0].type.name}`;
            } else {
                pokemonType.innerText = `${pokemonName}'s typings are ${data.types[0].type.name} and ${data.types[1].type.name}`;
            }

            //pokemon sprite//
            document.querySelector('img').src = data.sprites.front_default;

            //pokemon abilities//
            let pokemonAbilities = document.querySelector('#abilities')

            if (data.abilities.length === 1) {
                pokemonAbilities.innerText = `${pokemonName}'s ability is ${data.abilities[0].ability.name}`;
            } else if (data.abilities.length === 2) {
                pokemonAbilities.innerText = `${pokemonName}'s abilities are ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}`;
            } else {
                pokemonAbilities.innerText = `${pokemonName}'s abilities are ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}, and ${data.abilities[2].ability.name}`;
            }

            //pokemon stats//
            document.querySelector('#health').innerText = `${pokemonName} has a base health stat of ${data.stats[0].base_stat}`;
            document.querySelector('#attack').innerText = `${pokemonName} has a base attack stat of ${data.stats[1].base_stat}`;
            document.querySelector('#spattack').innerText = `${pokemonName} has a base defense stat of ${data.stats[2].base_stat}`;
            document.querySelector('#defense').innerText = `${pokemonName} has a base special attack stat of ${data.stats[3].base_stat}`;
            document.querySelector('#spdefense').innerText = `${pokemonName} has a base special defense stat of ${data.stats[4].base_stat}`;
            document.querySelector('#speed').innerText = `${pokemonName} has a base speed stat of ${data.stats[5].base_stat}`;

            //learnable moves//
            document.querySelector('h2').innerText = 'This pokemon\'s learnable moves are:';
            let learnableMovesElement = document.querySelector('#learnablemoves');
            learnableMovesElement.innerText = ''; 
            for (let i = 0; i < data.moves.length; i++) {
                learnableMovesElement.innerText += `${data.moves[i].move.name}\n`;
            }

                console.log(data);
            })
            .catch(err => {
                console.log(`error ${err}`);
            });
}