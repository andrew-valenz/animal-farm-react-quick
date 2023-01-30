import React from 'react';
import background from '../../background.png';
import './Main.css';
import Animal from '../Animal/Animal.js';
import animals from '../../data.js';

export default function Main() {
  return (
    <main style={{ background: `url("${background}")` }}>
      {animals.map((animal) => (
        <Animal key={animal.name} prop={animal} />
      ))}
      ;
    </main>
  );
}
