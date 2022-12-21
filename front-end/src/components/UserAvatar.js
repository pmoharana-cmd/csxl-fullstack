// TODO: use DOCUMENTATION to create an avatar component. https://mui.com/material-ui/react-avatar/
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function UserAvatar(props) {
  return <Avatar alt={props.alt} src={props.src} />;
}
