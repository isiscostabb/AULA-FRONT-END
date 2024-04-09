
let chamada = false;
const enviar = document.getElementById("enviar")

enviar.addEventListener("click", function() {

    //selecionar
    const msg = document.getElementById("txt").value;
    const place = document.querySelector("main");
    const p = document.createElement("p");

    //voce
    if (!chamada) {
        const voce = document.createElement('p');
        voce.innerHTML = 'VOCÊ';
        voce.classList.add('voce_title');
        place.appendChild(voce);
        chamada = true;
    }

    //inserir
    p.className = "msg usuario";
    p.textContent = msg;
    place.appendChild(p);

    //limpa
    document.getElementById("txt").value = ""

    place.scrollTop = place.scrollHeight;
});

document.getElementById("txt").addEventListener("keypress", (event) => {
    if (event.key === "Enter") { 
        event.preventDefault(); 
        document.getElementById("enviar").click();
    }
});

