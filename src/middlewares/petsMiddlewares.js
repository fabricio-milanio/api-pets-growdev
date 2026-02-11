const validateFieldsBody = (req, res, next) => {
  const { nome, raca, idade, nomeTutor } = req.body;
  const noData = [];

  if (!nome) noData.push("nome");
  if (!raca) noData.push("raca");
  if (!idade) noData.push("idade");
  if (!nomeTutor) noData.push("nomeTutor");

  if (noData.length > 0) {
    const formatador = new Intl.ListFormat('pt-BR', { style: 'long', type: 'conjunction' });
    const listaFormatada = formatador.format(noData);

    return res.status(400).json({
      ok: false,
      message: `Todos os campos são obrigatórios. Favor preencher os campos: ${listaFormatada}`,
    });
  }

  next();
}

export default {
  validateFieldsBody
};