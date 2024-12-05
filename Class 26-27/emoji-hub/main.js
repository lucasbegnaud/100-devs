document.querySelector('button').addEventListener('click', lyricApp);

const input = document.getElementById("myInput"); 
input.addEventListener("keypress", function(event) { 
  if (event.key === "Enter") { 
    event.preventDefault(); 
    document.getElementById("button").click(); 
  } 
});

function lyricApp(){
    let artist = document.querySelector('#artist').value;
    let songs = document.querySelector('#songs').value;
    let url = `https://api.lyrics.ovh/v1/${artist}/${songs}`
    fetch(url)
        .then(res => res.json())
        .then(data =>{
            document.querySelector('h2').innerText = `${artist} - ${songs}`
            document.querySelector('p').innerText = data.lyrics;
            console.log(data);
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}