/*{
  bodyParser: {
    json: {
      type: "application/json",
        limit: "100kb"
    },
    raw: {
      type: "application/octet-stream",
        limit: "100kb"
    },
    text: {
      type: "text/plain",
        limit: "100kb"
    },
    urlencoded: {
      type: "application/x-www-form-urlencoded",
        limit: "100kb",
          extended: true
    }
  }
}*/

export const config = {
  bodyParser: {
    raw: {
      type: `*/*`,
    },
  },
}

export default function handler(req, res) {
  try {
    res.status(200).json({ hello: `world` })
  } catch (error) {
    res.status(500)
  }
}