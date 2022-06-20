import React from 'react';
import Drawer, { DrawerContainer, MainContentContainer } from 'react-swipeable-drawer';

const BottomDrawer = () => {
  const handleTouchStart = () => {
    console.log('handleTouchStart');
  };
  const handleTouchEnd = () => {
    console.log('handleTouchEnd');
  };
  const toggleDrawer = () => {
    console.log('toggleDrawer');
  };
  const handleTouchMove = () => {
    console.log('handleTouchMove');
  };
  return (
    <>
      <Drawer position="bottom" size={80}>
        {({ position, size, swiping, translation, mainContentScroll }) => (
          <div>
            <DrawerContainer
              // overlayStyle={{ backgroundColor: 'white', bottom: '-5%' }}
              // contentStyle={{ backgroundColor: 'white' }}
              position={position}
              size={size}
              swiping={swiping}
              translation={translation}
              toggleDrawer={toggleDrawer}
              handleTouchStart={handleTouchStart}
              handleTouchMove={handleTouchMove}
              handleTouchEnd={handleTouchEnd}
              drawerContent={
                <span
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.9rem',
                    textAlign: 'left',
                    verticalAlign: 'top',
                    height: '87% !important',
                  }}
                >
                  Drawer
                </span>
              }
            />
            <MainContentContainer translation={translation} mainContentScroll={mainContentScroll}>
              <div>
                <span
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.9rem',
                    textAlign: 'left',
                    verticalAlign: 'top',
                  }}
                >
                  Main
                </span>
              </div>
            </MainContentContainer>
          </div>
        )}
      </Drawer>
    </>
  );
};

export default BottomDrawer;
