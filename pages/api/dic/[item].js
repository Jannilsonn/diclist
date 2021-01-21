const arrayDic = [
    {
        category: "dic",
        item: "interoperabilidade",
        title: "Interoperabilidade",
        description: "Interoperabilidade é a capacidade de um sistema de se comunicar de forma transparente com outro sistema. Para um sistema ser considerado interoperável, é muito importante que ele trabalhe com padrões abertos ou ontologias."
    },
    {
        category: "dic",
        item: "equidade",
        title: "Equidade",
        description: "Equidade consiste na adaptação da regra existente à situação concreta, observando-se os critérios de justiça. Pode-se dizer, então, que a equidade adapta a regra a um caso específico, a fim de deixá-la mais justa. Ela é uma forma de se aplicar o Direito, mas sendo o mais próximo possível do justo para as duas partes."
    }
]

export default function handlerDic(req, res) {

    const {
      query: { item },
    } = req

    let data = {}

    for (const key in arrayDic) {
        if(arrayDic[key]['item'] == item) {
            data = arrayDic[key]
        }
    }
  
    res.status(200).json(data)
  }
  