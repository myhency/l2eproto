import React from 'react';

interface DateData {
  days: string;
  hours: string;
  mins: string;
  secs: string;
}

function Timer({ days, hours, mins, secs }: DateData) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: '40px',
        paddingLeft: '30px',
        paddingRight: '30px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40px' }}>
        <div
          style={{
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '30px',
            lineHeight: '34px',
            color: 'white',
          }}
        >
          {days}
        </div>
        <div
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          Days
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40px' }}>
        <div
          style={{
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '30px',
            lineHeight: '34px',
            color: 'white',
          }}
        >
          {hours}
        </div>
        <div
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          hours
        </div>
      </div>{' '}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40px' }}>
        <div
          style={{
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '30px',
            lineHeight: '34px',
            color: 'white',
          }}
        >
          {mins}
        </div>
        <div
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          mins
        </div>
      </div>{' '}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40px' }}>
        <div
          style={{
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '30px',
            lineHeight: '34px',
            color: 'white',
            width: '30px',
          }}
        >
          {secs}
        </div>
        <div
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          secs
        </div>
      </div>
    </div>
  );
}
export default Timer;
