import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export default function PrimaryButton({ text, onClick }) {
  return <Button variant="contained" onClick={onClick}>{text}</Button>;
}

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

