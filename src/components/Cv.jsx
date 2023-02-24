function Cv() {
  const file = '../assets/Cv-David-Gallego.pdf'
  return (
    <a href={file} download>
      <button>Descargar</button>
    </a>
  );
}

export default Cv;