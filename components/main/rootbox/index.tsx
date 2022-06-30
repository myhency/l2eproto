import React from 'react';
import { BiAlarm } from 'react-icons/bi';

interface TimeData {
  time: string;
  blb: number;
}

function RootBox({ time, blb }: TimeData) {
  return (
    <div
      className="LootBoxOpen"
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        width: '60px',
        height: '60px',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '15px',
        color: 'rgba(255,255,255,0.6)',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '50px',
          height: '50px',
          background: 'linear-gradient(#757575, #f8f8f8)',
          borderRadius: '3px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '15px',
            height: '15px',
            right: '0',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '0',
              width: '0',
              height: '0',
              borderBottom: '7.5px solid transparent',
              borderTop: '7.5px solid #969696',
              borderLeft: '7.5px solid transparent',
              borderRight: '7.5px solid #969696',
              borderTopRightRadius: '3px',
            }}
          />
          <div
            style={{
              width: '0',
              height: '0',
              borderBottom: '7.5px solid #CBCBCB',
              borderTop: '7.5px solid transparent',
              borderLeft: '7.5px solid #CBCBCB',
              borderRight: '7.5px solid transparent',
              borderBottomLeftRadius: '3px',
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          transform: 'scale(0.5)',
          width: '84px',
        }}
      >
        <BiAlarm size={21} />
        {time}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '42px',
          height: '30px',
          width: '45px',
          backgroundColor: '#121212',
          borderRadius: '5px',
          border: 'solid 1px #3cff96',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            transform: 'scale(0.5)',
            width: '70px',
            fontStyle: 'normal',
            color: '#ECFF74',
            fontFamily: 'Gilroy',
            fontWeight: '700',
            letterSpacing: '-0.833333px',
            lineHeight: '13px',
          }}
        >
          Open Now
        </div>
        <div
          style={{
            transform: 'scale(0.5)',
            fontStyle: 'normal',
            width: '60px',
            color: '#3CFF96',
            fontFamily: 'Gilroy',
            fontWeight: '500',
            letterSpacing: '-0.333333px',
            lineHeight: '9px',
          }}
        >
        {`${blb}BLB`}
        </div>
      </div>
    </div>
  );
}

export default RootBox;
