const arrayList = [
  {
      category: "list",
      item: "mercado",
      title: "Mercado",
      list: ["Arroz", "Feijão", "Açúcar", "Café"]
  },
  {
      category: "list",
      item: "equipamentos",
      title: "Equipamentos",
      list: ["Monitor", "Mouser", "Teclado"]
  }
]

export default function handlerList(req, res) {

  const {
    query: { item },
  } = req

  let data = {}

  for (const key in arrayList) {
      if(arrayList[key]['item'] == item) {
          data = arrayList[key]
      }
  }

  res.status(200).json(data)
}
