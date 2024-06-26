export default function subirNaPagina() {
  try {
    document.querySelector('.rolagem-instantanea').scrollTo({ top: 0, behavior: 'smooth' });
  } catch (e) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}