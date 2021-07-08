import PropTypes from 'prop-types';
import styles from 'components/FeedbackOptions/FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div>
            {options.map(option => (
                <button
                    key={option}
                    name={option}
                    type="button"
                    className={styles.feedbackBtn}
                    onClick={onLeaveFeedback}>
                    {option}
                </button>
            ))}
        </div>
    )
}


