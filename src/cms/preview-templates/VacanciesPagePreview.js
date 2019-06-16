import React from 'react';
import PropTypes from 'prop-types';
import { VacanciesPageTemplate } from '../../templates/vacancies-page';

const VacanciesPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <VacanciesPageTemplate
        title={data.title}
        description={data.description}
        vacancies={data.vacancies || [] }
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

VacanciesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default VacanciesPagePreview;
