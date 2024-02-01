// src/pages/api/acoes.js
export default function handler(req, res) {
    switch (req.method) {
        case "GET":
            res.status(200).json({ mensagem: "GET realizado com sucesso!" });
            break;
        case "POST":
            res.status(200).json({ mensagem: "POST realizado com sucesso!" });
            break;
        case "PUT":
            res.status(200).json({ mensagem: "PUT realizado com sucesso!" });
            break;
        case "DELETE":
            res.status(200).json({ mensagem: "DELETE realizado com sucesso!" });
            break;
        default:
            res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
            res.status(405).end(`Método ${req.method} não permitido.`);
    }
}
