import express, { Request, Response } from 'express';


const app = express();

const PORT = 5000;


interface Bikes {
    readonly id: number;
    name: string;
    price: number;
    email?: string;
    contact: number;
    isSportBike: boolean

}

const bikes: Bikes[] = [
    {
        id: 1,
        name: "Royal Enfield Classic 350",
        price: 190000,
        contact: 9876543210,
        isSportBike: false,
    },

    {
        id: 2,
        name: "TVS Apache RTR 160",
        price: 118000,
        email: "apache160@tvs.com",
        contact: 9654321098,
        isSportBike: true,
    },

    {
        id: 3,
        name: "KTM Duke 390",
        price: 330000,
        email: "duke390@ktm.com",
        contact: 9432109876,
        isSportBike: true,
    },

    {
        id: 4,
        name: "Yamaha FZ-S FI",
        price: 125000,
        contact: 954321098,
        isSportBike: false,
    }
];

app.get('/bikes', (req: Request, res: Response) => {
    res.json({
        success: true,
        data: bikes,
        message: "Bikes data fetch successfully"
    });
});


app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello from Prathamesh" });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});