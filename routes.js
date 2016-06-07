exports.issues = io => {
  return (req, res) => {
    console.log('Request:', req.body)
    io.sockets.emit("notification", req.body)
    res.sendStatus(200)
  }
}
