import React, { useState, Suspense, lazy } from 'react';
import './App.css';

const HeavyComponent = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/HeavyComponent')), 1000);
  });
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Performance Optimization</h1>
      
      <section className="parent-box">
        <h2>Parent Component</h2>
        <p>The state changes here, but the child should ignore it.</p>
        <div className="counter-controls">
          <span className="count-display">Count: {count}</span>
          <button onClick={() => setCount(c => c + 1)}>
            Increment Counter
          </button>
        </div>
      </section>

      <Suspense fallback={<div className="loader">⏳ Loading Heavy Component...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;