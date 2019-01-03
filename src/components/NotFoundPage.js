import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    This is the Not Found Page component.
    <Link to='/'>Homepage</Link>
  </div>
);

export default NotFoundPage;