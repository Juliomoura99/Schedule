class Info{

	constructor(){		//Cria o Array

		this.arrayInfos = [];
		this.id = Math.floor(Math.random() * 100);

	}


	salvar(){

		let info = this.lerDados();		//Leitura dos dados no array

		if(this.validaCampos(info)){	//Campo vazio
			this.adicionar(info);		//push no array
		}

		this.listaTabela();				//Insere Infos na tabela

		this.cancelar();

	}



	listaTabela(){
		let tbody = document.getElementById('tbody');

		tbody.innerHTML = '';

		for(let i = 0; i < this.arrayInfos.length; i++){

			let tr = tbody.insertRow();

			let td_id = tr.insertCell();
			
			let td_name = tr.insertCell();
			let td_telefone = tr.insertCell();
			let td_delete = tr.insertCell();

			td_id.innerHTML = this.arrayInfos[i].id;
			td_name.innerHTML = this.arrayInfos[i].name;
			td_telefone.innerHTML = this.arrayInfos[i].telefone;

			let imgDelete = document.createElement('img');
			imgDelete.src = 'imagens/delete.png';
			imgDelete.setAttribute("onclick","info.deletar("+ this.arrayInfos[i].id +")");	//ação do usuario, ação do programa

			td_delete.appendChild(imgDelete);
		}
	}

	adicionar(info){
		this.arrayInfos.push(info);
		this.id = Math.floor(Math.random() * 100);

	}

	

	lerDados(){

		let info = {};

		info.id = this.id;
		
		info.name =  document.getElementById('name').value;
		info.telefone =  document.getElementById('telefone').value;

		return info;

	}

	validaCampos(info){

		let mensagem = '';

		

		if(info.name == ''){
			mensagem += '- Informe o nome \n';
		}

		if(info.telefone == ''){
			mensagem += '- Informe o telefone \n';
		}

		if(mensagem != ''){
			alert(mensagem);
			return false;
		}

		return true;
	}

	deletar(id){

		let tbody = document.getElementById('tbody');

		for(let i = 0; i < this.arrayInfos.length; i++){

			if(this.arrayInfos[i].id == id){
					this.arrayInfos.splice(i, 1);
					tbody.deleteRow(i);
			}
		}

	}

	cancelar(){

		 document.getElementById('name').value = "";
		 document.getElementById('telefone').value = "";
		
	}

buscar(){

	var input, filter, table, tr, td, i, txtValue;
  	input = document.getElementById('buscar');
  	filter = input.value.toUpperCase();

  	table = document.getElementById('tabela');
  	tr = table.getElementsByTagName("tr");

  	for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerHTML;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        console.log(td);
      } else {
        tr[i].style.display = "none";
        console.log("BBB");
      }
    }
  }

}

}

var info = new Info();
