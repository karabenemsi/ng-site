$( document ).ready(function() {


  $('.indexpage .js_openside').click(function(){
    var $parent = $(this).parent().parent();
    $parent.toggleClass('open');
    $parent.siblings().toggleClass('closed');
    if ($parent.siblings().hasClass('open')) {
      $parent.siblings().toggleClass('open');
    }if ($parent.hasClass('closed')) {
      $parent.toggleClass('closed');
    }
  })



  //nextslide
  $('.nextslide').click(function(){
    var id = $(this).parent().attr('id')
    var $parent = $(this).parent()
    id = parseInt(id) + 1
    var $nextslide = $('#' + id)
    console.log('#' + id);
    $parent.toggleClass('active')
    $nextslide.toggleClass('active')
  });

  $('.previouslide').click(function(e){
    var id = $(this).parent().attr('id')
    var $parent = $(this).parent()
    id = parseInt(id) - 1
    var $nextslide = $('#' + id)
    console.log('#' + id);
    $parent.toggleClass('active')
    $nextslide.toggleClass('active')

  });


  //Refelemente

  $('.reflisttags li code').click(function(){
      $(this).siblings('.description').attr('data-open','true');
  });

  $('.reflisttags li .description').click(function(){
    $(this).attr('data-open','false');
  });


  //sleep

  if ($('body').hasClass('sleeppage')) {
    imgrange = 146
    randarray=[]
    for (var i = 1; i <= imgrange; i++) {
      randarray[i] = zfill(i, 3)
    }
    randarray.sort(function(){return 0.5 - Math.random()});
    console.log(randarray);
    imgstart = Math.floor((Math.random()*imgrange)+1)
    imgname = 'assets/img/big/img_b_'
    imgend = '.jpg'
    i = 0
    j = 1
    setInterval(function(){
      if(j%2 == 0){
        console.log(randarray[i]);
        if (i%2 == 0) {
          $('#js_' + 1).attr('src',imgname + randarray[i] + imgend)
        } else {
          $('#js_' + 0).attr('src',imgname + randarray[i] + imgend)
        }
        if (i < imgrange) {
          i++;
        } else {
          i = 0
        }
      } else {
        $('#js_0').toggleClass('in').toggleClass('out');
        $('#js_1').toggleClass('out').toggleClass('in');
      }
      j++;
    },3000)
  }

  function zfill(number, size) {
    number = number.toString();
    while (number.length < size) number = "0" + number;
    return number;
  }

  // CSS Examples
  $('.calendar').click(function(){
    $(this).toggleClass('calNoShadow');
  });

});
