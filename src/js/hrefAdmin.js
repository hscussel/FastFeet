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
});