import Button from '@mui/material/Button';
import PropTypes from "prop-types";

export default function IconButton({ onClick, disabled, text='', icon}) {
  return <Button variant="none" onClick={onClick} disabled={disabled}>
    {text} {icon}
  </Button>;
}

IconButton.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.element.isRequired,
    text: PropTypes.string,
    disabled: PropTypes.bool.isRequired,
  };