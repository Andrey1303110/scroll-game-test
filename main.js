let all_height = document.body.offsetHeight
let build_numbers = 3;
let cf = 1;

let scene = document.getElementById('main')

let bg = document.createElement("div");
bg.classList.add("main_bg")
scene.appendChild(bg)

let mountains = document.createElement("div");
mountains.classList.add("mountains")
scene.appendChild(mountains)

let hills = document.createElement("div");
hills.classList.add("hills")
scene.appendChild(hills)

let sun = document.createElement("div");
sun.classList.add("sun")
scene.appendChild(sun)

let road = document.createElement("div");
road.classList.add("road")
scene.appendChild(road)

let car = document.createElement("div");
car.classList.add("car")
scene.appendChild(car)

let wheel_1 = document.createElement("div");
wheel_1.classList.add("wheel")
wheel_1.classList.add("wheel_1")
car.appendChild(wheel_1)
wheel_1.style.transform = 'rotate(0deg)'

let wheel_2 = document.createElement("div");
wheel_2.classList.add("wheel")
wheel_2.classList.add("wheel_2")
car.appendChild(wheel_2)
wheel_2.style.transform = 'rotate(0deg)'

for (i = 1; i <= build_numbers; i++) {
    let build = document.createElement("div");
    build.classList.add(`trs`)
    build.classList.add(`build`)
    build.classList.add(`build_${i}`)
    scene.appendChild(build)
    let cof = Math.cbrt(build.offsetTop/window.innerHeight)
    build.style.height = `${cof*45}vw`
    build.style.width = `${cof*20}vw`
}

for (i = 1; i <= build_numbers; i++) {
    let house_1 = document.createElement("div");
    house_1.classList.add(`trs`)
    house_1.classList.add(`house_1`)
    house_1.classList.add(`house_1_${i}`)
    scene.appendChild(house_1)
    let cof = Math.cbrt(house_1.offsetTop/window.innerHeight)
    house_1.style.height = `${cof*15}vw`
    house_1.style.width = `${cof*30}vw`
}

let ahcors = document.querySelectorAll('#anchors div')
let now_anchor = 0;
let last_achor = 0;

window.addEventListener('scroll', function(e) {
    now_anchor=window.scrollY + (window.innerHeight/2);
    if (now_anchor >= window.innerHeight) {
        if (now_anchor >= last_achor) {
            cf = -1
        }
        if (now_anchor < last_achor) {
            cf = 1
        }
        let trs = document.querySelectorAll('.trs')
        for (let i = 0; i < trs.length; i++) {
            trs[i].style.left = trs[i].offsetLeft + (window.innerHeight/5 * cf) + 'px'
        }
        road.style.left = road.offsetLeft + (window.innerHeight/5 * cf) + 'px'
        let last_rotate = parseInt(wheel_1.style.transform.match(/\d+/))
        wheel_1.style.transform = `rotate(${last_rotate+45*cf*-1}deg)`
        wheel_2.style.transform = `rotate(${last_rotate+45*cf*-1}deg)`
        let last_car_left = parseInt(window.getComputedStyle(car).left.match(/\d+/))
        car.style.left = last_car_left + (window.innerWidth/20) * cf * -1 + 'px'
        let last_hills_left = parseInt(window.getComputedStyle(hills).left.match(/\d+/))
        hills.style.left = last_hills_left + (window.innerWidth/40) * cf + 'px'
        last_achor = now_anchor
    }
})

