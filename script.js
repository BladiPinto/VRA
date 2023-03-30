function generarTabla() {
    // Obtener el valor del campo DNI
    var dni = document.getElementById("dni").value;
    
    // Aquí deberías hacer una solicitud a tu servidor para obtener los datos de la tabla, en lugar de usar valores estáticos como en este ejemplo.
    // La respuesta de la solicitud debería ser un array de objetos, donde cada objeto representa una fila de la tabla y contiene las siguientes propiedades:
    // {nro: número de fila, curso: nombre del curso, codigo: código del curso, url: URL para ver el certificado}
    var data = [
        {nro: 1, curso: "Curso - Taller Programaciòn Curricular y Evaluaciòn del Aprendizaje Universitario", codigo: "COD-001", url: "http://ejemplo.com/certificado-1"},
        {nro: 2, curso: "Curso 2", codigo: "COD-002", url: "http://ejemplo.com/certificado-2"},
        {nro: 3, curso: "Curso 3", codigo: "COD-003", url: "http://ejemplo.com/certificado-3"},
        {nro: 3, curso: "Curso 3", codigo: "COD-003", url: "http://ejemplo.com/certificado-3"},
    ];
    
    // Crear la tabla
    var table = document.createElement("table");
    var headerRow = table.insertRow();
    var nroHeader = headerRow.insertCell(0);
    var cursoHeader = headerRow.insertCell(1);
    var codigoHeader = headerRow.insertCell(2);
    var verHeader = headerRow.insertCell(3);
    nroHeader.innerHTML = "<strong>Nro</strong>";
    cursoHeader.innerHTML = "<strong>Nombre del Curso</strong>";
    codigoHeader.innerHTML = "<strong>Codigo</strong>";
    verHeader.innerHTML = "<strong>Descargar</strong>";
    
    // Agregar las filas a la tabla
    for (var i = 0; i < data.length; i++) {
        var row = table.insertRow();
        var nroCell = row.insertCell(0);
        var cursoCell = row.insertCell(1);
        var codigoCell = row.insertCell(2);
        var verCell = row.insertCell(3);
        nroCell.innerHTML = data[i].nro;
        cursoCell.innerHTML = data[i].curso;
        codigoCell.innerHTML = data[i].codigo;
        verCell.innerHTML = '<a href="' + data[i].url + '"><img src="/images/Descargar.png" alt="descargar" style="max-width: 20px;"></a>';
    }
    
    // Agregar la tabla al documento
    var tablaDiv = document.getElementById("tabla");
    tablaDiv.innerHTML = "";
    tablaDiv.appendChild(table);
}