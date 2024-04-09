import prismaClient from "../../prisma";

interface NewScheduleRequest{
  user_id: string;
  haircut_id: string;
  customer: string;
}

class NewScheduleServise{
  async execute({ customer, haircut_id, user_id}: NewScheduleRequest){
    
    if(customer === '' || haircut_id === ''){
      throw new Error("Erro ao agendar novo serviço")
    }

    const schedule = await prismaClient.service.create({
      data:{
        customer,
        haircut_id,
        user_id
      }
    })

    return schedule;
  }
}

export { NewScheduleServise }