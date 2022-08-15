import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide(isMobile) {
  const formRef = React.useRef();

  // var item_value =localStorage.getItem("token")

  const history = useNavigate();
  const [token, setToken] = useState("");
  console.log("s", token);
  // useEffect(()=>{

  //     if(token.token){
  //       localStorage.setItem("token", token.token)

  //     history("/home")
  //   }
  //   else{
  //     history("/")
  //   }

  // },[token])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      let fetchResult = await axios.post(
        "https://routerserv.herokuapp.com/user/login",
        { email: data.get("email"), password: data.get("password") }
      );
      console.log("first", fetchResult.data);
      setToken(fetchResult.data);
      history("/home");
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <form ref={formRef}> */}

      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(./road.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
           
          >
            <img src="./a.png" width="97%" style={{margin:"5px"}}/>

          </Box>
          <Box
            sx={{
              my: 6,
              mx: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >

            {/* <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}> */}
              <img src="./ll2.png" style={{width:"150px"}} />
            {/* </Avatar> */}
            <Typography component="h1" variant="h5" style={{fontFamily: "Rubik Maze"}} >
             <span style={{color:"#ffc107"}}>SMART</span>  ROAD{" "}

            </Typography>
            <p style={{fontFamily: "Ruthie",color:"blue",marginLeft: "73px"}} >By Akrem khalil</p>
            <Typography component="h2" variant="h5"  style={{marginTop:"25px"}}>
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <p>{token.token ? null : token}</p>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Grid container>
                <p>{token.token ? "you are loged in" : ""}</p>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* </form> */}
    </ThemeProvider>
  );
}
