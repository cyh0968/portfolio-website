import ExpressSvg from '../../../../assets/logos/express.svg';
import { LogoContainer } from '../logo-container';

function ExpressLogo({ fill = '#eeeeee', stroke = '' }) {
    return (
        <LogoContainer name="express">
            <ExpressSvg fill={fill} stroke={stroke} />
        </LogoContainer>
    );
}

export default ExpressLogo;
