import { Router } from "express";

import { contComissao, contEvent, contAluno, contArea, contSala, contSessao } from "../executors";

const routes = Router();

routes.get('/', (req, res) => {
    res.send("ProjetoPI API")
})

// EVENT ROUTES
routes.post("/event", (req, res) => {
    contEvent.create(req, res).then((contEvent) => {
        return contEvent
    })
})
routes.get("/events", (req, res) => {
    contEvent.read(req, res).then((contEvent) => {
        return contEvent
    })
})
routes.get("/event/:id", (req, res) => {
    contEvent.readEvent(req, res).then((contEvent) => {
        return contEvent
    })
})
routes.put("/event/:id", (req, res) => {
    contEvent.update(req, res).then((contEvent) => {
        return contEvent
    })
})
routes.delete("/event/:id", (req, res) => {
    contEvent.delete(req, res).then((contEvent) => {
        return contEvent
    })
})

// COMISSAO ROUTES
routes.post("/comissao", (req, res) => {
    contComissao.create(req, res).then((contComissao) => {
        return contComissao
    })
})
routes.get("/comissoes", (req, res) => {
    contComissao.read(req, res).then((contComissao) => {
        return contComissao
    })
})
routes.get("/comissao/:id", (req, res) => {
    contComissao.readComissao(req, res).then((contComissao) => {
        return contComissao
    })
})
routes.get("/comissao?adm=true", (req, res) => {
    // req.query
    contComissao.readComissao(req, res).then((contComissao) => {
        return contComissao
    })
})
routes.put("/comissao/:id", (req, res) => {
    contComissao.update(req, res).then((contComissao) => {
        return contComissao
    })
})
routes.delete("/comissao/:id", (req, res) => {
    contComissao.delete(req, res).then((contComissao) => {
        return contComissao
    })
})

// ALUNOS ROUTES
routes.post("/aluno", (req, res) => {
    contAluno.create(req, res).then((contAluno) => {
        return contAluno
    })
})
routes.get("/alunos", (req, res) => {
    contAluno.read(req, res).then((contAluno) => {
        return contAluno
    })
})
routes.get("/aluno/:id", (req, res) => {
    contAluno.readAluno(req, res).then((contAluno) => {
        return contAluno
    })
})
routes.put("/aluno/:id", (req, res) => {
    contAluno.update(req, res).then((contAluno) => {
        return contAluno
    })
})
routes.delete("/aluno/:id", (req, res) => {
    contAluno.delete(req, res).then((contAluno) => {
        return contAluno
    })
})

// AREAS ROUTES
routes.post("/area", (req, res) => {
    contArea.create(req, res).then((contArea) => {
        return contArea
    })
})
routes.get("/areas", (req, res) => {
    contArea.read(req, res).then((contArea) => {
        return contArea
    })
})
routes.get("/area/:id", (req, res) => {
    contArea.readArea(req, res).then((contArea) => {
        return contArea
    })
})
routes.get("/area-event/:id", (req, res) => {
    contArea.readAreasByEvent(req, res).then((contArea) => {
        return contArea
    })
})

routes.put("/area/:id", (req, res) => {
    contArea.update(req, res).then((contArea) => {
        return contArea
    })
})
routes.delete("/area/:id", (req, res) => {
    contArea.delete(req, res).then((contArea) => {
        return contArea
    })
})

// SALA ROUTES
routes.post("/sala", (req, res) => {
    contSala.create(req, res).then((contSala) => {
        return contSala
    })
})
routes.get("/salas", (req, res) => {
    contSala.read(req, res).then((contSala) => {
        return contSala
    })
})
routes.get("/sala/:id", (req, res) => {
    contSala.readSala(req, res).then((contSala) => {
        return contSala
    })
})
routes.put("/sala/:id", (req, res) => {
    contSala.update(req, res).then((contSala) => {
        return contSala
    })
})
routes.delete("/sala/:id", (req, res) => {
    contSala.delete(req, res).then((contSala) => {
        return contSala
    })
})

// SESSAO ROUTES
routes.post("/sessao", (req, res) => {
    contSessao.create(req, res).then((contSessao) => {
        return contSessao
    })
})
routes.get("/sessaos", (req, res) => {
    contSessao.read(req, res).then((contSessao) => {
        return contSessao
    })
})
routes.get("/sessao/:id", (req, res) => {
    contSessao.readSessao(req, res).then((contSessao) => {
        return contSessao
    })
})
routes.put("/sessao/:id", (req, res) => {
    contSessao.update(req, res).then((contSessao) => {
        return contSessao
    })
})
routes.delete("/sessao/:id", (req, res) => {
    contSessao.delete(req, res).then((contSessao) => {
        return contSessao
    })
})

module.exports = { routes }



// ===============================================
// import { contUser } from "../executors";
//USER ROUTES
// userRouter.post("/user", (req, res) => {
//     contUser.create(req, res).then((contUser) => {
//         return contUser
//     })
// })
// userRouter.get("/users", (req, res) => {
//     contUser.read(req, res).then((contUser) => {
//         return contUser
//     })
// })
// userRouter.get("/user/:id", (req, res) => {
//     contUser.readUser(req, res).then((contUser) => {
//         return contUser
//     })
// })
// userRouter.put("/user", (req, res) => {
//     contUser.update(req, res).then((contUser) => {
//         return contUser
//     })
// })
// userRouter.delete("/delete-user/:id", (req, res) => {
//     contUser.delete(req, res).then((contUser) => {
//         return contUser
//     })
// })