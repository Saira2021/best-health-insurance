import React from "react";
import PropTypes from "prop-types";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function DynamicRadioGroup({ label, options, name, row = true }) {
  return (
    <FormControl>
      <FormLabel id={`${name}-radio-buttons-group-label`}>{label}</FormLabel>
      <RadioGroup
        row={row}
        aria-labelledby={`${name}-radio-buttons-group-label`}
        name={name}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

DynamicRadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  row: PropTypes.bool,
};

export default DynamicRadioGroup;
