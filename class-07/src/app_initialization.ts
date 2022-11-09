function mainButtonEventListener(event: MouseEvent): void {
  // print the even object id
  console.log(event.target);
}

function addMainButtonEventListener(): void {
  const mainButton = document.getElementById("my_button");
  const span_1 = document.getElementById("span_1") as HTMLSpanElement;
  const estacionamientoInput = document.getElementById("estacionamiento") as HTMLInputElement;

  if (mainButton === null || span_1 === null) {
    throw new Error("Elements not found");
  }

  mainButton.addEventListener("click", mainButtonEventListener);
  span_1.innerHTML = estacionamientoInput.value;
}

function initializeApp(): void {
  addMainButtonEventListener();
}

export { initializeApp };
