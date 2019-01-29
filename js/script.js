window.sr = ScrollReveal();
sr.reveal('.page-header',{ duration:1000, delay:100,easing:'ease-in-out' });
sr.reveal('#about',{ duration:1000, delay:100,easing:'ease-in-out' });
sr.reveal('#skills',{ duration:1000, delay:100,easing:'ease-in-out' });
sr.reveal('#portfolio',{ duration:1000, delay:100,easing:'ease-in-out' });
sr.reveal('#contact',{ duration:1000, delay:100,easing:'ease-in-out' });
sr.reveal('#hobbies',{ duration:1000, delay:100,easing:'ease-in-out' });
sr.reveal('.education-container',{ duration:1000, delay:100,easing:'ease-in-out' });



$(function(){
	$(".typed").typed({
		strings: ["Fresher.","Web Designer.", "Web Developer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1100,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
