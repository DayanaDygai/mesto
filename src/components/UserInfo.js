export class UserInfo {
    constructor({nameProfileSelector, descriptionProfileSelector}) {
        this._nameProfile = document.querySelector(nameProfileSelector);
        this._descriptionProfile = document.querySelector(descriptionProfileSelector);
    }

    getUserInfo(){
       const data = {
            name: this._nameProfile,
            work: this._descriptionProfile
        }

        return data
    }

    setUserInfo({name, work}){      
            this._nameProfile.textContent = name;
            this._descriptionProfile.textContent = work;
        }
    }
