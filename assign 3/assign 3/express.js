const express = require('express')

const app = express()
app.use(express.json())
const users = [
    { name: "khaled", age: 22, email: "khaled@gmail.com" },
    { name: "ahmed", age: 12, email: "ahmed@gmail.com" },
    { name: "mohamed", age: 77, email: "mohamed@gmail.com" }
]

app.get('/express', (req, res) => {
    res.write("welcome")
    res.end()
})

app.patch('/update-user', (req, res) => {
    const { name, email, age } = req.body
    let isExist = false
    users = users.map(user => {
        if (user.email == email) {
            user.name = name
            user.age = age
            isExist = true
            return user
        } else {
            return user
        }
    })
    if (isExist) {
        res.json({ message: "Done", users })
    } else {
        res.json({ message: "user not found" })
    }
})


app.get('/get-posts', (req, res) => {
    res.json({ posts })
})

const posts = [
    { title: "p1", content: "st 1" },
    { title: "p2", content: "sec 2" },
   
]
app.get('/sort-posts', (req, res) => {
    posts = posts.sort((a, b) => {
        if (a.title > b.name) {
            return 1
        } else {
            return -1
        }
    })

    res.json({ posts })
})

app.all('*', (req, res) => {
    res.json({ message: "invalid url" })
})
app.listen(3000, () => {
    console.log("express listening on port 3000");
})