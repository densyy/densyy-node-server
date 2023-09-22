/* ---- Requires ---- */

const express = require('express')

/* ---- Constants ---- */

const app = express()
const port = 53100

/* ---- Configs ---- */

app.listen(port, () => console.log(`listening on port ${port}`))

/* ---- Routes ---- */

app.get('/', (_req, res) => {
  return res
    .status(200)
    .json({ body: 'ok' })
})
