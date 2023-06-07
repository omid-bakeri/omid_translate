"use strict";

const ph_moon = document.querySelector(".ph-moon");
const changeTheme = document.getElementById("changeTheme");
const translated_text = document.querySelector(".translated-text");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

changeTheme.addEventListener("click", function () {
  ph_moon.classList.toggle("ph-sun");
  if (localStorage.getItem("color-theme")) {
    // If light, make dark and save in localstorage
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // If not in localstorage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

//  dark mode and light mode

// api implementation translate

const showButtons = document.querySelector(".showButtons");
const btns = document.querySelectorAll(".btns");
const btnfa2En = document.querySelector(".btnfa2En");
const btnEn2fa = document.querySelector(".btnEn2fa");
// window load
window.addEventListener("load", () => {
  //   alert("به مترجم امید ترانسلیت خوش آمدید 😀");
  showButtons.classList.toggle("hidden");
});

const loading = document.querySelector(".loading");
const translate_page = document.querySelector(".translate-page");
const text = document.getElementById("text");
btnfa2En.addEventListener("click", () => {
  loading.classList.remove("hidden");
  showButtons.classList.add("hidden");

  setInterval(() => {
    loading.classList.add("hidden");
    translate_page.classList.remove("hidden");
  }, 2000);
  const api_translate = async function (sentence) {
    const api_element = await fetch(
      `https://one-api.ir/translate/?token=274908:641729abd8413&action=google&lang=en&q=${sentence}`
    )
      .then((response) => {
        if (!response.ok) {
          console.log("کاربر کرامی خطایی از طرف سرور رخ داده است.");
        } else {
          console.log("success");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data.result);
        translated_text.textContent = data.result;
      })
      .catch((err) => {
        console.log("مشکلی رخ داده است لطفا دوباره امتحان کنید.");
      });
  };
  text.addEventListener("input", () => {
    api_translate(text.value);
  });
});

//  conpy button
const copy = document.getElementById("copy-button");
const ph_copy = document.querySelector(".ph-copy");

copy.addEventListener("click", () => {
  if (translated_text.value.length == 0) {
    alert("متنی برای کپی وجود ندارد");
  }
  navigator.clipboard
    .writeText(translated_text.value)
    .then(() => {
      console.log("متن با موفقیت کپی شد");
      alert("متن کپی شد");
    })
    .catch((error) => {
      console.error("خطا در کپی کردن متن");
    });
});
