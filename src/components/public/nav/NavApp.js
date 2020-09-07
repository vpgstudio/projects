import React, { Component } from "react";
import { AppBar, Drawer, MenuItem } from "material-ui";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      show: null,
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div className="App">
        <AppBar
          style={{ background: "DarkRed" }}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          title="VpgStudio"
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <AppBar title="VpgStudio" style={{ background: "DarkBlue" }} />
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/about">About</MenuItem>
          <MenuItem href="/contact">Contact us</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
