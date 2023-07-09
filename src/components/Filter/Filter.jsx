// import PropTypes from 'prop-types';
const Filter = ({ value, onChange }) => (
    <label>
            Find contacts by name
            <input
              value={value}
              onChange={onChange}
              type="text"
              name="filter"
              />
          </label>
)

export default Filter;