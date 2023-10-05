export class UserInfo {
    constructor({nameProfileSelector, descriptionProfileSelector, avatarProfileSelector}) {
        this._nameProfile = document.querySelector(nameProfileSelector);
        this._descriptionProfile = document.querySelector(descriptionProfileSelector);
        this._avatar = document.querySelector(avatarProfileSelector)
    }

    getUserInfo(){
       return {
            name: this._nameProfile.textContent,
            about: this._descriptionProfile.textContent,
            avatar: this._avatar.src
        }

       
    }

    setUserInfo({name, about, avatar}){      
            this._nameProfile.textContent = name;
            this._descriptionProfile.textContent = about;
            this._avatar.src = avatar;
        }

    }

   