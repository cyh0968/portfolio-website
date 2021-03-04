// format documentation https://date-fns.org/v2.16.1/docs/format
import { parseISO, format } from 'date-fns';
import styles from './date.module.scss';

function Date({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export default Date;
