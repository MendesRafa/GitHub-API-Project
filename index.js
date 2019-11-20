const Octokit = require("@octokit/rest").plugin([
  require("@octokit/plugin-retry"),
  require("@octokit/plugin-throttling")
]);

const octokit = Octokit({
  auth: "e0324842d4e4c6bc10b900112db9ffa861e231cf",
  userAgent: "myApp v1.2.3",
  timeZone: "Europe/Dublin",


  throttle: {
    onRateLimit: (retryAfter, options) => {
      octokit.log.warn(
        `Request quota exhausted for request ${options.method} ${options.url}`
      );

      if (options.request.retryCount === 0) {
        // only retries once
        console.log(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    },
    onAbuseLimit: (retryAfter, options) => {
      // does not retry, only logs a warning
      octokit.log.warn(
        `Abuse detected for request ${options.method} ${options.url}`
      );
    }
  }
})

async function getData() {
    var data = await octokit.search.repos({
      q: "hackathon + topic:hackathon",
      per_page: 100
    });

    console.log(data);
    /** 
    var i;

    for(i=0; i<100; i++){
      var repoName = data.data.items[i].name;

      console.log(repoName);

      var result = await octokit.request(data.data.items[i].languages_url);

      var languages = result.data;

      console.log(languages);
    }
    */
}

getData();