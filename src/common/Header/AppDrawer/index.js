import { useState } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
//Icons
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
//Logo
import Logo from "../../../assets/logo.png";
import { Typography } from "@mui/material";

import styles from './index.module.sass';

const drawerWidth = 300;

export default function AppDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const CustomNav = styled(List)({
    "& .MuiListItemButton-root": {
      paddingLeft: 24,
      paddingRight: 24,
    },
    "& .MuiListItemIcon-root": {
      minWidth: 0,
      marginRight: 16,
    },
    "& .MuiSvgIcon-root": {
      fontSize: 20,
    },
  });

  const drawer = (
    <>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "rgb(102, 157, 246)" },
            background: { paper: "#122234" },
          },
        })}
      >
        <Paper elevation={0} sx={{ height: `auto` }} square>
          <CustomNav component="nav" disablePadding />
          <ListItemButton
            component={`a`}
            href={`/`}
            sx={{ justifyContent: "center" }}
          >
            <img src={Logo} alt="Org Logo" height="100" width="100" />
          </ListItemButton>
          <Divider variant={`middle`} />
          <Typography sx={{ color: "#a1a6b1e6", margin: `12px 0 0 18px` }}>
            OurCompany.com
          </Typography>
          <List dense>
            {[
              "Track Orders",
              "Reorder Items",
              "Lists",
              "Your Location",
              "Local Store",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{ height: 56 }}>
                  <ListItemIcon sx={{ minWidth: `40px` }}>
                    {index % 2 === 0 ? (
                      <InboxIcon sx={{ fontSize: `23px` }} />
                    ) : (
                      <MailIcon sx={{ fontSize: `23px` }} />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={`${text}`}
                    primaryTypographyProps={{
                      fontWeight: "medium",
                      variant: "body2",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[
              "Saving spotlight",
              "Back to school",
              "Electronics &amp; Office",
              "Clothing, Shoes &amp; Accessories",
              "Home, Furniture &amp; Appliances",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{ height: 56 }}>
                  <ListItemIcon sx={{ minWidth: `40px` }}>
                    {index % 2 === 0 ? (
                      <InboxIcon sx={{ fontSize: `23px` }} color="primary" />
                    ) : (
                      <MailIcon sx={{ fontSize: `23px` }} color="primary" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={`${text}`}
                    primaryTypographyProps={{
                      color: "primary",
                      fontWeight: "medium",
                      variant: "body2",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <CustomNav />
        </Paper>
      </ThemeProvider>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Grid container height={`100%`} alignItems={`center`} justifyContent={`center`}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ height:'100%' }}
        >
          <MenuIcon className={styles.menuIcon} />
        </IconButton>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
    </Grid>
  );
}
