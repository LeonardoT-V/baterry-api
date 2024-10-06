import { selectorIcon } from "./icon.js";

const $chargingState = document.getElementById("battery-chargingState");
const $level = document.getElementById("battery-level");
const $icon = document.getElementById("battery-icon");

function updateBatteryUI(battery) {
  $level.textContent = battery.level * 100 + "%";
  $icon.innerHTML = selectorIcon(battery.level);
  if (battery.charging === true) {
    $chargingState.style.display = "block";
  } else {
    $chargingState.style.display = "none";
  }
}

if ("getBattery" in navigator) {
  navigator.getBattery().then((battery) => {
    updateBatteryUI(battery);
    battery.addEventListener(
      "levelchange",
      updateBatteryUI.bind(null, battery)
    );
    battery.addEventListener(
      "chargingchange",
      updateBatteryUI.bind(null, battery)
    );
  });
} else {
  ChromeSamples.setStatus(
    "The Battery Status API is not supported on " + "this platform."
  );
}
