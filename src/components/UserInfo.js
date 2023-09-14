export class UserInfo {
    constructor({nameProfileSelector, descriptionProfileSelector}) {
        this._nameProfile = document.querySelector(nameProfileSelector);
        this._descriptionProfile = document.querySelector(descriptionProfileSelector);
    }

    getUserInfo(){
       return {
            name: this._nameProfile.textContent,
            work: this._descriptionProfile.textContent
        }

       
    }

    setUserInfo({name, work}){      
            this._nameProfile.textContent = name;
            this._descriptionProfile.textContent = work;
        }
    }
