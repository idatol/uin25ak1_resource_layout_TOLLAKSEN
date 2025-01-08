// Velg <main> for å legge til seksjoner
const main = document.querySelector("main");

// Iterer gjennom dataene i ressurser.js
resources.forEach(resource => {
    // Lag en seksjon for hver kategori
    const section = document.createElement("section");
    section.id = resource.category;

    // Legg til tittel
    const title = document.createElement("h1");
    title.textContent = resource.category;
    section.appendChild(title);

    // Legg til beskrivelse
    const description = document.createElement("p");
    description.textContent = resource.text;
    section.appendChild(description);

    // Lag en liste for kilder
    const sourceList = document.createElement("ul");
    resource.sources.forEach(source => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = source.url;
        link.textContent = source.title;
        listItem.appendChild(link);
        sourceList.appendChild(listItem);
    });
    section.appendChild(sourceList);

    // Legg til seksjonen i main
    main.appendChild(section);
});
