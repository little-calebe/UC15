document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.register-form');
  const submitButton = document.querySelector('.btn-primary');

  if (!form || !submitButton) return;

  const requiredFields = form.querySelectorAll('[required]');

  const validateForm = () => {
    const allFilled = Array.from(requiredFields).every((field) => {
      if (field.type === 'checkbox') {
        return field.checked;
      }

      return field.value.trim() !== '';
    });

    submitButton.disabled = !allFilled;
  };

  form.addEventListener('input', validateForm);
  form.addEventListener('change', validateForm);
  validateForm();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    alert('Cadastro enviado com sucesso!');
  });
});
