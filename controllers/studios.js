const studioFilm = [
    {
        id:1,
        name: "Warner Bros Pictures"
    },
    {
        id: 2,
        name: "Walt Disney Studios"
    },
    {
        id: 3,
        name: "Universal Sudios"
    },
    {
        id: 4,
        name: "20th Century Studios"
    },
    {
        id: 5,
        name: "Paramount pictures"
    },
    {
        id: 6,
        name: "Sony Studios"
    }
] 

exports.getStudioFilm = (req,res) => {
    res.json({
        studios: studioFilm,
        massage : "succes"
    })
}