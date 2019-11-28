const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mendesr:weLttJTuJjlrwRQF@githubproject-ncj49.mongodb.net/test?retryWrites=true&w=majority";
const fs = require('fs');
const util = require('util');

async function getData() {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true })
          .catch(err => { console.log('Error occurred while connecting to MongoDB Atlas...\n',err); } );


        if (client) {
          console.log("connected\n")
        }

        try {
          const db = client.db("Project");

          let collection = db.collection("Repos");

          let res = await collection.find({}).toArray();

          console.log(res);

          var justLangs = [];
          for (i=0; i<res.length; i++) {
            justLangs.push(res[i].languages);
          }

          var keys = [];

          for (i=0; i<justLangs.length; i++) {
            for(var k in justLangs[i]) keys.push(k);
          }

          var uniqueKeys = Array.from(new Set(keys));

          var result = {};

          for (i=0; i<uniqueKeys.length; i++) {
            result[uniqueKeys[i]] = 0;
          }

          for (i=0; i<justLangs.length; i++){
            for(var k in justLangs[i]) {
              result[k] += justLangs[i][k];
            }
          }

          var dataSet = JSON.stringify(result);

          fs.writeFileSync('data2.json', dataSet);
          
        } catch(err) {
          console.log(err);
        } finally {
          client.close();
        }

       
}

getData();
