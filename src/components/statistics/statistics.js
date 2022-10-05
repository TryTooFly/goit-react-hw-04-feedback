import PropTypes from 'prop-types';
import React from 'react';
import s from './statistics.module.css';

export default function Statistics({
  message,
  good,
  bad,
  neutral,
  total,
  percentage,
}) {
  return total(
    <div className={s.statsThumb}>
      <span className={s.stat}>
        Good: <span>{good}</span>
      </span>
      <span className={s.stat}>
        Neutral: <span>{neutral}</span>
      </span>
      <span className={s.stat}>
        Bad: <span>{bad}</span>
      </span>
      <span className={s.stat}>
        Total: <span>{total}</span>
      </span>
      <span className={s.stat}>
        Percentage: <span>{percentage}%</span>
      </span>
    </div>
  );
}

Statistics.propTypes = {
  message: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
