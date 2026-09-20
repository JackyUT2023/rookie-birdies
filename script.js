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
  document.querySelectorAll('[data-close-qr]').forEach(el => el.addEventListener('click', closeQR));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeQR();
  });
}
