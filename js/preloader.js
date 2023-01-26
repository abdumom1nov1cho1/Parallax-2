export const preload = ()=>{
	const loader = document.querySelector('.preloader');
	const body = loader.closest('body');
	body.removeAttribute('id');
	loader.classList.add('disappear');
}