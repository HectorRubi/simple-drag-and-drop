(function () {
    var onDragStart = function (dragEvent) {
        var _a;
        var target = dragEvent.target;
        (_a = dragEvent.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('text', target.id);
        target.style.color = 'green';
    };
    var onDrop = function (dropEvent) {
        var _a, _b;
        dropEvent.preventDefault();
        var target = dropEvent.target;
        var data = (_a = dropEvent.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('text');
        if (data) {
            target.appendChild((_b = document.getElementById(data)) !== null && _b !== void 0 ? _b : new HTMLElement());
        }
        var drag = document.getElementById('drag');
        if (drag) {
            drag.style.color = 'black';
        }
    };
    var onDragOver = function (dragOverEvent) {
        var target = dragOverEvent.target;
        target.style.color = 'blue';
        dragOverEvent.preventDefault();
    };
    var dropElement1 = document.getElementById('drop1');
    if (dropElement1) {
        dropElement1.addEventListener('drop', onDrop);
        dropElement1.addEventListener('dragover', onDragOver);
    }
    var dropElement2 = document.getElementById('drop2');
    dropElement2 === null || dropElement2 === void 0 ? void 0 : dropElement2.addEventListener('drop', onDrop);
    dropElement2 === null || dropElement2 === void 0 ? void 0 : dropElement2.addEventListener('dragover', onDragOver);
    var dragElement = document.getElementById('drag');
    dragElement === null || dragElement === void 0 ? void 0 : dragElement.addEventListener('dragstart', onDragStart);
})();
