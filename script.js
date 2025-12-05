/* LOADER */
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 1500);
};

/* Confirmación */
document.getElementById("rsvpForm").addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const asistencia = document.getElementById("asistencia").value;
    const acompanantes = document.getElementById("acompanantes").value;

    emailjs.send("service_u0dw7um", "template_x9k4f0", {
        nombre: nombre,
        asistencia: asistencia,
        acompanantes: acompanantes,
        dia: "DOMINGO"
    })
    .then(() => {
        document.getElementById("msg").innerHTML =
            "✔ ¡Gracias por confirmar, " + nombre + "!";
        document.getElementById("msg").style.color = "#0f0";

        document.getElementById("rsvpForm").reset();
        document.getElementById("acompanantesCount").textContent =
            "Acompañantes seleccionados: 0";
    })
    .catch(err => {
        document.getElementById("msg").innerHTML =
            "❌ Hubo un problema al enviar tu confirmación. Intenta nuevamente.";
        document.getElementById("msg").style.color = "red";
        console.error("EmailJS Error:", err);
    });
});

/* Acompañantes */
const acompInput = document.getElementById("acompanantes");
const acompMsg = document.getElementById("acompanantesMsg");
const acompCount = document.getElementById("acompanantesCount");

acompInput.addEventListener("input", () => {
    let val = parseInt(acompInput.value);
    acompCount.textContent = "Acompañantes seleccionados: " + val;

    if (val > 2) {
        acompMsg.style.display = "block";
        acompInput.value = 2;
        acompCount.textContent = "Acompañantes seleccionados: 2";
    } else {
        acompMsg.style.display = "none";
    }
});

/* Carpeta Drive DOMINGO */
const driveFolder = "https://drive.google.com/drive/folders/1a4TIjoz-Q3dZcibp9VytrQv_xnYM1PSG";

/* Abrir galería */
function openGallery() {
    window.open(driveFolder, "_blank");
    document.getElementById("uploadArea").classList.remove("hidden");
}

/* Subir foto */
function uploadPhoto() {
    alert("Se abrirá Google Drive para subir la foto.");
    window.open(driveFolder, "_blank");
}
