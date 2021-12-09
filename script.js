// Your solution goes here 
function isStrongPassword(password) {
  // Verify long enough
  if (password.length < 8) {
    return false;
  }

  // Verify does not contain "password"
  if (password.indexOf("password") != -1) {
    return false;
  }

  // Verify at least one uppercase letter
  for (let i = 0; i < password.length; i++) {
    let char = password.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      return true;
    }
  }

  return false
}