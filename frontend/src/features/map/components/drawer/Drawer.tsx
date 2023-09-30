import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export function Drawer() {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleDrawer(open: boolean) {
    setIsOpen(open);
  }

  const anchor = "bottom";
  return (
    <div>
      <React.Fragment key={anchor}>
        <Button onClick={() => toggleDrawer(true)}>{anchor}</Button>
        <SwipeableDrawer
          anchor={anchor}
          open={isOpen}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >
          <div>bottomss</div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
