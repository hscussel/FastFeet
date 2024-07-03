document.addEventListener('DOMContentLoaded', function() {
    
    var deliveryIcon = document.getElementById('delivery-icon');
    deliveryIcon.addEventListener('click', function() {
        window.location.href = 'encomendas.html'; 
    });

    var recipientIcon = document.getElementById('recipient');
    recipientIcon.addEventListener('click', function() {
        window.location.href = 'destinatarios.html'; 
    });

    var deliveryMenIcon = document.getElementById('delivery-men-icon');
    deliveryMenIcon.addEventListener('click', function() {
        window.location.href = 'entregadores.html'; 
    });
    
    var usersIcon = document.getElementById('users-icon');
    usersIcon.addEventListener('click', function() {
        window.location.href = 'users.html'; 
    });

    var logoutAdmin = document.getElementById('logout');
    logoutAdmin.addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });

    var fastfeetLogo = document.getElementById('fastfeet');
    fastfeetLogo.addEventListener('click', function() {
        window.location.href = 'menu.html'; 
    });

    var userIcon = document.getElementById('user-icon');
    userIcon.addEventListener('click', function(){
        window.location.href='editProfile.html';
    })
});