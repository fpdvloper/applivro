app.get('/cliente', (req, res) => {
    res.send("Rota GET do Cliente ativada")
    })

    class ControllerCliente {
        static rotas(app) {
          app.get('/cliente', (req, res) => {
            res.send('Rota GET do Cliente ativada');
          });
          //aqui serão adcionadas as próximas rotas relacionadas a clientes.
        }
      }
      
      module.exports = ControllerCliente;
      