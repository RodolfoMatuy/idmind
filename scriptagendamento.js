document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    event.preventDefault();

    this.submit();
});

document.getElementById('telefone').addEventListener('input', function(e) {
    let valor = e.target.value;

    valor = valor.replace(/\D/g, '');

    if (valor.length <= 2) {
        valor = '(' + valor;
    } else if (valor.length <= 3) {
        valor = '(' + valor.substring(0, 2) + ') ' + valor.substring(2);
    } else if (valor.length <= 7) {
        valor = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 7);
    } else {
        valor = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 7) + '-' + valor.substring(7, 11);
    }

    e.target.value = valor;
});