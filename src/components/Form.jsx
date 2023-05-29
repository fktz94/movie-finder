// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function Form({ handleSubmit, searchError }) {
  return (
    <header>
      <h2>Search a movie!</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="search"
          style={searchError ? { border: '1px solid red' } : {}}
          name="query"
          placeholder="Ej: Avengers, Star Wars..."
        />
        <button type="submit">Search!</button>
      </form>
      {searchError && <p style={{ color: 'red' }}>{searchError}</p>}
    </header>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  searchError: PropTypes.string
};

Form.defaultProps = {
  searchError: ''
};
