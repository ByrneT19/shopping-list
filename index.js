$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    console.log(event);
    const basket = $('input[name="shopping-list-entry"]').val();
    console.log(basket);
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${basket}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  $('input[name="shopping-list-entry"]').val(null);//could also use ""//
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    console.log(event);
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item_checked');
});

$('.shopping-list').on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
});