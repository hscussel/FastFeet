document.addEventListener('DOMContentLoaded', function() {
  
    var phoneInput = document.getElementById('phone');
    var phoneMask = IMask(phoneInput, {
        mask: '(00) 00000-0000'
    });

    
    var plateInput = document.getElementById('plate');
    var plateMask = IMask(plateInput, {
        mask: 'AAA-0000' 
    });

  
function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.substring(0, 11);

    if (cpf.length > 3) {
      cpf = cpf.substring(0, 3) + '.' + cpf.substring(3);
    }
    if (cpf.length > 7) {
      cpf = cpf.substring(0, 7) + '.' + cpf.substring(7);
    }
    if (cpf.length > 11) {
      cpf = cpf.substring(0, 11) + '-' + cpf.substring(11);
    }
  
    return cpf;
  }

  document.getElementById('cpf').addEventListener('input', function() {
    let inputCPF = this.value;
    this.value = formatarCPF(inputCPF);
  });
  
  document.getElementById('cpfForm').addEventListener('submit', function(event) {
  });

});
