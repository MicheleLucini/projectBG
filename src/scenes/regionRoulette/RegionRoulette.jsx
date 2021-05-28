import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/button";
import { GAME_PHASES, REGIONS } from "../../logic/constants";

import "./regionRoulette.css";

const RegionRoulette = ({ changePhase }) => {
  return (
    <div id="region-roulette">
      <ul>
        {Object.keys(REGIONS).map((keyName) => (
          <li className="travelcompany-input" key={REGIONS[keyName].id}>
            <span className="input-label">
              id: {REGIONS[keyName].id} Name: {REGIONS[keyName].name}{" "}Populations: {REGIONS[keyName].populations}
            </span>
          </li>
        ))}
      </ul>
      <Button
        text={"Continue"}
        icon="play_arrow"
        onClick={() => changePhase(GAME_PHASES.REGION_ROULETTE)}
      ></Button>
    </div>
  );
};

RegionRoulette.propTypes = {
  changePhase: PropTypes.func.isRequired,
};

RegionRoulette.defaultProps = {};

export default RegionRoulette;
