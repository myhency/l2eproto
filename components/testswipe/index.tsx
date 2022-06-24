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
            <div style={{ color: 'white', fontSize: '0.9rem', fontFamily: 'Gilroy-Bold' }}>{playListName}</div>
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
          <div onClick={handelToggle} style={{ paddingTop: '24px', marginLeft: '190px' }}>
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
        {headphones.length > 0 ? (
          <Box component="main">
            <Container sx={{ paddingTop: '0.5rem' }}>
              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Stack
                  direction={'column'}
                  alignItems="center"
                  justifyContent={'center'}
                  spacing={1}
                  style={{ borderBottom: '0px', paddingTop: '20px' }}
                >
                  <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                    <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: '1.5rem',
                          border: 'solid 1px',
                          borderColor: 'rgba(255,255,255,0.6)',
                          paddingLeft: '0.5rem',
                          paddingRight: '0.5rem',
                          width: '90px',
                          position: 'relative',
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: '#3cff96',
                            width: `${
                              (82 * Number(headphones[0].battery.slice(0, headphones[0].battery.length - 1))) / 100
                            }px`,
                            borderRadius: '1.5rem',
                            height: '12px',
                            position: 'absolute',
                            marginLeft: '3px',
                            left: 0,
                          }}
                        />
                        <EnergyIcon
                          style={{
                            color:
                              Number(headphones[0].battery.slice(0, headphones[0].battery.length - 1)) >= 38
                                ? 'black'
                                : 'rgba(255,255,255,0.6)',
                            width: '0.6rem',
                            height: '0.6rem',
                            zIndex: 10,
                          }}
                        />
                        <span
                          style={{
                            color:
                              Number(headphones[0].battery.slice(0, headphones[0].battery.length - 1)) >= 47
                                ? 'black'
                                : 'rgba(255,255,255,0.6)',
                            fontSize: '0.7rem',
                            zIndex: 10,
                          }}
                        >
                          {headphones[0].battery.slice(0, 1)}
                        </span>
                        <span
                          style={{
                            color:
                              Number(headphones[0].battery.slice(0, headphones[0].battery.length - 1)) >= 54
                                ? 'black'
                                : 'rgba(255,255,255,0.6)',
                            fontSize: '0.7rem',
                            zIndex: 10,
                          }}
                        >
                          {headphones[0].battery.slice(1, 2)}
                        </span>
                        <span
                          style={{
                            color:
                              Number(headphones[0].battery.slice(0, headphones[0].battery.length - 1)) >= 63
                                ? 'black'
                                : 'rgba(255,255,255,0.6)',
                            fontSize: '0.7rem',
                            zIndex: 10,
                          }}
                        >
                          {headphones[0].battery.slice(2, 3)}
                        </span>
                      </div>
                    </Stack>
                    <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingLeft: '0.5rem',
                          paddingRight: '0.5rem',
                          width: '120px',
                          borderRight: '1px solid rgba(255,255,255,0.6)',
                          borderLeft: '1px solid rgba(255,255,255,0.6)',
                          margin: '0px 13px',
                        }}
                      >
                        <img src="/images/songIcon.png" alt="" style={{ height: '10px', marginRight: '5px' }} />
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Related</span>
                      </div>
                    </Stack>
                    <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: '1.5rem',
                          paddingLeft: '0.5rem',
                          paddingRight: '0.5rem',
                          width: '90px',
                        }}
                      >
                        <img
                          src={headphones[0].image}
                          alt=""
                          style={{
                            width: '1.2rem',
                            height: '1.2rem',
                            borderRadius: '100px',
                            border: '1px solid white',
                            marginRight: '4px',
                          }}
                        />
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{headphones[0].id}</span>
                      </div>
                    </Stack>
                  </Stack>
                  <img
                    src={headphones[0].image}
                    alt=""
                    style={{
                      width: '13rem',
                      height: '13rem',
                      marginTop: '80px',
                    }}
                  />
                  <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '1.5rem',
                        paddingLeft: '0.5rem',
                        paddingRight: '0.5rem',
                        width: '90px',
                        border: 'solid 1px',
                        borderColor: 'white',
                        marginTop: '20px',
                      }}
                    >
                      <span style={{ color: 'white', fontSize: '0.7rem' }}>{headphones[0].id}</span>
                    </div>
                  </Stack>
                  <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        marginTop: '20px',
                      }}
                    >
                      <div
                        style={{
                          color: 'white',
                          fontSize: '1.1rem',
                          fontFamily: 'Gilroy',
                          fontStyle: 'normal',
                          fontWeight: 800,
                        }}
                      >
                        Battery: {headphones[0].battery}
                      </div>
                      <div
                        style={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontSize: '0.8rem',
                        }}
                      >
                        30m left
                      </div>
                    </div>
                  </Stack>
                  <Stack flexGrow={1} spacing={1} style={{ marginTop: '50px' }}>
                    <Stack direction={'row'} justifyContent="space-between">
                      <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                        <div
                          style={{
                            backgroundColor: 'rgba(255,255,255,1)',
                            borderRadius: '1.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0.1rem',
                          }}
                        >
                          <EnergyIcon style={{ color: '#121212', width: '0.9rem', height: '0.9rem' }} />
                        </div>
                        <span style={{ color: 'white', fontSize: '0.9rem' }}>{headphones[0].battery}</span>
                      </Stack>
                      <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: '900', fontSize: '0.8rem' }}>
                        MAX 1h
                      </span>
                    </Stack>
                    <div
                      style={{
                        display: 'flex',
                        width: '360px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          width: '360px',
                          minHeight: '0.6rem',
                          backgroundImage: 'linear-gradient(180deg, #121212 -42.8%, #FFFFFF 98.21%)',
                          opacity: '0.2',
                          borderRadius: '24px',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          display: 'flex',
                          width: `${
                            (360 * Number(headphones[0].battery.slice(0, headphones[0].battery.length - 1))) / 100
                          }px`,

                          minHeight: '0.6rem',
                          backgroundColor: 'rgba(255,255,255,1)',
                          borderRadius: '24px',
                          boxShadow: '0rem 0rem 0.4rem #fff',
                        }}
                      />
                    </div>
                    <Stack direction={'row'} justifyContent="space-between" style={{ marginTop: '50px' }}>
                      <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Your Total</span>
                      </Stack>
                      <span style={{ color: 'white', fontWeight: '900', fontSize: '1rem' }}>
                        {headphones[0].battery}
                      </span>
                    </Stack>
                    <Stack
                      direction={'row'}
                      justifyContent="space-between"
                      style={{
                        marginTop: '10px',
                        borderBottom: '1px solid  rgba(255,255,255,0.6)',
                        paddingBottom: '15px',
                      }}
                    >
                      <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Consumption</span>
                      </Stack>
                      <span style={{ color: 'white', fontWeight: '900', fontSize: '1rem' }}>
                        {/* {headphones[0].battery} */}
                        20%
                      </span>
                    </Stack>
                    <Stack direction={'row'} justifyContent="space-between" style={{ marginTop: '15px' }}>
                      <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Remaining Total</span>
                      </Stack>
                      <span style={{ color: 'white', fontWeight: '900', fontSize: '1rem' }}>
                        {headphones[0].battery}
                      </span>
                    </Stack>
                  </Stack>
                  <Stack
                    direction={'row'}
                    style={{ width: '100%', justifyContent: 'space-between', marginTop: '30px' }}
                  >
                    <button
                      style={{
                        width: '45%',
                        height: '40px',
                        borderRadius: '6px',
                        backgroundColor: '#121212',
                        color: '#e0e0e0',
                        border: '1px solid white',
                        fontFamily: 'Gilroy',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '24px',
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      style={{
                        width: '45%',
                        height: '40px',
                        borderRadius: '6px',
                        backgroundColor: '#e0e0e0',
                        border: 'none',
                        fontFamily: 'Gilroy',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '24px',
                      }}
                    >
                      Confirm
                    </button>
                  </Stack>
                </Stack>
              </Box>
            </Container>
          </Box>
        ) : (
          ''
        )}
      </a.div>
    </div>
  );
};

export default test;
