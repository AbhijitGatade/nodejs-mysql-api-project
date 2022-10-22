var express = require("express");
var Admin = require("../models/Admin");

var router = express.Router();

router.put("/", (req, res)=>{
    let body = req.body;
    let admin = new Admin();
    admin.name = body.name;
    admin.email = body.email;
    admin.password = body.password;
    admin.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
});

router.get("/", (req, res)=>{
    let admin = new Admin();
    admin.list().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
});

router.get("/:id", (req, res)=>{
    let admin = new Admin();
    admin.id = req.params.id;
    admin.get().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
});

router.post("/", (req, res)=>{
    let body = req.body;
    let admin = new Admin();
    admin.id = body.id;
    admin.name = body.name;
    admin.email = body.email;
    admin.password = body.password;
    admin.update().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
});

router.delete("/:id", (req, res)=>{
    let admin = new Admin();
    admin.id = req.params.id;
    admin.delete().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
});

module.exports = router;