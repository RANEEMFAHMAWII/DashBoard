import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import LayersIcon from "@mui/icons-material/Layers";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddchartIcon from "@mui/icons-material/Addchart";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <GridViewIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

   
  },
  {
    title: "TODO & TASKS",
    path: "/apps/to-do/",
    icon: <LayersIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "To Do",
        path: "/apps/to-do/",
      },
      {
        title: "Calendar",
        path: "/apps/calendar/",
      },
    ],
  },
  {
    title: "Email",
    path: "/email/inbox/",
    icon: <MailOutlineIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

  },
  {
    title: "Clients ",
    path: "/clients/clients-list",
    icon: <PostAddIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

  
  },
  {
    title: "Team",
    path: "/projects/TeamUsers",
    icon: <CopyAllIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

   
  },
  {
    title: "Analytics",
    path: "/analytics/customers/",
    icon: <AddchartIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Customers",
        path: "/analytics/customers/",
      },
      {
        title: "Reports",
        path: "/analytics/reports/",
      },
    ],
  },
 
 
  {
    title: "Editors",
    path: "/forms/form-layouts/",
    icon: <CheckBoxOutlineBlankIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
    
      {
        title: "Advanced Elements",
        path: "/forms/advanced-elements/",
      },
      {
        title: "Editors",
        path: "/forms/editors/",
      },
     
    ],
  },
  {
    title: "Invoice",
    path: "/Invoice/InvoiceLists",
    icon: <ContentCopyIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

   
  },
  {
    title: "ContactsUS",
    path: "/authentication/sign-in/",
    icon: <LockIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

   
  },
  {
    title: "News",
    path: "/notification/",
    icon: <NotificationsNoneIcon />,
  },
  {
    title: "Blogs",
    path: "/Blogs/index",
    icon: <SettingsIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "AddBlog",
        path: "/Blogs/account/",
      },
     
    ],
  },
];