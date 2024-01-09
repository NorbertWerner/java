function showName(){
    const Imie = document.getElementById("Imie").value; 
    const Nazwisko = document.getElementById("Nazwisko").value; 

    let tekst = document.getElementById("wynik");

    tekst.innerHTML = `Witaj, ${Imie} ${Nazwisko}! <br>to jest zamówienie!`;
}

let liczba_elementow = 0;

function addToList() {
    let id_osoba = liczba_elementow;
    let Imie = document.getElementById("Imie").value; 
    let Nazwisko = document.getElementById("Nazwisko").value;

    let element = document.createElement("li");
    element.id = `osoba${id_osoba}`

    let tekst = document.createElement("span");
    tekst.innerHTML = `${Imie} ${Nazwisko} ID: ${id_osoba}`;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Usuń";
    deleteBtn.addEventListener("click", function(){
        let x = confirm("Czy aby na pewno chcesz usunąć tą osobę?");
        if(x){
            lista.removeChild(element);
        }
    });

    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Edytuj";
    editBtn.addEventListener("click", function() {
        let Imie_tmp = prompt("Podaj nowe imie", Imie)
        let Nazwisko_tmp = prompt("Podaj nowe nazwisko", Nazwisko)

        Imie = Imie_tmp;
        Nazwisko = Nazwisko_tmp;

        tekst.innerHTML = `${Imie} ${Nazwisko} ID: ${id_osoba}`;
    });

    liczba_elementow++;

    let lista = document.getElementById("lista");

    element.appendChild(tekst);
    element.appendChild(deleteBtn);
    element.appendChild(editBtn);
    lista.appendChild(element);
}

function deleteFromlist(){
    const id_number = document.getElementById("id_number").value;
    let lista = document.getElementById("lista");

    if(document.getElementById(`osoba${id_number}`)){
        lista.removeChild(document.getElementById(`osoba${id_number}`))
    } else {
        alert("Nie ma osoby o takim ID!");
    }
}

document.getElementById("przycisk").addEventListener("click", () => showName());
document.getElementById("przycisk_dodaj").addEventListener("click", () => addToList());
document.getElementById("przycisk_usun").addEventListener("click", () => deleteFromlist());
document.getElementById("nazwisko").addEventListener("keyup", function(e){
    if(e.key === "Enter") {
        e.preventDefault();
        showName();
    }
});
