module.exports = {
    create(req, res){
        let roomID = 123456

        createInfoBD = {}

        res.redirect(`/room/${roomID}`)
    }
}