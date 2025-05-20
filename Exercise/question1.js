function calculateVAT(price) {
  if (price <= 0 || typeof price !== "number") {
    return "Invalid";
  } else {
    return (price * 7.5) / 100;
  }
}
