function sendEmail(){
         
    const encoded = encodeURIComponent(document.getElementById("link").innerHTML);
     document.getElementById("gerar_email").setAttribute("href", "mailto:" + document.getElementById("email_funcionario").value + "?subject=Link de acesso&body=" + encoded);
     document.getElementById("gerar_email").click();
 
 }

  function copiarTexto() {
   let textoCopiado = document.getElementById("link");
   textoCopiado.select();
   textoCopiado.setSelectionRange(0, 99999);
  
   document.execCommand("copy");
   window.getSelection().removeAllRanges();
   document.getElementById("copiador").innerHTML = "Copiado!";
   setTimeout(function() {          
     document.getElementById("copiador").innerHTML = "<i class='fas fa-copy'></i> Copiar";     
}, 1000);               
}

 var selectOption = document.getElementById("cpfoucnpj");
var labelText = document.getElementById("label");

selectOption.addEventListener("change", function() {
labelText.innerHTML = "Qual o " + selectOption.value + " da empresa?";
document.getElementById("cnpj_empresa").placeholder = selectOption.value == "CNPJ" ? "00.000.000/0000-00" : "000.000.000-00";
document.getElementById("parte2_form").style.display = selectOption.value == "CNPJ" ? "block" : "block";
document.getElementById("cnpj_empresa").setAttribute("maxlength", selectOption.value == "CNPJ" ? "18" : "14");
document.getElementById("cnpj_empresa").setAttribute("onkeyup", selectOption.value == "CNPJ" ? "formatarCNPJ(this)" : "formatarCPF(this)");



});
 function reniciar(){
   document.getElementById("button_gerar").style.removeProperty("display");
   document.getElementById("button_edit").style.display = "none";
   document.getElementById("copiar_link").style.display = "none";

 }

 function generateLink() {
   document.getElementById("button_gerar").style.display = "none";
   document.getElementById("button_edit").style.removeProperty("display");
   document.getElementById("copiar_link").style.display = "block";
   document.getElementById("button_edit").innerHTML = "Link gerado!";
   
   setTimeout(function() {                    
     document.getElementById("button_edit").innerHTML = "Alterar";
     document.getElementById("button_edit").classList.remove("btn-outline-primary");
     document.getElementById("button_edit").classList.add("btn-light");
}, 1000);
   var cpfoucnpj = document.getElementById("cpfoucnpj").value;
   var cnpj_empresa = document.getElementById("cnpj_empresa").value;
   var empresa = encodeURIComponent(document.getElementById("empresa").value);
   var email_da_empresa = document.getElementById("email_da_empresa").value;
   var cpf_funcionario = document.getElementById("cpf_funcionario").value;
   var nome_funcionario = encodeURIComponent(document.getElementById("nome_funcionario").value);
   var email_funcionario = document.getElementById("email_funcionario").value;
   var telefone_funcionario = document.getElementById("telefone_funcionario").value; 
   
   const tel_novo = arrumarTelefone(telefone_funcionario);
   
   var link = document.getElementById("link");
   link.href =
     "http://127.0.0.1:5500/novo_registro_etp2.html?" +
     "&cpfoucnpj=" +
      cpfoucnpj +
     "&empresa=" +
     empresa +
     "&cpf_funcionario=" +
     cpf_funcionario +
     "&nome_funcionario=" +
     nome_funcionario +
     "&email_funcionario=" +
     email_funcionario +
     "&telefone_funcionario=" +
     tel_novo +
     "&cnpj_empresa=" +
     cnpj_empresa +
     "&email_da_empresa=" +
     email_da_empresa;
   link.style.display = "inline";
   link.innerHTML =
     "http://127.0.0.1:5500/novo_registro_etp2.html?" +
     "&empresa=" +
     empresa +
     "&cpf_funcionario=" +
     cpf_funcionario +
     "&nome_funcionario=" +
     nome_funcionario +
     "&email_funcionario=" +
     email_funcionario +
     "&telefone_funcionario=" +
     tel_novo +
     "&cnpj_empresa=" +
     cnpj_empresa +
     "&email_da_empresa=" +
     email_da_empresa;
 }

 function arrumarTelefone(telefone){
   
  const tel_novo = telefone.replace(/[^a-zA-Z0-9]/g, "");
  return tel_novo;
 }

 function link_zap() {
   let nome_funcionario = document.getElementById("nome_funcionario").value;
   let link_a_zap = document.getElementById("link_a_zap");
   let link = document.getElementById("link").innerHTML;
   const telefone_funcionario = document.getElementById("telefone_funcionario").value;
   const tel_novo = arrumarTelefone(telefone_funcionario);
   const encoded = window.encodeURIComponent("Ola, " + nome_funcionario + " aqui está o link para registro \n" + link);
   console.log(encoded);
   link_a_zap.href = "https://api.whatsapp.com/send?phone=55" + tel_novo + "&text=" + encoded;
  
   window.open(link_a_zap.href, "_blank");
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

function buttonProsseguir(){

var link = document.getElementById("link").value;
window.open(link, "_blank");
}
console.log('teste');