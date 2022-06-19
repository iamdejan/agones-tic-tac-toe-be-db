import mongoose from 'mongoose';
import Game from '../types/Game';

const gameSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  serverUrl: {
    type: String,
    required: true,
  },
});

interface GameDoc extends mongoose.Document {
  id: string;
  serverUrl: string;
}

gameSchema.statics.build = (attr: Game) => {
  return new GameSchema(attr);
};

interface GameSchemaInterface extends mongoose.Model<GameDoc> {
  build(attr: Game): GameDoc;
}

const GameSchema = mongoose.model<GameDoc, GameSchemaInterface>('GameSchema', gameSchema);

export default GameSchema;
