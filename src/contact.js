document.querySelector('#contact-form').addEventListener('submit', (e) => {
  localStorage.setItem("submit-form", "TRUE")
  e.preventDefault()
  const data = new FormData(document.querySelector('#contact-form'))
  const action = "https://script.google.com/macros/s/AKfycbw_z8xkvm2yBkpSvnoBsugpWeITHx8_rdwscd28mJsPUXH9VOX1Z7MV-9slkytofX8q/exec"
  fetch(action, {
    method: "POST",
    body: data,
  })
  window.location.href = "/success.html"
})

const prefillString = sessionStorage.getItem("prefill-text")
if (prefillString) {
  sessionStorage.removeItem("prefill-text")
  const prefill = document.querySelector("#prefill")
  prefill.innerText = prefillString
}