document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('encomendas').addEventListener('click', function() {
        window.location.href = 'encomendas.html'; 
    });

    document.getElementById('entregadores').addEventListener('click', function() {
        window.location.href = 'entregadores.html'; 
    });

    document.getElementById('destinatarios').addEventListener('click', function() {
        window.location.href = 'destinatarios.html'; 
    });

    document.getElementById('usuarios').addEventListener('click', function() {
        window.location.href = 'users.html'; 
    });

    var logoutAdmin = document.getElementById('logout');
    logoutAdmin.addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });

});