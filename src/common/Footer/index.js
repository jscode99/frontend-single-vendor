import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";

import Logo from "../../assets/walmartLogo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import styles from "./index.module.sass";

const Footer = () => {
  const getToKnow = [
    { title: "About Us", url: "/aboutUs" },
    { title: "Careers", url: "/aboutUs" },
    { title: "Our Team ", url: "/aboutUs" },
    { title: "Contact Us", url: "/aboutUs" },
  ];

  const letUsHelp = [
    { title: "Your Account", url: "/aboutUs" },
    { title: "Returns Center", url: "/aboutUs" },
    { title: "100% Purchase Protection", url: "/aboutUs" },
    { title: "Help", url: "/aboutUs" },
  ];
  return (
    <Box className={styles.footer_container}>
      <Grid container height={`100%`} justifyContent="space-evenly">
        <Grid item md={2}>
          <Box sx={{ display: "flex", height: "100%", alignItems: "center" }}>
            <img src={Logo} alt="logo" className={styles.footer_logo} />
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              alignItems: "start",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "white", fontWeight: "bold" }}
              className={styles.footer_subtitle}
            >
              Get to Know Us
            </Typography>
            <Stack
              direction={`column`}
              sx={{ color: "#DDD", width: "100%", alignItems: "inherit" }}
              spacing={0.5}
            >
              {getToKnow &&
                getToKnow.map((item, index) => (
                  <Typography key={index} className={styles.footer_subtitle2}>
                    {item.title}
                  </Typography>
                ))}
            </Stack>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              alignItems: "start",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "white", fontWeight: "bold" }}
              className={styles.footer_subtitle}
            >
              Let Us Help You
            </Typography>
            <Stack
              direction={`column`}
              sx={{ color: "#DDD", width: "100%", alignItems: "inherit" }}
              spacing={0.5}
            >
              {letUsHelp &&
                letUsHelp.map((item, index) => (
                  <Typography key={index} className={styles.footer_subtitle2}>
                    {item.title}
                  </Typography>
                ))}
            </Stack>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              alignItems: "start",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "white", fontWeight: "bold" }}
              className={styles.footer_subtitle}
            >
              Our Address :
            </Typography>
            <Typography paragraph className={styles.footer_subtitle2} m={0}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2} alignItems="center">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "white", fontWeight: "bold" }}
              className={styles.footer_subtitle}
            >
              Connect with Us
            </Typography>
            <Stack
              direction={`row`}
              sx={{ color: "whitesmoke" }}
              spacing={2}
              mt={1}
            >
              <FacebookIcon
                onClick={() => console.log("FaceBook")}
                className={styles.footer_socialMd}
              />
              <InstagramIcon
                onClick={() => console.log("Instagram")}
                className={styles.footer_socialMd}
              />
              <TwitterIcon
                onClick={() => console.log("Twitter")}
                className={styles.footer_socialMd}
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
