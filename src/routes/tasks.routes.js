const Router = require("express");
const { create, getAll, edit, delet } = require("../controllers/tasks.controllers");
const chechAuth = require("../middlewares/checkAuth.middlewares");
const router = Router();

router.post("/tasks", chechAuth, create);
router.get("/tasks", chechAuth, getAll)
router.put("/tasks/:id", chechAuth, edit);
router.delete("/tasks/:id", chechAuth, delet);

module.exports = router;