document.getElementById("harvester").style.display = "none";
document.getElementById("harvester").play();

const welcome = document.getElementById("test");
const welcText =
  "looking forward to it but not 'looking forward' with a positive connotation.  feeling lost? call the number: +1 (479) 334 3592.  it isn't artificial intelligence. don't ask me that.  'artificial intelligence' makes me want to die. ";

const hello = document.getElementById("hello");
const linksDiv = document.getElementById("links");

welcome.textContent = "";

const linkData = [
  { href: "tel:+14793343592", text: "479-334-3592: A Chat Bot" },
  {
    href: "https://www.bruisermag.com/cage_goatman",
    text: "Immature Self Centered Negative Audiobook",
  },
  {
    href: "https://www.evil.com",
    text: "My new bands are recording and playing shows",
  },
];

const page = () => {
  for (let i = 0; i <= welcText.length; i++) {
    {
      setTimeout(() => {
        if (i < welcText.length) {
          welcome.textContent += welcText[i];
        } else {
          hello.textContent = "Somethings I've been working on or through:";

          linkData.forEach((link) => {
            const a = document.createElement("a");
            a.href = link.href;
            a.textContent = link.text;
            a.target = "_blank";
            a.style.display = "block";
            linksDiv.appendChild(a);
          });
        }
      }, i * 100);
    }
  }
};

page();
