import React from 'react';
import { Box, Button, Container, IconButton, Paper, Stack } from '@mui/material';
import { Energy as EnergyIcon } from '@icons/energy';
import { IHeadphone } from 'redux/interfaces';

interface HeadPhoneData {
  headphone: any;
  cancelButton: () => void;
  confirmButton: () => void;
}
function PickedHeadphone({ headphone, cancelButton, confirmButton }: HeadPhoneData) {
  return (
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
                      width: `${(82 * Number(headphone.battery.slice(0, headphone.battery.length - 1))) / 100}px`,
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
                        Number(headphone.battery.slice(0, headphone.battery.length - 1)) >= 38
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
                        Number(headphone.battery.slice(0, headphone.battery.length - 1)) >= 47
                          ? 'black'
                          : 'rgba(255,255,255,0.6)',
                      fontSize: '0.7rem',
                      zIndex: 10,
                    }}
                  >
                    {headphone.battery.slice(0, 1)}
                  </span>
                  <span
                    style={{
                      color:
                        Number(headphone.battery.slice(0, headphone.battery.length - 1)) >= 54
                          ? 'black'
                          : 'rgba(255,255,255,0.6)',
                      fontSize: '0.7rem',
                      zIndex: 10,
                    }}
                  >
                    {headphone.battery.slice(1, 2)}
                  </span>
                  <span
                    style={{
                      color:
                        Number(headphone.battery.slice(0, headphone.battery.length - 1)) >= 63
                          ? 'black'
                          : 'rgba(255,255,255,0.6)',
                      fontSize: '0.7rem',
                      zIndex: 10,
                    }}
                  >
                    {headphone.battery.slice(2, 3)}
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
                    src={headphone.image}
                    alt=""
                    style={{
                      width: '1.2rem',
                      height: '1.2rem',
                      borderRadius: '100px',
                      border: '1px solid white',
                      marginRight: '4px',
                    }}
                  />
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{headphone.id}</span>
                </div>
              </Stack>
            </Stack>
            <div
              style={{
                width: '13rem',
                height: '13rem',
                marginTop: '80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                borderRadius: '100%',
              }}
            >
              <img
                src={headphone.image}
                alt=""
                style={{
                  height: '13rem',
                }}
              />
            </div>
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
                <span style={{ color: 'white', fontSize: '0.7rem' }}>{headphone.id}</span>
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
                  Battery: {headphone.battery}
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
                  <span style={{ color: 'white', fontSize: '0.9rem' }}>{headphone.battery}</span>
                </Stack>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: '900', fontSize: '0.8rem' }}>MAX 1h</span>
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
                    width: `${(360 * Number(headphone.battery.slice(0, headphone.battery.length - 1))) / 100}px`,

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
                <span style={{ color: 'white', fontWeight: '900', fontSize: '1rem' }}>{headphone.battery}</span>
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
                  {/* {headphone.battery} */}
                  20%
                </span>
              </Stack>
              <Stack direction={'row'} justifyContent="space-between" style={{ marginTop: '15px' }}>
                <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Remaining Total</span>
                </Stack>
                <span style={{ color: 'white', fontWeight: '900', fontSize: '1rem' }}>{headphone.battery}</span>
              </Stack>
            </Stack>
            <Stack direction={'row'} style={{ width: '100%', justifyContent: 'space-between', marginTop: '30px' }}>
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
                onClick={cancelButton}
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
                onClick={confirmButton}
              >
                Confirm
              </button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default PickedHeadphone;
