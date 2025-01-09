import Button from '@mui/material/Button';
import PropTypes from "prop-types";

export default function IconButton({ onClick, text='', icon }) {
  return <Button variant="none" onClick={onClick}>
    {text} {icon}
  </Button>;
}

IconButton.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.element.isRequired,
    text: PropTypes.string,
  };