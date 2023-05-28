const LAUNCHES_API_URL = 'https://api.spacexdata.com/v4/launches';
const ROCKETS_API_URL = 'https://api.spacexdata.com/v4/rockets';
const PAYLOADS_API_URL = 'https://api.spacexdata.com/v4/payloads';

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data:', error);
    return [];
  }
}

fetchData(LAUNCHES_API_URL)
  .then((launches) => {
    const launchesArray = Array.isArray(launches) ? launches : [launches];
    console.log('Launches:', launchesArray);
  })
  .catch((error) => {
    console.log('Error fetching launches data:', error);
  });

fetchData(ROCKETS_API_URL)
  .then((rockets) => {
    const rocketsArray = Array.isArray(rockets) ? rockets : [rockets];
    console.log('Rockets:', rocketsArray);
  })
  .catch((error) => {
    console.log('Error fetching rockets data:', error);
  });


fetchData(PAYLOADS_API_URL)
  .then((payloads) => {
    const payloadsArray = Array.isArray(payloads) ? payloads : [payloads];
    console.log('Payloads:', payloadsArray);
  })
  .catch((error) => {
    console.log('Error fetching payloads data:', error);
  });
