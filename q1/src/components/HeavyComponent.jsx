import React from 'react';

const HeavyComponent = React.memo(() => {
  
  console.log("💎 [Child] Rendered: HeavyComponent is loading...");

  return (
    <div style={{ 
      marginTop: '20px', 
      padding: '20px', 
      border: '2px solid #646cff', 
      borderRadius: '12px',
      backgroundColor: '#242424',
      color: 'white'
    }}>
      <h3>Heavy UI Section</h3>
      <p>Status: <strong>Optimized</strong></p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ padding: '10px', background: '#333', borderRadius: '4px' }}>
            Data Block {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
});


HeavyComponent.displayName = 'HeavyComponent';

export default HeavyComponent;