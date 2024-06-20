import ParafusoModel from "../Models/ParafusoModel.js";


class ParafusoController {
  constructor() {
  }

  create(req, res) {
    const nome = req.body.nome;
    ParafusoModel.create(nome).then(

      resposta => {
        console.debug("Inserindo um Parafuso");
        res.status(resposta[0]).json(resposta[1])
      }


    ).catch(
      resposta => {
        console.debug("Erro: Inserindo um Parafuso");
        res.status(resposta[0]).json(resposta[1])
      }
    )

  }
  read(req, res) {
    ParafusoModel.read().then(
      resposta => {
        console.debug("Mostrando  Parafusos");
        res.status(resposta[0]).json(resposta[1])
      }


    ).catch(
      resposta => {
        console.debug("Erro ao mostrar parafusos");
        console.debug(resposta)
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }
  update(req, res) {
    const id_parafuso = req.params.id_parafuso;
    const nome = req.body.nome;

    ParafusoModel.update(id_parafuso, nome).then(
      resposta => {
        console.debug("Atualizando Parafusos")
        res.status(resposta[0]).json(resposta[1])
      }

    ).catch(
      resposta => {
        console.debug("Erro ao atualizar parafusos");
        console.debug(resposta)
        res.status(resposta[0]).json(resposta[1])
      }
    );
  }

  delete(req, res) {
    const id_parafuso = req.params.id_parafuso;
    const nome = req.body.nome;

    ParafusoModel.delete(id_parafuso, nome).then(
      resposta => {
        console.debug("Deletando parafusos")
        res.status(resposta[0]).json(resposta[1])
      }

    ).catch(
      resposta => {
        console.debug("ERRO ao atualizar parafusos ");
        console.debug(resposta)
        res.status(resposta[0]).json(resposta[1])
      }
    );
  }
}
export default new ParafusoController();