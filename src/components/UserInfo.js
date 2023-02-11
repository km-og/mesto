// import { nameProfile, descriptionProfile } from "../utils/constants.js";

export class UserInfo {
  constructor({ nameProfile, descriptionProfile, avatarProfile, userId }) {
    this._nameProfile = document.querySelector(nameProfile);
    this._descriptionProfile = document.querySelector(descriptionProfile);
    this._avatar = document.querySelector(avatarProfile);
    this._userId = userId;
  }

  getUserInfo() {
    this._profileInfo = {};
    this._profileInfo.editHeading = this._nameProfile.textContent;
    this._profileInfo.editSubheading = this._descriptionProfile.textContent;

    return this._profileInfo;
  }

  setUserInfo(data) {
    if (data.name) {
      this._nameProfile.textContent = data.name;
    } else if (data.about) {
      this._descriptionProfile.textContent = data.about;
    } else if (data.avatar) {
      this._avatar.src = data.avatar;
    } else if (data._id) {
      this._userId = data._id;
    }
  }
}
