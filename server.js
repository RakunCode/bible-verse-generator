import express from 'express'
import axios from 'axios'

const app = express();

app.use(express.json());

        const libros = [
    // Antiguo Testamento
    'genesis',
    'exodus',
    'leviticus',
    'numbers',
    'deuteronomy',
    'joshua',
    'judges',
    'ruth',
    '1samuel',
    '2samuel',
    '1kings',
    '2kings',
    '1chronicles',
    '2chronicles',
    'ezra',
    'nehemiah',
    'esther',
    'job',
    'psalm',
    'proverb',
    'ecclesiastes',
    'songofsolomon',
    'isaiah',
    'jeremiah',
    'lamentations',
    'ezekiel',
    'daniel',
    'hosea',
    'joel',
    'amos',
    'obadiah',
    'jonah',
    'micah',
    'nahum',
    'habakkuk',
    'zephaniah',
    'haggai',
    'zechariah',
    'malachi',
    // Nuevo Testamento
    'matthew',
    'mark',
    'luke',
    'john',
    'acts',
    'romans',
    '1corinthians',
    '2corinthians',
    'galatians',
    'ephesians',
    'philippians',
    'colossians',
    '1thessalonians',
    '2thessalonians',
    '1timothy',
    '2timothy',
    'titus',
    'philemon',
    'hebrews',
    'james',
    '1peter',
    '2peter',
    '1john',
    '2john',
    '3john',
    'jude',
    'revelation'
];

app.get('/frases/aleatoria', async (req, res) => {
    try{
        const libroRandom = libros[Math.floor(Math.random() * libros.length)]
        const capituloRandom = Math.floor(Math.random() * 50) + 1;
        const versiculoRandom = Math.floor(Math.random() * 30) + 1;

        const response = await axios.get(
            `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/${libroRandom}/chapters/${capituloRandom}/verses/${versiculoRandom}.json`
        )

        res.json({
            success: true,
            verse: response.data,
            reference: `${libroRandom} ${capituloRandom}:${versiculoRandom}`
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: 'No se puede obtener el versiculo'
        })
    }
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
    console.log(`Server listening http://localhost:${PORT}`)
})