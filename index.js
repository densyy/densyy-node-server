/* ---- Requires ---- */

const express = require('express')

/* ---- Constants ---- */

const app = express()
const port = 53100

/* ---- Configs ---- */

app.listen(port, () => console.log(`listening on port ${port}`))

/* ---- Routes ---- */

app.get('/', (_req, res) => res.status(200) )
