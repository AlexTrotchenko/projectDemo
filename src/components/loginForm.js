import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { signInWithEmail } from "../firebaseServis";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  errorText: {
    paddingTop: theme.spacing(4),
  },
}));

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(5, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const LoginForm = () => {
  const classes = useStyles();
  const { authenticated } = useSelector((state) => state.auth);
  const { loading, initialized } = useSelector((state) => state.async);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      console.log("sumbit");
      try {
        await signInWithEmail(values).then(() => {
          setSubmitting(false);
        });
      } catch (error) {
        setErrors({ auth: "Problem with username or password" });
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      {initialized && !authenticated && !loading && (
        <Grid
          className={classes.formContainer}
          container
          component="form"
          direction="column"
          spacing={2}
          onSubmit={formik.handleSubmit}
        >
          <Grid item>
            <TextField
              xs={12}
              md={3}
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onBlur={formik.handleBlur("email")}
              fullWidth
              autoFocus
              variant="outlined"
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item>
            <TextField
              xs={12}
              fullWidth
              variant="outlined"
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

          <Grid item>
            <Button
              color="primary"
              size="large"
              disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
              variant="contained"
              fullWidth
              type="submit"
            >
              Login
              {formik.isSubmitting && <CircularProgress size={24} />}
            </Button>
          </Grid>

          {formik.errors.auth && (
            <Typography
              className={classes.errorText}
              color="error"
              textAlign="center"
            >
              {" "}
              Wrong user login or password
            </Typography>
          )}
        </Grid>
      )}
    </>
  );
};

export default LoginForm;
