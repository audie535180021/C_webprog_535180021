const { Schema, model } = require("mongoose");

const TodoListItemSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "todolistitems",
  }
);

const TodoListItem = model("TodoListItem", TodoListItemSchema);

module.exports = TodoListItem;
