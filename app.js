document.getElementById("harvester").style.display = "none"
document.getElementById('harvester').play();

const welcome = document.getElementById('test');
const welcText = "there is so much grief to look forward to.  and not 'looking forward to' with a positive connotation.  feeling lost? call the number: +1 (479) 334 3592.  it isn't artificial intelligence. don't ask me that.  'artificial intelligence' makes me want to die. ";

const hello = document.getElementById('hello');
const linksDiv = document.getElementById('links');

welcome.textContent = '';

for (let i = 0; i < welcText.length; i++) {
    setTimeout(() => {
        welcome.textContent += welcText[i];
    }, i * 100);
}


const linkData = [
  { href: 'tel:+14793343592', text: '479-334-3592: A Chat Bot' },
  { href: 'https://www.bruisermag.com/cage_goatman', text: 'Immature Self Centered Negative Audiobook' },
  { href: 'https://www.evil.com', text: 'My new bands are recording and playing shows' }
];


setTimeout(() => {
  console.log(hello)
  hello.textContent = "Somethings I've been working on or through:"

// Loop through the array and create <a> elements
linkData.forEach(link => {
  const a = document.createElement('a');
  a.href = link.href;
  a.textContent = link.text;
  a.target = '_blank'; // optional: open in new tab
  a.style.display = 'block'; // optional: puts each on a new line
  linksDiv.appendChild(a);
});

}, 25500);
