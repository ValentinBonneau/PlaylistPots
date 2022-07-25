const HomeControllers = require("./controllers/homeControllers")

class Routing {
    constructor() {
        this.routes = [new Route("GET","/",HomeControllers.home)]
    }
    static httpType = {
        GET : ""
    }
}

class Route{
    constructor(httpType = "GET",uri = "/",callback = (req,res)=>{console.log("vous n'avez pas mis de callback'")}) {
        this.uri = uri
        this.callback = callback
        this.type = httpType
    }
}

module.exports = Routing;