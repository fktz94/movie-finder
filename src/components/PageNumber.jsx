// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function PageNumber({ maxPage, page, results }) {
  return (
    results > 0 && (
      <>
        <span>Total results: {results}</span>
        <span>
          Page {page}/{maxPage}
        </span>
      </>
    )
  );
}

PageNumber.propTypes = {
  maxPage: PropTypes.number,
  page: PropTypes.number,
  results: PropTypes.string.isRequired
};

PageNumber.defaultProps = {
  maxPage: 0,
  page: 0
};
