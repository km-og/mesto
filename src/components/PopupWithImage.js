import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);

    this._popupImgName = this._popup.querySelector(".popup-img__name");
    this._popupImgLink = this._popup.querySelector(".popup-img__image");
  }

  openImg(nameImg, linkImg) {
    super.open();

    this._popupImgLink.src = linkImg;
    this._popupImgLink.alt = nameImg;
    this._popupImgName.textContent = nameImg;
  }
}
