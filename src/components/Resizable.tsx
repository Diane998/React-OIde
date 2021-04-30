import './Resizable.css';
import { useEffect, useState } from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [paneWidth, setPaneWidth] = useState(window.innerWidth * 0.75);

  useEffect(() => {
    let timer: any;
    const listener = () => {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);

        if (window.innerWidth * 0.75 < paneWidth)
          setPaneWidth(window.innerWidth * 0.75);
      }, 100);
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  resizableProps =
    direction === 'horizontal'
      ? {
          className: 'resize-horizontal',
          width: paneWidth,
          height: Infinity,
          resizeHandles: ['e'],
          maxConstraints: [innerWidth * 0.75, Infinity],
          minConstraints: [innerWidth * 0.2, Infinity],
          onResizeStop: (e, data) => {
            setPaneWidth(data.size.width);
          }
        }
      : {
          width: Infinity,
          height: 400,
          resizeHandles: ['s'],
          maxConstraints: [Infinity, innerHeight * 0.9],
          minConstraints: [Infinity, 25]
        };

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
