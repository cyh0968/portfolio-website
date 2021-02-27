import MySqlSvg from '../../../../assets/logos/mysql.svg';
import { LogoContainer } from '../logo-container';

function MySqlLogo({ fill = '#eeeeee', stroke = '' }) {
    return (
        <LogoContainer name="mysql">
            <MySqlSvg fill={fill} stroke={stroke} />
        </LogoContainer>
    );
}

export default MySqlLogo;