$(function(){

// Header Animation
var headerController = new ScrollMagic.Controller();
var headerOffset  = - window.innerHeight * 4.5 / 100;
var navHeight = $('nav').height();
var HeaderUpTween = new TweenLite.to($('nav'), 0, {bottom: 0,top: 'auto',left: 0, position: 'absolute'});
var LogoTopTween = new TweenLite.fromTo($('nav .logo'), 0.5, {left: '-15vw', opacitiy: 0},{left: 0, opacity: 1});
var HeaderTopTween = new TweenLite.to($('nav'), 0,{top: 0, left: 0 ,bottom: 'auto' , position: 'fixed'});
var HeaderTopScene = new ScrollMagic.Scene({ triggerElement: '#js_trigger_header', offset: - navHeight, triggerHook: 'onLeave'}).setTween(HeaderTopTween).addTo(headerController);
var LogoTopScene = new ScrollMagic.Scene({ triggerElement: '#js_trigger_header', offset: - navHeight, triggerHook: 'onLeave' }).setTween(LogoTopTween).addTo(headerController);
var HeaderScene = new ScrollMagic.Scene({ triggerElement: '#js_trigger_header', offset: headerOffset }).setTween(HeaderUpTween).addTo(headerController);



});
