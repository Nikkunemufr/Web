// make connection
var socket = io.connect("http://localhost:8080")

// query DOM
let btn = document.getElementById("buttonAnalyzer");
let movieSelect = document.getElementById("movieSelect");
let videoSource = document.getElementById("videoSource");
let videoSrc = document.getElementById("videoSrc");


btn.addEventListener("click", function () {
    //Emit Events
    socket.emit("changeVideo", {
        movieSelect: movieSelect.value
    });

    videoSource.ontimeupdate = function () {
        socket.emit("drawHealthBar", {
            vid_uuid: movieSelect.value,
            frame: parseInt(Math.round(videoSource.currentTime * 60) / 10) * 10
        });
    };

    socket.emit("drawDatas", {
        vid_uuid: movieSelect.value
    });


    //Listener Events
    socket.on("changeVideo", function (data) {
        videoSrc.setAttribute("src", 'video/' + data.movieSelect + '.mp4');
        videoSource.load();
    });

    socket.on("drawHealthBar", function (data) {
        let frame = parseInt(Math.round(videoSource.currentTime * 60) / 10) * 10;
        var element = document.getElementById("currFrame");
        element.innerHTML = "<b>Current frame: </b>" + frame;
        if (data.length != 0) {
            generateHealthBar(data);
        }
    });

    socket.on("drawDatas", function (data1, data2) {
        if (data1.length != 0 && data2.length != 0) {
            videoSource.onloadedmetadata = function () {
                generateDeathCount(data1, videoSource.duration * 60);
                generateUltimateState(data2, videoSource.duration * 60);
                generateDeathPlayer(data1);
            };
        }
    });
});


