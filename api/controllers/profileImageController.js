const {UserImg, User} = require('../models/models')
const imgService = require("../services/imgService/create-img");
const ApiError = require("../error/ApiError");


class ProfileImageController {

    async rewrite(req, res) {
        let {userId} = req.body
        const createdImg = await imgService.createImg(req.files.img)
        const user = await UserImg.findOne({where:{userId}})
        let userImg
        if (user){
            userImg = await UserImg.update({img: createdImg, userId}, {where: {userId}})
        }else {
            userImg = await UserImg.create({img: createdImg, userId})
        }
        return res.json(userImg)
    }


    async getOne(req, res) {
        const {userId} = req.query
        const userImg = await UserImg.findOne({where: {userId}},
        )
        return res.json(userImg)
    }
}

module.exports = new ProfileImageController()