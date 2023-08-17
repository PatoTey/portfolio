import csmob from "../images/csmobileshot.png"
import csdesk from "../images/csdeskshot.png"
import mclmob from "../images/mclmob.png"

const data = [
    {
        id: 1,
        appname: "CoffeStop",
        description: "A web for ordering your favorite type of coffe!",
        madewith: "React, React-Router, Firebase",
        imagedesk: csdesk,
        imagemob: csmob,
        hasdemo: true,
        appurl: "https://coffeestopshop.netlify.app",
        hascode: true,
        githuburl: "https://github.com/PatoTey/CoffeeStop"
    },
    {
        id: 2,
        appname: "MyCartList",
        description: "A tiny shopping list app",
        madewith: "React, React-Router, forms",
        imagedesk: undefined,
        imagemob: mclmob,
        hasdemo: true,
        appurl: "https://mycartlist.netlify.app",
        hascode: true,
        githuburl: "https://github.com/PatoTey/MyCartList"
    }
]

export default data