import * as $ from "jquery";

class app {
    private _buttonText;
    constructor(text){
        this._buttonText = text;
        this.init();
    }

    init(){
        
        let reff = this;
        $("#idhai").text(this._buttonText);
        $("#idhai").click(()=>{
            reff.alerter("mera msg");
        });
     }

     alerter(msg) {
         console.log(msg);
     }
}

$(()=>{
    let App = new app("Happy");
})
