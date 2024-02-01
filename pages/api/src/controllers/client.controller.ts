import { Request, Response } from "express";
import { ClientResponse, ClientCreate } from "../interfaces/Clients.interface";
import { ClientService } from "../services/client.service";

export class ClientController {
    static async createClient(
        req: Request,
        res: Response<ClientResponse>
    ): Promise<Response<ClientResponse>> {
        const body: ClientCreate = req.body;
        const response = await ClientService.createClient(body);
        return res.status(200).json(response);
    }

    static async readAllClients(
        req: Request,
        res: Response<ClientResponse>
    ): Promise<Response<any>> {
        const response = await ClientService.readAllClients();
        return res.status(200).json(response);
    }

    static async getClientById(
        req: Request,
        res: Response<ClientResponse>
    ): Promise<ClientResponse> {
        const {
            query: { id },
        } = req;

        const response: ClientResponse = await ClientService.getClientById(id);
        res.status(200).json(response);
        return response;
    }

    static async updateClient(
        req: Request,
        res: Response<ClientResponse>
    ): Promise<ClientResponse> {
        const {
            query: { id: patchId },
            body,
        } = req;
        const newPhone = body.phone;
        

        const response: ClientResponse = await ClientService.updateClient(
            patchId,
            body
        );
        res.status(200).json(response);
        return response;
    }

    static async deleteClient(
        req: Request,
        res: Response<ClientResponse>
    ): Promise<void> {
        const {
            query: { id: deleteId },
        } = req;

        await ClientService.deleteClient(deleteId);
        res.status(204).json();
    }
}
