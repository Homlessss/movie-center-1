view.setText = function(id, content) {
    document.getElementById(id).innerText = content
}
view.setHTML = function(id, content) {
    document.getElementById(id).innerHTML = content
}

module.exports = {
    setText,
    setHTML
}