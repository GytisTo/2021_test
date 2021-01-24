const express = require('express');
const favoriteFile = require('../data/favorite.json');
var fs = require('fs');

const favoriteRouter = express.Router();

const changeData = function ({integerId, status}) {
    let newData = favoriteFile

    if(integerId && status === "add"){
        newData = {...favoriteFile, [integerId]: "ok"}
        fs.writeFileSync('server/data/favorite.json', JSON.stringify(newData), () => {})
    } else if(integerId && status === "remove"){
        delete newData[integerId]
        fs.writeFileSync('server/data/favorite.json', JSON.stringify(newData), () => {})
    }else{
        return {
            data: newData,
            status: 'failed'
        }
    }
    return {
        data: newData,
        status: status
    };
};

favoriteRouter.get('', (req, res)=>{
    res.status(200).json({data: favoriteFile, status: "ok"});
});

favoriteRouter.post('', (req, res)=>{
    const response = changeData(req.query);
    res.status(200).json(response);
});

module.exports = favoriteRouter;