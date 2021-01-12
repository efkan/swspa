import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const InfiniteScroll = ({ children, onTrigger }) => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isBottom) {
      onTrigger(setIsBottom);
    }
  }, [isBottom]);

  function handleScroll () {
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;

    if (scrollTop + window.innerHeight + 100 >= scrollHeight) {
      setIsBottom(true);
    }
  }

  return (
    <div>
      {children}
    </div>
  )
}

InfiniteScroll.propTypes = {
  children: PropTypes.node.isRequired,
  onTrigger: PropTypes.func
}

export { InfiniteScroll }