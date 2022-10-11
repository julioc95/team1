const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    email: email.value,
    contraseña: contraseña.value,
  };

  console.log(data);
});
