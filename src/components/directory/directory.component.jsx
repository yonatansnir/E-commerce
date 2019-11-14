import React from "react";
import MenuItem from "../menu-item/menu-item.components";
import { sections } from "./directory.data";
import "./directory.style.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: sections
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
