import SassSvg from '../../../../assets/logos/sass.svg';
import { LogoContainer } from '../logo-container';

function SassLogo({ fill = '#CC6699', stroke = '' }) {
    return (
        <LogoContainer name="sass">
            <SassSvg fill={fill} stroke={stroke} />
        </LogoContainer>
    );
}

export default SassLogo;
