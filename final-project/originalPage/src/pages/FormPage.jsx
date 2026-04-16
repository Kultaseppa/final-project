import { useState } from 'react';

export default function FormPage() {
  const [formData, setFormData] = useState({ name: '', email: '', count: 1 });
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Yksinkertainen validointi
    if (!formData.name || !formData.email.includes('@')) {
      alert("Tarkista kentät!");
      return;
    }

    const res = await fetch('https://httpbin.org/post', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });
    
    const data = await res.json();
    setResponse(data);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Ota yhteyttä</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Nimi" 
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="email" 
          placeholder="Sähköposti" 
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <input 
          type="number" 
          min="1" 
          onChange={(e) => setFormData({...formData, count: e.target.value})}
        />
        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>Lähetä</button>
      </form>

      {response && (
        <div style={{ marginTop: '20px', textAlign: 'left', background: '#eee', padding: '10px' }}>
          <h3>Vastaus palvelimelta:</h3>
          <pre>{JSON.stringify(response.json, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}