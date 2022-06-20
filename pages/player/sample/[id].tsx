/* eslint-disable @next/next/no-img-element */
import { Container, Skeleton, Stack, SwipeableDrawer, Typography } from '@mui/material';
import { Page } from '../../../types/page';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import { AuthGuard } from '@components/authentication/auth-guard';
import { PlayerSampleLayout } from '@layouts/player-sample-layout';
import { useRouter } from 'next/router';
import { AppDispatch } from 'redux/store';
import { useDispatch } from 'react-redux';
import useAppSelector from '@hooks/use-app-selector';
import { fetchSongsByPlaylistIdAction } from 'redux/actions/song/list';
import { ISongReducer, IUserReducer } from 'redux/interfaces';
import { styled, alpha, Box } from '@mui/system';
import SliderUnstyled, { sliderUnstyledClasses } from '@mui/base/SliderUnstyled';
import { EarningIndicator as EarningIndicatorIcon } from '@icons/earning-indicator';
import { StopEarningIndicator as StopEarningIndicatorIcon } from '@icons/stop-earning-indicator';
import ReactPlayer from 'react-player';
import { formatDuration } from '@utils/string';
import intervalToDuration from 'date-fns/intervalToDuration';
import ArtistPFPView from '@components/player/sample/artist-pfp-view';
import EarnCounterView from '@components/player/sample/earn-couter-view';
import { fetchUserByIdAction, updateUserEarnByIdAction } from 'redux/actions/user';
import CssBaseline from '@mui/material/CssBaseline';
import { Global } from '@emotion/react';

const StyledSlider = styled(SliderUnstyled)(
  ({ theme }) => `
  color: rgba(255, 255, 255, 0.8);
  height: 0.7rem;
  width: 100%;
  padding: 13px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }

  &.${sliderUnstyledClasses.disabled} { 
    pointer-events: none;
    cursor: default;
    color: #bdbdbd; 
  }

  & .${sliderUnstyledClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 0.4rem;
    border-radius: 2px;
    background: linear-gradient(180deg, #121212 -42.8%, #FFFFFF 98.21%);
    opacity: 0.2;
  }

  & .${sliderUnstyledClasses.track} {
    display: block;
    position: absolute;
    height: 0.3rem;
    margin-top: 0.1rem;
    border-radius: 2px;
    background-color: currentColor;
    box-shadow: 0rem 0rem 0.3rem #fff;
  }

  & .${sliderUnstyledClasses.thumb} {
    position: absolute;
    width: 0.6rem;
    height: 0.6rem;
    margin-top: -0.1rem;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 2px solid currentColor;
    background-color: #fff;
    box-shadow: 0rem 0rem 0.6rem #fff;
    backdrop-filter: blur(50px);

    :hover,
    &.${sliderUnstyledClasses.focusVisible} {
      box-shadow: 0 0 0 0.25rem ${alpha(theme.palette.mode === 'light' ? '#1976d2' : '#90caf9', 0.15)};
    }

    &.${sliderUnstyledClasses.active} {
      box-shadow: 0rem 0rem 0.4rem #fff;
    }
  }
`
);

const SamplePlayer: Page = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const { songs } = useAppSelector<ISongReducer | null>((state) => state.song);
  const pendingSongs = useAppSelector<boolean>((state) => state.song.pending);
  const { user } = useAppSelector<IUserReducer | null>((state) => state.user);
  const rejectedUser = useAppSelector<boolean>((state) => state.user.rejected);
  const rejectedMessageUser = useAppSelector<boolean>((state) => state.user.rejectedMessage);
  const playlistId = router.query.id.toString();
  const [open, setOpen] = React.useState(false);
  const [currentSongsIndex, setCurrentSongsIndex] = useState<number>(0);
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [progress, setProgress] = useState<{ playedSeconds: number; played: number }>({
    playedSeconds: 0,
    played: 0,
  });
  const [earnAmount, setEarnAmount] = useState<{
    playedSeconds: number;
    earnedBLB: number;
    playedSongs: Array<{ id: string; played: number }>;
  }>({ playedSeconds: 0, earnedBLB: 0, playedSongs: [] });
  const durationParse = intervalToDuration({ start: 0, end: duration * 1000 });
  const formattedDuration = formatDuration(durationParse);
  const playedParse = intervalToDuration({ start: 0, end: progress.playedSeconds * 1000 });
  const formattedPlayed = formatDuration(playedParse);
  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    dispatch(fetchSongsByPlaylistIdAction(playlistId));
    dispatch(fetchUserByIdAction('1'));
    // dispatch(
    //   updateUserEarnByIdAction({
    //     userId: '1',
    //     totalPlayTime: 230,
    //     totalEarnBLB: 2.3,
    //     currentEnergy: 30,
    //     headphoneId: '#16452324',
    //     battery: '20%',
    //   })
    // );
  }, [dispatch]);

  useEffect(() => {
    // console.log(playedParse.minutes);
    // console.log(playedParse.seconds);
    // console.log(user);
    // console.log(earnAmount);
    // const _earnAmount = {
    //   playedSeconds: ++earnAmount.playedSeconds,
    //   earnedBLB: earnAmount.playedSeconds % 60 === 0 ? earnAmount.earnedBLB + 0.5 : earnAmount.earnedBLB,
    //   playedSongs: [],
    // };
    // setEarnAmount({ ..._earnAmount });
  }, [dispatch]);

  console.log(earnAmount);

  const handleTogglePlay = () => {
    setPlaying((prev) => !prev);
  };

  const handleDuration = (value: number) => {
    setDuration(value);
  };

  const handleProgress = (state: { playedSeconds: number; played: number }) => {
    console.log(state);
    console.log(progress);
    if (state == progress) return;
    setProgress(state);
  };

  const handleSeekChangeTimeline = (event: Event, value: number) => {
    event.preventDefault();
    setProgress((prev) => ({ ...prev, playedSeconds: value }));
    if (playerRef.current) {
      playerRef.current.seekTo(value);
    }
  };

  const handleEndMedia = () => {
    if (currentSongsIndex < songs.length) setCurrentSongsIndex((prev) => ++prev);
    else setCurrentSongsIndex(0);
  };

  const handlePrevTrack = () => {
    if (currentSongsIndex === 0) return;
    setCurrentSongsIndex((prev) => --prev);
  };

  const handleNextTrack = () => {
    if (currentSongsIndex === songs.length - 1) {
      setCurrentSongsIndex(0);
      return;
    }
    if (currentSongsIndex < songs.length) {
      setCurrentSongsIndex((prev) => ++prev);
      return;
    }
    return;
  };

  return (
    <>
      <Head>
        <title>SamplePlayer</title>
      </Head>
      <Box
        component="main"
        style={{
          // background:
          //   'linear-gradient(180deg, rgba(20, 17, 68, 0.4) 0.87%, #121212 100%, rgba(54, 54, 54, 0.8) 100%)',
          // backdropFilter: 'blur(20px)',
          position: 'relative',
        }}
        sx={{ px: 2 }}
      >
        <Container>
          {!pendingSongs && songs.length > 0 && (
            <>
              <ArtistPFPView pfpImageUrl={songs[currentSongsIndex].artistProfileBigPicture} />
              <ReactPlayer
                ref={playerRef}
                url={songs[currentSongsIndex].url}
                width="0"
                height="0"
                playing={isPlaying}
                onDuration={(value) => handleDuration(value)}
                onProgress={handleProgress}
                onEnded={handleEndMedia}
                playsinline
              />
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="column" flexGrow={1}>
                  <span style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gilroy-Bold' }}>
                    {songs[currentSongsIndex].name}
                  </span>
                  <span
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '0.9rem',
                      textAlign: 'left',
                      verticalAlign: 'top',
                    }}
                  >
                    {songs[currentSongsIndex].artist} {songs[currentSongsIndex].id}
                  </span>
                </Stack>
                <img src="/images/favorite.svg" alt="icon" style={{ width: '2rem' }} />
              </Stack>
              <Stack direction="column" sx={{ mt: 2 }}>
                <Stack direction="row" justifyContent="space-between">
                  <div>
                    <span
                      style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '1rem',
                      }}
                    >
                      {formattedPlayed}
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '1rem',
                      }}
                    >
                      {formattedDuration}
                    </span>
                  </div>
                </Stack>
                <StyledSlider
                  defaultValue={0}
                  step={0.00001}
                  value={progress.playedSeconds}
                  max={duration}
                  onChange={handleSeekChangeTimeline}
                />
                <Stack direction={'row'} justifyContent="center" alignItems="center" spacing={1} sx={{ my: 2 }}>
                  {isPlaying ? (
                    <>
                      <EarningIndicatorIcon style={{ maxWidth: '1.2rem' }} />
                      <span
                        style={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontSize: '0.9rem',
                          textAlign: 'left',
                          verticalAlign: 'top',
                        }}
                      >
                        Earning
                      </span>
                    </>
                  ) : (
                    <>
                      <StopEarningIndicatorIcon style={{ maxWidth: '1.2rem' }} />
                      <span
                        style={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontSize: '0.9rem',
                          textAlign: 'left',
                          verticalAlign: 'top',
                        }}
                      >
                        Not Earning
                      </span>
                    </>
                  )}
                </Stack>
                <Stack direction={'row'} justifyContent="space-between" alignItems="center" spacing={1} sx={{ my: 2 }}>
                  <img src="/images/player/shuffle.svg" alt="icon" />
                  <div onClick={handlePrevTrack}>
                    <img src="/images/player/previousbtn.svg" alt="icon" />
                  </div>
                  <div onClick={handleTogglePlay}>
                    {isPlaying ? (
                      <img src="/images/player/pauseearnbtn.svg" alt="icon" />
                    ) : (
                      <img src="/images/player/playearnbtn.svg" alt="icon" />
                    )}
                  </div>
                  <div onClick={handleNextTrack}>
                    <img src="/images/player/nextbtn.svg" alt="icon" />
                  </div>
                  <img src="/images/player/replay.svg" alt="icon" />
                </Stack>
              </Stack>
            </>
          )}
          {user && (
            <EarnCounterView
              isPlaying={isPlaying}
              totalPlayTime={user.totalPlayTime + earnAmount.playedSeconds}
              totalEarnBLB={user.totalEarnBLB + earnAmount.earnedBLB}
            />
          )}
        </Container>
      </Box>
    </>
  );
};

SamplePlayer.getLayout = (page: React.ReactElement) => (
  <AuthGuard>
    <PlayerSampleLayout>{page}</PlayerSampleLayout>
  </AuthGuard>
);

export default SamplePlayer;
