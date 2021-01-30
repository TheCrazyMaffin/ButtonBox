function buttonPress(buttonNum) {
  const url = `${document.location.origin}/api`;
  $.ajax(`${url}/buttons/${buttonNum}`, {
    method: 'post',
  });
}
