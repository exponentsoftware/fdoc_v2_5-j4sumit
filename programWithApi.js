const LAUNCHES_API_URL = "https://api.spacexdata.com/v4/launches";
const ROCKETS_API_URL = "https://api.spacexdata.com/v4/rockets";
const PAYLOADS_API_URL = "https://api.spacexdata.com/v4/payloads";

// - Fetch the data from the API and store the launches, rockets, and payloads information in separate arrays.

// fetching launch API Data and store ing launches variable
// let launches = [];
// const getLaunches = async () => {
//   let data = await fetch(LAUNCHES_API_URL);
//   console.log("data is Fetched");
//   let launchData = await data.json();
//   launches = await launchData.map((d) => console.log(d));
// };

// getLaunches();
// console.log(launches);

// Fetching Rocket API data and store and in rocketData
// const getRocket = async () =>{
//   let data = await fetch(ROCKETS_API_URL);
//   console.log("data is fetched");
//   let rocketData = await data.json();
//   console.log(rocketData);
// };
// console.log(getRocket());

// Fetching datf from LAUNCHES_API_URL and stored in payLoadData
const getPayloads = async () => {
  let data = await fetch(LAUNCHES_API_URL);
  console.log("data is fetched");
  let payloadData = await data.json();
  console.log(payloadData);
};
console.log(getPayloads());

// - Write a function to count the number of successful launches and unsuccessful launches.
