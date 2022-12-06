import { Button, TextField, Link, Box, Grid } from "@mui/material";

const SignupForm = ({ register, errors, onUserLoginRequestEvent }) => {
  return (
    <Box component="form" sx={{ mt: 1 }} onSubmit={onUserLoginRequestEvent}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email Address"
        type="email"
        name="email"
        autoFocus
        error={errors.email ? true : false}
        helperText={errors?.email?.message}
        {...register("email")}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="FirstName"
        type="text"
        name="firstname"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="LastName"
        type="text"
        name="lastname"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        error={errors.password ? true : false}
        helperText={errors?.password?.message}
        {...register("password")}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignupForm;
