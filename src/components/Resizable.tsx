import './Resizable.css';
import { ResizableBox } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  return (
    <ResizableBox
      width={Infinity}
      height={400}
      resizeHandles={['s']}
      maxConstraints={[Infinity, window.innerHeight * 0.9]}
      minConstraints={[Infinity, 25]}
    >
      {children}
    </ResizableBox>
  );
};

export default Resizable;
