# GitHub-API-Project

# Displaying the Programming Languages used in Repos which list "hackathon" as one of their topics

# Part 1 Fetching Data from GitHub and Storing it in MongoDB
For this part of the project I decided to use a Node.js library called octokit to communicate with the GitHub API. Once this was set up correctly, I was able to perform several search requests to get a list of 1000 (for search requests only the first (best) 1000 searches are returned) repos which had "hackathon" listed as one of their topics. From there I made sure to get rid of any empty repos from my data set. Furthermore I only deiced to get the name of the repo and the list of Languages utilised in the repo as well as how many bytes were written in the languages as this was the data I was interested in. To communicate with my MongoDB database I utilised the mongodb Node.js module, this allowed me to iniate a connection with my database and to then succesfully insert documents i.e. javascript objects with the data which I wanted to store in the database. This small application runs like any other Node.js app you simply need to install the dependencies and then it can be run from command line using the command `node index`.

# Part 2 Fetching Data from MongoDB and Data Manipulation and Sorting
This small application simply communicates with MongoDB to get all the data in my database (again using the mongodb NodeJs module) it then manipulates and sorts this data (in descending order). Additionally I created a branch in this repo which limits the data set to top 25 values. The data set is then written to a file in the local file system to be used statically in the data visualisation html. This app runs like the above NodeJs App.

# Part 3 Data Visualtion 
For this section I simply use a static html file as well as the d3js library to display the data that I have gathered. You can siply click the static HTML to be brought to the visualisation. Below I will include screenshots of the visulisation.

![alt text](./all%20langs.PNG)

![alt text](./top%2025%20langs.PNG)

# Possible Improvments
Displaying a graph for the individual repos in my data set.
Comparing the hackaton repos with normal repos in the organisations
