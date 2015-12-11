'use strict';

$(() => {

  $('.toc-list').toc({
    'selectors': 'h2,h3',
    'itemClass': () => 'list-group-item'
  });

  $('.colour-swatch').click((e) => {
    let copyElement = document.createElement('input');
    copyElement.setAttribute('type', 'text');
    copyElement.setAttribute('value', e.target.textContent);
    copyElement = document.body.appendChild(copyElement);
    copyElement.select();
    document.execCommand('copy');
    copyElement.remove();
  });
});
