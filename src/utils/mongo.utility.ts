import mongoose from "mongoose";

export default function connectToDatabase() {
  const username = "test";
  const password = "test";
  mongoose.connect(
    `mongodb+srv://${username}:${password}@agonestictactoe.0deyc.mongodb.net/?retryWrites=true&w=majority`,
    () => {
      console.log("connected to MongoDB");
    }
  );
}
