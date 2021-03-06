import JavaScriptSvg from '../../../../assets/logos/javascript.svg';
import { LogoContainer } from '../logo-container';

function JavaScriptLogo({ fill = '#F7DF1E', stroke = '' }) {
  return (
    <LogoContainer name='javascript'>
      <JavaScriptSvg fill={fill} stroke={stroke} />
    </LogoContainer>
  );
}

export default JavaScriptLogo;
