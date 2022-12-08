import connection from "../database/db.js"

export async function getGames(req, res) {

    const { name } = req.query;

    if (name) { }

    try {
        const games = await connection.query("SELECT * FROM games;");
        res.status(200).send(games.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }

}

export async function postGame(req, res) {

    const { name, image, stockTotal, categoryId, pricePerDay } = req.body;

    try {
        const game = await connection.query("INSERT INTO games (name, image, stockTotal, categoryId, pricePerDay) VALUES ($1, $2, $3, $4, $5)",
            [name, image, stockTotal, categoryId, pricePerDay]);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }

}