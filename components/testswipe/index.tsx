import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { a, useSpring, config, Spring } from 'react-spring';
import { useGesture, useDrag } from '@use-gesture/react';
import { Device } from './device';
import { CardBack, Card } from './card';
import styles from './styles.module.scss';
import { Box, Button, Container, IconButton, Paper, Stack } from '@mui/material';
import { Energy as EnergyIcon } from '@icons/energy';
import useAppSelector from '@hooks/use-app-selector';
import { IHeadphone, IHeadphoneReducer } from 'redux/interfaces';
import { useDispatch } from 'react-redux';
import { fetchHeadphonesAction } from 'redux/actions/headphone';
import { AppDispatch } from 'redux/store';
import ArtistPFPView from '@components/player/sample/artist-pfp-view';
import { FaPlay, FaPause } from 'react-icons/fa';
import { flexbox } from '@mui/system';
import PickedHeadphone from './pickedHeadphone';

const height = 736;

interface Swipe {
  openModal: React.ReactNode | any | React.ReactDOM;
  imgUrl: any;
  artistName: any;
  playListName: any;
  handelToggle: any;
  isPlaying: boolean;
}
const test = ({ openModal, imgUrl, artistName, playListName, handelToggle, isPlaying }: Swipe) => {
  const dispatch: AppDispatch = useDispatch();
  const [{ y }, api] = useSpring(() => ({ y: height }));
  const [isOpen, setIsOpen] = useState(false);
  const { headphones } = useAppSelector<IHeadphoneReducer | null>((state) => state.headphone);

  const isBorder = useSpring({ borderRadius: isOpen ? ' ' : 20 });
  const isBlur = useSpring({ opacity: isOpen ? 0.2 : 1 });
  const isBackground = useSpring({ backgroundColor: isOpen ? '#121212' : '#2e2e2e' });

  useEffect(() => {
    dispatch(fetchHeadphonesAction());
  }, [dispatch]);

  const open = () => {
    api.start({ y: 0, immediate: false, config: config.slow });
    setIsOpen(true);
    openModal(true);
  };
  const close = (velocity = 0) => {
    api.start({ y: height, immediate: false, config: { ...config.stiff, velocity } });
    setIsOpen(false);

    setTimeout(() => {
      openModal(false);
    }, 500);
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
          openModal(true);
        }
      }
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
  );

  const handleCloseButton = () => {
    close(1);
  };

  return (
    <div className="flex" style={{ overflow: 'hidden', height: '100vh', zIndex: '11' }}>
      <a.div
        style={{ marginTop: '100px', backgroundColor: 'black', height: '100vh', color: 'black', ...isBlur }}
      ></a.div>
      <div
        className={styles.sheet2}
        style={isOpen ? { top: '0px', transition: '1s' } : { top: '-75px', transition: '0.5s' }}
      >
        <div style={{ display: 'flex' }}>
          <video
            loop
            playsInline
            autoPlay={true}
            muted={true}
            style={{
              objectFit: 'cover',
              minWidth: '3rem',
              maxHeight: '3rem',
              borderRadius: '100%',
              marginTop: '10px',
              marginLeft: '30px',
            }}
            key={imgUrl}
          >
            <source src={imgUrl} type="video/mp4" />
          </video>
          <div style={{ paddingTop: '13px', marginLeft: '20px' }}>
            <div style={{ color: 'white', fontSize: '0.9rem', fontFamily: 'Gilroy-Bold', width: '260px' }}>
              {playListName}
            </div>
            <div
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.7 . rem',
                textAlign: 'left',
              }}
            >
              {artistName}
            </div>
          </div>
          <div onClick={handelToggle} style={{ paddingTop: '24px' }}>
            {isPlaying ? <FaPause color="white" size={20} /> : <FaPlay color="white" size={20} />}
          </div>
        </div>
      </div>
      <a.div
        className={styles.sheet}
        {...bind()}
        style={{ bottom: `calc(-100vh + ${height - 10}px)`, y, ...isBorder, ...isBackground }}
      >
        <div
          style={{
            position: 'absolute',
            width: '35px',
            height: '5px',
            left: '190px',
            top: '8px',
            background: '#646e70',
            borderRadius: '6px',
          }}
        />
        {headphones.length > 0 ? <PickedHeadphone headphone={headphones[1]} cancelButton={handleCloseButton} /> : ''}
      </a.div>
    </div>
  );
};

export default test;
