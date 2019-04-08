
const tracks = [
    "01. Rain ft. Vince Staple.mp3",
    "02. Funeral.mp3",
    "03. Fight the Feeling.mp3",
    "04. Sleep.mp3",
    "05. 1 Thew 8.mp3",
    "06. Happy Birthday.mp3"
]

const createTrackList = () => {
    const list = document.createElement('ol')

    for (let i=0; i < tracks.length; i++) {
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(tracks[i]));

        list.appendChild(item);
    }
    return list;
}

document.getElementById('trackList').appendChild(createTrackList());

trackList.onclick = (e) => {
    // Event testing to find target
    // console.log(e)
    const clickedItem = e.target;
    const source = document.getElementById('source');
    source.src = 'assets/audio/' + clickedItem.innerText;
    console.log(clickedItem.innerText);

    document.getElementById('currentPlayTrack').innerHTML = "Playing: "
    document.getElementById('currentTrack').innerText = clickedItem.innerText;

    player.load();
    player.play();
}

// Add play/pause click events
const playAudio = () => {
    if(player.readyState) {
        player.play();
    }
}

const pauseAudio = () => {
        player.pause();
}

// Find the target value of the input range
const slider = document.getElementById('volSlider') ;
    slider.oninput = (e) => {
    const volume = e.target.value;
    console.log(slider.e);
    player.volume = volume;
}

const updateProgress = () => {
    if (player.currentTime > 0) {
        const progressBar = document.getElementById('progress');       
  
        progressBar.value = (player.currentTime / player.duration) * 100
    }
}