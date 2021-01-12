import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Error, InfiniteScroll } from '../';
import './styles.css';

const dataSkeleton = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const ListingPage = ({url}) => {
  const [status, setStatus] = useState();
  const [error, setError] = useState();
  const [nextUrl, setNextUrl] = useState(url);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  function fetchData (setIsBottom) {
    setData(prev => [...prev, ...dataSkeleton]);

    fetch(nextUrl)
      .then(res => {
        setStatus(res.status);
        return res.json();
      })
      .then(resData => {
        // NB: it waits 2000 seconds for the sake of example
        setTimeout(() => {
          setNextUrl(resData.next);
          resData.results.map(item => {
            data.push(item);
          });

          setData(data.filter(item => item.name));
          setIsBottom && setIsBottom(false);
        }, 2000)
      }).catch(err => {
        setError(err);
      });
  }

  if (status && status !== 200) {
    return <Error status={status} message={error} />
  }

  return (
    <InfiniteScroll onTrigger={fetchData}>
      <div className="listing-page-container">
        {
          data.map((item, idx) => <Card key={idx} { ...item} />)
        }
      </div>
    </InfiniteScroll>
  )
}

ListingPage.propTypes = {
  url: PropTypes.string.isRequired
}

export { ListingPage };