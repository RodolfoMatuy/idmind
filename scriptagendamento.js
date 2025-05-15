// Máscara simples para telefone brasileiro
const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function(e) {
  let valor = e.target.value.replace(/\D/g, '');

  if (valor.length > 11) valor = valor.slice(0, 11);

  if (valor.length <= 2) {
    valor = '(' + valor;
  } else if (valor.length <= 7) {
    valor = '(' + valor.substring(0, 2) + ') ' + valor.substring(2);
  } else {
    valor = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 7) + '-' + valor.substring(7);
  }

  e.target.value = valor;
});

document.getElementById('laudo').addEventListener('change', function(event) {
  const preview = document.getElementById('preview');
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
    }
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
    preview.style.display = 'none';
  }
});

document.getElementById('formAgendamento').addEventListener('submit', async function(e) {
  e.preventDefault(); // Impede o envio padrão

  const form = e.target;

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert('Formulário enviado com sucesso!');
      window.location.href = 'index.html';
    } else {
      alert('Erro ao enviar. Por favor, tente novamente.');
    }
  } catch (error) {
    alert('Erro de conexão. Tente novamente mais tarde.');
  }
});
