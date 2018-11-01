$(function(){
    if($("#slider_index").find(".slider-item").length>1){
      var sliderContainer = $("#slider-container");
      var sliderNumStart = $("#slider-container").find('.slider-item').length;
      var sliderWidth = $("#slider_index").width();
      var windowWid = $(window).width();
      $('.slider-item').css({'width':windowWid});
      // console.log(sliderWidth)
  
      // 初始化导航点
      var $sliderPager = $("#slider_index .slider-pager");
      for(var i = 0; i<sliderNumStart; i++){
        $sliderPager.append($("<li></li>"))
      }
      $sliderPager.find("li").eq(0).addClass("active");
  
      // 左右各添加一个
      var sliderHTML = sliderContainer.html();
      var sliderArr = sliderHTML.split('</div>');
      sliderArr.pop();
      for(var i = 0; i< sliderArr.length; i++){
        sliderArr[i] = sliderArr[i]+'</div>';
      }
      var first = sliderArr[0];
      var last = sliderArr[sliderArr.length-1];
      sliderArr.push(first);
      sliderArr.unshift(last);
      $("#slider-container").html('');
      $("#slider-container").html(sliderArr.join(''));
  
      var sliderNum = $("#slider_index .slider-container").find('.slider-item').length;
      // console.log(sliderNum); //5
      sliderContainer.css({
        'width':sliderWidth*sliderNum,
        'left': -sliderWidth
      });
      var iNowItem = 1;
      var sliderTimer = null;
      var animateSys = true;
      sliderTimer = setInterval(function(){
        iNowItem++;
        sliderMove();
      },5000);
      $sliderPager.find("li").eq(0).css('width:30px');
      function sliderMove(){
        if(iNowItem === sliderNum-1){
          sliderContainer.animate({left:-sliderWidth*iNowItem},500,function(){
            animateSys = true;
            iNowItem = 1;
            sliderContainer.css({left:-sliderWidth*iNowItem});
          });
          // $sliderPager.find("li").eq(0).addClass("active").siblings().removeClass("active");
          changeWidth(0)
        }else if(iNowItem === 0){
          sliderContainer.animate({left:-sliderWidth*iNowItem},500,function(){
            animateSys = true;
            iNowItem = sliderNum-2;
            sliderContainer.css({left:-sliderWidth*iNowItem});
          });
          // $sliderPager.find("li").eq(sliderNumStart-1).addClass("active").siblings().removeClass("active");
          changeWidth(sliderNumStart-1)
        }else{
          sliderContainer.animate({left:-sliderWidth*iNowItem},500,function(){
            animateSys = true;
          });
          // $sliderPager.find("li").eq(iNowItem-1).addClass("active").siblings().removeClass("active");
          changeWidth(iNowItem-1)
        }
  
      }
  
      $("#slider-right").click(function(){
        if(animateSys){
          iNowItem++;
          sliderMove();
          animateSys = false;
        }
      });
      $("#slider-left").click(function(){
        if(animateSys){
          iNowItem--;
          animateSys = false;
          sliderMove();
        }
      });
      $("#slider_index").mouseover(function(){
        clearInterval(sliderTimer);
        $("#slider-left").show();
        $("#slider-right").show();
      });
      $("#slider_index").mouseout(function(){
        $("#slider-left").hide();
        $("#slider-right").hide();
        sliderTimer = setInterval(function(){
          iNowItem++;
          sliderMove();
        },5000);
      })
    }else{
      var html =  $('#slider-container').html();
      $('#slider_index').html(html);
    }
  
  
    function changeWidth(num){
      $sliderPager.find("li").eq(num).addClass("active").siblings().removeClass("active");
      $sliderPager.find("li").eq(num).animate({width:'30px'},500)
      $sliderPager.find("li").eq(num).siblings().animate({width:'6px'},500)
    }
  
 

  moveHorizontal('#swiper','#swiper_con',3)
  function moveHorizontal(parentId,moveId,childLength){
    var screen=$(parentId);
    var ul=$(moveId);
    var moveTimer = null;
    if(ul[0] && ul.children().length>=childLength){
      ul[0].innerHTML+=ul[0].innerHTML;
      var li = ul.children()[0].offsetWidth+15;
      var length = ul.children().length;
      var width = li * length + "px";
      ul.css('width',width);
      var left=0;
      function move(){
        clearInterval(moveTimer);
        moveTimer=setInterval(function(){
          left-=1;
          if(left<= -ul.outerWidth()/2 ){
            left = 0;
          }
          ul.css('left',left);
        },30);
      }
      move();
  
      if(screen[0]){
        screen.mouseover(function(){
          clearInterval(moveTimer);
        });
        screen.mouseout(function(){
          move()
        });
      }
    }
  }

  $(".show-pop").click(function() {
    $("#pop").show();
    })
    $("#bg").click(function() {
        $("#pop").hide()
    }) 
    $("#close").click(function() {
        $("#pop").hide()
    }) 

});


