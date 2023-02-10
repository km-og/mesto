// import { nameProfile, descriptionProfile } from "../utils/constants.js";

export class UserInfo {
  constructor({ nameProfile, descriptionProfile }) {
    this._nameProfile = document.querySelector(nameProfile);
    this._descriptionProfile = document.querySelector(descriptionProfile);
    this._profileAvatar = document.querySelector(".profile__avatar-box");
    this._avatarOverlay = document.querySelector(".profile__avatar-overlay");
  }

  getUserInfo() {
    this._profileInfo = {};
    this._profileInfo.editHeading = this._nameProfile.textContent;
    this._profileInfo.editSubheading = this._descriptionProfile.textContent;

    return this._profileInfo;
  }

  setUserInfo(data) {
    this._nameProfile.textContent = data.name;
    this._descriptionProfile.textContent = data.about;
  }

  _editProfile() {
    this._avatarOverlay.classList.toggle("profile__avatar-overlay_type_active");
  }

  setEventListeners() {
    this._profileAvatar.addEventListener("mouseover", () => {
      this._editProfile();
    });

    this._profileAvatar.addEventListener("mouseout", () => {
      this._editProfile();
    });
  }
}
