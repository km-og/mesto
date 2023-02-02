// import { nameProfile, descriptionProfile } from "../utils/constants.js";

export class UserInfo {
  constructor({ nameProfile, descriptionProfile }) {
    this._nameProfile = document.querySelector(nameProfile);
    this._descriptionProfile = document.querySelector(descriptionProfile);
  }
  getUserInfo() {
    this._profileInfo = {};
    this._profileInfo.name = this._nameProfile.textContent;
    this._profileInfo.description = this._descriptionProfile.textContent;

    return this._profileInfo;
  }

  setUserInfo(data) {
    this._nameProfile.textContent = data.editHeading;
    this._descriptionProfile.textContent = data.editSubheading;
  }
}
