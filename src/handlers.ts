import { Express } from 'express-serve-static-core';
import { Request, Response } from "express";
import { nanoid } from "nanoid";
import GameSchema from "./models/GameSchema";
import Game from "./types/Game";

function healthcheck(request: Request, response: Response) {
  response.json({"status": "UP"});
}

function createGame(request: Request, response: Response) {
  const serverUrl: string = request.body["serverUrl"];
  const game: Game = { id: nanoid(), serverUrl };
  GameSchema.create(game).then(() => {
    console.log(`game is created with id ${game.id}`);
    response.send({gameId: game.id});
  });
}

export default function handleRoutes(app: Express) {
  app.get("/healthcheck", healthcheck);

  app.post("/games", createGame);
}
