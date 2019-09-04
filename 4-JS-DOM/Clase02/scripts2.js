const title = document.getElementById('title');
const mousesobre = document.getElementById('mousesobre');
const mousefuera = document.getElementById('mousefuera');


const holaMundo1 = e  => console.log(e.target.textContent);
const holaMundo2 = e  => console.log(e.target.textContent);
const holaMundo3 = e  => console.log(e.target.textContent);


title.addEventListener('dblclick', e => {
    holaMundo1(e);
});
mousesobre.addEventListener('mouseenter', e => {
    holaMundo1(e);
});
mousefuera.addEventListener('mouseleave', e => {
    holaMundo1(e);
});

    