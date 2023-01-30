import { nameProfile, descriptionProfile } from "../utils/constants.js";

export class UserInfo {
  constructor(data) {
    this._userName = data.editHeading;
    this._userInfo = data.editSubheading;
  }
  getUserInfo() {
    this._profileInfo = {};
    this._profileInfo.name = this._userName;
    this._profileInfo.description = this._userInfo;

    return this._profileInfo;
  }

  setUserInfo() {
    this.getUserInfo();

    nameProfile.textContent = this._profileInfo.name;
    descriptionProfile.textContent = this._profileInfo.description;
  }
}
