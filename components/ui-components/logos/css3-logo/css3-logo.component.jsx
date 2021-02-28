import Css3Svg from '../../../../assets/logos/css3.svg';
import { LogoContainer } from '../logo-container';

function Css3Logo({ fill = '#1572B6', stroke = '' }) {
    return (
        <LogoContainer name="css3">
            <Css3Svg fill={fill} stroke={stroke} />
        </LogoContainer>
    );
}

export default Css3Logo;
