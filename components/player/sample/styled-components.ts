import styled from 'styled-components';

const borderColor = `hsla(0, 0%, 0%, 0.1)`;

const drawerMixin = ({ padding }) => `
  padding: ${padding}px;
  width: 100%;
  background-color: white;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(0, 0%, 0%, 0.4);
  pointer-events: none;
`;

export const NowPlayingDrawer = styled.div`
  touch-action: none;
  will-change: transform;
  position: fixed;
  height: ${(props) => props.height}px;
  border-top: 1px solid ${borderColor};
  top: ${(props) => props.windowHeight - 150}px;
  min-height: calc(100vh + 500px);
  ${drawerMixin};
  box-shadow: 0 -3px 10px hsla(0, 0%, 0%, 0.07);

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const Handle = styled.div`
  width: 4rem;
  height: 0.4rem;
  background-color: hsla(0, 0%, 0%, 0.1);
  border-radius: 9px;
  position: absolute;
  top: 1rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Flex = styled.div`
  display: flex;
`;

export const NowPlayingImage = styled.img.attrs({
  draggable: false,
})`
  width: ${(props) => props.dimensions * 3}px;
  height: ${(props) => props.dimensions * 3}px;
  border-radius: 3px;
  background-color: black;
  box-shadow: 0 3px 20px hsla(0, 0%, 0%, 0.3);
  transform-origin: 0 0;
  display: block;
  margin-right: 1rem;
  position: relative;
  z-index: 1;
  transform: scale(0.3333);
  position: absolute;
  will-change: transform;
  user-select: none;
`;

export const StyledClosedTitle = styled.div`
  position: relative;
  left: 5rem;
  top: 0.5rem;
`;

export const Title = styled.h3`
  max-width: 10rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold;
  user-select: none;
  font-family: 'Source Sans Pro';
`;

export const Subtitle = styled.h4`
  user-select: none;
  font-family: 'Source Sans Pro';
`;

export const ClosedControlsContainer = styled.div`
  position: absolute;
  right: 0;
  top: 1.7rem;
  right: 12px;

  svg {
    width: 2.25rem;
    height: auto;
    opacity: 0.6;
  }
`;

export const OpenControlsContainer = styled.div`
  position: absolute;
  left: 0;
  top: calc(66vw + 3.75rem);
  width: 100vw;

  > div {
    display: flex;
    justify-content: center;
  }
  svg {
    opacity: 0.7;
    width: 3.5rem;
    height: 3.5rem;
  }
  svg:nth-of-type(2) {
    width: 5rem;
    height: 3.5rem;
  }

  > ${Title} {
    text-align: center;
    position: relative;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    max-width: 100%;
  }

  > ${Subtitle} {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;
