

// const connection = require("../db/connection")

// exports.getMovies = async (req, res) => {
// let query = ""
// if (req.query.genre) {
//     query = `SELECT * FROM movie WHERE not genre = '${req.query.genre}';`
// }
//     try {
//         console.log(req.query);
//         const search = await connection.query(query)
//         const result = await connection.query('SELECT * FROM movie order by id asc;')
//         // console.log(result.rows);
//         console.log(search);
        
//         res.json({
//             movieList: result.rows,
//             massage: "succes"
//         })

//     } catch (error) {
//         console.log(error);
//     }

// }

// exports.getMoviesById = async (req, res) => {
//     const ID = parseInt(req.params.id)
//     // const findMoviesById = movie.find((item) => item.id == ID)//output  object
//     try {

//         const result = await connection.query(`SELECT * FROM movie WHERE id = ${ID};`)
//         const movieData = result.rows[0]
//         // console.log(result.rows[0]);
//         // console.log(result);

//         if (!movieData) {

//             res.status(404).json({
//                 code: 404,
//                 massage: `id : ${ID} is not found  `
//             })
//         }
//         res.json({
//             movieList: movieData,
//             massage: "succes"
//         })

//     } catch (error) {
//         console.log(error);
//     }
// }




// exports.insertMovies = async (req, res) => {


//     try {

//         const newMovie = {
//             title: req.body.title,
//             genre: req.body.genre,
//             releaseDate: req.body.release_date,
//             studios_id: req.body.studios_id
//         }
//         const result = await connection.query(
//             `INSERT INTO movie (title, genre, release_date, studios_id) 
//              VALUES ($1, $2, $3, $4) 
//              RETURNING *`,  // RETURNING * untuk mengembalikan data yang di-insert
//             [newMovie.title, newMovie.genre, newMovie.releaseDate, newMovie.studios_id]
//         );
        
//         // console.log(result);

//         res.status(201).json({ //status insert biasanya 201
//             code: 201,
//             movieList: result.rows[0],
//             massage: "add to movie list succes"
//         })

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             code: 500,
//             message: "An error occurred"
//         });
//     }


// }


// exports.editMovies = async (req, res) => {
//     // const ID = parseInt(req.params.id)
//     const newMovie = {
//         title: req.body.title,
//         genre: req.body.genre,
//         releaseDate: req.body.release_date,
//         studios_id: req.body.studios_id,
//         ID: parseInt(req.params.id)
//     }

//     try {

//         const result = await connection.query(
//             `UPDATE movie 
//              SET title=$1, genre=$2, release_date=$3, studios_id=$4
//              WHERE id=$5 
//              RETURNING *`, // Mengembalikan data yang di-update
//             [newMovie.title, newMovie.genre, newMovie.releaseDate, newMovie.studios_id, newMovie.ID] // Pastikan ID berada di posisi ke-5
//         );



//         if (result.rows.length === 0) {

//             res.status(404).json({
//                 code: 404,
//                 massage: `id : ${newMovie.ID} is not found  `
//             })
//         }
//         res.json({
//             movieList: result.rows[0],
//             massage: "succes"
//         })

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             code: 500,
//             message: "An error occurred"
//         });
//     }
// }


// exports.deleteMovies = async (req, res) => {
//     const ID = parseInt(req.params.id)

//     try {
//         // Query untuk menghapus film berdasarkan ID
//         const result = await connection.query(
//             `DELETE FROM movie WHERE id=$1 RETURNING *`, // RETURNING * mengembalikan data yang dihapus
//             [ID]
//         );

//         // Mengecek apakah ada film yang dihapus
//         const deletedCheck = result.rows.length;

//         // Jika tidak ada film dengan ID yang diberikan
//         if (deletedCheck === 0) {
//             return res.status(404).json({
//                 code: 404,
//                 message: `id : ${ID} is not found`
//             });
//         }

//         // Jika berhasil, kirimkan film yang dihapus
//         res.json({
//             deletedMovie: result.rows[0], // Mengembalikan data film yang dihapus
//             message: "deleted success"
//         });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             code: 500,
//             message: "An error occurred"
//         });


//     }
// }
