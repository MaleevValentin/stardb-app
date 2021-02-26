import React from "react";
import Row from "../row";
import {PlanetDetails, PlanetList} from "../sw-components";

export default class PlanetsPage extends React.Component {

  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({selectedItem});
  };

  render() {
    const {selectedItem} = this.state;
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected}/>}
        right={<PlanetDetails itemId={selectedItem}/>}
      />
    );
  }
};