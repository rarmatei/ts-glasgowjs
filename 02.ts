function alwaysTrue() {
  return true;
}

if (alwaysTrue() === true) {
  console.log("I SHOULD SEE THIS");
} else {
  console.log("THIS SHOULD NOT HAPPEN...");
}
