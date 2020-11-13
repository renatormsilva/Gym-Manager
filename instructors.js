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

    let {avatar_url, birth, name, gender, services} = req.body

    birth = Date.parse(req.body.birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    data.instructors.push({
        id,
        name,
        gender,
        birth,
        avatar_url,
        services,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) {
            return res.send("Write file error!");
        }
    })
    
    return res.redirect("/")
}

