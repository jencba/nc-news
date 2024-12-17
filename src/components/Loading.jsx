import React from 'react';
import { Spinner } from 'react-bootstrap';

export const Loading = () => {
  return (
    <div className="loading-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  );
};
