import PropTypes from "prop-types";

export const burgerPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  image: PropTypes.string.isRequired,
});
