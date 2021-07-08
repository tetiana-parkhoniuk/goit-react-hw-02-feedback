import PropTypes from 'prop-types';
import styles from 'components/Notification/Notification.module.css';

export default function Notification({ message }) {
    return (
        <p>{message}</p>
    )
}

