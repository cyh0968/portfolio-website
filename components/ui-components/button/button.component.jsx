import styles from './button.module.scss';
import Link from 'next/link';

function Button({ href = '#', name = 'button', onClick = null, children = 'button' }) {
    function handleOnClick(event) {
        event.preventDefault();
        if (onClick) {
            onClick(event);
        }
    }

    return (
        <div className={styles.button} name={name} onClick={handleOnClick}>
            <Link href={href}>
                <a className={styles.text}>{children}</a>
            </Link>
            <div className={styles.shadow}></div>
        </div>
    );
}

export default Button;
