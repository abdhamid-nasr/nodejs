const http = require('http')
const port = 5000
const server = http.createServer((req, res, next) => {

    const url = req.url;
    const method = req.method



    if (url == "/getUsers" && method == "GET") {
        res.write(JSON.stringify(users))
        res.end()
    } else if (url == "/add-user" && method == "POST") {
        // res.write('add')
        // res.end()
        let bufferedData
        req.on('data', (chunk) => {
            bufferedData = chunk
        })
        req.on('end', () => {
            let convertedData = JSON.parse(bufferedData)
            const isExist = users.find(user => {
                return user.email == convertedData.email
            })
            if (isExist) {
                res.write("this email exist")
                return res.end()
            } else {
                users.push(convertedData)
                res.write('Done')
                res.end()
            }
        })
    } else if (url == "/delete-user" && method == "DELETE") {
        // res.write('add')
        // res.end()
        let bufferedData
        req.on('data', (chunk) => {
            bufferedData = chunk
        })
        req.on('end', () => {
            let convertedData = JSON.parse(bufferedData)
            let newArray = users.filter(user => {
                return user.email != convertedData.email
            })
            if (newArray.length == users.length) {
                res.write('this email doesn\'t exist')
                res.end()
            } else {
                users = newArray
                res.write('Done')
                res.end()
            }

        })
    }

})




server.listen(3000, () => {
    console.log(
        `server running on port ${port}`
    );
})