/* eslint-disable @next/next/no-img-element */
// import { Box, Slider, Stack } from '@mui/material';
import { Col, Row, Slider, Tooltip } from 'antd';
import classNames from 'classnames';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import NextLink from 'next/link';
import style from './style.module.scss';
import { useRouter } from 'next/router';

interface Props {
  className?: string;
  isPlaying?: boolean;
  onPlayPause: () => void;
  playedSeconds: number;
  formattedPlayed: string;
  duration: number;
  formattedDuration: string;
  onSeekNext10: () => void;
  onSeekBack10: () => void;
  onFullScreen?: () => void;
  onSeekChangeTimeline?: (value: number) => void;
  mediaType: string;
}

const waveHeights = [
  10, 6, 4, 13, 17, 11, 13, 9, 6, 9, 13, 17, 21, 19, 23, 17, 19, 16, 13, 10, 13, 7, 6, 10, 16, 13, 19, 13, 11, 16, 13,
  10, 7, 5, 7, 10, 11, 15, 10, 5, 7, 9, 13, 17, 15,
];

const NftControl = (props: Props) => {
  const router = useRouter();
  const id = router.asPath.split('/')[2];

  const {
    className,
    isPlaying = false,
    onPlayPause,
    playedSeconds,
    formattedPlayed,
    duration,
    formattedDuration,
    onSeekNext10,
    onSeekBack10,
    onFullScreen,
    onSeekChangeTimeline,
  } = props;

  const [amountBar, setAmountBar] = useState<number>(0);

  const soundWaveRef = useRef<HTMLDivElement | null>(null);

  const waveBars = useMemo(() => [...new Array(amountBar)], [amountBar]);
  const activeIndexTimeline =
    playedSeconds && duration && amountBar ? Math.floor((playedSeconds / duration) * amountBar) : 0;

  const handlePlay = () => {
    if (isPlaying) return;
    onPlayPause();
  };

  const handlePause = () => {
    if (!isPlaying) return;
    onPlayPause();
  };

  const handleSeekChange = (value: number) => {
    if (onSeekChangeTimeline) {
      onSeekChangeTimeline(value);
    }
  };

  useEffect(() => {
    if (soundWaveRef.current?.clientWidth) {
      const width = soundWaveRef.current.clientWidth;
      const gap = 2;
      const total = Math.round((width + gap) / (2 * gap));
      setAmountBar(total);
    }
  }, [soundWaveRef.current?.clientWidth]);

  return (
    <>
      <div className={classNames(className && className)}>
        <div className={style.mediaControl}>
          <Row justify="space-between" style={{ paddingRight: '1rem', paddingLeft: '1rem' }}>
            <Row align="middle">
              <Col className={style.mediaControlIcon} onClick={handlePlay}>
                {/* <Tooltip title="Play" className={style.mediaControlTooltip}>
                  <img src={`/images/nft-detail/icon-play.svg`} alt="icon" />
                </Tooltip> */}
                <div className={style.mediaControlIconMobile}>
                  <img
                    src={`/images/nft-detail/icon-play.svg`}
                    alt="icon"
                    style={{
                      filter: 'invert(99%) sepia(9%) saturate(18%) hue-rotate(358deg) brightness(110%) contrast(100%)',
                    }}
                  />
                </div>
              </Col>
              <Col className={style.mediaControlIcon} onClick={handlePause}>
                {/* <Tooltip title="Pause" className={style.mediaControlTooltip}>
                  <img src="/images/nft-detail/icon-pause.svg" alt="icon" />
                </Tooltip> */}
                <div className={style.mediaControlIconMobile}>
                  <img
                    src="/images/nft-detail/icon-pause.svg"
                    alt="icon"
                    style={{
                      filter: 'invert(99%) sepia(9%) saturate(18%) hue-rotate(358deg) brightness(110%) contrast(100%)',
                    }}
                  />
                </div>
              </Col>
              <Col className={style.mediaControlIcon} onClick={onSeekNext10}>
                {/* <Tooltip title="Seek forward 10 seconds" className={style.mediaControlTooltip}>
                  <img src="/images/nft-detail/icon-prev-10.svg" alt="icon" />
                </Tooltip> */}
                <div className={style.mediaControlIconMobile}>
                  <img
                    src="/images/nft-detail/icon-prev-10.svg"
                    alt="icon"
                    style={{
                      filter: 'invert(99%) sepia(9%) saturate(18%) hue-rotate(358deg) brightness(110%) contrast(100%)',
                    }}
                  />
                </div>
              </Col>
              <Col className={style.mediaControlIcon} onClick={onSeekBack10}>
                {/* <Tooltip title="Seek back 10 seconds" className={style.mediaControlTooltip}>
                  <img src="/images/nft-detail/icon-next-10.svg" alt="icon" />
                </Tooltip> */}
                <div className={style.mediaControlIconMobile}>
                  <img
                    src="/images/nft-detail/icon-next-10.svg"
                    alt="icon"
                    style={{
                      filter: 'invert(99%) sepia(9%) saturate(18%) hue-rotate(358deg) brightness(110%) contrast(100%)',
                    }}
                  />
                </div>
              </Col>
              <Col className={style.mediaControlIcon} onClick={onSeekBack10}>
                {/* <Tooltip title="Seek back 10 seconds" className={style.mediaControlTooltip}>
                  <img src="/images/nft-detail/icon-next-10.svg" alt="icon" />
                </Tooltip> */}
                <NextLink href={`/playlist/${id}`} passHref>
                  <div className={style.mediaControlIconMobile}>
                    <img
                      src="/images/nft-detail/song-list.svg"
                      alt="icon"
                      style={{
                        filter:
                          'invert(99%) sepia(9%) saturate(18%) hue-rotate(358deg) brightness(110%) contrast(100%)',
                      }}
                    />
                  </div>
                </NextLink>
              </Col>
            </Row>
            <Row align="middle">
              <span className={style.mediaDuration}>{`${formattedPlayed} / ${formattedDuration}`}</span>
              {/* <span
                className={classNames(style.mediaControlIcon, style.mediaControlFullScreenAudio)}
                onClick={onFullScreen}
              >
                <Tooltip title="Full screen" className={style.mediaControlTooltip}>
                  <img src="/images/nft-detail/icon-full.svg" alt="icon" />
                </Tooltip>
                <div className={style.mediaControlIconMobile}>
                  <img src="/images/nft-detail/icon-full.svg" alt="icon" />
                </div>
              </span> */}
            </Row>
          </Row>
        </div>
        <div
          className={classNames(style.mediaSoundWave, formattedPlayed !== '00:00' && style.mediaSoundWavePlayed)}
          ref={soundWaveRef}
        >
          {waveBars.length > 0 &&
            waveBars.map((_, i) => (
              <span
                className={classNames(style.soundWave, i === activeIndexTimeline && style.soundWaveActive)}
                key={`wave-${i}`}
                style={{ height: waveHeights[i % waveHeights.length] }}
              />
            ))}
          <Slider
            min={0}
            max={duration}
            step={0.00001}
            value={playedSeconds}
            tooltipVisible={false}
            onChange={handleSeekChange}
            className={style.soundWaveSeekGhost}
          />
        </div>
      </div>
    </>
  );
};

export default memo<Props>(NftControl);
