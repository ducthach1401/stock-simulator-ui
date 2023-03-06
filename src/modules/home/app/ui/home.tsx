import { Grid } from "@mui/material";
import React, { ReactNode } from "react";
import { Menu } from "./menu";

export class Home extends React.Component {
  render(): ReactNode {
    return (
      <Grid container>
        <Grid item xs={2}>
          <Menu></Menu>
        </Grid>
        <Grid item>
          <h1>TEST</h1>
        </Grid>
      </Grid>
    );
  }
}
