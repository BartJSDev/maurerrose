var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

$("canvas").css("width", 100 + "%")
$("canvas").css("height", 100 + "%")
$("body").css("backgroundColor", "black")
$("body").css("margin", 0)
$("body").css("overflow", "hidden")


CreateMaurerRose(5, 97, canvas.height / 3)


function CreateMaurerRose(n, d, size) {

    var counter = 1
    var pointsFirstPath = []
    var pointsSecondPath = []

    for (var i = 0; i < 2 * Math.PI; i += Math.PI / 360) {

        //draw first path
        var k = i //* d
        var r = Math.sin(n * k) * size
        var x = canvas.width / 2 + r * Math.cos(k)
        var y = canvas.height / 2 + r * Math.sin(k)

        pointsFirstPath.push({ x: x, y: y })

        //draw second path
        var k = i * d
        var r = Math.sin(n * k) * size
        var x = canvas.width / 2 + r * Math.cos(k)
        var y = canvas.height / 2 + r * Math.sin(k)


        pointsSecondPath.push({ x: x, y: y })

    }

    function DrawMaurerrose() {


        if(counter === pointsFirstPath.length) {

            console.log("we are done")
            return
        }

        c.beginPath()
        c.strokeStyle = "rgba(255,255,0,.5)"
        c.lineWidth = 5
        c.moveTo(pointsFirstPath[counter - 1].x, pointsFirstPath[counter - 1].y)
        c.lineTo(pointsFirstPath[counter].x, pointsFirstPath[counter].y)
        c.stroke()
        c.closePath()

        c.beginPath()
        c.strokeStyle = "rgba(255,255,255,.3)"
        c.lineWidth = 1
        c.moveTo(pointsSecondPath[counter - 1].x, pointsSecondPath[counter - 1].y)
        c.lineTo(pointsSecondPath[counter].x, pointsSecondPath[counter].y)
        c.stroke()
        c.closePath()

        counter++

        requestAnimationFrame(DrawMaurerrose)
    }

    DrawMaurerrose()

}

