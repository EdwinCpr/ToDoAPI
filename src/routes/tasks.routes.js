const Router = require("express");
const { create, getAll } = require("../controllers/tasks.controllers");
const chechAuth = require("../middlewares/checkAuth.middlewares");
const router = Router();

router.post("/tasks", chechAuth, create);
router.get("/tasks", chechAuth, getAll)

module.exports = router;