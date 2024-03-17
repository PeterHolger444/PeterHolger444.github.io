document.addEventListener('DOMContentLoaded', function () {
	var text = "Hello! \n I am Peter Holger (Khant Tyi Kyi Kyaw)";
	var index = 0;
	var typedText = "";
	var typingSpeed = 100;

	var typingInterval = setInterval(function () {
		typedText += text[index];
		document.getElementById('typing-text').innerText = typedText;
		index++;

		if (index >= text.length) {
			clearInterval(typingInterval);
		}
	}, typingSpeed);

  var scrollLinks = document.querySelectorAll('.heading-link');

  scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      var offsetTop = targetElement.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
});

