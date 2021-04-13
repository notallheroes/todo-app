const Router = require("express")
const router = new Router()
const dealController = require("../controllers/dealController")
const checkRole = require("../middleware/checkRoleMiddleware")


router.post("/", checkRole("HEAD"), dealController.create)
router.put("/:id", checkRole("HEAD"), dealController.update)
router.delete("/:id", checkRole("HEAD"), dealController.destroy)
router.get("/", dealController.getAll)

module.exports = router