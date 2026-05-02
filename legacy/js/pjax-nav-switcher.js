// Pjax pagechange navigation highlight

$(document).ready(function(){
  const navItems = $('.js-pjax-container');
  let currentItem = null;

  $(document).on('pjax:success',function(){
    navItems.each(function(){
      const item = $(this);
      const activeClass = item.attr('activeClass');
      item.removeClass(activeClass);
    });
  });

  $(document).on('pjax:success',function(){
    if (currentItem != null) {
      const activeClass = currentItem.attr('activeClass');
      currentItem.addClass(activeClass);
    }
    currentItem = null;
  });

  navItems.each(function(){
    const item = $(this);
    item.click(function(){
      currentItem = item;
    });
  });
});
