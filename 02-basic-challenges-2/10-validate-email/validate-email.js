function validateEmail(email) {
  const preAfter = email.split("@");
  console.log(preAfter);
  if (preAfter.length !== 2) return false;
  if (preAfter[0] === "") return false;
  if (preAfter[1].split(".").length !== 2) return false;
  return true;
}

console.log(validateEmail("@domain.com"));

module.exports = validateEmail;
