// const selectPropiedad = document.querySelector("select#propiedad")
// const selectUbicacion = document.querySelector("select#ubicacion")
// const inputMetros2 = document.querySelector("input#metros2")
// const btnCotizar = document.querySelector("button.button.button-outline")
// const valorPoliza = document.querySelector("span#valorPoliza")
// const btnGuardar = document.querySelector("span.guardar")
// const animacionImg = 'images/animacion-btn.gif'
// const arrayHistorial = []

// const cargarCombo = (select, array) => {
//     if (array.length > 0) {
//         array.forEach((elemento) => select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`)
//     }
// }
// cargarCombo(selectPropiedad, datosPropiedad)
// cargarCombo(selectUbicacion, datosUbicacion)

// function realizarCotizacion() { //valido datos cargados e instancio el cotizador
//     let validarDatos = (selectPropiedad.value !== '...' && selectUbicacion.value !== '...' && inputMetros2.value >= '20')
//     if (validarDatos) {
//         btnCotizar.innerHTML = `<img src='${animacionImg}' />`
//         const timer = parseInt(Math.random() * 10000)
//         setTimeout(() => {
//             const cotiza = new Cotizador(parseInt(inputMetros2.value), parseFloat(selectPropiedad.value), parseFloat(selectUbicacion.value), costoM2)
//             valorPoliza.textContent = cotiza.cotizar()
//             btnCotizar.innerText = 'Cotizar'
//             mensajeToast()
//         }, timer);
//     }
// }

// btnCotizar.addEventListener('click', realizarCotizacion)

// btnGuardar.addEventListener('click', () => {
//     const historialCotizacion = {
//         propiedad: selectPropiedad[selectPropiedad.options.selectedIndex].textContent,
//         ubicacion: selectUbicacion[selectUbicacion.options.selectedIndex].textContent,
//         fecha: new Date(),
//         poliza: valorPoliza.textContent
//     }
//     arrayHistorial.push(historialCotizacion)
//     localStorage.setItem('UltimaCotizacion', JSON.stringify(arrayHistorial))
// })

// function mensajeToast() {
//     Toastify({
//         text: `Gracias por elegirnos.`,
//         duration: 4000,
//         close: true,
//         gravity: "top",
//         position: "right",
//         stopOnFocus: true,
//         style: {
//             background: "palevioletred",
//             color: "white",
//         }
//     }).showToast();
// }


const selectPropiedad = document.querySelector("#propiedad");
const selectUbicacion = document.querySelector("#ubicacion");
const metros2 = document.querySelector("#metros2");
const btnCotizar = document.querySelector(".button.button-outline");
const valorPoliza = document.querySelector("#valorPoliza");
const btnGuardar = document.querySelector(".guardar");
let arrayHistorial = []

function llenarSelect(select, array) {
    if (array != "") {
        array.forEach(element =>
            select.innerHTML += `<option value="${element.valor}">${element.tipo}</option>`);
    }
}
llenarSelect(selectPropiedad, datosPropiedad);
llenarSelect(selectUbicacion, datosUbicacion);

function realizarCotizacion() {
    const timer = Math.random() * 5000
    btnCotizar.innerHTML = `<img src="images/animacion-btn.gif">`
    if (metros2.value != "..." && selectPropiedad.value != "..." && selectUbicacion.value != "...") {
        setTimeout(() => {
            const cotiza = new Cotizador(parseInt(metros2.value), parseFloat(selectPropiedad.value), parseFloat(selectUbicacion.value), costoM2);
            valorPoliza.innerHTML = cotiza.cotizar()
            btnCotizar.textContent = "Cotizar"
        }, timer);


    }
}

btnCotizar.addEventListener("click", realizarCotizacion)

btnGuardar.addEventListener('click', () => {
    const historialCotizacion = {
        propiedad: selectPropiedad[selectPropiedad.options.selectedIndex].textContent,
        ubicacion: selectUbicacion[selectUbicacion.options.selectedIndex].textContent,
        fecha: new Date(),
        poliza: valorPoliza.textContent
    }
    arrayHistorial.push(historialCotizacion)
    localStorage.setItem('UltimaCotizacion', JSON.stringify(arrayHistorial))
})
