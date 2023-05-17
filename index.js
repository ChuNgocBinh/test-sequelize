const express = require('express')
const sequelize = require('./src/db/db.config.js')
const userRouter = require('./src/routers/users.router.js')

async function main() {
    const app = express()
    app.use(express.json())
    try {
        await sequelize.authenticate();
        console.log('connect postgresql successfully')
    } catch (error) {
        console.error('connect error to the database:', error);
    }
    app.use('/api/users', userRouter)


    app.listen(3000, () => {
        console.log('server connected port 3000')
    })
}

main()