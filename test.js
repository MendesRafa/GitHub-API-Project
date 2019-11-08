const Octokit = require("@octokit/rest");

const octokit = Octokit({
  auth: "e93c516943a9f1c81757bc3c2fa48004477ec53e",
  userAgent: "myApp v1.2.3",
  timeZone: "Europe/Dublin",
})

async function getData() {

var data = await octokit.pulls.get({
  owner: "octokit",
  repo: "rest.js",  
  pull_number: 123
});

console.log(data);

}

getData();