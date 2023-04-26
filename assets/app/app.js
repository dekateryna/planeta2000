const bannerBtn = document.querySelector('.banner__button');
const content = document.querySelector('.main__content');


bannerBtn.addEventListener('click', () => {
	content.scrollIntoView({block: "start", behavior: "smooth"});
})


function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('animate__fadeInDown');
		}
	});
}
let options = { threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.products__item');
for (let elm of elements) {
	observer.observe(elm);
}

