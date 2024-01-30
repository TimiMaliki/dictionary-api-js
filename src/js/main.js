/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}


navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== Dictionary API ====================*/


const btn = document.querySelector(".btn")
const result = document.querySelector(".dataBody")
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const sound = document.getElementById("sound")


// button to search word when clicked

btn.addEventListener("click", () => {
    const inputWord = document.getElementById("input").value

    fetch(`${url}${inputWord}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            result.innerHTML = `
        <div class="result flex">
        <div class="word">
            <h2>${inputWord}</h2>
            <div class="phonetic">
            ${data[0].meanings[0].partOfSpeech}
            ${data[0].phonetic}
            </div>
        </div>

        <div class="audio-icon-btn">
        <button class="button-1" onclick="playAudio()">
            <i class='bx bx-volume-full'></i></button>
        </div>
    </div>

    <div class="definiton">
        <h4>${data[0].meanings[0].definitions[0].definition}</h4>
    </div>

    <div class="example">
    <h4>${data[0].meanings[0].definitions[0].example || ""}</h4>
</div> `;

            sound.setAttribute("src", `${data[0].phonetics[0].audio}`)
            console.log(sound)
           
        })
        .catch(()=>{
            result.innerHTML = `<div class="error"><p>Couldn't find word</p></div>`
        })

})

function playAudio() {
    sound.play()
}
