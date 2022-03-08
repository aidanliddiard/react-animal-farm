import React from 'react';
import Animal from '../Animal/Animal';
import './Main.css';

import background from '../../background.png';

import { animals } from '../../data';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal 
          key={animal.name} 
          type={animal.type} 
          says={animal.says} 
          top={animal.top} 
          left={animal.left} 
        />
      ))}
    </main>
  );
}
