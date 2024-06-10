import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  InputLabel,
  Divider,
  Container,
} from "@mui/material";

const apiUrl = import.meta.env.VITE_API_URL;

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
// const priceData = {
//   "Nevada": { "male": [541, 511, 497, 382, 424, 361, 342, 324, 305, 286, 243, 207, 195, 159, 148, 142, 136, 131, 125, 115, 109, 100, 100, 100, 100, 100], "female": [409, 390, 381, 381, 362, 299, 291, 283, 275, 268, 242, 216, 212, 198, 195, 192, 189, 186, 184, 181, 181, 183, 172, 166, 154, 130] },
//   "Georgia": { "male": [541, 511, 497, 382, 424, 361, 342, 324, 305, 286, 243, 207, 195, 159, 148, 142, 136, 131, 125, 115, 109, 100, 100, 100, 100, 100], "female": [409, 390, 381, 381, 362, 299, 291, 283, 275, 268, 242, 216, 212, 198, 195, 192, 189, 186, 184, 181, 181, 183, 172, 166, 154, 130] },
//   "Ohio": { "male": [541, 511, 497, 382, 424, 361, 342, 324, 305, 286, 243, 207, 195, 159, 148, 142, 136, 131, 125, 115, 109, 100, 100, 100, 100, 100], "female": [409, 390, 381, 381, 362, 299, 291, 283, 275, 268, 242, 216, 212, 198, 195, 192, 189, 186, 184, 181, 181, 183, 172, 166, 154, 130] },
//   "Colorado": { "male": [541, 511, 497, 382, 424, 361, 342, 324, 305, 286, 243, 207, 195, 159, 148, 142, 136, 131, 125, 115, 109, 100, 100, 100, 100, 100], "female": [409, 390, 381, 381, 362, 299, 291, 283, 275, 268, 242, 216, 212, 198, 195, 192, 189, 186, 184, 181, 181, 183, 172, 166, 154, 130] },
//   "Montana": { "male": [541, 511, 497, 382, 424, 361, 342, 324, 305, 286, 243, 207, 195, 159, 148, 142, 136, 131, 125, 115, 109, 100, 100, 100, 100, 100], "female": [409, 390, 381, 381, 362, 299, 291, 283, 275, 268, 242, 216, 212, 198, 195, 192, 189, 186, 184, 181, 181, 183, 172, 166, 154, 130] },
//   "South Dakota": { "male": [541, 511, 497, 382, 424, 361, 342, 324, 305, 286, 243, 207, 195, 159, 148, 142, 136, 131, 125, 115, 109, 100, 100, 100, 100, 100], "female": [409, 390, 381, 381, 362, 299, 291, 283, 275, 268, 242, 216, 212, 198, 195, 192, 189, 186, 184, 181, 181, 183, 172, 166, 154, 130] },
//   "Utah": { "male": [541, 511, 497, 382, 424, 361, 342, 324, 305, 286, 243, 207, 195, 159, 148, 142, 136, 131, 125, 115, 109, 100, 100, 100, 100, 100], "female": [409, 390, 381, 381, 362, 299, 291, 283, 275, 268, 242, 216, 212, 198, 195, 192, 189, 186, 184, 181, 181, 183, 172, 166, 154, 130] },
//   "Florida": { "male": [554, 540, 425, 467, 403, 385, 366, 348, 329, 326, 250, 238, 203, 191, 185, 179, 174, 168, 162, 138, 123, 123, 123, 123, 123], "female": [474, 405, 414, 383, 376, 367, 360, 352, 325, 300, 296, 283, 279, 276, 273, 273, 265, 265, 265, 267, 256, 250, 238, 214] },
//   "Texas": { "male": [554, 540, 425, 467, 403, 385, 366, 348, 329, 326, 250, 238, 203, 191, 185, 179, 174, 168, 162, 138, 123, 123, 123, 123, 123], "female": [474, 405, 414, 383, 376, 367, 360, 352, 325, 300, 296, 283, 279, 276, 273, 273, 265, 265, 265, 267, 256, 250, 238, 214] },
//   "Illinois": { "male": [554, 540, 425, 467, 403, 385, 366, 348, 329, 326, 250, 238, 203, 191, 185, 179, 174, 168, 162, 138, 123, 123, 123, 123, 123], "female": [474, 405, 414, 383, 376, 367, 360, 352, 325, 300, 296, 283, 279, 276, 273, 273, 265, 265, 265, 267, 256, 250, 238, 214] },
//   "Iowa": { "male": [548, 519, 505, 476, 435, 373, 355, 298, 319, 309, 266, 230, 212, 178, 167, 161, 156, 150, 145, 139, 129, 129, 129, 129, 129, 120], "female": [420, 402, 393, 402, 350, 314, 306, 298, 291, 283, 265, 234, 233, 223, 221, 200, 200, 200, 200, 200, 134, 125, 190, 184, 173, 150] },
//   "Michigan": { "male": [564, 534, 520, 490, 447, 383, 365, 346, 328, 309, 266, 230, 218, 182, 171, 165, 159, 154, 148, 142, 137, 127, 100, 100, 122, 122], "female": [432, 413, 403, 385, 360, 322, 314, 306, 298, 291, 265, 239, 235, 222, 218, 215, 212, 209, 206, 206, 205, 206, 195, 188, 177, 160] },
// };
const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    state: "",
    age: "",
    gender: "",
    dentalVision: "",
    relHealthy: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiUrl}/users`, formData);
      console.log(res.data);
      alert("Data is submitted successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNo: "",
        state: "",
        age: "",
        gender: "",
        dentalVision: "",
        relHealthy: "",
      });
      if (formData.dentalVision === "yes") {
        navigate("/pricing");
      } else {
        navigate("/health-pricing");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // const calculatePrice = (state, age, gender) => {
  //   const ageInt = parseInt(age, 10);
  //   const prices = priceData[state]?.[gender];
  //   if (!prices) return null;

  //   const ageIndex = {
  //     62: 0, 60: 1, 59: 2, 57: 3, 55: 4, 52: 5, 50: 6, 49: 7, 48: 8, 45: 9, 42: 10, 41: 11,
  //     38: 12, 37: 13, 36: 14, 35: 15, 34: 16, 33: 17, 32: 18, 31: 19, 28: 20, 25: 21, 24: 22,
  //     22: 23, 18: 24
  //   }[ageInt];

  //   return ageIndex !== undefined ? prices[ageIndex] : null;
  // };

  return (
    <div className="contact-us-form-container">
      <div style={{ padding: "30px" }}>
        <Divider />
      </div>
      <Container component="main" maxWidth="xs">
        <div style={{ textAlign: "center" }}>
          <h1>Contact Us</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            required
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="contactNo"
            label="Contact No"
            value={formData.contactNo}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControl required fullWidth margin="normal">
            <InputLabel>State</InputLabel>
            <Select name="state" value={formData.state} onChange={handleChange}>
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            name="age"
            label="Age"
            type="number"
            required
            value={formData.age}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <br />

          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              required
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <br />
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">
              Are you relatively healthy?
            </FormLabel>
            <RadioGroup
              name="relHealthy"
              value={formData.relHealthy}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <br />
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Do you want dental vision?</FormLabel>
            <RadioGroup
              name="dentalVision"
              value={formData.dentalVision}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Container>
      <div style={{ padding: "30px" }}>
        <Divider />
      </div>
    </div>
  );
};

export default ContactUs;
