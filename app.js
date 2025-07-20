document.getElementById("harvester").style.display = "none"
document.getElementById('harvester').play();

const welcome = document.getElementById('test');
const welcText = "there is so much grief to look forward to.  and not 'looking forward to' with a positive connotation.  feeling lost? call the number: +1 (479) 334 3592.  it isn't artifical intelligence. dont ask me that.  'artifical intelligence' makes me want to die. ";

welcome.textContent = '';

for (let i = 0; i < welcText.length; i++) {
    setTimeout(() => {
        welcome.textContent += welcText[i];
    }, i * 100);
}
