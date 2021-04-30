import './Resizable.css';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;

  resizableProps =
    direction === 'horizontal'
      ? {
          className: 'resize-horizontal',
          width: window.innerWidth * 0.75,
          height: Infinity,
          resizeHandles: ['e'],
          maxConstraints: [window.innerWidth * 0.75, Infinity],
          minConstraints: [window.innerWidth * 0.2, Infinity]
        }
      : {
          width: Infinity,
          height: 400,
          resizeHandles: ['s'],
          maxConstraints: [Infinity, window.innerHeight * 0.9],
          minConstraints: [Infinity, 25]
        };

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
