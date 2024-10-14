const express = require ("express"); //import same as on react
const { getMovies, getMoviesById, insertMovies, editMovies, deleteMovies } = require("../controllers/movies");
const { getStudiosFilm, getStudiosById, insertStudios, deleteStudios } = require("../controllers/studios");
const { getTheater, getTheaterById, insertheater } = require("../controllers/theater");
const { getUser, getUserById, insertUser } = require("../controllers/user");
const {  getTransaction, getTransactionById, insertTransaction } = require("../controllers/transaction");
const { validateMovie } = require("../validators/validatorsMovies");
const { validateStudio } = require("../validators/validatorsStudios");
const { insertTransactionNew, getTransactionNew } = require("../controllers/transaction_new");
const { getProduct, getProductById, insertProduct, editProduct, deleteProduct } = require("../controllers/product");
const router = express.Router();
const upload = require("../middlewares/uploadFile");
const { register, login } = require("../controllers/auth");
const checkAuth = require("../middlewares/checkAuth");

router.get('/', (req,res) => {
    res.send("hello world")
})

//movie
router.get('/movie', getMovies )
router.get('/movie/:id', getMoviesById )
router.post('/movie', validateMovie ,insertMovies )
router.patch('/movie/:id', editMovies )
router.delete('/movie/:id', deleteMovies )

//studioFilm
router.get('/studiosFilm', getStudiosFilm ) 
router.get('/studiosFilm/:id', getStudiosById ) 
router.post('/studiosFilm', validateStudio , insertStudios )
router.delete('/studiosFilm/:id', deleteStudios )

//theater
router.get('/theater', getTheater)
router.get('/theater/:id', getTheaterById) 
router.post('/theater', insertheater )
// router.delete('/studioFilm/:id', deleteStudios )

//user
router.get('/user',checkAuth ,getUser ) 
router.get('/user/:id', getUserById) 
router.post('/user', insertUser )
// router.delete('/studioFilm/:id', deleteUser )

//transaction
router.get('/transaction', getTransaction) 
router.get('/transaction/:id', getTransactionById) 
router.post('/transaction', insertTransaction )
// router.delete('/studioFilm/:id', deleteTransaction )

//TransactonNew
router.get('/transactionNew', getTransactionNew) 
router.post('/transactionNew', insertTransactionNew )

// product
router.get('/product', checkAuth, getProduct)
router.get('/product/:id', getProductById)
router.post('/product', checkAuth, upload('image'), insertProduct )
router.patch('/product', editProduct)
router.delete('/product/:id', deleteProduct)

//register
router.post('/register', register)
//login
router.post('/login', login)


module.exports = router