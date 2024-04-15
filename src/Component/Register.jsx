// pages/register.js
"use client";
import { useForm } from "react-hook-form";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Container component="main" maxWidth="xs">
        <div>
          <Typography component="h1" variant="h5" align="center">
            Sign up
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  {...register("name", { required: "Name is required" })}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{10}$/i,
                      message: "Invalid phone number (10 digits)",
                    },
                  })}
                  error={!!errors.phone}
                  helperText={errors.phone ? errors.phone.message : ""}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: "1rem" }}
            >
              Sign up
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
