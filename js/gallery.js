// Modal window controller.
let modal = {
  state: null,
  links: null,
  close: null,
}

// bind links
function bindModal() {
  modal.links = $('.js-modal-link');
  modal.close = $('.js-modal-close');
}
// unbind on close
