const { json } = require("body-parser");
const { Router } = require("express");
const TodoListItem = require("../../models/TodoListItem");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const todoListItems = await TodoListItem.find();
    if (!todoListItems) throw new Error("No Item Found");
    const sorted = todoListItems.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    res.status(200).json(sorted);
  } catch (error) {
    res.status(500).json({
      pesan: error.pesan,
    });
  }
});

router.post("/", async (req, res) => {
  const newTodoListItem = new TodoListItem(req.body);
  try {
    const todoListItem = await newTodoListItem.save();
    if (!todoListItem) throw new Error("Data Not Saved");
    res.status(200).json(todoListItem);
  } catch (error) {
    res.status(500).json({
      pesan: error.pesan,
    });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await TodoListItem.findByIdAndUpdate(id, req.body);
    if (!response) throw new Error("Error Occured");
    const updated = { ...response._doc, ...req.body }; // ._doc = data yang sudah ada di database lalu akan di merge dengan data yang ada di req.body
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({
      pesan: error.pesan,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await TodoListItem.findByIdAndDelete(id);
    if (!removed) throw new Error("Failed to Delete");
    res.status(200).json(removed);
  } catch (error) {
    res.status(500).json({
      pesan: error.pesan,
    });
  }
});

module.exports = router;
