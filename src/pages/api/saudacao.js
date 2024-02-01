import { createRouter } from "next-connect";

const router = createRouter();

const ClientController = {
    createClient: (req, res) => {
        res.json({ mensagem: "Cliente criado com sucesso!" });
    },
    readAllClients: (req, res) => {
        res.json({ mensagem: "Todos os clientes lidos com sucesso!" });
    },
    // Adicione métodos para PUT e DELETE conforme necessário
};

router.post(ClientController.createClient);

router.get(ClientController.readAllClients);

export default router.handler();
