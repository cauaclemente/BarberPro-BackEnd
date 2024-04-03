import prismaClient from "../../prisma";

interface HaircutRequest{
  user_id: string;
  name: string;
  price: number;
}

class CreateHaircutService{
  async execute({ name, price, user_id}: HaircutRequest){
      if(!name || !price){
        throw new Error("Error")
      }
  
      const myHaircuts = await prismaClient.haircut.count({
        where:{
          user_id: user_id
        }
      })
  
      const user = await prismaClient.user.findFirst({
        where:{
          id: user_id,
        },
        include:{
          subscriptions: true,
        }
      })
  
      if(myHaircuts >= 3 && user?.subscriptions?.status !== 'active'){
        throw new Error("Não autorizado")
      }
  
  
      const haircut = await prismaClient.haircut.create({
        data:{
          name: name,
          price: price,
          user_id: user_id
        }
      })
  
  
      return haircut;
  

    return haircut;
  }
}

export { CreateHaircutService}