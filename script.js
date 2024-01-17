let time = document.getElementById('timeLeft');
let cronometerStyle = document.getElementById('cronometer');
let text = document.getElementById('textContent');
let charactersNo = document.getElementById('charactersNo');
let wordsNo = document.getElementById('numWords');
const texts = [
    "Despite early enthusiasm, AI research faced significant challenges and limitations. High expectations of AI capabilities were not met early on and its research funding decreased. This led to what became known as the AI Winter. This was in part due to the publication of a book called Perceptrons, which pointed out the flaws and limitations of neural networks. This publication influenced the Defense Advanced Research Projects Agency (DARPA) to withdraw its previous funding of AI projects. Research efforts shifted towards more specialized areas, such as expert systems and knowledge-based systems.",
    "Apple was founded as Apple Computer Company on April 1, 1976, by Steve Wozniak, Steve Jobs and Ronald Wayne to develop and sell Wozniak's Apple I personal computer. It was incorporated by Jobs and Wozniak in 1977. The company developed computers featuring innovative graphical user interfaces, including the 1984 original Macintosh, announced that year in a critically acclaimed advertisement called '1984'. By 1985, the high cost of its products, and power struggles between executives, caused problems.",
    "Edward Christopher Sheeran was born in Halifax, West Yorkshire, England on 17 February 1991. His early childhood home was on Birchcliffe Road in nearby Hebden Bridge. His father was a curator at Cartwright Hall in Bradford, and his mother worked at Manchester City Art Gallery. In December 1995, he moved with his family from Hebden Bridge to Framlingham in Suffolk, where he attended the independent Brandeston Hall preparatory school (now Framlingham College Prep School), then Thomas Mills High School, also in Framlingham.",
    "Dr. Walker is the author of the International Bestseller, Why We Sleep. It has a singular goal: to reunite humanity with sleep. The book provides a complete description of, and prescription for, sleep. It answers critical questions about sleep: how do caffeine and alcohol affect sleep? What really happens during dreaming? Why do our sleep patterns change across a lifetime? How do common sleep pills affect us and can they do long-term damage?",
    "As a child, Downey was 'surrounded by drugs.' His father, a drug addict, allowed Downey to use marijuana at age six, an incident which his father later said he regretted. Downey later stated that drug use became an emotional bond between him and his father: 'When my dad and I would do drugs together, it was like him trying to express his love for me in the only way he knew how.' Eventually, Downey began spending every night abusing alcohol and 'making a thousand phone calls in pursuit of drugs'"
];
let randomText = getRandomText();
let typedText = '';
let timePassed = 60;
let currentIndex = 0;
let charactersTypedNo = 0;
let cronometerInterval;
let timeStarted = false;

function getRandomText() {
    let randomPosition = Math.floor(Math.random() * 5);
    return texts[randomPosition];
}

function countdown() {
    cronometerInterval = setInterval(function() {
        if (timePassed > 1) {
            --timePassed;
            time.textContent = timePassed;
        } else {
            --timePassed;
            time.textContent = timePassed;
            clearInterval(cronometerInterval);
            cronometerStyle.style.backgroundColor = 'red';
        }
    }, 1000); 
}

function showText() {
    text.textContent = randomText;
    text.classList.add('text-style');
}

showText();

document.addEventListener('keydown', function(event) {
    if (event.key == 'Backspace' && currentIndex > 0 && timePassed > 0) {
        typedText = typedText.slice(0, -1);
        --currentIndex;
    } else if (currentIndex < randomText.length && event.key.length == 1 && timePassed > 0) {
        typedText += event.key;
        ++currentIndex;
        if (currentIndex == 1 && timeStarted == false) {
            countdown();
            timeStarted = true;
        }
    }
    updateTextContent();
    countCharacters();
    countWords();
});

function updateTextContent() {
    let newContent = '';
    for (let i = 0; i < randomText.length; ++i) {
        let charClass = '';
        if (i < typedText.length) {
            if (typedText[i] == randomText[i] && typedText[i] != ' ') {
                charClass = 'correct';
            } else {
                charClass = 'incorrect';
            } 
        }
        newContent += `<span id='spanNo${i}' class="${charClass}">${randomText[i]}</span>`;
    }
    text.innerHTML = newContent;
}

function countCharacters() {
    let colouredSpans = document.querySelectorAll('#textContent span');
    let colouredGreen = 0;
    colouredSpans.forEach(span => {
        let color = window.getComputedStyle(span).color;
        if (color == "rgb(0, 140, 0)") { 
            ++colouredGreen;
        }
    });
    charactersNo.textContent = colouredGreen;
}

function countWords() {
    let spans = document.querySelectorAll('#textContent span');
    let greenWord = true;
    let wordCount = 0;
    spans.forEach((span, index) => {
        let color = window.getComputedStyle(span).color;
        if (span.textContent == ' ') {
            if (greenWord) {
                ++wordCount;
            }
            greenWord = true; 
        } else if (color != "rgb(0, 140, 0)") {
            greenWord = false; 
        }
    });
    wordsNo.textContent = wordCount; 
}

function restart() {
    clearInterval(cronometerInterval);
    timePassed = 60;
    time.textContent = timePassed;
    currentIndex = 0;
    timeStarted = false;
    typedText = '';
    randomText = getRandomText();
    text.textContent = randomText;
    wordsNo.textContent = 0;
    charactersNo.textContent = 0;
    cronometerStyle.style.backgroundColor = '#4CAF50';
}

