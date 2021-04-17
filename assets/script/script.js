const container = document.querySelector('.container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progressBar')
const progressContainer = document.querySelector('.progress_container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//Songs title
const songs = ['music1', 'music2', 'music3', 'music4', 'music5']

//To keep track of music
let songIndex = 1

//To load music INFO initially to DOM
loadSong(songs[songIndex])

//To update music details after
function loadSong(song){
    title.innerText = song
    audio.src = `assets/music/${song}.mp3`
    cover.src = `assets/imgs/${song}.jpg`
}