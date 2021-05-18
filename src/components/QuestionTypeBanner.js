import React from 'react';

function QuestionTypeBanner(props) {
  const styles = {
    backgroundColor: props.type === 'text' ? '#3dbf4a' : '#fc9949',
    color: '#fff',
    marginLeft: 10,
    textTransform: 'uppercase',
    padding: '4px 8px',
    fontSize: '.7em',
    borderRadius: '8px'
  }

  return (
    <span style={styles}>{props.type}</span>
  )
}

export default QuestionTypeBanner
