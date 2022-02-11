import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { styled } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router";
import * as yup from "yup";

const validationSchema = yup.object({
  lis: yup.string("Enter your email").required("value requared"),
});

const FormContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const ChooseLis = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      lis: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      history.push(`/scan/${values.lis}`);
    },
  });
  return (
    <FormContainer
      container
      component="form"
      direction="column"
      spacing={2}
      onSubmit={formik.handleSubmit}
    >
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Choose lis</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formik.values.lis}
            autoFocus
            name="lis"
            label="Choose lis"
            onChange={formik.handleChange}
          >
            <MenuItem value="25">25</MenuItem>
            <MenuItem value="26">26</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Button
          color="primary"
          size="large"
          disabled={!formik.isValid || !formik.dirty}
          variant="contained"
          fullWidth
          type="submit"
        >
          Choose
        </Button>
      </Grid>
    </FormContainer>
  );
};
export default ChooseLis;
