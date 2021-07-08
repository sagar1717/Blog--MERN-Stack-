
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
    url: "mongodb+srv://sagar246:Sagar@123@blogweb.0b7dn.mongodb.net/Blog?retryWrites=true&w=majority",
    options: { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.memeType) === -1)
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({ storage });