
const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});




	function toggleText(selector, originalText) {
		const element = document.querySelector(selector);
	
		if (window.innerWidth <= 991 && element) {
			element.textContent = ''; // Видаляємо текст на екранах менше 991px
		} else if (window.innerWidth > 991 && element) {
			element.textContent = originalText; // Повертаємо текст на екранах більше 991px
		}
	}
	
	// Викликаємо функцію для кожного елемента
	function checkAllElements() {
		toggleText('.contacts-header__location', '24 Olive Street, Prairie, NY 53590');
		toggleText('.contacts-header__mail', 'whitecollar@gmail.com');
		toggleText('.contacts-header__schedule', 'Mon - Fri: 8:00 am - 5:00 pm');
		// Додавайте більше елементів за потреби
	}
	
	// Викликаємо функцію при зміні розміру вікна
	window.addEventListener('resize', checkAllElements);
	
	// Викликаємо функцію при завантаженні сторінки для початкової перевірки
	window.addEventListener('load', checkAllElements);
	