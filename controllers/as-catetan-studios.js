// // const studioFilm = [
// //     {
// //         id:1,
// //         name: "Warner Bros Pictures"
// //     },
// //     {
// //         id: 2,
// //         name: "Walt Disney Studios"
// //     },
// //     {
// //         id: 3,
// //         name: "Universal Sudios"
// //     },
// //     {
// //         id: 4,
// //         name: "20th Century Studios"
// //     },
// //     {
// //         id: 5,
// //         name: "Paramount pictures"
// //     },
// //     {
// //         id: 6,
// //         name: "Sony Studios"
// //     }
// // ] 

// const connection = require("../db/connection")

// exports.getStudiosFilm = async (req, res) => {

//     try {

//         const result = await connection.query('SELECT * FROM studios order by id asc;')
//         console.log(result.rows);

//         res.json({
//             productionHouse: result.rows,
//             massage: "succes"
//         })

//     } catch (error) {
//         console.log(error);
//     }

// }

// exports.getStudiosById = async (req, res) => {
//     const ID = parseInt(req.params.id)
//     // const findMoviesById = movie.find((item) => item.id == ID)//output  object
//     try {
        
//         const result = await connection.query(`SELECT * FROM studios WHERE id = ${ID};`)
//         const studiosData = result.rows[0]
//         console.log(result.rows[0]);
//         // console.log(result);

//         if (!studiosData) {

//             res.status(404).json({
//                 code: 404,
//                 massage: `id : ${ID} is not found  `
//             })
//         }
//         res.json({
//             productionHouse: studiosData,
//             massage: "succes"
//         })

//     } catch (error) {
//         console.log(error);
//     }
// }
