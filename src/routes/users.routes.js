const Router = require("express");
const { create, login, recoverPassword, changePassword } = require("../controllers/users.controllers");
const router = Router();

router.post("/users", create);
router.post("/users/login", login);
router.patch("/users/recover-password", recoverPassword);
router.patch("/users/recover-password/:token", changePassword);

module.exports = router;