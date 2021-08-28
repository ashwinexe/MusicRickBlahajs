const tasks = [
    {
        id : 1,
        title : "Sing a pop song",
        link : "https://www.youtube.com/playlist?list=PL8D4Iby0Bmm94U_rwuJuocyC1xFoPTd5R"
    },
    {
        id : 2,
        title : "Sing a rock song",
        link : "https://www.youtube.com/playlist?list=PLnQkhlhB0C9yppF4HlBSYsdgwZ86CiX2l"
    },
    {
        id : 3,
        title : "Sing a pop song",
        link : "https://www.youtube.com/playlist?list=PL8D4Iby0Bmm94U_rwuJuocyC1xFoPTd5R"
    },
    {
        id : 4,
        title : "Sing a rock song",
        link : "https://www.youtube.com/playlist?list=PLnQkhlhB0C9yppF4HlBSYsdgwZ86CiX2l"
    },
    {
        id : 5,
        title : "Sing a pop song",
        link : "https://www.youtube.com/playlist?list=PL8D4Iby0Bmm94U_rwuJuocyC1xFoPTd5R"
    },
    {
        id : 6,
        title : "Sing a rock song",
        link : "https://www.youtube.com/playlist?list=PLnQkhlhB0C9yppF4HlBSYsdgwZ86CiX2l"
    },
    {
        id : 7,
        title : "Sing a pop song",
        link : "https://www.youtube.com/playlist?list=PL8D4Iby0Bmm94U_rwuJuocyC1xFoPTd5R"
    },
    {
        id : 8,
        title : "Sing a rock song",
        link : "https://www.youtube.com/playlist?list=PLnQkhlhB0C9yppF4HlBSYsdgwZ86CiX2l"
    },
    {
        id : 9,
        title : "Sing a rock song",
        link : "https://www.youtube.com/playlist?list=PLnQkhlhB0C9yppF4HlBSYsdgwZ86CiX2l"
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



