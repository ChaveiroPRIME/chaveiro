(function () {
  const STAGGER_MS = 90;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ANIMAÇÃO DE ENTRADA
  function animate() {
    const items = Array.from(document.querySelectorAll('[data-anim]'));
    if (!items.length) return;
    items.forEach(el => el.classList.add('anim-seed'));
    let delay = 60;
    items.forEach((el) => {
      setTimeout(() => {
        el.classList.add('anim-in');
        el.classList.remove('anim-seed');
      }, delay);
      delay += STAGGER_MS;
    });
  }

  if (!reduceMotion) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', animate);
    } else {
      animate();
    }
  }

  // LINKS DE SERVIÇOS
  const PHONE = "5547997324516";
  const messages = {
    copias: ["Olá! Gostaria de informações sobre cópias."],
    abertura: ["Olá! Preciso de ajuda com uma abertura!"],
    programacao: ["Olá! Gostaria de saber sobre programação de controles."],
  };

  document.querySelectorAll(".service[data-service]").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.service;
    if (key === "fechaduras") {
      window.location.href = "fechaduras-digitais.html";
      return;
    }
    const arr = messages[key] || ["Olá! Gostaria de mais informações."];
    const texto = arr[Math.floor(Math.random() * arr.length)];
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  });
});

})();

// Botão flutuante do WhatsApp (injetado em todas as páginas)
document.addEventListener("DOMContentLoaded", function () {
  const whatsappButton = document.createElement("a");
  whatsappButton.href = "https://wa.me/5547997324516";
  whatsappButton.target = "_blank";
  whatsappButton.ariaLabel = "Falar no WhatsApp";
  whatsappButton.className = "whatsapp-float";
  whatsappButton.innerHTML = '<img src="image/whatsapp.png" alt="WhatsApp">';

  document.body.appendChild(whatsappButton);
});


