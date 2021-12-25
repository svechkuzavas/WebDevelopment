let enteredWord = '';
let progress = '';
let wrongs = 0;
let ruLetters = "абвгдежзийклмнопрстуфхцчшщьыъэюя";

function showGameActivity(){
    document.getElementById("warning").hidden = true;
    document.getElementById("mainCycle").hidden = false;
    document.getElementById("start").hidden = true;
    document.getElementById("mistakes").hidden = false;
    document.getElementById("progress").innerHTML = progress;
}

function showFinish(message){
    document.getElementById("again").hidden = false;
    document.getElementById("itWas").innerHTML = message;
    document.getElementById("mainCycle").hidden = true;
    document.getElementById("mistakes").hidden = true;
}

function showEmptyStringWarning(){
    document.getElementById("warning").hidden = false;
}

function start(){
    let input_word = document.getElementById("input");
    if (input_word.value == ''){
        showEmptyStringWarning();
    } else {
        enteredWord = input_word.value.toLowerCase();
        progress = '_'.repeat(enteredWord.length);
        showGameActivity();
        for (letter of ruLetters){
            document.getElementById("mainCycle").append(createNewButton(letter));
        }
    }
}

function restart(){
    location.reload();
}

function createNewButton(value){
    let newBtn = document.createElement('button');
    newBtn.append(value);
    newBtn.classList.add("btn");
    newBtn.classList.add("btn-outline-primary");
    newBtn.style.margin = "5px";
    newBtn.addEventListener('click', onLetterClick);  
    return newBtn;
}

function onLetterClick(){
    let chosenLetter = this.innerHTML;
    if (wrongs < 9){
        if (enteredWord.includes(chosenLetter)){
            makeButtonGreen(this); 
            for (let i=0; i<enteredWord.length; i++){
                if (enteredWord[i] == chosenLetter) {
                    progress = progress.substr(0, i) + chosenLetter + progress.substr(i+1);
                }
            }
            if (progress === enteredWord){
                showFinish("Выигрыш! Слово было: "  + enteredWord);
            }
            document.getElementById("progress").innerHTML = progress;
            this.disabled = true;
        } else {
            makeButtonRed(this);
            wrongs++;
            document.getElementById("cntMist").innerHTML = 9 - wrongs;
            this.disabled = true;
        }
    } else {
        showFinish("Проигрыш! Слово было: ");
    }
}

function makeButtonGreen(btnObj){
    btnObj.classList.remove("btn-otline-primary");
    btnObj.classList.add("btn-outline-success");
}

function makeButtonRed(btnObj){
    btnObj.classList.remove("btn-outline-primary");
    btnObj.classList.add("btn-outline-danger");
}