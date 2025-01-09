import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export default function SecondaryButton({ text, onClick }) {
  return <Button variant="outlined" onClick={onClick}>{text}</Button>;
}

SecondaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };
