module.exports = class Hello {
    constructor(user){
        this.user = user;
    }

    getDate(){
        let date = new Date();
        return date;
    }

    greetUser(){
        
        let date1 = this.getDate().getHours();
        
        if( date1 < 6){
            return `Good night , ${this.user}`;
        } else if( date1 >= 6 && date1 < 12 ) {
            return `Good morning , ${this.user}`;
        } else if( date1 >=12 && date1 < 18 ) {
            return `Good afternoon , ${this.user}`;
        } else if( date1 >=18 && date1 <= 24 ) {
            return `Good evening , ${this.user}`;
        }
    }
};
