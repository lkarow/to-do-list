function newItem() {
  // add new item to list of items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  // crossing out an item from the list of items
  $(li).dblclick(function() {
    li.toggleClass('strike')
  });

  // adding delete button "X"
  let deleteButton = $('<button></button>');
  deleteButton.append(document.createTextNode("X"));

  li.append(deleteButton);

  deleteButton.click(deleteListItem);

// adding class delete (display: none) from css
  function deleteListItem(){
    li.addClass('delete')
  }

// reordering items
  $('#list').sortable();
}
