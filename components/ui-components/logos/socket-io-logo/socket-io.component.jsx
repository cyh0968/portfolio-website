import SocketIOSvg from '../../../../assets/logos/socket-dot-io.svg';
import { LogoContainer } from '../logo-container';

function SocketIOLogo({ fill = '#eeeeee', stroke = '' }) {
  return (
    <LogoContainer name='socket.io'>
      <SocketIOSvg fill={fill} stroke={stroke} />
    </LogoContainer>
  );
}

export default SocketIOLogo;
