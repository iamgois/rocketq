module.exports = {
    index(req, res){
        const roomID = req.params.roomID
        const questionId = req.params.question
        const actionId = req.params.action
        const password = req.body.password

        console.log(`room = ${roomID}, question = ${questionId}, action = ${actionId}, password = ${password}`)
    }
}