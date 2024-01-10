function submit() {
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const paragrafo = document.getElementById('p');
    paragrafo.innerHTML = `Seu nome: ${nome}\nSeu email: ${email}\nSua senha ${senha}`;
}