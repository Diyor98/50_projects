const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

container.classList.add('hover-left')

left.addEventListener('mouseenter', () => {
	container.classList.remove('hover-right')
	container.classList.add('hover-left')
})

right.addEventListener('mouseenter', () => {
	container.classList.remove('hover-left')
	container.classList.add('hover-right')
})

console.log(left)
console.log(container)
