document.addEventListener('DOMContentLoaded', function () {
    // Inicializando a animação de partículas
    const particleContainer = document.getElementById('particles');
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = `${Math.random() * 5 + 2}px`; // Tamanho entre 2px e 7px
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = `${Math.random() * 100}%`;
        particleContainer.appendChild(particle);

        setTimeout(() => {
            particleContainer.removeChild(particle);
        }, 10000); // Remove a partícula após 10 segundos
    }

    setInterval(createParticle, 150); // Cria uma nova partícula a cada 150 ms

    // Configurando o envio do formulário
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede que o formulário seja enviado de forma tradicional

        // Capturando valores do formulário
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Preparando o assunto e corpo do email
        const subject = `Contact from ${name}`;
        const body = `${message} - Reply to: ${email}`;

        // Encodando apenas os componentes necessários para URL
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);

        // Criando o link mailto
        const mailtoLink = `mailto:cleberdossantossouza@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

        // Alerta para o usuário
        alert("Clicando em OK, um e-mail será gerado automaticamente e você poderá enviá-lo para mim diretamente do seu cliente de e-mail padrão.");

        // Redirecionando para o cliente de e-mail padrão
        window.location.href = mailtoLink;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const bolts = document.querySelectorAll('.lightning-bolt');
    bolts.forEach(bolt => {
        setInterval(() => {
            bolt.style.left = `${Math.random() * 100}%`; // Posiciona aleatoriamente na horizontal
            bolt.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`; // Duração aleatória entre 0.5s e 1s
        }, Math.random() * 4000 + 1000); // Intervalo aleatório entre 1s e 5s
    });
});
