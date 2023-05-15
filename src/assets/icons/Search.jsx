import PropTypes from 'prop-types';

const Search = ({ color, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...rest}
  >
    <path
      stroke={color || "#111827"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
    />
  </svg>
)

Search.propTypes = {
    color: PropTypes.string,
}

export default Search
