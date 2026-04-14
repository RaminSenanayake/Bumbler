import express, { Request, Response } from "express";

const server = express();

server.post("/createRoom", (req: Request, res: Response) => {

});

server.listen(8000, () => {
    console.log("server is running on http://localhost:8000")
});