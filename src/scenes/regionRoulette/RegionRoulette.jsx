import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Button from "../../components/button";
import { GAME_PHASES, REGIONS } from "../../logic/constants";

import "./regionRoulette.css";

const RegionRoulette = ({ changeClientScene, gameData, changeGameData }) => {
  const choosenRegion = useMemo(() => {
    const usedRegions = gameData.regions_played.map((r) => r.id);
    const unusedRegions = Object.keys(REGIONS)
      .map((keyName) =>
        !usedRegions.includes(REGIONS[keyName].id) ? REGIONS[keyName].id : null
      )
      .filter((x) => x);
    const id = unusedRegions[Math.floor(Math.random() * unusedRegions.length)];
    return REGIONS.filter((obj) => obj.id === id)[0];
  }, [gameData]);

  return (
    <div id="region-roulette">
      <div className="choosen-region">
        <label>Name:</label>
        <span>{choosenRegion.name}</span>
        <label>Populations:</label>
        <span>
          {choosenRegion.populations
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, "'")}
        </span>
      </div>
      <Button
        text="Continue"
        icon="play_arrow"
        onClick={() => changeClientScene(GAME_PHASES.REGION_ROULETTE)}
      ></Button>
    </div>
  );
};

RegionRoulette.propTypes = {
  changeClientScene: PropTypes.func.isRequired,
  changeGameData: PropTypes.func.isRequired,
};

RegionRoulette.defaultProps = {};

export default RegionRoulette;
