import React from "react";
import logo from "../assets/brandlogo.png";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import Main from "./Main";
import DashboardIcon from "@mui/icons-material/Dashboard";
export default function Sidebar() {
  return (
    <>
      <div className="main">
        <div className="sidebar ">
          <div className="brandLogo">
            <img src={logo} alt="not found" />
          </div>
          <Divider variant="middle" style={{ backgroundColor: "gray" }} />
          <Box sx={{ width: "100%", maxWidth: 360 }}>
            <nav aria-label="main mailbox folders">
              <List>
                <p>
                  {" "}
                  <b style={{ color: "gray", marginLeft: "10px" }}>Dashboard</b>
                </p>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <OpenInBrowserIcon style={{ color: "#e2e1e3" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Dashboard"
                      style={{ color: "#e2e1e3", marginLeft: "-10px" }}
                    />
                  </ListItemButton>
                </ListItem>
                <Divider variant="middle" style={{ backgroundColor: "gray" }} />
                <p>
                  {" "}
                  <b style={{ color: "gray", marginLeft: "10px" }}>
                    Applications
                  </b>
                </p>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon style={{ color: "#e2e1e3" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Product"
                      style={{ color: "#e2e1e3", marginLeft: "-10px" }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon style={{ color: "#e2e1e3" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Product"
                      style={{ color: "#e2e1e3", marginLeft: "-10px" }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Delivery" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Driver" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>

            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </div>
        <div className="main-component-div">
          <Main />
        </div>
      </div>
    </>
  );
}
