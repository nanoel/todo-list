;(function() {
	"use strict";

	var	editorView = document.querySelector('.ba-editor-view'),
		textArea = document.querySelector('.ba-editor-textarea');

		textArea.hidden = true;

		document.addEventListener('keydown', function(event) {
			console.log(event.keyCode);


			if(event.keyCode == 69 && event.ctrlKey && textArea.hidden){ //Ctrl+E
				event.preventDefault();
				textArea.value = editorView.innerHTML.trim();
				editorView.hidden = true;
				textArea.hidden = false;
				textArea.focus();

			}

			if(event.keyCode == 83 && event.ctrlKey && !textArea.hidden){ //Ctrl+S
				event.preventDefault();

				editorView.innerHTML = textArea.value;
				/* .replace(/{{what's up}}/ig, textArea.value);*/
				editorView.hidden = false;
				textArea.hidden = true;
			}

			if(event.keyCode == 27 && !textArea.hidden){ //Ctrl+S
				event.preventDefault();

				editorView.hidden = false;
				textArea.hidden = true;
			}

		});
})();

