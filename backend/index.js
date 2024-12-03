const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/urlShortener", {




}).then(() => {
    console.log("connected to mongoDB")
}).catch((e) => {
    console.log("some error has occured")
})



const app = express();
const PORT = 5000



// Define schema
const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Create model
const Url = mongoose.model('Url', urlSchema);


app.get("/", (req, res) => {
    res.send("Hello world!")
})
app.get("/:url", (req, res) => {
    const { url } = req.params;
    let shortUrl = "http://localhost:5000/" + url;

    const existingURL = Url.findOne({ shortUrl: shortUrl }).then((data) => {
        console.log(data.originalUrl);
        res.redirect(data.originalUrl);

    }).catch((e) => {
        console.log(e);
    })


})
app.use(cors());
app.use(express.json()); // Parse JSON payloads

// Simulate a database (replace with real DB in production)
let urls = [];


let generateShortUrl = () => {
    return "http://localhost:5000/" + Math.random().toString(36).substring(2, 8);
}

// POST endpoint to save the URL
app.post('/api/save-url', (req, res) => {
    const { originalUrl } = req.body;

    if (!originalUrl) {
        return res.status(400).json({ error: 'URL is required' });
    }
    console.log(originalUrl);
    // console.log(Url.findOne({ originalUrl }));
    // if (Url.findOne({ originalUrl : originalUrl }) != null) {
    //     Url.findOne({ originalUrl }).then((data) => {
    //         // console.log(data.originalUrl);
    //         // console.log(data.shortUrl);
    //         // const newUrl = new Url({ originalUrl: data.originalUrl, shortUrl: data.shortUrl })
    //         return res.status(201).json({
    //             message: 'URL saved successfully',
    //             // url: newUrl,
    //         });

    //     }).catch((e) => {
    //         console.log(e)
    //     });

    // } else {




    //     try {
    //         // Generate a short URL (simple random string for demo purposes)
    //         // const shortUrl = Math.random().toString(36).substring(2, 8);

    //         // Save to MongoDB
    //         

    // }

    Url.findOne({originalUrl : originalUrl}).then((data)=>{
        // console.log(data);

        if(data==null){
            const newUrl = new Url({ originalUrl: originalUrl, shortUrl: generateShortUrl() });

            newUrl.save().then(() => {
                console.log("Saved successfully")
            }).catch((e) => {
                console.log("some error has occured : " + e)
            });

            res.status(201).json({
                message: 'URL saved successfully',
                url: newUrl,
            });

        } else{
            res.status(201).json({
                message : "URL already existed",
                url : {
                    originalUrl: data.originalUrl, 
                    shortUrl: data.shortUrl

                }
            })
        }
    }).catch((e)=>{
        console.log(e + " 117")

    })

});


app.listen(PORT, () => {
    console.log("listening to port")
})