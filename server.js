import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.all("/bot:token/:method", async (req, res) => {
    const { token, method } = req.params;

    const url = `https://api.telegram.org/bot${token}/${method}`;

    try {
        const response = await fetch(url, {
            method: req.method,
            headers: { "Content-Type": "application/json" },
            body: ["GET", "HEAD"].includes(req.method)
                ? undefined
                : JSON.stringify(req.body)
        });

        const data = await response.json();
        res.status(response.status).json(data);

    } catch (e) {
        console.error(e);
        res.status(500).json({ ok: false, error: e.message });
    }
});

app.listen(3003, "0.0.0.0", () => {
    console.log("Telegram proxy started on port 3003");
});