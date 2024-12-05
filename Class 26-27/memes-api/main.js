document.querySelector('button').addEventListener('click', jokeGenerator);

function jokeGenerator(){
    let input = document.querySelector('input').value;
    let url = `https://api.humorapi.com/jokes/search?api-key=e8402f860a57466bb01afc10c91ec656&keywords=${input}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('p').innerText = data.jokes[0].joke;
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}