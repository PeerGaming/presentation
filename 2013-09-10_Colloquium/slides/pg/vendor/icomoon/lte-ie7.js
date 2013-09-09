/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Arrows-IcoMoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-arrow-left' : '&#xf060;',
			'icon-arrow-right' : '&#xf061;',
			'icon-arrow-up' : '&#xf062;',
			'icon-arrow-down' : '&#xf063;',
			'icon-github' : '&#xf09b;',
			'icon-twitter' : '&#xf099;',
			'icon-arrow-down-right' : '&#xe000;',
			'icon-arrow-down-2' : '&#xe001;',
			'icon-arrow-down-left' : '&#xe002;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};