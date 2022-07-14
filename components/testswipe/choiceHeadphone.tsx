import React, { useState } from 'react';
import { Box, Button, Container, IconButton, Paper, Stack } from '@mui/material';
import { Energy as EnergyIcon } from '@icons/energy';
import { IHeadphone } from 'redux/interfaces';

interface HeadPhoneData {
  headphone: any;
  headphoneIdx: number;
  swapButton: (a: Number) => void;
}
function ChoiceHeadphone({ headphone, swapButton, headphoneIdx }: HeadPhoneData) {
  const [choiceIdx, setChoiceIdx] = useState(headphoneIdx);

  console.log(choiceIdx, headphoneIdx);

  const handleChooseHeadphone = (e: any) => {
    setChoiceIdx(Number(e.target.id));
  };

  return (
    <Box component="main">
      <Container sx={{ paddingTop: '0.5rem' }}>
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Stack
            direction={'column'}
            alignItems="center"
            justifyContent={'center'}
            spacing={1}
            style={{ borderBottom: '0px', paddingTop: '20px', width: '100%' }}
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
                      backgroundColor: '#a0a0a0',
                      width: `${
                        (82 * Number(headphone[choiceIdx].battery.slice(0, headphone[choiceIdx].battery.length - 1))) /
                        100
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
                        Number(headphone[choiceIdx].battery.slice(0, headphone[choiceIdx].battery.length - 1)) >= 38
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
                        Number(headphone[choiceIdx].battery.slice(0, headphone[choiceIdx].battery.length - 1)) >= 47
                          ? 'black'
                          : 'rgba(255,255,255,0.6)',
                      fontSize: '0.7rem',
                      zIndex: 10,
                    }}
                  >
                    {headphone[choiceIdx].battery.slice(0, 1)}
                  </span>
                  <span
                    style={{
                      color:
                        Number(headphone[choiceIdx].battery.slice(0, headphone[choiceIdx].battery.length - 1)) >= 54
                          ? 'black'
                          : 'rgba(255,255,255,0.6)',
                      fontSize: '0.7rem',
                      zIndex: 10,
                    }}
                  >
                    {headphone[choiceIdx].battery.slice(1, 2)}
                  </span>
                  <span
                    style={{
                      color:
                        Number(headphone[choiceIdx].battery.slice(0, headphone[choiceIdx].battery.length - 1)) >= 63
                          ? 'black'
                          : 'rgba(255,255,255,0.6)',
                      fontSize: '0.7rem',
                      zIndex: 10,
                    }}
                  >
                    {headphone[choiceIdx].battery.slice(2, 3)}
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
                    src={headphone[choiceIdx].image}
                    alt=""
                    style={{
                      width: '1.2rem',
                      height: '1.2rem',
                      borderRadius: '100px',
                      border: '1px solid white',
                      marginRight: '4px',
                    }}
                  />
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{headphone[choiceIdx].id}</span>
                </div>
              </Stack>
            </Stack>
            <div
              style={{
                width: '16rem',
                height: '16rem',
                marginTop: '80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                borderRadius: '100%',
              }}
            >
              <img
                src={headphone[choiceIdx].image}
                alt=""
                style={{
                  height: '16rem',
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
                <span style={{ color: 'white', fontSize: '0.7rem' }}>{headphone[choiceIdx].id}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '1.5rem',
                  border: 'solid 1px',
                  borderColor: 'white',
                  paddingLeft: '0.5rem',
                  paddingRight: '0.5rem',
                  width: '90px',
                  position: 'relative',
                  marginTop: '20px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#3cff96',
                    width: `${
                      (82 * Number(headphone[choiceIdx].battery.slice(0, headphone[choiceIdx].battery.length - 1))) /
                      100
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
                      Number(headphone[choiceIdx].battery.slice(0, headphone[choiceIdx].battery.length - 1)) >= 38
                        ? 'black'
                        : 'white',
                    width: '0.6rem',
                    height: '0.6rem',
                    zIndex: 10,
                  }}
                />
                <span
                  style={{
                    color:
                      Number(headphone[choiceIdx].battery.slice(0, headphone[choiceIdx].battery.length - 1)) >= 47
                        ? 'black'
                        : 'white',
                    fontSize: '0.7rem',
                    zIndex: 10,
                  }}
                >
                  {headphone[choiceIdx].battery.slice(0, 1)}
                </span>
                <span
                  style={{
                    color:
                      Number(headphone[choiceIdx].battery.slice(0, headphone[choiceIdx].battery.length - 1)) >= 54
                        ? 'black'
                        : 'white',
                    fontSize: '0.7rem',
                    zIndex: 10,
                  }}
                >
                  {headphone[choiceIdx].battery.slice(1, 2)}
                </span>
                <span
                  style={{
                    color:
                      Number(headphone[choiceIdx].battery.slice(0, headphone[choiceIdx].battery.length - 1)) >= 63
                        ? 'black'
                        : 'white',
                    fontSize: '0.7rem',
                    zIndex: 10,
                  }}
                >
                  {headphone[choiceIdx].battery.slice(2, 3)}
                </span>
              </div>
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
                <span style={{ color: 'white', fontSize: '0.7rem' }}>{headphone[choiceIdx].id}</span>
              </div>
            </Stack>
            <Stack direction={'row'} spacing={1} style={{ width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  marginTop: '30px',
                  padding: '0px 10px',
                  gap: '10px',
                }}
              >
                {headphone.map((val: any, idx: string) => {
                  return (
                    <img
                      onClick={handleChooseHeadphone}
                      src={val.image}
                      alt=""
                      id={idx}
                      key={idx}
                      style={
                        headphone[choiceIdx].image === val.image
                          ? {
                              width: '2.5rem',
                              height: '2.5rem',
                              borderRadius: '100px',
                              border: '1px solid white',
                              marginRight: '4px',
                              objectFit: 'cover',
                            }
                          : {
                              width: '2.5rem',
                              height: '2.5rem',
                              borderRadius: '100px',
                              border: '1px solid white',
                              marginRight: '4px',
                              objectFit: 'cover',
                              opacity: '0.6',
                            }
                      }
                    />
                  );
                })}
              </div>
            </Stack>

            <Stack direction={'row'} style={{ width: '100%', justifyContent: 'center', marginTop: '30px' }}>
              <button
                style={
                  headphoneIdx !== choiceIdx
                    ? {
                        width: '45%',
                        height: '40px',
                        borderRadius: '6px',
                        backgroundColor: '#e0393e',
                        color: 'white',
                        border: 'none',
                        fontFamily: 'Gilroy',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '24px',
                      }
                    : {
                        width: '45%',
                        height: '40px',
                        borderRadius: '6px',
                        backgroundColor: '#6c6c6c',
                        color: '#a4a4a4',
                        border: 'none',
                        fontFamily: 'Gilroy',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '24px',
                      }
                }
                onClick={() => swapButton(choiceIdx)}
                disabled={headphoneIdx === choiceIdx}
              >
                Swap Headphone
              </button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default ChoiceHeadphone;
