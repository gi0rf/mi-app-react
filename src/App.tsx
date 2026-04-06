// Definimos una interface para practicar (el "contrato")
interface SaludoProps {
  nombre: string;
  ciudad: string;
}

// Este es tu primer componente funcional con Tipos
const Saludo = ({ nombre, ciudad }: SaludoProps) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>¡Hola, soy {nombre}! 🚀</h1>
      <p>Programando React + TS desde {ciudad}.</p>
    </div>
  );
}

function App() {
  return (
    <main>
      <Saludo nombre="" ciudad="Guanatos" />
    </main>
  )
}

export default App