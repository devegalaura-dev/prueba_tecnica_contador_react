import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export default function PrimaryButton({ text, onClick, disabled}) {
  return <Button variant="contained"onClick={onClick} disabled={disabled}>{text}</Button>;
}

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool.isRequired,
  };

