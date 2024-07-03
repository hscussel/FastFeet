document.getElementById('add').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
});
document.getElementById('add').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
});

function confirmQuit() {
    var confirmQuit = confirm("Se você sair perderá o cadastro, tem certeza que deseja continuar?");
    if (confirmQuit) {
        document.getElementById('overlay').style.display = 'none';
    } else {
    }
}

document.getElementById('close').addEventListener('click', function() {

    document.getElementById('overlay').style.display = 'none';
    
});


