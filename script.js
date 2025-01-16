console.log(resources)

//Oppretter variabler for å holde på HTML
let seksjonMenypunktHTML = ""
let seksjonerHTML = ""

//Oppretter nav for hver kategori
resources.map((seksjon) => {
    seksjonMenypunktHTML += `<a href="#${seksjon.category}">${seksjon.category}</a>`;
});

//Legger til menyen i HTML
document.getElementById("meny").innerHTML = seksjonMenypunktHTML;


//Går gjennom seksjoner og lager en seksjon for hver
resources.map((seksjon) => {
    seksjonerHTML += `
        <article id="${seksjon.category}">
            <h1>${seksjon.category}</h1>
            <p>${seksjon.text}</p>
            <ul>
                ${seksjon.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join("")}
            </ul>
        </article>`;
});

//Legger til seksjonene i HTML
document.getElementById("kategori-oversikt").innerHTML = seksjonerHTML;

// Funksjon for å vise valgt seksjon og skjule andre
function visSeksjon(category) {
    const artikler = document.querySelectorAll("article");
    artikler.forEach((artikkel) => {
        //Hvis artikkelen har samme id som kategorien vi trykker på, vises den
        if (artikkel.id === category) {
            artikkel.classList.remove("hidden");
        } 
        //Hvis artikkelen ikke har blitt trykket på, skjules den
        else {
            artikkel.classList.add("hidden");
        }
    });
}

// Legger til event listeners på menylenker
const menyLenker = document.querySelectorAll("#meny a");
menyLenker.forEach((lenke) => {
    lenke.addEventListener("click", (event) => {
        event.preventDefault();
        const category = lenke.getAttribute("href").substring(1);
        visSeksjon(category);
    });
});

// Vis den første seksjonen som standard npr siden lastes
visSeksjon(resources[0].category);


//Kode for å indikere hvilken kategori som er valgt
const navLinks = document.querySelectorAll("nav a");

//Når en kategori blir trykket på, fjernes "active" fra alle kategorier og legges til den som er trykket på
navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(link => link.classList.remove("active"));
    this.classList.add("active");
  });
});