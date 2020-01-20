const express = require("express");
const { get, getByQuery, insert, remove, update } = require("./accounts-model");

const router = express.Router();

//GET ROUTES
router.get("/", async (req, res, next) => {
  const { limit, sortby, sortdir } = req.query;
  if (limit || sortby || sortdir) {
    try {
      const results = await getByQuery({ limit, sortby, sortdir });
      res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const accounts = await get();
      res.status(200).json(accounts);
    } catch (error) {
      next(error);
    }
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const account = await get(id);
    res.status(200).json(account);
  } catch (error) {
    next(error);
  }
});

//POST ROUTES
router.post("/", async (req, res, next) => {
  const { name, budget } = req.body;
  try {
    const posted = await insert({ name, budget });
    res.status(201).json(posted);
  } catch (error) {
    next(error);
  }
});

//PUT ROUTES
router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { budget, name } = req.body;
  try {
    const updated = await update(id, { budget, name });
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
});

//DELETE ROUTES
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await remove(id);
    res.status(200).json(deleted);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
