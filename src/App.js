import { Transition } from 'react-transition-group';
import { useState, useRef, useCallback } from 'react';

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

export default function App() {
  const [inProp, setInProp] = useState(false);
  const handleClick = useCallback(
    () => {
      setInProp(!inProp)
    },
    [inProp],
  )
  
  const nodeRef = useRef(null);
  return (
    <div>
      <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
        {
          state => (
            <div ref={nodeRef} style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              I'm a fade Transition!
            </div>
          )
        }
      </Transition>
      <button onClick={handleClick}>
        Click to Enter
      </button>
    </div>
  );
}