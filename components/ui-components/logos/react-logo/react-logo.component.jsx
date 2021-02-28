import ReactSvg from '../../../../assets/logos/react.svg';
import { LogoContainer } from '../logo-container';

function ReactLogo({ fill = '#61DAFB', stroke = '' }) {
    return (
        <LogoContainer name="react">
            <ReactSvg fill={fill} stroke={stroke} />
        </LogoContainer>
    );
}

export default ReactLogo;
