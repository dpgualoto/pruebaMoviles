import cors from "cors"
import multer from "multer";
import {v4 as uuidv4} from 'uuid';
import express, {response} from "express"
import {process_doc} from "./lang_script";

//Se utiliza express.js 
const app = express()

// se utuilizar formato json en las diferentes peticiones 
app.use(express.json())

//configración del puerto
const PORT = 9004

// Nos permite solicitudes desde un dominio diferente al del servidor
app.use(cors())

//Funcion que nos permite realizar la carga de archivos
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

//comprobación si es un archivo pdf
const upload = multer({
    storage,
    fileFilter(req, file, callback: multer.FileFilterCallback) {
        const fileExtension = path.extname(file.originalname)
        if (!fileExtension.includes('.pdf')) {
            callback(new Error('Solo pdf'))
        }
        callback(null, true)
    }
})


// segundo método
const upload2 = multer({
    storage,
    fileFilter(req, file, callback: multer.FileFilterCallback) {
        const allowedFileExtensions = ['.pdf', '.xml', '.doc', '.docx']; // Lista de extensiones permitidas
        
        // Verifica si la extensión del archivo está en la lista de extensiones permitidas
        const fileExtension = path.extname(file.originalname).toLowerCase();
        
        if (!fileExtension.includes(fileExtension)) {
            callback(new Error('solo formatos admitidos'))
        }
        callback(null, true)
    }
})


import { OpenAI} from '@langchain/openai';
import * as path from "path";

const openai = new OpenAI({
    openAIApiKey: "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",
});
const generatePrompt = (numberToConvert: number) => {
    return ` Tu tienes un rol de convertidor binario y requiero que conviertes este numero ${numberToConvert} a  binario`

}

let names = [
    {
        id: uuidv4(),
        firstName: 'Diego',
        lastName: 'Gualoto'
    },
    {
        id: uuidv4(),
        firstName: 'Lea',
        lastName: 'Rolfes'
    }
]
app.get("/ping", (req, res) => {
    console.log("alguien ha dado pin!!")
    res.setHeader("Content-Type", "application/json")
    res.send("Hola has dado un ping al servidor")
})


//solicitud para cargar el archivo y la pregunta
app.post('/upload', upload.single('file'), async (req, res) => {
    if (!req.file || !req.body?.question) {
        return res.status(400).send()
    }
    const response = await process_doc(req.file?.filename, req.body.question)
    res.send(response)
})

app.get("/hola/:nombre/:apellido", (req, res) => {
    console.log("alguien ha dado pin!!")
    res.setHeader("Content-Type", "application/json")
    const nombre = req.params.nombre
    const apellido = req.params.apellido
    console.log("alguien ha ingresado su nombre")
    res.send({nombre, apellido})
})

app.get('/nombres', (req, res) => {

    res.setHeader('Content-Type', 'application/json')
    res.send(names)
})

app.post('/nombres', (req, res) => {
    const item = {...req.body, id: uuidv4()};
    names.push(item)
    res.send(item)
})

//Solicitud para generar un número binario
app.post('/openapi', async (req, res) => {
    const {prompt} = req.body
    const completion = await openai.invoke(
        generatePrompt(prompt)
    )
    // @ts-ignore
    res.send({result: completion})
})

app.delete('/nombres/:id', (req, res) => {
    names = names.filter(n => n.id !== req.params.id)
    res.status(204).end()
})

app.get('/nombres/:id', (req, res) => {
    const searchedName = names.find(n => n.id === req.params.id)
    if (!searchedName)
        res.status(400).end()
    res.send(searchedName)
})

app.put('/nombres/:id', (req, res) => {
    const index = names.findIndex(n => n.id === req.params.id)
    if (index === -1)
        res.status(404).end()
    names[index] = {...req.body, id: req.params.id}
    res.status(204).end()
})


//inicia el servicio express.js en el puerto que hemos definido al principio 9004
app.listen(PORT, () => {
    console.log(`running application ${PORT}`)

})


