const { Deal } = require("../models/models")
const ApiError = require("../error/ApiError")
const pool = require("../db")



class DealController {
    async create(req, res, next) {
        try {
            const { title, description, creator, datecreate, dateupdate, deadline, status, priority, responsible } = req.body
            const deals = await Deal.create({ title: title, description: description, creator: creator, datecreate: datecreate, dateupdate: dateupdate, deadline: deadline, status: status, priority: priority, responsible: responsible })
            return res.json(deals)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    
    async update(req, res, next) {
        
        
        try {
            const {id} = req.params
            const { title, description, creator, dateupdate, deadline, status, priority, responsible } = req.body
            const deals = await Deal.update({ title: title, description: description, creator:creator, dateupdate:dateupdate, deadline: deadline, status: status, priority: priority, responsible:responsible }, {where: {id: id}})
            console.log(id)
            return res.json(deals)

        } catch (e) {
            next(ApiError.badRequest(e.message))
            console.log(ApiError.badRequest(e.message))
        }
    } 

    async destroy(req, res) {
     
        const { id } = req.params
        
        try {
            const todos =  await Deal.destroy({
                where: {
                    id: id
                }
            });
        } catch (e) {
            return false;
        }
    }
    


    async getOne(req, res) {
        const {id} = req.params
        const todos = await Deal.findOne({
            where: id

        })
        return res.json(todos)
    }

    async getAll(req, res) {
        const deals = await Deal.findAll()
        return res.json(deals)
    }

}


module.exports = new DealController()