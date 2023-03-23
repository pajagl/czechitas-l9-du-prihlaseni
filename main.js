// tady je místo pro náš program

// Přihlášení 
const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

document.querySelector('#login-email').addEventListener('submit', (e) => {
	e.preventDefault()

	const emailInput = document.querySelector('#email')
	const passwordInput = document.querySelector('#password')
	const container = document.querySelector('.container')
	const status = document.querySelector('#status')

	if (
		emailInput.value === user.email &&
		passwordInput.value === user.password
	) {
		container.innerHTML = `<h1>Přihlášený uživatel: ${user.name}</h1>`
	} else {
		status.textContent = 'Neplatné přihlašovací údaje'
		passwordInput.value = ''
		status.
	}
})