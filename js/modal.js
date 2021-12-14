const refs = {
  formElem: document.querySelector('.form-registration'),
};

refs.formElem.addEventListener('submit', onSubscribeSubmit);

function onSubscribeSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log(`name: ${name}`);
    console.log(`value: ${value}`);
  });
  event.currentTarget.reset();
}
