const btn = document.querySelector(`button`);
let number = 1;

const addElement = () => {
  const div = document.createElement("div");
  div.textContent = number;

  if (number % 5 === 0) {
    div.classList.add("circle");
    if (number % 10 === 0) {
      div.style.color = "indigo";
      div.style.borderColor = "indigo";
    }
  }

  document.body.appendChild(div);

  number++;
};

btn.addEventListener(`click`, addElement);
