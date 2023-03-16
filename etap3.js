selectOption.addEventListener("change", function() {
labelText.innerHTML = "Qual o " + selectOption.value + " da empresa?";
document.getElementById("cnpj_empresa").placeholder = selectOption.value == "CNPJ" ? "00.000.000/0000-00" : "000.000.000-00";
document.getElementById("cnpj_empresa").setAttribute("maxlength", selectOption.value == "CNPJ" ? "18" : "14");
document.getElementById("cnpj_empresa").setAttribute("onkeyup", selectOption.value == "CNPJ" ? "formatarCNPJ(this)" : "formatarCPF(this)");
});

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
	let cnpj_empresa = urlParams.get("cnpj_empresa");
	let empresa = urlParams.get("empresa");
	let cpf_funcionario = urlParams.get("cpf_funcionario");
	let nome_funcionario = urlParams.get("nome_funcionario");
	let email_funcionario = urlParams.get("email_funcionario");
	let telefone_funcionario = urlParams.get("telefone_funcionario");
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
	let deficiencia_sim = urlParams.get("deficiencia_sim");
	let  = urlParams.get("");
	let  = urlParams.get("");
	let  = urlParams.get("");
	let  = urlParams.get("");
	let  = urlParams.get("");
	let  = urlParams.get("");
	let  = urlParams.get("");
	let  = urlParams.get("");
	let  = urlParams.get("");
	
	
	