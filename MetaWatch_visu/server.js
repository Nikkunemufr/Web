let express = require('express');
let socket = require("socket.io");
let app = express();
// Connection url
const MongoClient = require("mongodb").MongoClient;
const url = 'mongodb://127.0.0.1:27017';

// Server
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {

    MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client) {
        let db = client.db('metawatch');
        db.collection("movie").distinct("vid_uuid", {}, function (err, result) {
            console.log(result);
            res.render("index", {vid_uuid: result[1], videos: result});
        });

    });
});

const port = 8080;
server = app.listen(port);

function getHealthData(vid_uuid, frame) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client) {
            let db = client.db('metawatch');
            const collection = db.collection("health");
            collection.find({
                "vid_uuid": vid_uuid.toString(),
                "frame": frame.toString()
            }).toArray(function (err, result) {
                let res = [];
                result.forEach((players) => {
                    let player = {};
                    player["player_name"] = players.player_name;
                    player["health"] = players.health;
                    player["armor"] = players.armor;
                    player["shield"] = players.shield;
                    res.push(player);
                });
                //}
                resolve(res);
            });
        });
    });
}

function getDeathData(vid_uuid) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client) {
            let db = client.db('metawatch');
            const collection = db.collection("teamFightDeathData");
            collection.find({"vid_uuid": vid_uuid}).toArray(function (err, result) {
                let res = [];
                result.forEach((players) => {
                    let player = {};
                    if (parseInt(players.team_UUID) == 1) {
                        player["player_UUID"] = players.player_UUID;
                    } else {
                        player["player_UUID"] = parseInt(players.player_UUID) + 6;
                    }
                    player["player_name"] = players.player_name;
                    player["frame"] = players.frame;
                    player["team_name"] = players.team_name;
                    res.push(player);
                });
                //}
                resolve(res);
            });
        });
    });
}

function getUltimateStateData(vid_uuid) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client) {
            let db = client.db('metawatch');
            const collection = db.collection("ultimateEvents");
            collection.find({"vid_uuid": vid_uuid}).toArray(function (err, result) {
                let res = [];
                result.forEach((players) => {
                    let player = {};
                    if (parseInt(players.team_UUID) == 1) {
                        player["player_UUID"] = players.player_UUID;
                    } else {
                        player["player_UUID"] = parseInt(players.player_UUID) + 6;
                    }
                    player["player_name"] = players.player_name;
                    player["frame"] = players.frame;
                    player["team_name"] = players.team_name;
                    player["ultimateChange"] = players.ultimateChange;
                    res.push(player);
                });
                //}
                resolve(res);
            });
        });
    });
}

let io = socket(server);
io.on('connection', function (client) {
    console.log('Client connected...');
    client.on('changeVideo', function (data) {
        io.sockets.emit("changeVideo", data)
    });

    client.on("drawHealthBar", function (req) {
        getHealthData(req.vid_uuid, req.frame).then(function (data) {
            io.sockets.emit("drawHealthBar", data)
        });
    });

    client.on("drawDatas", function (req) {
        getDeathData(req.vid_uuid).then(function (data1) {
            getUltimateStateData(req.vid_uuid).then(function (data2) {
                io.sockets.emit("drawDatas", data1, data2)
            });
        });
    });

});




