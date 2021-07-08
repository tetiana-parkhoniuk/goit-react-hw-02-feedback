import PropTypes from 'prop-types';
import styles from 'components/Section/Section.module.css'


export default function Section({ children, title }) {
    return (
        <section>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    )
}

