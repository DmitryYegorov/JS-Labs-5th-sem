const bgYellow = {
    bgColor: "yellow"
}

const radius = {
    radius: 10
}

const edgeLength = {
    length: 10
}

const bigSquare = {
    prototype: bgYellow,
    size: 5
}

const smallSquare = {
    prototype: bgYellow,
    size: 10
}

const whiteCircle = {
    prototype: radius,
    bgColor: "white"
}

const greenCircle = {
    prototype: radius,
    bgColor: "green"
}

const threeangleWhiteOneLine = {
    prototype: edgeLength,
    countLines: 1
}
const threeangleWhiteThreeLine = {
    prototype: edgeLength,
    countLines: 3
}

module.exports = {
    threeangleWhiteOneLine,
    threeangleWhiteThreeLine,
    whiteCircle,
    greenCircle,
    bigSquare,
    smallSquare
}