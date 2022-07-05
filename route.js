const HomeControllers = require("./controllers/homeControllers")

class Routing {
    constructor() {
        this.routes = [new Route("/",HomeControllers.home)]
    }
}

class Route{
    constructor(uri = "/",callback = (req,res)=>{console.log("vous n'avez pas mis de callback'")}) {
        this.uri = uri
        this.callback = callback
    }
}

module.exports = Routing;