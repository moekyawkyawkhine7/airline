export default function handler(req, res) {
    let data = [
        {
            img: "https://a0.muscache.com/im/pictures/9a21abf8-43d8-4742-90ec-df92c6a698de.jpg",
            title: "Shimla, India"
        },
        {
            img: "https://a0.muscache.com/im/pictures/miso/Hosting-13381106/original/52cb1b81-a134-4c71-9ce3-7903f13bc5a9.jpeg",
            title: "The Brandy Bus, Thailand"
        },
        {
            img: "https://a0.muscache.com/im/pictures/b814a880-e3bd-49a9-b6a8-09028afd8acd.jpg",
            title: "Kas, Turkey"
        },
        {
            img: "https://a0.muscache.com/im/pictures/d91d2d91-58dd-4f07-be46-284d9752cf72.jpg",
            title: "Mueang Chiang Mai"
        },
        {
            img: "https://a0.muscache.com/im/pictures/miso/Hosting-26934863/original/bb76077c-793e-4eb6-b7f4-7d3f7066d345.jpeg",
            title: "Free Floating Breakfast at Unique 1BR Private Pool"
        }
    ]
    res.status(200).json(data)
}
