// Animação de Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Animação dos Cards ao Rolar
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .about-content, .contact-form');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if(elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Efeito de Máquina de Escrever no Hero
  const typeWriter = () => {
    const phrases = ['Impulsiona', 'Transforma', 'Eleva', 'Diferencia'];
    let currentPhrase = 0;
    let currentLetter = 0;
    let isDeleting = false;
    const speed = 100;
    const element = document.querySelector('.hero-content h1 span');
    
    const type = () => {
      const fullTxt = phrases[currentPhrase];
      
      if(isDeleting) {
        element.textContent = fullTxt.substring(0, currentLetter - 1);
        currentLetter--;
      } else {
        element.textContent = fullTxt.substring(0, currentLetter + 1);
        currentLetter++;
      }
      
      if(!isDeleting && currentLetter === fullTxt.length) {
        isDeleting = true;
        setTimeout(type, speed * 3);
      } else if(isDeleting && currentLetter === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(type, speed);
      } else {
        setTimeout(type, speed);
      }
    };
    
    type();
  };
  
  // Validação do Formulário
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
      if(!input.value.trim()) {
        input.style.borderColor = 'red';
        isValid = false;
      } else {
        input.style.borderColor = '#ddd';
      }
    });
    
    if(isValid) {
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      form.reset();
    }
  });
  
  // Inicialização
  window.addEventListener('load', () => {
    // Pré-configuração de animações
    document.querySelectorAll('.service-card, .portfolio-item, .about-content, .contact-form').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
    });
    
    typeWriter();
  });
  
  window.addEventListener('scroll', animateOnScroll);