const Router = require("express")

const router = new Router()
const todoRouter = require("./dealRouter")
const userRouter = require("./userRouter")

router.use("/user", userRouter)
router.use("/deal", todoRouter)


module.exports = router