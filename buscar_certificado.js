function buscarCertificado() {
	$("#tabla_certificados").show();
	var dni = $("#dni").val();
	$.ajax({
		url: "buscar_certificado.php",
		type: "POST",
		data: { dni: dni },
		dataType: "json",
		success: function(result) {
			if (result.length > 0) {
				$("#tabla_certificados tbody").empty();
				$.each(result, function(i, certificado) {
					var row = "<tr>";
					row += "<td>" + certificado.dni + "</td>";
					row += "<td>" + certificado.nombre + "</td>";
					row += "<td>" + certificado.apellido + "</td>";
					row += '<td><a href="' + certificado.imgcerti + '" target="_blank">down<img src="images/Descargar.png" alt="descargar" style="max-width: 20px;">down</a></td>';
					row += "<td>" + certificado.fecha_emision + "</td>";
					row += "<td>" + certificado.codigo + "</td>";
					row += "</tr>";
					$("#tabla_certificados tbody").append(row);
				});
			} else {
				alert("No se encontraron certificados para el DNI ingresado");
			}
		},
		error: function() {
			alert("Error al buscar el certificado");
		}
	});
}
