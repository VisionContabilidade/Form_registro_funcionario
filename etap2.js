const urlParams = new URLSearchParams(window.location.search);
      const cnpj_empresa = urlParams.get("cnpj_empresa");
      const empresa = urlParams.get("empresa");
      const email_da_empresa = urlParams.get("email_da_empresa");
      const cpf_funcionario = urlParams.get("cpf_funcionario");
      const nome_funcionario = urlParams.get("nome_funcionario");
      const email_funcionario = urlParams.get("email_funcionario");
      const telefone_funcionario = urlParams.get("telefone_funcionario");

      
      document.getElementById("nome_funcionario").value = nome_funcionario;
      document.getElementById("cpf_funcionario").value = cpf_funcionario;
      document.getElementById("empresa").innerText = empresa;
      document.getElementById("h3_nome_funcionario").innerText =
        "Olá, " + nome_funcionario;
      //Quando for criado o script para mudar automaticamente CNPJ e CPF, mudar esse script, Isso é apenas um exemplo
      function formatarCPF(campo) {
        var cpf = campo.value;
        cpf = cpf.replace(/\D/g, "");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        campo.value = cpf;
      }

      function formatarCNPJ(campo) {
        var cnpj = campo.value;
        cnpj = cnpj.replace(/\D/g, "");
        cnpj = cnpj.replace(/(\d{2})(\d)/, "$1.$2");
        cnpj = cnpj.replace(/(\d{3})(\d)/, "$1.$2");
        cnpj = cnpj.replace(/(\d{3})(\d)/, "$1/$2");
        cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");
        campo.value = cnpj;
      }

      function addDash(input) {
        let value = input.value;
        if (!/^\d+$/.test(value)) {
          value = value.replace(/[^\d]+/g, "");
        } else {
          input.value = value;
        }
        if (value.length == 5) {
          input.value = value + "-";
        }
      }
      document.getElementById("numero").onkeypress = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
        return true;
      };

      

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
      function showSecondHalf() {
        document.getElementById("sumir").style.display = "none";
        document.getElementById("aparecer").style.display = "block";
        $("#dados_documentos_trabalhador").fadeIn(400);
        $("#hr_none").fadeIn(400);
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

      function generateLink() {
        var nome_social = document.getElementById("nome_social").value;
        var data_nascimento = document.getElementById("data_nascimento").value;
        var pais_nascimento = document.getElementById("pais_nascimento").value;
        var estado_nascimento =
          document.getElementById("estado_nascimento").value;
        var cidade_nascimento =
          document.getElementById("cidade_nascimento").value;
        var sexo = document.getElementById("sexo").value;
        var raca = document.getElementById("raca").value;
        var estado_civil = document.getElementById("estado_civil").value;
        var grau_instrucao = document.getElementById("grau_instrucao").value;
        var tipo_de_rua = document.getElementById("tipo_de_rua").value;
        var endereço = document.getElementById("endereco").value;
        var numero = document.getElementById("numero").value;
        //dadoos vindo da etapa 1
        var empresa = document.getElementById("empresa").textContent;
        var cpf_funcionario = document.getElementById("cpf_funcionario").value;
        var nome_funcionario =
          document.getElementById("nome_funcionario").value;

        var link = document.getElementById("link");
        link.href =
          "http://127.0.0.1:5500/verificacao.html?" +
          "&empresa=" +
          empresa +
          "&cpf_funcionario=" +
          cpf_funcionario +
          "&nome_funcionario=" +
          nome_funcionario +
          "&email_funcionario=" +
          email_funcionario +
          "&telefone_funcionario=" +
          telefone_funcionario +
          "&cnpj_empresa=" +
          cnpj_empresa +
          "&email_da_empresa=" +
          email_da_empresa +
          "&nome_social=" +
          nome_social +
          "&data_nascimento=" +
          data_nascimento +
          "&pais_nascimento=" +
          pais_nascimento +
          "&estado_nascimento=" +
          estado_nascimento +
          "&cidade_nascimento=" +
          cidade_nascimento +
          "&sexo=" +
          sexo +
          "&raca=" +
          raca +
          "&estado_civil=" +
          estado_civil +
          "&grau_instrucao=" +
          grau_instrucao +
          "&tipo_de_rua=" +
          tipo_de_rua;
        window.open(link, "_blank");
      } 
      
      (function() {
        'use strict';
         window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
             form.addEventListener('submit', function(event) {
               
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
               const invalid = document.querySelectorAll('.form-control:invalid');
               invalid[0].focus();
              }
               else if (form.checkValidity() == true) {
                  generateLink();
                  
               }
              form.classList.add('was-validated');
             }, false);
           });
         }, false);
       })();
       console.log('teste');