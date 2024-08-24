import express from "express"
import next from "next"
import nextBuild from "next/dist/build"
import path from "path";

const app = express()
const PORT = process.env.PORT || 3000


const nextApp = next({
    dev: process.env.NODE_ENV !== "production"
})

const nextHandler = nextApp.getRequestHandler()
app.use((req, res) => {
    return nextHandler(req, res)
})

// payload.init({...})

if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
        // @ts-expect-error
        await nextBuild(path.join(__dirname, "../"))
        process.exit()
    })

} else {

    nextApp.prepare().then(() => {
        console.log('starting Server')
        app.listen(PORT)
    })
    process.on("SIGTERM", () => {
        process.exit(0)
    })
    process.on("SIGINT", () => {
        process.exit(0)
    })
}