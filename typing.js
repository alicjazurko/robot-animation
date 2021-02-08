const box = document.querySelector('.typing');
const text = ["cześć! Jak tam?^Nazywam się Joe i jestem super inteligentnym robotem!", "Jeśli chcesz mogę Ci coś pokazać!", "Pokażę Ci, jak zrobić coś super!^Jesteś zainteresowany?", "Nie wahaj się!^Pociagnij mnie za lewą nogę!"];
let wordIndex = 0;
let oldTime = 0;
let speed = 80;
let textIndex = 0;
const stop = 2000;
let activeDomElement = box;

const typing = (newTime) => {

  if(newTime - oldTime > speed) {
    const letter = text[textIndex].substr(wordIndex, 1);

    if(wordIndex === text[textIndex].length) {
      if(textIndex === text.length - 1) {
        return;
      }

      return setTimeout(() => {
        box.textContent = '';
        textIndex++;
        wordIndex = 0;
        requestAnimationFrame(typing);
      }, stop)

    } else if(wordIndex === 0 || letter === "^") {
      const p = document.createElement('p');
      box.appendChild(p);
      activeDomElement = p;
    }

    if(!(letter === "^")) {
      activeDomElement.textContent += letter;
    }

    oldTime = newTime;
    wordIndex++;

  }
  
  requestAnimationFrame(typing);

}

typing();

