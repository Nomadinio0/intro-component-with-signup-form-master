const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', e => {
	e.preventDefault()

	validateInputs()
})

const setError = (element, message) => {
	const inputControl = element.parentElement
	const errorDisplay = inputControl.querySelector('.error')
	const errorIconDisplay = inputControl.querySelector('.error-icon')
	const input = inputControl.querySelector('.input')

	errorDisplay.innerText = message
	errorIconDisplay.classList.add('visible')
	inputControl.classList.add('error')
	input.classList.add('invalid')
}

const delError = element => {
	const inputControl = element.parentElement
	const errorDisplay = inputControl.querySelector('.error')
	const errorIconDisplay = inputControl.querySelector('.error-icon')
	const input = inputControl.querySelector('.input')

	errorDisplay.innerText = ''
	errorIconDisplay.classList.remove('visible')
	inputControl.classList.remove('error')
	input.classList.remove('invalid')
}

const isValidEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(String(email).toLowerCase())
}

const validateInputs = () => {
	const firstNameValue = firstName.value.trim()
	const lastNameValue = lastName.value.trim()
	const emailValue = email.value.trim()
	const passwordValue = password.value.trim()

	if (firstNameValue === '') {
		setError(firstName, 'First Name cannot be empty')
	} else {
		delError(firstName)
	}

	if (lastNameValue === '') {
		setError(lastName, 'Last Name cannot be empty')
	} else {
		delError(lastName)
	}

	if (emailValue === '' || !isValidEmail(emailValue)) {
		setError(email, 'Looks like this is not an email')
	} else {
		delError(email)
	}

	if (passwordValue === '') {
		setError(password, 'Password cannot be empty')
	} else {
		delError(password)
	}
}
