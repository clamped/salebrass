import React from 'react';
import PropTypes from 'prop-types';
import Hashes from 'jshashes';

const generateHash = signature => new Hashes.SHA256().b64(signature);

const Vacancies = ({ vacancyItems }) => {
  if (!vacancyItems) {
    vacancyItems = [];
  }

  return (
    <section className="section">
      <div className="columns vacancyHeader">
        <div className="column is-one-quarter"> 
            <p style={{
              backgroundColor: 'rgb(65, 110, 130)'
            }}>
              Instrument
            </p>
        </div>
        <div className="column is-one-quarter">
          <p style={{
            backgroundColor: 'rgb(65, 110, 130)'
          }}>
            Date Posted
          </p>
        </div>
        <div className="column">
          <p style={{
            backgroundColor: 'rgb(65, 110, 130)'
          }}>
            Details
          </p>
        </div>
      </div>
      {vacancyItems.map(item => (
        <div className="columns" key={generateHash(item.description + item.date)}>
          <div className="column is-one-quarter">
            <p className="has-text-weight-semibold">
              {item.position}
            </p>
          </div>
          <div className="column is-one-quarter">
            <p>
              {item.date}
            </p>
          </div>
          <div className="column">
            <p>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

Vacancies.propTypes = {
    vacancyItems: PropTypes.arrayOf(
        PropTypes.shape({
            position: PropTypes.string.isRequired,
            description: PropTypes.string,
            date: PropTypes.string
        })
    ),
}

export default Vacancies;
