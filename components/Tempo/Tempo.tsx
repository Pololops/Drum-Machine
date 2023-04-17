import { useState } from 'react';

export default function Tempo() {
  const [tempo, setTempo] = useState(120);

  const handleChange = (event) => {
    setTempo(event.target.value);
  };

  return (
    <div>
      <label htmlFor="ticks">Ticks</label>
      <input
        type="number"
        id="ticks"
        name="ticks"
        min="30"
        max="240"
        value={tempo}
        onChange={handleChange}
      />
    </div>
  );
}
