/* =========================================================
   Getaway – small shared helpers used by every page.
   ========================================================= */

/* Read a value from the page address, e.g. ?id=savoy */
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name) || "";
}

/* Format a number as pounds, e.g. 1500 -> £1,500 */
function money(amount) {
  return "£" + Number(amount).toLocaleString("en-GB");
}

/* Format 2026-12-01 as "1 Dec 2026" */
function niceDate(value) {
  if (!value) return "Not set";
  return new Date(value + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/* "2 adults, 1 child" */
function guestsText(adults, children) {
  const a = Number(adults) || 0;
  const c = Number(children) || 0;
  return a + (a === 1 ? " adult" : " adults") + ", " + c + (c === 1 ? " child" : " children");
}

/* Image paths */
function holidayImage(holiday, number) {
  return "static/images/holidays/" + holiday.id + "-" + (number || 1) + ".jpg";
}
function carImage(car) {
  return "static/images/cars/" + car.id + ".jpg";
}

function findHoliday(id) {
  return HOLIDAYS.find(function (h) { return h.id === id; });
}
function findCar(id) {
  return CARS.find(function (c) { return c.id === id; });
}
function findCompany(id) {
  return COMPANIES.find(function (c) { return c.id === id; });
}

/* Today's date as yyyy-mm-dd (used to stop past dates being picked) */
function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split("T")[0];
}

/* ---------- Bookings (saved in the browser with localStorage) ---------- */
const BOOKINGS_KEY = "getaway-bookings";

function getBookings() {
  try {
    return JSON.parse(localStorage.getItem(BOOKINGS_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function saveBookings(list) {
  try {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(list));
  } catch (error) {
    alert("Your browser blocked saving the booking.");
  }
}

/* ---------- Back to top button ---------- */
/* Shows the arrow once the user has scrolled down the page. */
const toTop = document.getElementById("to-top");
if (toTop) {
  const toggleToTop = function () {
    toTop.hidden = window.scrollY < 400;
  };
  window.addEventListener("scroll", toggleToTop);
  toggleToTop();
}
