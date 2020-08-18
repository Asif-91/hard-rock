const value = document.getElementById('inputValue');
const search = document.getElementById('button');
const artist = document.getElementById('artist-name');
const album = document.getElementById('album-name');
const lyrics = document.getElementById('lyricsList')

button.addEventListener('click', function () {

    fetch(`https://api.lyrics.ovh/suggest/${button.lyricsList}`)
        .then(res => res.json())
        .then(data =>  {
            console.log(data);
            const dataInfo = data.data;
                const list = dataInfo.slice(0,10);
                for(let i = 0; i < list.length; i++) {
                    const info = list[i];
                    lyricsList.innerHTML = info;

                    const name = data.data[0].artist.name;
                    const titleName = data.data[0].title;
                    const albumName = data.data[0].album;

                function template() {
                    lyricsList.innerHTML += `
                    <div class="single-result row align-items-center my-3 p-3">
                        <div class="col-md-9">
                            <h3 class="lyrics-name" id="title-name">${titleName}</h3>
                            <p class="author lead">by <span id="artist-name">${name}</span></p>
                            <p class="author lead">Album: <span id="album-name">${albumName}</span></p>
                        </div>
                        <div class="col-md-3 text-md-right text-center">
                            <button class="btn btn-success">Get Lyrics</button>
                        </div>
                    </div>`;
                }
                }
        })

});


