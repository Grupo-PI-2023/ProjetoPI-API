import { Router } from "express";

import { contComissao, contEvent, contAluno, contArea, contSala } from "../executors";

const routes = Router();

// EVENT ROUTES
routes.post("/create-event", (req, res) => {
    contEvent.create(req, res).then((contEvent) => {
        return contEvent
    })
})
routes.get("/read-events", (req, res) => {
    contEvent.read(req, res).then((contEvent) => {
        return contEvent
    })
})
routes.get("/read-event/:id", (req, res) => {
    contEvent.readEvent(req, res).then((contEvent) => {
        return contEvent
    })
})
routes.put("/update-event/:id", (req, res) => {
    contEvent.update(req, res).then((contEvent) => {
        return contEvent
    })
})
routes.delete("/delete-event/:id", (req, res) => {
    contEvent.delete(req, res).then((contEvent) => {
        return contEvent
    })
})

// COMISSAO ROUTES
routes.post("/create-comissao", (req, res) => {
    contComissao.create(req, res).then((contComissao) => {
        return contComissao
    })
})
routes.get("/read-comissoes", (req, res) => {
    contComissao.read(req, res).then((contComissao) => {
        return contComissao
    })
})
routes.get("/read-comissao/:id", (req, res) => {
    contComissao.readComissao(req, res).then((contComissao) => {
        return contComissao
    })
})
routes.put("/update-comissao/:id", (req, res) => {
    contComissao.update(req, res).then((contComissao) => {
        return contComissao
    })
})
routes.delete("/delete-comissao/:id", (req, res) => {
    contComissao.delete(req, res).then((contComissao) => {
        return contComissao
    })
})

// ALUNOS ROUTES
routes.post("/create-aluno", (req, res) => {
    contAluno.create(req, res).then((contAluno) => {
        return contAluno
    })
})
routes.get("/read-alunos", (req, res) => {
    contAluno.read(req, res).then((contAluno) => {
        return contAluno
    })
})
routes.get("/read-alunos/:id", (req, res) => {
    contAluno.readAluno(req, res).then((contAluno) => {
        return contAluno
    })
})
routes.put("/update-alunos/:id", (req, res) => {
    contAluno.update(req, res).then((contAluno) => {
        return contAluno
    })
})
routes.delete("/delete-alunos/:id", (req, res) => {
    contAluno.delete(req, res).then((contAluno) => {
        return contAluno
    })
})

// AREAS ROUTES
routes.post("/create-area", (req, res) => {
    contArea.create(req, res).then((contArea) => {
        return contArea
    })
})
routes.get("/read-areas", (req, res) => {
    contArea.read(req, res).then((contArea) => {
        return contArea
    })
})
routes.get("/read-area/:id", (req, res) => {
    contArea.readArea(req, res).then((contArea) => {
        return contArea
    })
})
routes.put("/update-area/:id", (req, res) => {
    contArea.update(req, res).then((contArea) => {
        return contArea
    })
})
routes.delete("/delete-area/:id", (req, res) => {
    contArea.delete(req, res).then((contArea) => {
        return contArea
    })
})

// SALA ROUTES
routes.post("/create-sala", (req, res) => {
    contSala.create(req, res).then((contSala) => {
        return contSala
    })
})
routes.get("/read-salas", (req, res) => {
    contSala.read(req, res).then((contSala) => {
        return contSala
    })
})
routes.get("/read-sala/:id", (req, res) => {
    contSala.readSala(req, res).then((contSala) => {
        return contSala
    })
})
routes.put("/update-sala/:id", (req, res) => {
    contSala.update(req, res).then((contSala) => {
        return contSala
    })
})
routes.delete("/delete-sala/:id", (req, res) => {
    contSala.delete(req, res).then((contSala) => {
        return contSala
    })
})

module.exports = { routes }



// ===============================================
// import { contUser } from "../executors";
//USER ROUTES
// userRouter.post("/create-user", (req, res) => {
//     contUser.create(req, res).then((contUser) => {
//         return contUser
//     })
// })
// userRouter.get("/read-users", (req, res) => {
//     contUser.read(req, res).then((contUser) => {
//         return contUser
//     })
// })
// userRouter.get("/read-user/:id", (req, res) => {
//     contUser.readUser(req, res).then((contUser) => {
//         return contUser
//     })
// })
// userRouter.put("/update-user", (req, res) => {
//     contUser.update(req, res).then((contUser) => {
//         return contUser
//     })
// })
// userRouter.delete("/delete-user/:id", (req, res) => {
//     contUser.delete(req, res).then((contUser) => {
//         return contUser
//     })
// })