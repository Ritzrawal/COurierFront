import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  DirectionsRailway as ProcessIcon,
  Assessment as ReportsIcon,
  Beenhere as AnaylisisIcon,
  ContactPhone as ContactPhoneIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Home", link: "/app/dashboard", icon: <HomeIcon /> },
  { id: 2, label: "Orders", link: "/app/tables", icon: <TableIcon /> },
  {
    id: 3,
    label: "Warehouse",
    link: "/app/notifications",
    icon: <NotificationsIcon />,
  },
  {
    id: 4,
    label: "Reports",
    link: "/app/ui",
    icon: <ReportsIcon />,
    children: [
      { label: "Logistics", link: "/app/reports/logistics" },
      { label: "LateDelivery", link: "/app/reports/latedelivery" },
      { label: "Comments", link: "/app/reports/comments" },
    ],
  },
  {
    id: 5,
    label: "Contacts",
    link: "/app/ui",
    icon: <ContactPhoneIcon />,
    children: [
      { label: "Customers", link: "/app//contact/customer" },
      { label: "Vendors", link: "/app//contact/vendor" },
      { label: "Employees", link: "/app//contact/employee" },
    ],
  },
  {
    id: 6,
    label: "Process",
    link: "/app/ui",
    icon: <ProcessIcon />,
    children: [
      { label: "Pickup", link: "/app//process/pickup" },
      { label: "Sent", link: "/app//process/sent" },
      { label: "RTV Delivery", link: "/app//process/rtvdelivery" },
      { label: "Delivery", link: "/app//process/delivery" },
      { label: "Return", link: "/app//process/return" },
      { label: "RTV Sent", link: "/app//process/rtvsent" },
    ],
  },
  {
    id: 7,
    label: "Analysis",
    link: "/app/ui",
    icon: <AnaylisisIcon />,
    children: [
      { label: "Icons", link: "/app/ui/icons" },
      { label: "Charts", link: "/app/ui/charts" },
      { label: "Maps", link: "/app/ui/maps" },
    ],
  },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
