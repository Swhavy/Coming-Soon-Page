const webUrl = 'https://script.google.com/macros/s/AKfycbx2ge0KBqLhw1mGB-3149u6H3vVqAq1RB8GFh8SwphDHBa8WzhV8kXrBcVacz-_84pSEA/exec'
 const form = document.forms['submit-to-google']
  const subMsg = document.getElementById("msg")
 form.addEventListener('submit',  e => {
  e.preventDefault()
  fetch(webUrl, {
    method: 'Post',
  body  : new FormData(form)
  
  }).then(response => {subMsg.style.display = 'block'
  setTimeout(function() {
    subMsg.innerHtml = ''
  }, 5000)
  form.reset()
 }).catch(error => console.error('error!', error.message))
})

e