var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

$("canvas").css("width", 100 + "%")
$("canvas").css("height", 100 + "%")
$("body").css("backgroundColor", "black")
$("body").css("margin", 0)
$("body").css("overflow", "hidden")


CreateMaurerRose(5, 97, canvas.height * .4)


function CreateMaurerRose(n, d, size) {

    var counter = 0
    var pointsFirstPath = []
    var pointsSecondPath = []

    for (var i = 0; i < 2 * Math.PI; i += Math.PI / 720) {

        var k1 = i
        var k2 = i * d
        var r1 = Math.sin(n * k1) * size
        var r2 = Math.sin(n * k2) * size
        
        var x1 = canvas.width / 2 + r1 * Math.cos(k1)
        var y1 = canvas.height / 2 + r1 * Math.sin(k1)

        pointsFirstPath.push({ x: x1, y: y1 })

        var x2 = canvas.width / 2 + r2 * Math.cos(k2)
        var y2 = canvas.height / 2 + r2 * Math.sin(k2)

        pointsSecondPath.push({ x: x2, y: y2 })

    }

    function DrawMaurerrose() {

        c.beginPath()
        c.strokeStyle = "rgba(255,255,0,.5)"
        c.lineWidth = 5
        c.moveTo(pointsFirstPath[counter].x, pointsFirstPath[counter].y)
        c.lineTo(pointsFirstPath[counter+1].x, pointsFirstPath[counter+1].y)
        c.stroke()
        c.closePath()

        c.beginPath()
        c.strokeStyle = "rgba(255,255,255,.3)"
        c.lineWidth = 1
        c.moveTo(pointsSecondPath[counter].x, pointsSecondPath[counter].y)
        c.lineTo(pointsSecondPath[counter+1].x, pointsSecondPath[counter+1].y)
        c.stroke()
        c.closePath()

        counter++

        if(counter === pointsSecondPath.length) {

            console.log("we are done")
            return
        }

        requestAnimationFrame(DrawMaurerrose)
    }

    DrawMaurerrose()

}

