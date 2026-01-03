// Shared events data for the club calendar and sidebar
// Update this file to add or change events in one place.
window.events = [
  { title: "Holiday Break", start: "2025-12-19", end: "2026-01-05", allDay: true }
  // Add more one-off events here
];

// Recurring events (weekday: 0=Sun ... 6=Sat)
window.recurring = [
  { title: "CCS Meeting", weekday: 3, start: "2025-09-05", end: "2026-06-30" }, // every Wednesday
  { title: "R1 Robotic Club Meeting", weekday: 4, start: "2025-09-09", end: "2026-06-30" } // every Thursday
];
