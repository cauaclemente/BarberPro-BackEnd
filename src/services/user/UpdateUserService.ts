import prismaClient from "../../prisma";

interface UserRequest{
  user_id: string;
  name: string;
  endereco: string;
}

class UpdateUserService{
  async execute({ endereco, name, user_id}: UserRequest){
    
    try{
      const userAlreadyExists = await prismaClient.user.findFirst({
        where:{
          id: user_id
        }
      })

      if(!userAlreadyExists){
        throw new Error('Usuario não existe');
      }

      const userUpdated = await prismaClient.user.update({
        where:{
          id: user_id
        },
        data:{
          name,
          endereco,
        },
        select:{
          name: true,
          email: true,
          endereco: true,
        }
      })

      return userUpdated;

    }catch(err){
      throw new Error('Erro ao atualizar usuario!')
    }
  }
}

export { UpdateUserService }