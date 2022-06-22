import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { a, useSpring, config, Spring } from 'react-spring';
import { useGesture, useDrag } from '@use-gesture/react';
import { Device } from './device';
import { CardBack, Card } from './card';
import styles from './styles.module.scss';

const height = 700;

const test = () => {
  const [{ y }, api] = useSpring(() => ({ y: height }));
  const [isOpen, setIsOpen] = useState(false);

  const isBorder = useSpring({ borderRadius: isOpen ? ' ' : 20 });
  const open = () => {
    api.start({ y: 0, immediate: false, config: { ...config.stiff, round: 1 } });
    setIsOpen(true);
  };
  const close = (velocity = 0) => {
    api.start({ y: height, immediate: false, config: { ...config.stiff, velocity } });
    setIsOpen(false);
  };

  const bind = useDrag(
    ({ last, movement: [, my] }) => {
      if (last) {
        my > height * 0.5 ? close(1) : open();
      } else {
        if (my < 0) {
          api.start({ y: my + 700, immediate: false });
        } else {
          api.start({ y: my, immediate: false });
          setIsOpen(true);
        }
      }
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
  );

  return (
    <div className="flex" style={{ overflow: 'hidden', backgroundColor: 'pink', height: '100vh' }}>
      <div
        className={styles.sheet2}
        style={isOpen ? { top: '0px', transition: '1s' } : { top: '-105px', transition: '0.5s' }}
      ></div>
      <a.div
        className={styles.sheet}
        {...bind()}
        style={{ bottom: `calc(-100vh + ${height - 10}px)`, y, ...isBorder }}
      ></a.div>
    </div>
  );
};

export default test;
