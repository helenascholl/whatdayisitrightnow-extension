addEventListener('load', () => {
  showDay();
  setInterval(showDay, 100);
});

function showDay() {
  let day = getDay();
  let dayElement = document.getElementById('day');

  if (day !== dayElement.innerText) {
    dayElement.innerText = day;
  }
}

function getDay() {
  let date = new Date();
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  return new Intl.DateTimeFormat('en-GB', options).format(date);
}
