document.body.style.setProperty("--fondo-img", "url('img3/BaseBackGround.png')");

function cambiarPower(power) {
    const personaje = document.getElementById("personaje");
    const botonReset = document.getElementById("botonReset");
    const body = document.body;

    botonReset.style.display = "block";

    personaje.style.opacity = 0;

    setTimeout(() => {
        switch (power) {
            case 1:
                personaje.src = "img3/Thanatos.png";
                body.style.setProperty("--fondo-img", "url('img3/1BackGround.jpg')");
                break;
            case 2:
                personaje.src = "img3/Satan.png";
                body.style.setProperty("--fondo-img", "url('img3/2BackGround.jpg')");
                break;
            case 3:
                personaje.src = "img3/Orpheus.png";
                body.style.setProperty("--fondo-img", "url('img3/3BackGround.jpg')");
                break;
            case 4:
                personaje.src = "img3/Beelzebub.png";
                body.style.setProperty("--fondo-img", "url('img3/4BackGround.jpg')");
                break;
        }

        personaje.style.opacity = 1;
    }, 300);
}

function restaurarBase() {
    const personaje = document.getElementById("personaje");
    const botonReset = document.getElementById("botonReset");
    const body = document.body;

    personaje.style.opacity = 0;

    setTimeout(() => {
        personaje.src = "img3/MakotoYuki.png";
        body.style.setProperty("--fondo-img", "url('img3/BaseBackGround.png')");
        personaje.style.opacity = 1;

        botonReset.style.display = "none";
    }, 300);
}
