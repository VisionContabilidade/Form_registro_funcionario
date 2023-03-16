var selectOption = document.getElementById("cpfoucnpj");
var labelText = document.getElementById("label");

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