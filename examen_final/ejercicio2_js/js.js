function calcularDescuento() {
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const unidades = parseInt(document.getElementById('unidades').value);
    
    let descuento = 0;
    let porcentajeDescuento = 0;

    if (categoria === 'A') {
        if (unidades >= 1 && unidades <= 10) {
            porcentajeDescuento = 1;
        } else if (unidades >= 11 && unidades <= 20) {
            porcentajeDescuento = 1.5;
        } else {
            porcentajeDescuento = 2;
        }
    } else if (categoria === 'B') {
        if (unidades >= 1 && unidades <= 10) {
            porcentajeDescuento = 1.2;
        } else if (unidades >= 11 && unidades <= 20) {
            porcentajeDescuento = 2;
        } else {
            porcentajeDescuento = 3;
        }
    } else if (categoria === 'C') {
        if (unidades >= 1 && unidades <= 10) {
            porcentajeDescuento = 0;
        } else if (unidades >= 11 && unidades <= 20) {
            porcentajeDescuento = 0.5;
        } else {
            porcentajeDescuento = 1;
        }
    }

    const precioTotal = precio * unidades;
    const valorDescuento = (precioTotal * porcentajeDescuento) / 100;
    const totalConDescuento = precioTotal - valorDescuento;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h3>Resultado</h3>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Unidades</th>
                <th>Precio Unitario</th>
                <th>Precio Total</th>
                <th>Descuento (%)</th>
                <th>Valor del Descuento</th>
                <th>Total con Descuento</th>
            </tr>
            <tr class="categoria-${categoria.toLowerCase()}">
                <td>${nombre}</td>
                <td>${categoria}</td>
                <td>${unidades}</td>
                <td>${precio.toFixed(2)}</td>
                <td>${precioTotal.toFixed(2)}</td>
                <td>${porcentajeDescuento}%</td>
                <td>${valorDescuento.toFixed(2)}</td>
                <td>${totalConDescuento.toFixed(2)}</td>
            </tr>
        </table>
    `;
}
