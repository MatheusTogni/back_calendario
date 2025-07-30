import { Request, Response } from 'express';
import ministracoesService from '../services/ministracoesService';

const ministracoesController = {
    async addMinistracao(req: Request, res: Response) {
        try {
            const resp = await ministracoesService.addMinistracao(req.body);
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500);
        }
    },

    async getMinistracoes(req: Request, res: Response) {
        try {
            const resp = await ministracoesService.getMinistracoes();
            res.status(200).json(resp);
        } catch (error) {
            res.status(500);
        }
    },

    async deleteMinistracao(req: Request, res: Response) {
        try {
            const resp = await ministracoesService.deleteMinistracao(req.body);
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500);
        }
    },

    async updateMinistracao(req: Request, res: Response) {
        try {
            const resp = await ministracoesService.updateMinistracao(req.body);
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500);
        }
    },
};

export default ministracoesController;