import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const MainMenu = ({ open, mobileMenuClick, isMobile }) => {
  const adminResult = localStorage.getItem("isAdmin");
  console.log("admin data", adminResult);

  let data = [
    {
      label: "Home",
      icon: "",
      route: "/home",
    },
    {
      label: "Registration",
      icon: "",
      route: "/registration",
    },
    {
      label: "Reports",
      icon: "",
      route: "/reports",
    },
    {
      label: "Private",
      icon: "",
      route: "/private",
    },
  ];

  const [MenuItems, setMenuItems] = useState(data);

  if (!adminResult) {
    setMenuItems([
      {
        label: "Home",
        icon: "",
        route: "/home",
      },
      {
        label: "Registration",
        icon: "",
        route: "/registration",
      },
    ]);
  }

  const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState("Home");

  useEffect(() => {
    navigate("/home", { replace: true });
  }, []);

  if (adminResult) {
  }

  const handleClickMenuItem = ({ label, route }) => {
    setSelectedMenu(label);
    mobileMenuClick?.();
    if (route) {
      navigate(route, { replace: true });
    }
    if (label === "Log out") {
      navigate("/login", { replace: true });
    }
  };

  const menus = useMemo(() => {
    const MobileMenuItem = MenuItems.filter((item) => item.label !== "Logs");

    return isMobile
      ? [...MobileMenuItem, { label: "Log out", icon: "" }]
      : MenuItems;
  }, [isMobile]);

  return (
    <div style={{ height: "100%" }}>
      <List>
        {menus.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                height: "48px",
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                borderRadius: "5px",
                marginLeft: "2px",
                marginRight: "2px",
                paddingLeft: "8px",
                paddingRight: "8px",
                backgroundColor:
                  selectedMenu === item.label
                    ? "rgba(184, 222, 255, 0.30)"
                    : "#0C1B2A",
                "&:hover": {
                  backgroundColor:
                    // selectedMenu === item.label
                    "rgba(184, 222, 255, 0.30)",
                  //   : lighten(0.1, "#0C1B2A"),
                },
              }}
              onClick={() => {
                handleClickMenuItem(item);
              }}
            >
              <ListItemText
                style={{
                  fontFamily: "Lato !important",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
                primary={item.label}
                sx={{
                  ".MuiListItemText-primary": {
                    opacity: open ? 1 : 0,
                    fontFamily: "Lato !important",
                    color: "#FFFFFE !important",
                    fontSize: "14px !important",
                    fontWeight: 400,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MainMenu;
