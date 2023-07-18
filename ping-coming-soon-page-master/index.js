

const form = document.querySelector('.my-form')
const email = document.querySelector('#email')

form.addEventListener('submit', e => {
  e.preventDefault()

  validateInputs()
})

const setError = (element, message) => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.innerText = message
  inputControl.classList.add('error')
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.innerText = ''
  inputControl.classList.add('success')
  inputControl.classList.remove('error')
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
  const emailValue = email.value.trim()


  if(emailValue === ''){
    setError(email, 'Whoops! It looks like you forgot to add your email')
  } else if(!isValidEmail(emailValue)){
    setError(email, 'Please provide a valid email address')
  } else{
    setSuccess(email)
  }

}