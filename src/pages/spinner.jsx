// components/Spinner.js
import React, { useState, useEffect } from 'react';
import { Backdrop, CircularProgress, Box } from '@mui/material';

const Spinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes.
    // Replace this with actual data loading or API calls.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Backdrop open={loading} style={{ zIndex: 9999 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Spinner;
