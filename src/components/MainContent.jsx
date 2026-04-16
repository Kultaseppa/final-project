export default function MainContent() {
  return (
    <main style={{ padding: '40px' }}>
      <p>Tämä sivu on rakennettu Reactilla ja jaettu komponentteihin.</p>
      <button onClick={() => alert('Toimii!')}>Klikkaa tästä</button>
    </main>
  );
}