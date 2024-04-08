/**
 * Confirmação de exclusão de um contato
 * @author Fábio Esposto
 */
function confirmar(idcon){
	let resposta = confirm("Deseja realmente excluir este contato?")
	if(resposta===true){
		//alert(idcon)
		window.location.href="delete?idcon=" +idcon
	}
	
}