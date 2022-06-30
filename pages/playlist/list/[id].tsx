/* eslint-disable @next/next/no-img-element */
import { Box, Container, Stack, AppBar, Toolbar } from '@mui/material';
import { Page } from '../../../types/page';
import Head from 'next/head';
import NextLink from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { AuthGuard } from '@components/authentication/auth-guard';
import { SampleLayout } from '@layouts/sample-layout';
import { useRouter } from 'next/router';
import { AppDispatch } from 'redux/store';
import { useDispatch } from 'react-redux';
import useAppSelector from '@hooks/use-app-selector';
import { IPlaylistReducer, ISongReducer } from 'redux/interfaces';
import { fetchPlaylistAction } from 'redux/actions/playlist';
import { fetchSongsByPlaylistIdAction } from 'redux/actions/song/list';
import { useWindowSize } from 'react-use';
import { ChevronLeft as ChevronLeftIcon } from '@icons/chevron-left';
import style from './style.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { scroller, scroll } from 'react-scroll';

const SampleDetail: Page = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const { playlist } = useAppSelector<IPlaylistReducer | null>((state) => state.playlist);
  const { songs } = useAppSelector<ISongReducer | null>((state) => state.song);
  const pending = useAppSelector<boolean>((state) => state.playlist.pending);
  const pendingSongs = useAppSelector<boolean>((state) => state.song.pending);
  const { height } = useWindowSize();
  const playlistId = router.query.id.toString();

  const [scroll, setScroll] = useState(0);
  const [changeHeader, setChangeHeader] = useState(false);

  useEffect(() => {
    dispatch(fetchPlaylistAction(playlistId));
    dispatch(fetchSongsByPlaylistIdAction(playlistId));
  }, [dispatch, playlistId]);

  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll);
    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOnClick = () => {
    router.back();
  };

  const handleScroll = () => {
    if (document.body.scrollTop > 115) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }

    setScroll(document.body.scrollTop);
  };
  const handleGoTop = () => {
    document.body.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setChangeHeader(false);
  };

  return (
    <div style={{ height: '100%' }}>
      <Head>
        <title>SampleDetail</title>
      </Head>
      {changeHeader ? (
        <AppBar
          elevation={0}
          position="fixed"
          sx={{ userDrag: 'none', backgroundColor: '#191919', overflow: 'hidden' }}
        >
          <img
            src={playlist.image}
            alt=""
            style={{
              height: '63px',
              width: '100%',
              position: 'absolute',
              filter: 'blur(50px)',
            }}
          />
          <Container>
            <Toolbar disableGutters sx={{ minHeight: 64 }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{ position: 'absolute' }}
              ></Stack>
              <img
                src={playlist.image}
                alt=""
                style={{
                  height: '45px',
                  width: '45px',
                  position: 'absolute',
                  left: '10px',
                }}
              />
              <Stack flexGrow={1} justifyContent="center" style={{ position: 'relative' }}>
                <span className={style.test}>{playlist && playlist.name}</span>
              </Stack>
              <AiOutlineClose size={24} onClick={handleGoTop} style={{ position: 'absolute', right: '10px' }} />
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        <AppBar elevation={0} position="fixed" sx={{ userDrag: 'none', backgroundColor: '#191919' }}>
          <Container>
            <Toolbar disableGutters sx={{ minHeight: 64 }}>
              <Stack direction="row" alignItems="center" justifyContent="center" style={{ position: 'absolute' }}>
                <Stack style={{ zIndex: '10' }} onClick={handleOnClick}>
                  <ChevronLeftIcon style={{ color: 'rgba(255,255,255,0.87)' }} />
                </Stack>
              </Stack>
              <Stack flexGrow={1} justifyContent="center" style={{ position: 'relative' }}>
                <span className={style.test}>{playlist && playlist.name}</span>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      )}

      <Box component="main">
        <Stack>
          {playlist && (
            <>
              <div style={{ position: 'relative' }}>
                <img
                  src={playlist.image}
                  alt=""
                  style={{
                    objectFit: 'cover',
                    aspectRatio: '1',
                    filter: 'brightness(65%)',
                    padding: '70px',
                    marginTop: '40px',
                    height: `${420 - scroll * 2}px`,
                    width: `${420 - scroll * 2}px`,
                    opacity: `${1 - scroll / 150}`,
                  }}
                />
                <Stack
                  direction="column"
                  justifyContent="start"
                  sx={{ px: 3 }}
                  style={{ position: 'absolute', bottom: '-2%', opacity: `${1 - scroll / 100}` }}
                >
                  <span style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gilroy-Bold' }}>{playlist.name}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem' }}>
                    {playlist.creator} * {playlist.numOfSongs} songs
                  </span>
                </Stack>
                <div style={{ position: 'absolute', right: '7%', bottom: '-8%', opacity: `${1 - scroll / 100}` }}>
                  <NextLink href={`/player/sample/${playlistId}`} passHref>
                    <img src="/images/play-button.svg" alt="icon" />
                  </NextLink>
                </div>
                <Container
                  sx={{
                    scrollbarWidth: 'thin',
                    '&::-webkit-scrollbar': {
                      width: '0.3em',
                    },
                    '&::-webkit-scrollbar-track': {
                      background: '#121212',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: '#888',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                      background: '#555',
                    },
                  }}
                  style={{
                    position: 'absolute',
                    top: '115%',
                    height: 'auto',
                    paddingTop: '0.2rem',
                    paddingBottom: '2rem',
                  }}
                >
                  <Stack direction="column" alignItems="center" justifyContent="center" spacing={3}>
                    {!pendingSongs && songs
                      ? songs.map((song, i) => {
                          return (
                            <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="space-between"
                              spacing={1}
                              key={i}
                              sx={{ minWidth: '100vw', px: 3 }}
                            >
                              <Stack direction="row" alignItems="center" justifyContent="start" flexGrow={1}>
                                <img src={song.artistProfilePicture} alt="icon" />
                                <Stack direction="column" alignItems="start" justifyContent="center">
                                  <div>
                                    <span
                                      style={{
                                        color: 'rgba(255, 255, 255, 0.87)',
                                        fontSize: '0.9rem',
                                        textAlign: 'left',
                                        verticalAlign: 'bottom',
                                      }}
                                    >
                                      {song.name}
                                    </span>
                                  </div>
                                  <div>
                                    <span
                                      style={{
                                        color: 'rgba(255, 255, 255, 0.6)',
                                        fontSize: '0.8rem',
                                        textAlign: 'left',
                                        verticalAlign: 'top',
                                      }}
                                    >
                                      {song.artist} {song.id} * {song.playDuration}
                                    </span>
                                  </div>
                                </Stack>
                              </Stack>
                              <img src="/images/more.svg" alt="icon" style={{ maxWidth: '1.7rem' }} />
                            </Stack>
                          );
                        })
                      : null}
                  </Stack>
                </Container>
              </div>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ p: '1.2rem' }}
                style={{ opacity: `${1 - scroll / 100}` }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <img src="/images/favorite.svg" alt="icon" style={{ maxWidth: '1.7rem' }} />
                  <img src="/images/more.svg" alt="icon" style={{ maxWidth: '1.7rem' }} />
                </Stack>
              </Stack>
            </>
          )}
        </Stack>
      </Box>
    </div>
  );
};

SampleDetail.getLayout = (page: React.ReactElement) => <AuthGuard>{page}</AuthGuard>;

export default SampleDetail;
