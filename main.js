// tady je místo pro náš program

// Přihlášení 
const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

document.querySelector('#login-email').addEventListener('submit', (e) => {
	e.preventDefault()

	const napisEmail = document.querySelector('#email')
	const vlozHeslo = document.querySelector('#password')
	const container = document.querySelector('.container')
	const status = document.querySelector('#status')

	if (
		napisEmail.value === user.email &&
		vlozHeslo.value === user.password
	) {
		container.innerHTML = `<h1>Přihlášený uživatel: ${user.name}</h1>`
	} else {
		status.textContent = 'Neplatné přihlašovací údaje'
		vlozHeslo.value = ''
	}
})


