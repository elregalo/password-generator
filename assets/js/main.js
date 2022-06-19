let password = document.getElementById("password");

const genPassword = () => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let securePassword, randNumber;

  for (let i = 0; i <= 12; i++) {
    randNumber = Math.floor(Math.random() * chars.length);
    securePassword += chars.substring(randNumber, randNumber + 1);
  }
  document.getElementById("password").value = securePassword.replace("undefined", "");
};

const copyPassword = () => {
  password.select();
  password.setSelectionRange(0, 999);
  document.execCommand("copy");
};
