function genereerRecepten() {
    let budget = document.getElementById("budget").value;
    let tijd = document.getElementById("bereidingstijd").value;
    let moeilijkheid = document.getElementById("moeilijkheid").value;
    let dieet = document.getElementById("dieet").value.toLowerCase();

    let recepten = [
        { naam: "Vegetarische Pasta", budget: 5, tijd: 20, moeilijkheid: "makkelijk", dieet: "vegetarisch" },
        { naam: "Quinoa Salade", budget: 6, tijd: 15, moeilijkheid: "makkelijk", dieet: "glutenvrij" },
        { naam: "Gegrilde Zalm", budget: 10, tijd: 25, moeilijkheid: "gemiddeld", dieet: "vis" },
        { naam: "Vegan Curry", budget: 7, tijd: 30, moeilijkheid: "moeilijk", dieet: "vegan" }
    ];

    let gefilterdeRecepten = recepten.filter(r =>
        (!budget || r.budget <= budget) &&
        (!tijd || r.tijd <= tijd) &&
        (!moeilijkheid || r.moeilijkheid === moeilijkheid) &&
        (!dieet || r.dieet.includes(dieet))
    );

    let receptenLijst = document.getElementById("recepten-lijst");
    receptenLijst.innerHTML = "";

    if (gefilterdeRecepten.length === 0) {
        receptenLijst.innerHTML = "<p>Geen recepten gevonden.</p>";
    } else {
        let boodschappen = [];
        gefilterdeRecepten.forEach(recept => {
            let item = document.createElement("p");
            item.textContent = `🍽️ ${recept.naam} - €${recept.budget}, ${recept.tijd} min, ${recept.moeilijkheid}`;
            receptenLijst.appendChild(item);
            boodschappen.push(recept.naam);
        });

        document.getElementById("boodschappen").value = boodschappen.join("\n");
    }
}