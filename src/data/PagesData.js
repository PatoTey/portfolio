import coffdesk from "../images/coffestopdesktop.png"
import coffmob from "../images/coffestopmobile.png"
import mclmob from "../images/mclmobile.png"

const data = [
    {
        id: 1,
        appname: "CoffeStop",
        description: "A web for ordering your favorite type of coffe!",
        madewith: "React, React-Router, Firebase",
        imagedesk: coffdesk,
        imagemob: coffmob,
        appurl: "https://coffeestopshop.netlify.app",
        githuburl: "https://github.com/PatoTey/CoffeeStop"
    },
    {
        id: 2,
        appname: "MyCartList",
        description: "A tiny shopping list app",
        madewith: "React, React-Router, forms",
        imagedesk: undefined,
        imagemob: mclmob,
        appurl: "https://mycartlist.netlify.app",
        githuburl: "https://github.com/PatoTey/MyCartList"
    }
]

export default data