/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { AuthGuard } from '@components/authentication/auth-guard';
import { MainLayout } from '@layouts/main-layout';
import { Page } from '../types/page';
import { Box, Button, Chip, Container, IconButton, Paper, Stack } from '@mui/material';
import { PullToRefresh, PullDownContent, ReleaseContent, RefreshContent } from 'react-js-pull-to-refresh';
import { MusicNote as MusicNoteIcon } from '@icons/music-note';
import { QuestionMarkCircle as QuestionMarkCircleIcon } from '@icons/question-mark-circle';
import { LightningBolt as LightningBoltIcon } from '@icons/lightning-bolt';
import { Inbox as InboxIcon } from '@icons/inbox';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

const earningCap = {
  dailyMax: 50,
  currentEarn: 22.93,
};

const energyCap = {
  max: 4,
  currentEnergy: 1,
};

const Home: Page = () => {
  const [val, setVal] = useState(true);

  return (
    <>
      <Head>
        <title>L2E Proto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component="main">
        <PullToRefresh
          pullDownContent={<PullDownContent />}
          releaseContent={<ReleaseContent />}
          refreshContent={<RefreshContent />}
          pullDownThreshold={200}
          onRefresh={() =>
            new Promise((resolve) => {
              setTimeout(resolve, 1000);
            })
          }
          triggerHeight={1000}
          backgroundColor="white"
        >
          <Container sx={{ height: '88vh' }}>
            <Paper
              elevation={8}
              sx={{
                height: '26vh',
                padding: '8px',
                border: 'solid 2px',
                borderRadius: '24px',
              }}
            >
              <Swiper slidesPerView={1} spaceBetween={30} loop={true} navigation={true} modules={[Navigation]}>
                <SwiperSlide>
                  <Stack spacing={1} direction="column">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '12px',
                        padding: '2px 4px 2px 4px',
                        minWidth: '64px',
                      }}
                    >
                      <span>headphone</span>
                    </div>
                    <Box>
                      <img
                        src="/images/headphone_gold.png"
                        alt=""
                        style={{ objectFit: 'scale-down', maxHeight: '130px' }}
                      />
                    </Box>
                    <Stack spacing={2} direction="row">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: 'solid 1px',
                          borderRadius: '24px',
                          fontSize: '8px',
                          padding: '2px 4px 2px 4px',
                          minWidth: '30px',
                        }}
                      >
                        <span>#12345123098</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: 'solid 1px',
                          borderRadius: '24px',
                          fontSize: '8px',
                          padding: '2px 4px 2px 4px',
                          minWidth: '64px',
                        }}
                      >
                        <span>100.0 / 100.0</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: 'solid 1px',
                          borderRadius: '24px',
                          fontSize: '8px',
                          padding: '2px 4px 2px 4px',
                          minWidth: '64px',
                        }}
                      >
                        <span>Lv 10</span>
                      </div>
                    </Stack>
                  </Stack>
                </SwiperSlide>
                <SwiperSlide>
                  <Stack spacing={1} direction="column">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '12px',
                        padding: '2px 4px 2px 4px',
                        minWidth: '64px',
                      }}
                    >
                      <span>headphone</span>
                    </div>
                    <Box>
                      <img
                        src="/images/headphone_basic.png"
                        alt=""
                        style={{ objectFit: 'scale-down', maxHeight: '130px' }}
                      />
                    </Box>
                    <Stack spacing={2} direction="row">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: 'solid 1px',
                          borderRadius: '24px',
                          fontSize: '8px',
                          padding: '2px 4px 2px 4px',
                          minWidth: '30px',
                        }}
                      >
                        <span>#12345123098</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: 'solid 1px',
                          borderRadius: '24px',
                          fontSize: '8px',
                          padding: '2px 4px 2px 4px',
                          minWidth: '64px',
                        }}
                      >
                        <span>100.0 / 100.0</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: 'solid 1px',
                          borderRadius: '24px',
                          fontSize: '8px',
                          padding: '2px 4px 2px 4px',
                          minWidth: '64px',
                        }}
                      >
                        <span>Lv 10</span>
                      </div>
                    </Stack>
                  </Stack>
                </SwiperSlide>
              </Swiper>
            </Paper>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1, mt: 3 }}>
              <Box
                sx={{
                  minHeight: '4rem',
                  aspectRatio: '1 / 1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'lightgrey',
                  borderRadius: '6px',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  Loot Box
                </span>
              </Box>
              <Box
                sx={{
                  minHeight: '4rem',
                  aspectRatio: '1 / 1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'lightgrey',
                  borderRadius: '6px',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  Loot Box
                </span>
              </Box>
              <Box
                sx={{
                  minHeight: '4rem',
                  aspectRatio: '1 / 1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'lightgrey',
                  borderRadius: '6px',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  Loot Box
                </span>
              </Box>
              <Box
                sx={{
                  minHeight: '4rem',
                  aspectRatio: '1 / 1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'lightgrey',
                  borderRadius: '6px',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  Loot Box
                </span>
              </Box>
            </Box>
            <Stack spacing={2} sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                  style={{
                    display: 'flex',
                    width: '20%',
                    maxHeight: '18px',
                    margin: '0.3rem',
                  }}
                ></div>
                <div
                  style={{
                    display: 'flex',
                    width: '60%',
                    minHeight: '18px',
                    backgroundColor: 'lightgray',
                    margin: '0.3rem',
                    borderRadius: '18px',
                  }}
                >
                  <div
                    style={{
                      padding: '2px 8px 2px 8px',
                      maxHeight: '18px',
                      backgroundColor: 'red',
                      borderRadius: '18px',
                      position: 'relative',
                      width: `${(earningCap.currentEarn / earningCap.dailyMax) * 100}%`,
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      position: 'absolute',
                      marginTop: '2px',
                      marginLeft: '8px',
                    }}
                  >
                    <MusicNoteIcon style={{ width: '12px', height: '12px' }} />
                    <span style={{ marginLeft: '4px', fontSize: '12px' }}>22.93 / 50</span>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '20%',
                    maxHeight: '18px',
                    margin: '0.3rem',
                    justifyContent: 'end',
                  }}
                >
                  <IconButton>
                    <QuestionMarkCircleIcon style={{ color: 'black' }} />
                  </IconButton>
                </div>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                  style={{
                    display: 'flex',
                    width: '20%',
                    maxHeight: '18px',
                    margin: '0.3rem',
                  }}
                ></div>
                <div
                  style={{
                    display: 'flex',
                    width: '60%',
                    minHeight: '18px',
                    backgroundColor: 'lightgray',
                    margin: '0.3rem',
                    borderRadius: '18px',
                  }}
                >
                  <div
                    style={{
                      padding: '2px 8px 2px 8px',
                      maxHeight: '18px',
                      backgroundColor: 'skyblue',
                      borderRadius: '18px',
                      position: 'relative',
                      width: `${(energyCap.currentEnergy / energyCap.max) * 100}%`,
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      position: 'absolute',
                      marginTop: '2px',
                      marginLeft: '8px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                      }}
                    >
                      <LightningBoltIcon style={{ width: '12px', height: '12px' }} />
                      <span style={{ marginLeft: '4px', fontSize: '12px' }}>1.0 / 4.0</span>
                    </div>
                    <div style={{ display: 'flex', marginLeft: '28px' }}>
                      <span style={{ fontSize: '6px' }}>Refill in </span>
                      <span style={{ fontSize: '6px', color: 'blue' }}>4h 25min </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '20%',
                    maxHeight: '18px',
                    margin: '0.3rem',
                    justifyContent: 'end',
                  }}
                >
                  <IconButton>
                    <InboxIcon style={{ color: 'black' }} />
                  </IconButton>
                </div>
              </Box>
            </Stack>
            <Stack spacing={1} sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <NextLink href="/playlist" passHref>
                  <Button variant="contained" sx={{ px: 3 }}>
                    GO TO PLAYLIST
                  </Button>
                </NextLink>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{ fontSize: '12px', textDecoration: 'underline' }}>How to earn?</span>
              </Box>
            </Stack>
          </Container>
        </PullToRefresh>
      </Box>
    </>
  );
};

Home.getLayout = (page: React.ReactElement) => (
  <AuthGuard>
    <MainLayout>{page}</MainLayout>
  </AuthGuard>
);

export default Home;
