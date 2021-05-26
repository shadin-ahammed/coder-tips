const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const logincontainer = document.getElementById('logincontainer');

signUpButton.addEventListener('click', () => {
	logincontainer.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	logincontainer.classList.remove("right-panel-active");
});