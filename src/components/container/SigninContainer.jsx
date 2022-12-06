import { Paper, Box, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SigninSide from "../signin/SiginSide";
import SigninForm from "../signin/SigninForm";
import SigninHeader from "../signin/SigninHeader";

const theme = createTheme();

const SigninContainer = ({ register, onUserLoginRequestEvent }) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <SigninSide />
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
            <SigninHeader />
            <SigninForm
              register={register}
              onUserLoginRequestEvent={onUserLoginRequestEvent}
            />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SigninContainer;
