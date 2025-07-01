window.addEventListener('scroll', function () {
    const nav = document.querySelector('.nav-bar');
    if (window.scrollY > 100) {
        nav.style.backgroundColor = '#fde02f';
    } else {
        nav.style.backgroundColor = '#fff';
    }
});

const heading = document.querySelector('.banner-heading h1');
const text = heading.textContent;
let i = 0;
heading.textContent = '';
function typeWriter() {
    if (i < text.length) {
        heading.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

document.querySelectorAll('.menu li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionID = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionID);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.querySelector('.book').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Your trip search has been submitted!');
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const info = document.createElement('div');
        info.textContent = 'Click to explore more';
        info.style.position = 'absolute';
        info.style.bottom = '10px';
        info.style.left = '10px';
        info.style.padding = '5px 10px';
        info.style.backgroundColor = '#fde02f';
        info.style.color = '#000';
        info.style.borderRadius = '5px';
        info.classList.add('tooltip');
        card.style.position = 'relative';
        card.appendChild(info);
    });

    card.addEventListener('mouseleave', () => {
        const tooltip = card.querySelector('.tooltip');
        if (tooltip) {
            card.removeChild(tooltip);
        }
    });
});

cards.forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked on this tour card!');
    });
});

const scrollBtn = document.createElement('button');
scrollBtn.textContent = '⬆';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '10px';
scrollBtn.style.fontSize = '18px';
scrollBtn.style.backgroundColor = '#fde02f';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.title = 'Back to Top';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
