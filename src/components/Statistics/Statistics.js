import PropTypes from 'prop-types';
import styles from 'components/Statistics/Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive Feedback: {total > 0 && good > 0 && positivePercentage}&#x25;</li>
        </ul>
    )
}

