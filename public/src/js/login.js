document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var cpf = document.getElementById('cpf').value.trim();
    var password = document.getElementById('password').value.trim();

    
    if (cpf === '12345678900' && password === 'senha123') {
        window.location.href = 'menu.html'; 
    } else {
        window.location.href = 'entregadorIndex.html'; 
    }
});
