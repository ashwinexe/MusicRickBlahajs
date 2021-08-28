const tasks = [
    {
        id : 1,
        title : "Pop",
        link : "https://www.youtube.com/playlist?list=PL8D4Iby0Bmm94U_rwuJuocyC1xFoPTd5R"
    },
    {
        id : 2,
        title : "Rock",
        link : "https://www.youtube.com/playlist?list=PLnQkhlhB0C9yppF4HlBSYsdgwZ86CiX2l"
    },
    {
        id : 3,
        title : "90s hit",
        link : "https://www.youtube.com/playlist?list=PLtU_eILiw-sjeqxurJu7HDQi_v14yz8NE"
    },
    {
        id : 4,
        title : "Taylor Swift",
        link : "https://www.youtube.com/playlist?list=PLElqELnq3veWkssPWBf-VatKqDjCdsdDk"
    },
    {
        id : 5,
        title : "One Direction",
        link : "https://www.youtube.com/playlist?list=PL8D4Iby0Bmm-273NtcP5dAk1T5DcZuXIS"
    },
    {
        id : 6,
        title : "Christmas",
        link : "https://www.youtube.com/playlist?list=PL_3dlGnPgUZgi_nUT-2Ga-nPshz9838r7"
    },
    {
        id : 7,
        title : "R&B",
        link : "https://www.youtube.com/playlist?list=PL_3dlGnPgUZiEPrB-0JLNI9YDg-47vovt"
    },
    {
        id : 8,
        title : "Disney",
        link : "https://www.youtube.com/playlist?list=PLznIx3_zY-TwVNgCbWgXZfk5kpl59pBxE"
    },
    {
        id : 9,
        title : "Party Starters",
        link : "https://www.youtube.com/playlist?list=PL8D4Iby0Bmm-uQIcbRfHeUMd_YDSZDA39"
    },
    {
        id : 10,
        title : "Roll",
        link : ""
    },


]

const containerDiv = document.querySelector('.container')
const shuffleBtn = document.querySelector('.shuffleBtn')
let rollDiv;

function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
}

function createNewCard(title, link){
    if(title == "Roll"){

        let row = `
        <div id="roll" class="flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front">
                <img class="cover" src="assets/blahaj.png" alt="blahaj" >
            </div>
            <audio  class="vocalsDiv">
           
            <source src="assets/vocals.mp3" type="audio/mpeg">
         
          </audio> 
            <div class="flip-card-back">
                <h1>Roll</h1>
                
            </div>
            </div>
        </div> 
        `
        containerDiv.innerHTML += row;

        
    }
    else {

        let row = `
        <div class="flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front">
                <img class="cover" src="assets/blahaj.png" alt="blahaj" >
            </div>
            <div class="flip-card-back">
                <h1>${title}</h1>
                <a target="_blank" class="darebtn" href=${link}>Start dare</a>
            </div>
            </div>
        </div> 
        `
        containerDiv.innerHTML += row;
    }
}

function shuffleCreateCards () {
    console.log("called")
    containerDiv.innerHTML = ""
    newTask = shuffleArray(tasks)
    console.log(newTask)
    for(let i=0; i < tasks.length; i++) {
        
        createNewCard(tasks[i].title, tasks[i].link)
    }

    rollDiv = document.getElementById("roll")
    vocalsDiv = document.querySelector(".vocalsDiv")
    rollDiv.addEventListener('mouseover', (e) => {
        vocalsDiv.play()
        console.log("play")
    })

    rollDiv.addEventListener('mouseout', (e) => {
        vocalsDiv.pause()
        console.log("stop")
    })

}



// create dom for cards
window.addEventListener("load", () => {
    shuffleCreateCards()    
   
})

shuffleBtn.addEventListener("click", (e) => {
    console.log('shuffle')
    shuffleCreateCards()
})



