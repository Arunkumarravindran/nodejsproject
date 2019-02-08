function sidValidate() {
	
	var n =/^[0-9]+$/;
	var sid =document.getElementById("id").value;
	var status=false;
	
	if(sid.match(n)) {
		document.getElementById("idError").innerText= " ";
		status=true;
	}
	else {
		document.getElementById("idError").innerText= "Enter nemeric characters only";
		status=false;
	}
	return status;
	
}
