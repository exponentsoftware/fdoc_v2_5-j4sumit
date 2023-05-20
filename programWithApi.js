const LAUNCHES_API_URL = 'https://api.spacexdata.com/v4/launches';
const ROCKETS_API_URL = 'https://api.spacexdata.com/v4/rockets';
const PAYLOADS_API_URL = 'https://api.spacexdata.com/v4/payloads';

async function fetchData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    throw new Error(`Failed to fetch data from $(url`);
}
const fetchLaunches = async () => {
    try {
        const launches = await fetchData(LAUNCHES_API_URL);
        return Object.values(launches);
    } catch (error) {
        console.error("Launch Fetch Error", error)
        return [];
    }
}


const fetchRockets = async () => {
    try {
        const rockets = await fetchData(ROCKETS_API_URL);
        return Object.values(rockets);
    } catch (error) {
        console.error("Rockets Fetch Error", error)
        return [];
    }
}


const fetchPayloads = async () => {
    try {
        const payloads = await fetchData(PAYLOADS_API_URL);
        return Object.values(payloads);
    } catch (error) {
        console.error("Payload Fetch Error", error)
        return [];
    }
}

const countLaunches = (launches) => {
    let successfulCount = 0;
    let unsuccessfulCount = 0;

    for (const launch of launches) {
        if (launch.success) {
            successfulCount++;
        } else {
            unsuccessfulCount++;
        }
    }
    return { successfulCount, unsuccessfulCount }
}

const findMostCommonRocketIds = (launches, rockets) => {
    const rocketCounts = {};

    for (const launch of launches) {
        const rocketId = launch.rocket;
        if (rocketCounts.hasOwnProperty(rocketId)) {
            rocketCounts[rocketId]++;
        } else {
            rocketCounts[rocketId] = 1;
        }
    }

    const sortedRocketCounts = Object.entries(rocketCounts).sort((a, b) => b[1] - a[1]);

    const mostCommonRocketIds = sortedRocketCounts.slice(0, 5).map(([rocketId]) => rocketId);
    const mostCommonRockets = rockets.filter((rocket) => mostCommonRocketIds.includes(rocket.id));

    return mostCommonRockets.map((rocket) => ({
        rocketId: rocket.id,
        rocketName: rocket.name,
        count: rocketCounts[rocket.id],
    }));
};

(async () => {
    const launches = await fetchLaunches();
    const rockets = await fetchRockets();
    const payloads = await fetchPayloads();

    const { successfulCount, unsuccessfulCount } = countLaunches(launches);
    console.log("Successful launches: ", successfulCount);
    console.log("Unsuccessful launches: ", unsuccessfulCount);
   const mostCommonRockets = findMostCommonRocketIds(launches, rockets);
    console.log("Most Common Rockets IDs and counts:");
    for (const rocket of mostCommonRockets) {
console.log(`Rocket ID: ${rocket.rocketId}`, `Name: ${rocket.rocketName}`, `Count: ${rocket.count}`);
    }
})();