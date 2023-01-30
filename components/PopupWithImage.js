import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  openImg(nameImg, linkImg) {
    super.open();
    super.setEventListeners();

    const popupImgName = this._popupSelector.querySelector(".popup-img__name");
    const popupImgLink = this._popupSelector.querySelector(".popup-img__image");

    popupImgLink.src = linkImg;
    popupImgLink.alt = nameImg;
    popupImgName.textContent = nameImg;
  }
}
