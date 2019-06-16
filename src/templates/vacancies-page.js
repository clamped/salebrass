import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Vacancies from '../components/Vacancies';

export const VacanciesPageTemplate = ({
  title,
  description,
  vacancies
}) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <p>{description}</p>
            </div>
          </div>
          <div className="section">
            <Vacancies vacancyItems={vacancies} />
          </div>
        </div>
      </div>
    </section>
  )
}

VacanciesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  vacancies: PropTypes.array,
}

const VacanciesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <VacanciesPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        vacancies={frontmatter.vacancies}
      />
    </Layout>
  )
}

VacanciesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default VacanciesPage;

export const pageQuery = graphql`
  query VacanciesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "vacancies-page" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
