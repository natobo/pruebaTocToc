import { Router } from "express";
import { getCharactersFromComic, getComics, getOneComic } from "../controllers/marvelComicController";

const router  = Router();

router.get('/',(_req, res)=> {
    getComics()
        .then((infoComicsMarvel)=> res.json(infoComicsMarvel))
        .catch((error)=> res.status(500).json({error: error}));
})

router.get('/:id',(req,res)=>{
    const idComic = req.params.id;
    getOneComic(idComic)
        .then((infoComicMarvel)=> res.json(infoComicMarvel))
        .catch((error)=> res.status(500).json({error: error}));
})

router.get('/:id/characters',(req,res)=>{
    const idComic = req.params.id;
    getCharactersFromComic(idComic)
        .then((infoCharacters)=> res.json(infoCharacters))
        .catch((error)=> res.status(500).json({error: error}));
})

export const routerMarvelComic = router;
