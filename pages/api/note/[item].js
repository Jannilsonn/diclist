const arrayNote = [
  {
      category: "note",
      item: "reuniao-de-quinta",
      title: "Reunião de quinta",
      note: "Na reunião de quinta-feira foram levantados os requisitos para o novo projeto."
  }
]

export default function handlerNote(req, res) {

  const {
    query: { item },
  } = req

  let data = {}

  for (const key in arrayNote) {
      if(arrayNote[key]['item'] == item) {
          data = arrayNote[key]
      }
  }

  res.status(200).json(data)
}