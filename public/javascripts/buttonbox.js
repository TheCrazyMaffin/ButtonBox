const url = `${document.location.origin}/api`;
function buttonPress(buttonNum) {
  $.ajax(`${url}/buttons/${buttonNum}`, {
    method: 'post',
  });
}

function doAction(actionType) {
  $.ajax(`${url}/actions/${actionType}`, {
    method: 'post',
  });
}
