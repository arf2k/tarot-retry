import React from "react";
import ShuffleShow from "../../components/shuffle-show/ShuffleShow"
import "../../styles/Readings.styles.scss"

const Readings = () => {
     return (
          <>
          <h1 className="title">Readings</h1>
          <div className="reading-page-container">
          <ShuffleShow/>
          </div>
          </>
     )
}

export default Readings