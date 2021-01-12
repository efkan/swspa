import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const messages = {
  500: 'Something went wrong. Please try again soon.',
  429: 'Daily 10,000 requests can be done by a specific IP address.',
  404: 'The resource not found'
}
const Error = ({status, message}) => {
  return (
    <div className='error-container'>
      <div className=''>
        <span className="status">{status}</span><i className="r2d2 swg swg-r2d2-o"></i>
      </div>
      <span className='message'>{messages[status] ? messages[status] : message}</span>
    </div>
  )
}

Error.propTypes = {
  status: PropTypes.number.isRequired,
  message: PropTypes.string
}

export { Error };