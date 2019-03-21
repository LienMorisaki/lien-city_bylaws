import marked from './marked';

window.onload =  function()
{
    var div = document.createElement('div');
    div.textContent = marked(md.srouce);
    var elem = document.getElementById('id');
    elem.appendChild(div);
};

