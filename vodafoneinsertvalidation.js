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

function nameValidate() {
	
	var m =/^[A-Za-z]+$/;
	var name =document.getElementById("name").value;
	var status=false;
	
	if(name.match(m)) {
		document.getElementById("nameError").innerText= " ";
		status=true;
	}
	else {
		document.getElementById("nameError").innerText= "Enter alphabets only";
		status=false;
	}
	return status;
	
}

function cityValidate() {
	
	var o =/^[A-Za-z]+$/;
	var city =document.getElementById("city").value;
	var status=false;
	
	if(city.match(o)) {
		document.getElementById("cityError").innerText= " ";
		status=true;
	}
	else {
		document.getElementById("cityError").innerText= "Enter alphabets only";
		status=false;
	}
	return status;
	
}