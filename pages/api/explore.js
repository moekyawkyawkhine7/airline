export default function handler(req, res) {
    let data= [
        {
            img: "https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg",
            location: "Indonesia",
            distance: "6 Miles"
        },
        {
            img: "https://a0.muscache.com/im/pictures/6d4b8668-20d2-4c45-8de6-4378d7bf9239.jpg",
            location: "Indonesia",
            distance: "3 Miles"
        },
        {
            img: "https://a0.muscache.com/im/pictures/610236d1-a9e3-40cf-86a6-65616e8e6b80.jpg",
            location: "Vietnam",
            distance: "10 Miles"
        },
        {
            img: "https://a0.muscache.com/im/pictures/miso/Hosting-52068342/original/a02a7d4d-a1bc-418f-a6de-970d41beade0.jpeg",
            location: "India",
            distance: "7 Miles"
        },
        {
            img: "https://a0.muscache.com/im/pictures/7a83743c-b733-482a-aa4a-aa28e3fa9469.jpg",
            location: "Thailand",
            distance: "30 Miles"
        }
    ]
    res.status(200).json(data)
}
