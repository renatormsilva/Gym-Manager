const fs = require("fs");
const data = require("./data.json")

// CREATE
exports.post = function(req, res){
    // req.body -> pra receber os dados do body do form
    // req.query
    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == ""){
            return res.send("Pleae, fill all fills")
        }
    }

    req.body.birth = Date.parse(req.body.birth)
    req.body.created_at = Date.now()

    data.instructors.push(req.body)

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) {
            return res.send("Write file error!");
        }
    })
    
    return res.redirect("/")
}

