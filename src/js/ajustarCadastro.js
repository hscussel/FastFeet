function ajustarLarguraCadastro(tipoPerfil) {
    var containerCadastro = document.querySelector('.containter-cadastro');
    var cadastrarButton = document.querySelector('.containter-cadastro button[type="submit"]');
    var vehicleField = document.getElementById('vehicle');
    var overlayOn = document.getElementById('over');
    var overlayOn2 = document.getElementById('over-2');
    
    if (tipoPerfil === 'A') { 
        containerCadastro.style.height = '600px';
        overlayOn.style.display = 'block';
    } else {
        containerCadastro.style.height = '520px'; 
        overlayOn2.style.display = 'block';

    }
}
