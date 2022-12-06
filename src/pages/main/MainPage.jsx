import {
  createTheme,
  ThemeProvider,
  Typography,
  Box,
  Container,
} from "@mui/material";
import CommonWrapper from "../../components/container/CommonWrapper";

const theme = createTheme();

const MainPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CommonWrapper>
        <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              OUR MINI BLOG
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
          </Container>
        </Box>
      </CommonWrapper>
    </ThemeProvider>
  );
};

export default MainPage;
