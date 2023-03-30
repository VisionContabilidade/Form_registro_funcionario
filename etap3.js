// var selectOption = document.getElementById("cpfoucnpj");
// var labelText = document.getElementById("label");
// selectOption.addEventListener("change", function() {
// 	labelText.innerHTML = "Qual o " + selectOption.value + " da empresa?";
// 	document.getElementById("cnpj_empresa").placeholder = selectOption.value == "CNPJ" ? "00.000.000/0000-00" : "000.000.000-00";
// 	document.getElementById("cnpj_empresa").setAttribute("maxlength", selectOption.value == "CNPJ" ? "18" : "14");
// 	document.getElementById("cnpj_empresa").setAttribute("onkeyup", selectOption.value == "CNPJ" ? "formatarCNPJ(this)" : "formatarCPF(this)");
// 	});


	function showQuestions2(){
        var selectedOption = document.querySelector('input[name="dependente"]:checked').value;
        if (selectedOption === "s") {
        document.getElementById("div_dependente_1").style.removeProperty("display");
        document.getElementById("div_geral_dependente").style.removeProperty("display");          
      } else {  
        document.getElementById("div_dependente_1").style.display = "none";
        document.getElementById("div_geral_dependente").style.display = "none";
        }
      }

	  function showQuestions() {
        var selectedOption = document.querySelector(
          'input[name="deficiencia"]:checked'
        ).value;
        if (selectedOption === "s") {
          document.getElementById("deficiencia_none").style.display = "block";
          document.getElementById("h6_def_none").style.display = "block";
        } else {
          document.getElementById("deficiencia_none").style.display = "none";
          document.getElementById("h6_def_none").style.display = "none";
        }
      }

	  function addDependente(){
        
        document.getElementById("div_dependente_2").style.removeProperty("display");
        document.getElementById("none_5").style.display = "none";
        document.getElementById("button_dependente_2").style.removeProperty("display");
      }
      function addDependente2(){
        document.getElementById("div_dependente_3").style.removeProperty("display");
        document.getElementById("button_dependente_2").style.display = "none";
        document.getElementById("button_dependente_3").style.removeProperty("display");
      }
      function addDependente3(){
        document.getElementById("div_dependente_4").style.removeProperty("display");
        document.getElementById("button_dependente_3").style.display = "none";
        document.getElementById("button_dependente_4").style.removeProperty("display");
      }
      function addDependente4(){
        document.getElementById("div_dependente_5").style.removeProperty("display");
        document.getElementById("button_dependente_4").style.display = "none";
      }

	  function limparDepentes1(){
        document.getElementById("nome_dependente").value = "";
        document.getElementById("data_nascimento_dependente").value = "";
        document.getElementById("cpf_dependente").value = "";
        document.getElementById("tipo_dependente").value = "";
        document.getElementById("div_dependente_1").style.display = "none";
        document.getElementById("div_geral_dependente").style.display = "none";
        

        }
        function limparDepentes2(){
        document.getElementById("nome_dependente_2").value = "";
        document.getElementById("data_nascimento_dependente_2").value = "";
        document.getElementById("cpf_dependente_2").value = "";
        document.getElementById("tipo_dependente_2").value = "";
        document.getElementById("div_dependente_2").style.display = "none";
        document.getElementById("button_dependente_2").style.display = "none";
        document.getElementById("none_5").style.display = "block";
        }
        function limparDepentes3(){
        document.getElementById("nome_dependente_3").value = "";
        document.getElementById("data_nascimento_dependente_3").value = "";
        document.getElementById("cpf_dependente_3").value = "";
        document.getElementById("tipo_dependente_3").value = "";
        document.getElementById("div_dependente_3").style.display = "none";
        document.getElementById("button_dependente_3").style.display = "none";
        document.getElementById("button_dependente_2").style.removeProperty("display");
        
        }
        function limparDepentes4(){
        document.getElementById("nome_dependente_4").value = "";
        document.getElementById("data_nascimento_dependente_4").value = "";
        document.getElementById("cpf_dependente_4").value = "";
        document.getElementById("tipo_dependente_4").value = "";
        document.getElementById("div_dependente_4").style.display = "none";
        document.getElementById("button_dependente_4").style.display = "none";
        document.getElementById("button_dependente_3").style.removeProperty("display");
        }
        function limparDepentes5(){
        document.getElementById("nome_dependente_5").value = "";
        document.getElementById("data_nascimento_dependente_5").value = "";
        document.getElementById("cpf_dependente_5").value = "";
        document.getElementById("tipo_dependente_5").value = "";
        document.getElementById("div_dependente_5").style.display = "none";
        document.getElementById("button_dependente_5").style.display = "none";
        document.getElementById("button_dependente_4").style.removeProperty("display");
        document.getElementById("button_dependente_4").style.display = "block";
        }


function formatarTel(campo){
 var tel = campo.value;
 tel = tel.replace(/\D/g, '');
 tel = tel.replace(/^(\d{2})(\d)/g, '($1) $2');
 tel = tel.replace(/(\d)(\d{4})$/, '$1-$2');
 campo.value = tel;

 }
 function formatarCNPJ(campo) {
var cnpj = campo.value;
cnpj = cnpj.replace(/\D/g, '');
cnpj = cnpj.replace(/(\d{2})(\d)/, "$1.$2");
cnpj = cnpj.replace(/(\d{3})(\d)/, "$1.$2");
cnpj = cnpj.replace(/(\d{3})(\d)/, "$1/$2");
cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");
campo.value = cnpj;
}
function formatarCPF(campo) {
var cpf = campo.value;
cpf = cpf.replace(/\D/g, '');
cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
campo.value = cpf;
}

const urlParams = new URLSearchParams(window.location.search);
	let cpfoucnpj = urlParams.get("cpfoucnpj");
	if (cpfoucnpj == "cpf"){
		document.getElementById("label").innerHTML = "Qual o Cpf" + " da empresa?";
	}
	else{
		document.getElementById("label").innerHTML = "Qual o Cnpj" + " da empresa?";
	}
	let cnpj_empresa = urlParams.get("cnpj_empresa");
	let empresa = urlParams.get("empresa");
	let cpf_funcionario = urlParams.get("cpf_funcionario");
	let nome_funcionario = urlParams.get("nome_funcionario");
	let email_funcionario = urlParams.get("email_funcionario");
	let telefone_funcionario = urlParams.get("telefone_funcionario");
	let email_da_empresa = urlParams.get("email_da_empresa");
	let nome_social = urlParams.get("nome_social");
	let data_nascimento = urlParams.get("data_nascimento");
	let pais_nascimento = urlParams.get("pais_nascimento");
	let estado_nascimento = urlParams.get("estado_nascimento");
	let cidade_nascimento = urlParams.get("cidade_nascimento");
	let sexo = urlParams.get("sexo"); //select 
	let raca = urlParams.get("raca"); //select
	let estado_civil = urlParams.get("estado_civil"); //select
	let grau_instrucao = urlParams.get("grau_instrucao"); //select
	let tipo_de_rua = urlParams.get("tipo_de_rua"); //select
	let endereco = urlParams.get("endereco");
	let bairro = urlParams.get("bairro");
	let numero = urlParams.get("numero");
	let cep = urlParams.get("cep");	
	let deficiencia = urlParams.get("deficiencia");
	let defFisica = urlParams.get("defFisica");
	let defVisual = urlParams.get("defVisual");
	let defAuditiva = urlParams.get("defAuditiva");
	let defMental = urlParams.get("defMental");
	let defIntelectual = urlParams.get("defIntelectual");
	let dependente = urlParams.get("dependente");
	let nome_dependente = urlParams.get("nome_dependente");
	let data_nascimento_dependente = urlParams.get("data_nascimento_dependente");	
	let cpf_dependente = urlParams.get("cpf_dependente");
	let tipo_dependente = urlParams.get("tipo_dependente"); 
	let nome_dependente_2 = urlParams.get("nome_dependente_2");
	let data_nascimento_dependente_2 = urlParams.get("data_nascimento_dependente_2");
	let cpf_dependente_2 = urlParams.get("cpf_dependente_2");
	let tipo_dependente_2 = urlParams.get("tipo_dependente_2"); 
	let nome_dependente_3 = urlParams.get("nome_dependente_3");
	let data_nascimento_dependente_3 = urlParams.get("data_nascimento_dependente_3");
	let cpf_dependente_3 = urlParams.get("cpf_dependente_3");
	let tipo_dependente_3 = urlParams.get("tipo_dependente_3"); 
	let nome_dependente_4 = urlParams.get("nome_dependente_4");
	let data_nascimento_dependente_4 = urlParams.get("data_nascimento_dependente_4");
	let cpf_dependente_4 = urlParams.get("cpf_dependente_4");
	let tipo_dependente_4 = urlParams.get("tipo_dependente_4"); 
	let nome_dependente_5 = urlParams.get("nome_dependente_5");
	let data_nascimento_dependente_5 = urlParams.get("data_nascimento_dependente_5");
	let cpf_dependente_5 = urlParams.get("cpf_dependente_5");
	let tipo_dependente_5 = urlParams.get("tipo_dependente_5"); 
	let rg_funcionario = urlParams.get("rg_funcionario");
	let orgao_emissor = urlParams.get("orgao_emissor");
	let uf_emissor = urlParams.get("uf_emissor");
	let pis = urlParams.get("pis");
	let floatingTextarea2 = urlParams.get("floatingTextarea2");

document.getElementById("cpfoucnpj").value = cpfoucnpj;
document.getElementById("cnpj_empresa").value = cnpj_empresa;
document.getElementById("empresa").value = empresa;
document.getElementById("cpf_funcionario").value = cpf_funcionario;
document.getElementById("nome_funcionario").value = nome_funcionario;
document.getElementById("nome_funcionario_").value = nome_funcionario;
document.getElementById("email_funcionario").value = email_funcionario;
document.getElementById("telefone_funcionario").value = telefone_funcionario;
document.getElementById("email_da_empresa").value = email_da_empresa;
document.getElementById("nome_social").value = nome_social;
document.getElementById("data_nascimento").value = data_nascimento;
document.getElementById("pais_nascimento").value = pais_nascimento;
document.getElementById("estado_nascimento").value = estado_nascimento;
document.getElementById("cidade_nascimento").value = cidade_nascimento;
document.getElementById("sexo").value = sexo;
document.getElementById("raca").value = raca;
document.getElementById("estado_civil").value = estado_civil;
document.getElementById("grau_instrucao").value = grau_instrucao;
document.getElementById("tipo_de_rua").value = tipo_de_rua;
document.getElementById("endereco").value = endereco;
document.getElementById("bairro").value = bairro;
document.getElementById("numero").value = numero;
document.getElementById("cep").value = cep;
if (deficiencia == "s") {
	document.getElementById("deficiencia_sim").checked = true;
	showQuestions();
}
else if (deficiencia == "n") {
	document.getElementById("deficiencia_nao").checked = true;
}
document.getElementById("defFisica").value = defFisica;
document.getElementById("defVisual").value = defVisual;
document.getElementById("defAuditiva").value = defAuditiva;
document.getElementById("defMental").value = defMental;
document.getElementById("defIntelectual").value = defIntelectual;
	if (defFisica == "s"){
		document.getElementById("defFisica").checked = true;
	}
	if (defVisual == "s"){
		document.getElementById("defVisual").checked = true;
	}
	if (defAuditiva == "s"){
		document.getElementById("defAuditiva").checked = true;
	}
	if (defMental == "s"){
		document.getElementById("defMental").checked = true;
	}
	if (defIntelectual == "s"){
		document.getElementById("defIntelectual").checked = true;
	}

else if (deficiencia == "n") {
	document.getElementById("deficiencia_nao").checked = true;
}
if (dependente == "s") {
	document.getElementById("dependente_sim").checked = true;
	showQuestions2();
	if (nome_dependente_2 != "") {
		addDependente();
	}
	if (nome_dependente_3 != "") {
		addDependente2();
	}
	if (nome_dependente_4 != "") {
		addDependente3();
	}
	if (nome_dependente_5 != "") {
		addDependente4();
	}
}
else if (dependente == "n") {
	document.getElementById("dependente_nao").checked = true;
}
document.getElementById("nome_dependente").value = nome_dependente;
document.getElementById("data_nascimento_dependente").value = data_nascimento_dependente;
document.getElementById("cpf_dependente").value = cpf_dependente;
document.getElementById("tipo_dependente").value = tipo_dependente;
document.getElementById("nome_dependente_2").value = nome_dependente_2;
document.getElementById("data_nascimento_dependente_2").value = data_nascimento_dependente_2;
document.getElementById("cpf_dependente_2").value = cpf_dependente_2;
document.getElementById("tipo_dependente_2").value = tipo_dependente_2;
document.getElementById("nome_dependente_3").value = nome_dependente_3;
document.getElementById("data_nascimento_dependente_3").value = data_nascimento_dependente_3;
document.getElementById("cpf_dependente_3").value = cpf_dependente_3;
document.getElementById("tipo_dependente_3").value = tipo_dependente_3;
document.getElementById("nome_dependente_4").value = nome_dependente_4;
document.getElementById("data_nascimento_dependente_4").value = data_nascimento_dependente_4;
document.getElementById("cpf_dependente_4").value = cpf_dependente_4;
document.getElementById("tipo_dependente_4").value = tipo_dependente_4;
document.getElementById("nome_dependente_5").value = nome_dependente_5;
document.getElementById("data_nascimento_dependente_5").value = data_nascimento_dependente_5;
document.getElementById("cpf_dependente_5").value = cpf_dependente_5;
document.getElementById("tipo_dependente_5").value = tipo_dependente_5;
document.getElementById("rg_funcionario").value = rg_funcionario;
document.getElementById("orgao_emissor").value = orgao_emissor;
document.getElementById("uf_emissor").value = uf_emissor;
document.getElementById("pis").value = pis;
document.getElementById("floatingTextarea2").value = floatingTextarea2;

