module.exports = {
    create(req, res){
        let roomID = 123456

        res.redirect(`/room/${roomID}`)
    }
}