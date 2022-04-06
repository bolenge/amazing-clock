const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')

// Digital clock
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const ampm = document.querySelector('#ampm')

// Audio
const sound = document.querySelector('#sound')

setInterval(() => {
  sound.play()

  let day = new Date()

  let h = day.getHours()
  let m = day.getMinutes()
  let s = day.getSeconds()

  let hh = h * 30
  let mm = m * 6
  let ss = s * 6

  hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`
  mn.style.transform = `rotateZ(${mm}deg)`
  sc.style.transform = `rotateZ(${ss}deg)`

  // Digital clock

  let am = h >= 12 ? 'PM' : 'AM'

  // Add zero before clock to 12hr clock
  h = (h < 10) ? '0' + h : h
  m = (m < 10) ? '0' + m : m
  s = (s < 10) ? '0' + s : s

  hours.innerHTML = h
  minutes.innerHTML = m
  seconds.innerHTML = s
  ampm.innerHTML = am
})