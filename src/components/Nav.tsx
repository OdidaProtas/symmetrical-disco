import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import AppSettingsAltTwoToneIcon from '@mui/icons-material/AppSettingsAltTwoTone';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ApiIcon from '@mui/icons-material/Api';
import { useHistory } from "react-router";

const NavOptions = [
  { name: "My APPS", Icon: AppSettingsAltTwoToneIcon },
];

export default function Nav() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <NavItem Icon={ApiIcon} name={"API"}  />
      {NavOptions.map((o: any, i: number) => (
        <NavItem Icon={o.Icon} name={o.name} key={i} />
      ))}
    </List>
  );
}

const NavItem = ({ name, Icon, }: any) => {
  const [open, setOpen] = React.useState(false);

  const { push } = useHistory();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            onClick={() => push(`/dashboard/`)}
            sx={{ pl: 4 }}
          >
            <ListItemIcon>
              <AddCircleOutlineTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary={`Add New`} />
          </ListItemButton>
          {
            ["one", "two", "three"].map((e: any, idx: number) => (
              <ListItemButton
                onClick={() => push(`/dashboard/Lab`)}
                key={idx}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>
                  <SettingsApplicationsIcon />
                </ListItemIcon>
                <ListItemText primary={`Nav item ${idx + 1}`} />
              </ListItemButton>
            ))
          }
        </List>
      </Collapse>
    </>
  );
};
