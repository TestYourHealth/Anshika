var windows = document.getElementsByClassName('window');
var prevPosition = { x: 0, y: 0 };

function startDrag(e) {
    e.preventDefault();
    prevPosition.x = e.clientX;
    prevPosition.y = e.clientY;
    document.addEventListener('mousemove', dragWindow);
    document.addEventListener('mouseup', stopDrag);
}

function dragWindow(e) {
    var offsetX = e.clientX - prevPosition.x;
    var offsetY = e.clientY - prevPosition.y;
    var windowElement = this.closest('.window');
    var left = windowElement.offsetLeft + offsetX;
    var top = windowElement.offsetTop + offsetY;
    windowElement.style.left = left + 'px';
    windowElement.style.top = top + 'px';
    prevPosition.x = e.clientX;
    prevPosition.y = e.clientY;
}

function stopDrag() {
    document.removeEventListener('mousemove', dragWindow);
    document.removeEventListener('mouseup', stopDrag);
}

function minimizeWindow() {
    var windowElement = this.closest('.window');
    windowElement.style.display = 'none';
}

function maximizeWindow() {
    var windowElement = this.closest('.window');
    windowElement.classList.toggle('maximized');
}

function closeWindow() {
    var windowElement = this.closest('.window');
    windowElement.remove();
}

for (var i = 0; i < windows.length; i++) {
    var titleBar = windows[i].querySelector('.title-bar');
    var minimizeButton = windows[i].querySelector('.title-bar-controls button[aria-label="Minimize"]');
    var maximizeButton = windows[i].querySelector('.title-bar-controls button[aria-label="Maximize"]');
    var closeButton = windows[i].querySelector('.title-bar-controls button[aria-label="Close"]');

    titleBar.addEventListener('mousedown', startDrag);
    minimizeButton.addEventListener('click', minimizeWindow);
    maximizeButton.addEventListener('click', maximizeWindow);
    closeButton.addEventListener('click', closeWindow);
}