import React from 'react'
import PropTypes from 'prop-types'

const Vacancies = ({ vacancyItems }) => (
  <div className="columns is-multiline">
    {vacancyItems.map(item => (
      <div className="column is-6">
        <section className="section">
          <h3>{item.position}</h3>
          <h4>{item.date}</h4>
          <p>{item.description}</p>
        </section>
      </div>
    ))}
  </div>
)

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
