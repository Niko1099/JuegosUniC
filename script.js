let intentos = 0;
const MAX_INTENTOS = 5;

function iniciarValidacionAutomatica() {
    const estado = document.getElementById("estado");

    const intervalo = setInterval(() => {
        intentos++;
        estado.textContent = "Verificando pago... (" + intentos + ")";

        // 🔥 SIMULACIÓN DE RESPUESTA DEL BACKEND
        if (intentos >= 3) {
            clearInterval(intervalo);
            pagoAprobado();
        }

        if (intentos >= MAX_INTENTOS) {
            clearInterval(intervalo);
            estado.textContent = "Pago no detectado";
            estado.style.color = "#ef4444";
        }

    }, 2000);
}

function pagoAprobado() {
    const estado = document.getElementById("estado");
    estado.textContent = "Pago confirmado ✔";
    estado.style.color = "#22c55e";

    setTimeout(() => {
        window.location.href = "exito.html";
    }, 1500);
}
