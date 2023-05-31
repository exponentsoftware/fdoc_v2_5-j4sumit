// Write a function to find the 5 most common rocket IDs used in the launches and their respective counts. Also, display the full rocket name alongside the rocket ID.

const commonRocket = async () => {
    let ids = [];
    let count = 0;
    let maxCount = 0;
    let element;
  
    let data = await fetch("https://api.spacexdata.com/v4/launches");
    console.log("data is Fetched");
    let launchData = await data.json();
    ids = await launchData.map((d) => d.rocket);
    let rockets = []
    for (let i = 0; i < ids.length; i++) {
      rockets[ids[i]] = rockets[ids[i]] ? rockets[ids[i]] + 1 : 1;
    }
  
    console.log(rockets);
    return element;
  };
  
  console.log(commonRocket());