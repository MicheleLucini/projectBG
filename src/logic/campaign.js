import {
  dbPut,
  dbDelete,
  dbRead,
  dbSubscribe,
  dbUnsubscribe,
} from "./database";
import { getRandomCampaignKey } from "./utility";
import { appVersion, CLIENT_SCENES } from "./constants";

// const campaign = {
//   key: "", // chiave della campagna "AAAA"
//   appVersion: "", // versione app che ha creato la campagna "0.0.4"
//   creatorDeviceId: "", // uuid identificativo del device che ha creato la campagna
// };

export const createCampaign = async (clientData) => {
  const newGame = {
    key: getRandomCampaignKey(),
    appVersion: appVersion,
    creatorDeviceId: clientData.deviceId,
  };

  await dbPut(newGame.key, newGame);

  return newGame;
};

const deleteCampaign = async (key) => {
  await dbPut(key, { deleted: true });
};

const downloadCampaign = async (key) => {
  return await dbRead(key);
};

const subscribeCampaign = async (key, onChange) => {
  await dbSubscribe(key, onChange);
};

const updateCampaign = async (key, campaignData) => {
  await dbPut(key, campaignData);
};

const existCampaign = async (key) => {
  const campaign = await dbRead(key);
  return !!campaign?.key;
};

const isMyCampaign = async (key) => {
  if (!clientData?.deviceId) return false;
  const campaign = await dbRead(key);
  return campaign?.creatorDeviceId === clientData.deviceId;
};

const campaignIsSameVersion = async (key) => {
  const campaign = await dbRead(key);
  return campaign?.appVersion === appVersion;
};

/* Complex game ops */

export const joinCampaign = async ({ key, clientData, onCampaignChange }) => {
  if (!key || key.length !== 4) {
    return "The campaign key is not valid";
  }

  const campaign = await dbRead(key);

  if (!campaign || !campaign.key) {
    return "The campaign does not exist";
  }

  if (campaign.appVersion !== appVersion) {
    return "The campaign has a different version";
  }

  updateMyPlayer(clientData);

  onCampaignChange(campaign);

  await dbSubscribe(key, onCampaignChange);

  return null;
};

export const leaveCampaign = async (key, deviceId, playerId) => {
  await dbUnsubscribe(key);

  const campaign = await dbRead(key);

  if (campaign?.creatorDeviceId === deviceId) {
    await deleteCampaign(key);
  } else {
    await resetMyPlayer(key, playerId);
  }
};

/* Gestione player */

export const updateMyPlayer = (clientData, clientCursor) => {
  if (!clientData.playerId || !clientData.campaignKey) return;

  let myPlayerData = {};
  myPlayerData[clientData.playerId + "_deviceId"] = clientData.deviceId;
  myPlayerData[clientData.playerId + "_userName"] = clientData.userName;
  myPlayerData[clientData.playerId + "_clientScene"] = clientData.clientScene;

  if (
    clientCursor &&
    clientData.clientScene === CLIENT_SCENES.GAME
  ) {
    myPlayerData[clientData.playerId + "_cursorX"] = clientCursor.x;
    myPlayerData[clientData.playerId + "_cursorY"] = clientCursor.y;
    myPlayerData[clientData.playerId + "_cursorHide"] = clientCursor.hide;
    myPlayerData[clientData.playerId + "_cursorText"] = clientCursor.text;
  } else {
    myPlayerData[clientData.playerId + "_cursorX"] = 0;
    myPlayerData[clientData.playerId + "_cursorY"] = 0;
    myPlayerData[clientData.playerId + "_cursorHide"] = true;
    myPlayerData[clientData.playerId + "_cursorText"] = null;
  }

  updateCampaign(clientData.campaignKey, myPlayerData);
};

export const resetMyPlayer = (key, playerId) => {
  if (!playerId || !key) return;

  let myPlayerData = {};
  myPlayerData[playerId + "_deviceId"] = null;
  myPlayerData[playerId + "_userName"] = null;
  myPlayerData[playerId + "_clientScene"] = null;
  myPlayerData[playerId + "_cursorX"] = null;
  myPlayerData[playerId + "_cursorY"] = null;
  myPlayerData[playerId + "_cursorHide"] = null;
  myPlayerData[playerId + "_cursorText"] = null;

  updateCampaign(key, myPlayerData);
};
