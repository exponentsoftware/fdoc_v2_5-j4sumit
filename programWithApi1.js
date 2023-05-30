const launchStatus = async () => {
  let successful = 0;
  let unsuccessful = 0;
  let data = await fetch("https://api.spacexdata.com/v4/launches");
  console.log("data is Fetching");
  let launchData = await data.json();
  console.log(launchData);
    successful = launchData.filter((d) => d.success).length;
  unsuccessful = launchData.length - successful;
  console.log(successful, unsuccessful);
};
launchStatus();