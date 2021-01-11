import express from 'express'
import fs from 'fs'
import yaml from 'js-yaml'

// import socketIO from "socket.io";

export default (app, http) => {
  console.log('yes')
  app.use(express.json())
  app.get('/api/companies', (req, res) => {
    try {
      const fileContents = fs.readFileSync('server/companies.yml', 'utf8')
      const data = yaml.loadAll(fileContents)
      res.json(data)
    } catch (e) {
      res.json({ error: e })
      console.log(e)
    }
  })
  // optional support for socket.io
  // 
  // let io = socketIO(http);
  // io.on("connection", client => {
  //   client.on("message", function(data) {
  //     // do something
  //   });
  //   client.emit("message", "Welcome");
  // });
}
