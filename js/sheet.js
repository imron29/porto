const scriptURL =
      'https://script.google.com/macros/s/AKfycbzOasijubP7hteuXBLCtCejvqo74qd8BAc9SeEQ3Z4Q7GiKwBXpOU_Y7RqlC-1qeC_89A/exec'
    const form = document.forms['kenari-komen'];
    const btnKirim = document.querySelector('.btn-kirim');
    const btnloading = document.querySelector('.btn-loading');
    const myAlert = document.querySelector('.my-alert');


    form.addEventListener('submit', e => {
      e.preventDefault()
      // Klik Kirim
      btnloading.classList.toggle('d-none')
      btnKirim.classList.toggle('d-none');
      fetch(scriptURL, {
          method: 'POST',
          body: new FormData(form)
        })
        .then(response => {
          btnloading.classList.toggle('d-none');
          btnKirim.classList.toggle('d-none');
          // Alert
          myAlert.classList.toggle('d-none');
          // Reset form
          form.reset();
          console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
    })