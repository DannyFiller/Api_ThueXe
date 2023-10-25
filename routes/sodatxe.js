const sodatxeController = require("../controllers/sodatxeController");

const router = require("express").Router();

router.post("/",sodatxeController.addSo);
router.get("/",sodatxeController.getAllSo);
router.put("/:id",sodatxeController.editSo);
router.delete("/:id",sodatxeController.deleteSo);
module.exports = router;