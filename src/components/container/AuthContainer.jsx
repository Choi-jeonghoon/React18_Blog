import { Paper, Box, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SigninForm from "../auth/signin/SigninForm";
import SignupForm from "../auth/signup/SignupForm";
import AuthSide from "../auth/common/AuthSide";
import AuthHeader from "./../auth/common/AuthHeader";

const theme = createTheme();

const AuthContainer = ({ type, register, errors, onUserLoginRequestEvent }) => {
  console.log(type);
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <AuthSide />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AuthHeader title={type === "login" ? "Sign in" : "Sign up"} />
            {type === "login" ? (
              <SigninForm
                register={register}
                errors={errors}
                onUserLoginRequestEvent={onUserLoginRequestEvent}
              />
            ) : (
              <SignupForm
                register={register}
                errors={errors}
                onUserLoginRequestEvent={onUserLoginRequestEvent}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default AuthContainer;
