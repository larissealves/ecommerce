const items = document.querySelectorAll('.list-images .item')
const dropZoneSet = document.querySelectorAll('.drop-zone');
const resetButton = document.querySelector('.reset-btn');

const imageList = document.querySelector('.list-images');

let draggedItem = null;

items.forEach( item => {
    item.addEventListener('dragstart', (e) => {
        draggedItem = item;
        item.classList.add('dragging');
    });
    item.addEventListener('dragend', () => {
        draggedItem.classList.remove('dragging');
    });
});

dropZoneSet.forEach(dropzone => {
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('hoverOver');
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('hoverOver');
    });

    dropzone.addEventListener('drop', () => {
        dropzone.classList.remove('hoverOver');

        if (draggedItem) {
            dropzone.appendChild(draggedItem);
        }
    });;
})


resetButton.addEventListener('click', () => {
    const droppedItems = document.querySelectorAll('.drop-zone .item');
    console.log('aaa',  document.querySelectorAll('.drop-zone .item'))
    droppedItems.forEach(item => {
        imageList.appendChild(item);
    });
});