import { format } from "date-fns"
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        location
    } = req.query;

    const dateFormat = (date: string) => {
        return format(new Date(date), "dd MMMM yy");
    }

    let data = [
        {
            img: "https://a0.muscache.com/im/pictures/9a21abf8-43d8-4742-90ec-df92c6a698de.jpg",
            destination: "India",
            rate: "4.8",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, maiores. Dolore rerum quasi delectus",
            startDate: dateFormat("9-10-2022"),
            endDate: dateFormat("9-15-2022"),
            price: 30
        },
        {
            img: "https://a0.muscache.com/im/pictures/miso/Hosting-13381106/original/52cb1b81-a134-4c71-9ce3-7903f13bc5a9.jpeg",
            destination: "Thailand",
            rate: "4.0",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, maiores. Dolore rerum quasi delectus",
            startDate: dateFormat("9-10-2022"),
            endDate: dateFormat("9-30-2022"),
            price: 100
        },
        {
            img: "https://a0.muscache.com/im/pictures/b814a880-e3bd-49a9-b6a8-09028afd8acd.jpg",
            destination: "Turkey",
            rate: "3.8",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, maiores. Dolore rerum quasi delectus",
            startDate: dateFormat("9-10-2022"),
            endDate: dateFormat("9-20-2022"),
            price: 50
        },
        {
            img: "https://a0.muscache.com/im/pictures/d91d2d91-58dd-4f07-be46-284d9752cf72.jpg",
            destination: "China",
            rate: "5.0",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, maiores. Dolore rerum quasi delectus",
            startDate: dateFormat("9-10-2022"),
            endDate: dateFormat("9-15-2022"),
            price: 20
        },
        {
            img: "https://a0.muscache.com/im/pictures/miso/Hosting-26934863/original/bb76077c-793e-4eb6-b7f4-7d3f7066d345.jpeg",
            destination: "USA",
            rate: "4.8",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, maiores. Dolore rerum quasi delectus",
            startDate: dateFormat("9-10-2022"),
            endDate: dateFormat("9-15-2022"),
            price: 30
        }
    ]
    let filterData = data.filter(_data => _data.destination.toLowerCase().includes(location))
    res.status(200).json(location ? filterData : data)
}
