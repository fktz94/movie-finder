// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function Arrows({ handleNextPage, handlePrevPage, maxPage, page, results }) {
  return (
    results > 10 && (
      <div className="arrows">
        <button type="button" disabled={page === 1} onClick={handlePrevPage}>
          ⬅️
        </button>
        <button type="button" disabled={page === maxPage} onClick={handleNextPage}>
          ➡️
        </button>
      </div>
    )
  );
}

Arrows.propTypes = {
  handleNextPage: PropTypes.func.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  maxPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  results: PropTypes.string.isRequired
};
