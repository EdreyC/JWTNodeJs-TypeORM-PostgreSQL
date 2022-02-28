import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";


class UserController {

    index(req:Request,res:Response){
        return res.send({
            userId:req.userId
        })
    }

    async store(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body

        //Validação Email existente
        const userExists = await repository.findOne({
            where: { email }
        })

        if (userExists) {
            return res.sendStatus(409);
        }
        //Caso não exista, insere os dados colocados pelo usuario no banco
        const user = repository.create({
            email,
            password
        })
        //Salvando no banco os dados
        await repository.save(user)
        //e retornando um json com os dados inseridos para a rota, para o front-end
        return res.json(user)
    }
}

export default new UserController();