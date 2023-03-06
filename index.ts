(() => {
  const onDragStart = (dragEvent: DragEvent) => {
    const target = dragEvent.target as HTMLElement;
    
    dragEvent.dataTransfer?.setData('text', target.id);
    target.style.color = 'green';
  };
  
  const onDrop = (dropEvent: DragEvent) => {
    dropEvent.preventDefault();
    const target = dropEvent.target as HTMLElement;

    const data = dropEvent.dataTransfer?.getData('text');
    if (data) {
      target.appendChild(document.getElementById(data) ?? new HTMLElement());
    }

    const drag = document.getElementById('drag');
    if (drag) {
      drag.style.color = 'black';
    }
  };
  
  const onDragOver = (dragOverEvent: DragEvent) => {
    const target = dragOverEvent.target as HTMLElement;
    target.style.color = 'blue';
    dragOverEvent.preventDefault();
  };

  const dropElement1 = document.getElementById('drop1');
  if (dropElement1) {
    dropElement1.addEventListener('drop', onDrop);
    dropElement1.addEventListener('dragover', onDragOver);
  }

  const dropElement2 = document.getElementById('drop2');
  dropElement2?.addEventListener('drop', onDrop);
  dropElement2?.addEventListener('dragover', onDragOver);

  const dragElement = document.getElementById('drag');
  dragElement?.addEventListener('dragstart', onDragStart);

})()