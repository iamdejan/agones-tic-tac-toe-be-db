import { Express, Request, Response } from "express";
import { nanoid } from "nanoid";
import GameSchema from "./models/GameSchema";
import Game from "./types/Game";

export default function handleRoutes(app: Express) {
  app.get("/healthcheck", healthcheck);

  app.post("/games", createGame);
}

function healthcheck(request: Request, response: Response) {
  response.json({"status": "UP"});
}

function createGame(request: Request, response: Response) {
  const game: Game = {id: nanoid(), serverUrl: request.body["serverUrl"]};
  GameSchema.create(game).then(() => {
    response.send({gameId: game.id});
  });
}
