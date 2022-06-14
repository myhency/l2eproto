import { Box, Button, Container, Stack } from '@mui/material';
import { Page } from '../../types/page';
import Head from 'next/head';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AuthGuard } from '@components/authentication/auth-guard';
import { PlayerLayout } from '@layouts/player-layout';
import style from '@components/player/style.module.scss';
import styleBase from '@styles/base.module.scss';
import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { CircularSliderWithChildren } from 'react-circular-slider-svg';
import Image from 'next/image';
import useWindowSize from '@hooks/use-window-size';
import NftControl from '@components/player/control';
import { formatDuration } from '@utils/string';
import intervalToDuration from 'date-fns/intervalToDuration';

const Player: Page = () => {
  const router = useRouter();
  const id = router.asPath.split('/')[2];
  const { width = 0 } = useWindowSize();
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [progress, setProgress] = useState<{ playedSeconds: number; played: number }>({
    playedSeconds: 0,
    played: 0,
  });
  const durationParse = intervalToDuration({ start: 0, end: duration * 1000 });
  const formattedDuration = formatDuration(durationParse);
  const playedParse = intervalToDuration({ start: 0, end: progress.playedSeconds * 1000 });
  const formattedPlayed = formatDuration(playedParse);

  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    console.log(playerRef.current?.getDuration());
  });

  const handleDuration = (value: number) => {
    console.log(value);
    setDuration(value);
  };

  const handleProgress = (state: { playedSeconds: number; played: number }) => {
    setProgress(state);
  };

  const handleTogglePlay = () => {
    setPlaying((prev) => !prev);
  };

  const handleEndMedia = () => {
    console.log('handleEndMedia');
    setPlaying(false);
  };

  const handlePlay = () => {
    console.log('play');
    setPlaying(true);
  };
  const handlePause = () => {
    console.log('pause');
    setPlaying(false);
  };

  const handleSeekChangeTimeline = (value: number) => {
    setProgress((prev) => ({ ...prev, playedSeconds: value }));
    if (playerRef.current) {
      playerRef.current.seekTo(value);
    }
  };

  const handleSeekChange = (type: 'next' | 'back') => () => {
    let newPlayedSeconds = 0;
    if (type === 'next') {
      newPlayedSeconds = progress.playedSeconds + 10 < duration ? progress.playedSeconds + 10 : duration;
    }

    if (type === 'back') {
      newPlayedSeconds = progress.playedSeconds - 10 > 0 ? progress.playedSeconds - 10 : 0;
    }

    if (
      (type === 'next' && (progress.played === 1 || progress.playedSeconds === duration)) ||
      (type === 'back' && progress.played === 0)
    ) {
      return;
    }

    setProgress((prev) => ({ ...prev, playedSeconds: newPlayedSeconds }));

    if (playerRef.current) {
      playerRef.current.seekTo(newPlayedSeconds);
    }
  };

  const controlWidth = useMemo(() => {
    let size = 680;
    if (width < 1380) {
      size = 490;
    }

    if (width < 632) {
      size = 380;
    }

    if (width <= 576) {
      size = 342;
    }

    if (width <= 375) {
      size = 300;
    }

    if (width < 321) {
      size = 210;
    }
    console.log(width);
    console.log(size);
    return size;
  }, [width]);

  console.log('isPlaying:' + isPlaying);
  console.log('duration:' + duration);

  return (
    <>
      <Head>
        <title>Player</title>
      </Head>

      <Box component="main">
        <Container sx={{ paddingTop: '1rem', paddingLeft: '0px', paddingRight: '0px' }}>
          <Stack direction="row" justifyContent="space-between" sx={{ px: 2 }}>
            <Box>
              <Button variant="outlined" size="small">
                View Musician PFP
              </Button>
            </Box>
            <Box>
              <Button variant="outlined" size="small">
                Change Gear
              </Button>
            </Box>
          </Stack>
          <section className={style.nftInfoSection}>
            <div className={style.nftInfoWrapper}>
              <div className={style.nftInfoRow}>
                <div className={style.nftMedia}>
                  <div className={styleBase.playerGhost}>
                    <ReactPlayer
                      ref={playerRef}
                      url={
                        'https://uat-storage.label-nft.com/output/nft-media/6251785fb6629d36064f25c7/1654743350236.mpeg'
                      }
                      width="10%"
                      height="10%"
                      playing={isPlaying}
                      onDuration={(value) => handleDuration(value)}
                      onProgress={handleProgress}
                      onEnded={handleEndMedia}
                      onPlay={handlePlay}
                      onPause={handlePause}
                      playsinline
                    />
                  </div>
                  <svg width={0} height={0} className={style.nftControlGradient}>
                    <defs>
                      {/* change x1 by value circle control: value < 90 ? '0%' : '80%' */}
                      <linearGradient
                        id={`controlGradientBlack${id}`}
                        x1={progress.played < 0.9 ? '0%' : '80%'}
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#939393" stopOpacity={0.5} />
                        <stop offset={0.2} stopColor="#939393" stopOpacity={0.8} />
                        <stop offset={0.5} stopColor="rgba(255,255,255,0.2)" stopOpacity={0.5} />
                        <stop offset={1} stopColor="#rgba(255,255,255,0.2)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div
                    className={classNames(style.nftControl, progress.played === 0 && style.nftControlHiddenActiveTrack)}
                  >
                    <CircularSliderWithChildren
                      size={controlWidth}
                      minValue={0}
                      maxValue={1}
                      endAngle={360}
                      angleType={{
                        direction: 'cw',
                        axis: '+y',
                      }}
                      handle1={{
                        value: progress.played,
                        onChange: () => {},
                      }}
                      arcColor={`url(#controlGradientBlack${id})`}
                      arcBackgroundColor={'#22222233'}
                    >
                      <div className={style.nftPreviewWrapper}>
                        <div className={style.nftPreview}>
                          <Image
                            alt="Image"
                            src="/images/headphone_basic.png"
                            layout="fill"
                            objectFit="cover"
                            className={classNames(
                              style.nftPreviewImage
                              // styleBase.thumbnailRotate,
                              // isPlaying && styleBase.thumbnailRunningRotate,
                            )}
                            priority
                          />
                        </div>
                      </div>
                    </CircularSliderWithChildren>
                  </div>
                </div>

                <NftControl
                  className={style.mediaControlVisibleMobile}
                  isPlaying={isPlaying}
                  onPlayPause={handleTogglePlay}
                  playedSeconds={progress.playedSeconds}
                  formattedPlayed={formattedPlayed}
                  duration={duration}
                  formattedDuration={formattedDuration}
                  onSeekNext10={handleSeekChange('next')}
                  onSeekBack10={handleSeekChange('back')}
                  onSeekChangeTimeline={handleSeekChangeTimeline}
                  mediaType={'audio'}
                />
              </div>
            </div>
          </section>
          <Stack justifyContent="center" alignItems="center">
            <Button>earn</Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Player.getLayout = (page: React.ReactElement) => (
  <AuthGuard>
    <PlayerLayout>{page}</PlayerLayout>
  </AuthGuard>
);

export default Player;
