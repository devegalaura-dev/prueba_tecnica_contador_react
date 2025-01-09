import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export default function SecondaryButton({ text, onClick, disabled}) {
  return <Button variant="outlined" onClick={onClick} disabled={disabled}>{text}</Button>;
}

SecondaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool.isRequired,
  };
