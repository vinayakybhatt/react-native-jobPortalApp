const axios = require("axios");
const { v4 } = require("uuid");
// const data = {
//   id: v4(),
//   experience: "3",
//   comapnyName: "Teleperformance",
//   designation: "Project Manager",
//   location: "Jaipur",
//   logoUrl: "http://t3.gstatic.com/images?q=tbn:ANd9GcS-X-C4eJ1Sk8Op4mA2kRjc3fgtqY4nimSE0V7Sv1eXt3kxwAN0",
//   package: '1000000',
//   type: 'Full Time',
// };

const generator = async (details) => {
    try {
        const { data } = await axios.post("https://react-native-jobportalbackend.firebaseio.com/jobs.json", details);
        console.log(data)
    } catch (e) {
        console.log (`e -> ${e.message}`)
    }
};

generator(data);

// const getDetails = async () => {
//     try {
//         const { data } = await axios.get("https://train-booking-tfd.firebaseio.com/trains.json")
//         console.log(data)
//     } catch (e) {
//         console.log (`e -> ${e.message}`)
//     }
// }
// getDetails()