import React from 'react';

function EmptyBox() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        width: '60px',
        height: '60px',
        borderRadius: '5px',
        fontSize: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '15px',
        color: 'rgba(255,255,255,0.6)',
      }}
    >
      <div>Loot</div>
      <div>Box</div>
    </div>
  );
}

export default EmptyBox;
