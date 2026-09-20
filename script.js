const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');

if (menu && links) {
  menu.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '×' : '☰';
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = '☰';
    });
  });
}

const wechatBtn = document.querySelector('#wechatBtn');
const qrModal = document.querySelector('#qrModal');

function closeQR() {
  if (!qrModal) return;
  qrModal.classList.remove('open');
  qrModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

if (wechatBtn && qrModal) {
  wechatBtn.addEventListener('click', (event) => {
    event.preventDefault();
    qrModal.classList.add('open');
    qrModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  });

  document.querySelectorAll('[data-close-qr]').forEach((el) => {
    el.addEventListener('click', closeQR);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeQR();
  });
}
