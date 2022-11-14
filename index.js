let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")

let hPoints = 0
let gPoints = 0

export function homeOne() {
    hPoints++
    homePoints.textContent = hPoints
}

export function homeTwo() {
    hPoints += 2
    homePoints.textContent = hPoints
}

export function homeThree() {
    hPoints += 3
    homePoints.textContent = hPoints
}

export function guestOne() {
    gPoints++
    guestPoints.textContent = gPoints
}

export function guestTwo() {
    gPoints += 2
    guestPoints.textContent = gPoints
}

export function guestThree() {
    gPoints += 3
    guestPoints.textContent = gPoints
}

