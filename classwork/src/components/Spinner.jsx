import React from 'react';
import spinnerGif from '../assets/spinner.gif';

const Spinner = () => {
  return (
    <div style={styles.container}>
      <img src={spinnerGif} alt="Загрузка..." style={styles.image} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px', 
  },
  image: {
    width: '280px',  
    height: '280px'
  }
};

export default Spinner;
