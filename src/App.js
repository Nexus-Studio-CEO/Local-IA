import React, { useState, useEffect } from 'react';
import WrapperIA from './components/WrapperIA';

function App() {
  const [contexte, setContexte] = useState('factuel');
  const [ratio, setRatio] = useState(0.5);

  useEffect(() => {
    // ajuster les ratios en fonction du contexte et de la fiabilité historique
  }, [contexte, ratio]);

  return (
    <div>
      <WrapperIA contexte={contexte} ratio={ratio} />
    </div>
  );
}

export default App;