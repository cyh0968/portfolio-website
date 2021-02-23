import NodeJsSvg from '../../../../assets/logos/node-dot-js.svg';
import { LogoContainer } from '../logo-container';

function NodeJsLogo({ fill = '#eeeeee', stroke = '' }) {
    return (
        <LogoContainer name="node.js">
            <NodeJsSvg fill={fill} stroke={stroke} />
        </LogoContainer>
    );
}

export default NodeJsLogo;
