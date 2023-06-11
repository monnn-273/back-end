const express = require("express");
const router = express.Router();
const CommunityController = require("../controllers/CommunityController.js");
const CommunityUserController = require("../controllers/CommunityUserController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/dashboard", authMiddleware.authenticate, authMiddleware.checkAdminRole, (req, res) => {
  // res.status(200).send("Dashboard Admin");
  response = {
    success: true,
    status: "SUCCESS",
    message: "Admin Authorized Dashboard",
  };
  res.status(200).json(response);
});
router.get("/communities", authMiddleware.authenticate, authMiddleware.checkAdminRole, CommunityController.getAllCommunity);
router.get("/communities/:id", authMiddleware.authenticate, authMiddleware.checkAdminRole, CommunityController.getCommunityDetail);
router.post("/communities", authMiddleware.authenticate, authMiddleware.checkAdminRole, CommunityController.createNewCommunity);
router.patch("/communities/:id", authMiddleware.authenticate, authMiddleware.checkAdminRole, CommunityController.updateCommunity);
router.delete("/communities/:id", authMiddleware.authenticate, authMiddleware.checkAdminRole, CommunityController.deleteCommunity);
router.get("/communities/:id/community-members", CommunityUserController.getAllCommunityMember);
router.post("/community-members", CommunityUserController.createNewCommunityUser);
router.delete("/community-members/:id", CommunityUserController.deleteCommunityMember);

module.exports = router;
