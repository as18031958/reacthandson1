import React from "react";
import "./style.css";

 class ClassComp extends React.Component {
  render() {
    return (
      <div class="ClassBox">
        <h1>This is created using Class Component</h1>
        <h3>This is done by external CSS</h3>
        <h4>This is done by inline CSS</h4>
      </div>
    );
  }}
  export default ClassComp;