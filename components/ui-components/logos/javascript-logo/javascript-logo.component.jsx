import JavaScriptSvg from '../../../../assets/logos/javascript.svg';
import { LogoContainer } from '../logo-container';

function JavaScriptLogo({ fill = '#eeeeee', stroke = '' }) {
    return (
        <LogoContainer name="javascript">
            <JavaScriptSvg fill={fill} stroke={stroke} />
        </LogoContainer>
    );
}

export default JavaScriptLogo;
