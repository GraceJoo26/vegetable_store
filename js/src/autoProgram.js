(function($){

    $.ajax({
      url     : './sus_01.json',
      dataType: 'json',
      contenxt: document.body
    }).done(function(data){
   
      // 1. 순서 뒤집어서 배치
      // 2. 한번에 보일내용(30)을 적당히 줄여서 배치
      // 2-1. 인디케이터 생성하여 그 순번에 맞는 내용 나타나기
      // 3. 오름차순, 내림차순 연결해보기
  
  
  
      var dataFile;
      dataFile = data.sort(function(a,b){
        return b.id - a.id;
      });   
  
      // console.log( dataFile );
      var noticeCode = '<li><a href="#"><em></em><span></span></a></li>';
      var indiCode = '<li><a href="#"></a></li>';
  
      var notice = $('.notice_board');
      var noticeCon = notice.children('.context');
      var noticeArea = noticeCon.children('ul');
  
      var indiCon = notice.children('.indicator');
      var indiArea = indiCon.children('ul');
      
     

    
  
        var nBtn = indiCon.find('.next_notice');
        var pBtn = indiCon.find('.prev_notice');
  
        nBtn.on('click', function(e){
          e.preventDefault();
          var nbn = memoryN; //memory N은 1,2,3,4,5 를 nbn에 대입해 
          indiLi.hide();//display:none과같은 역할    그럼 indiLi를 숨기고 
          for(; nbn < memoryN+indiViewLen ; nbn += 1 ){//nbn이 6,7,8,9,10이 되면
            indiLi.eq(nbn).show();//10까지
          }
          memoryN =  nbn;//10이 이제 처음이고 다시 5를 더해야해 왜냐면 nbn이 10이거든.
        });
        
  
        //12345->7부터 display:none;
        //7891011->나머지 display:none; 처리를 시켜버림

       


      // 내용 넣기
      var reSetting = function(n){
        var i = 0;
        var k = n || 0;
        noticeArea.empty();
  
        var noticeLi;
        for(; i < myViewLen; i+=1){
          if(dataFile[i+k] === undefined){
            break;
          }else{
            noticeArea.append(noticeCode);
            noticeLi = noticeArea.children('li').eq(i);
            noticeLi.find('em').css({backgroundImage:'url('+dataFile[i+k]+')'});
            noticeLi.find('span').text(dataFile[i+k].name);
          }
        }
      };
  
      // 기능 수행(차후 인디케이터 기능 포함시키기)
      reSetting();
  
      var indiLiBtn = indiArea.children('li');
      indiLiBtn.on('click', function(e){
        e.preventDefault();
        var liN = parseInt( $(this).text() ) - 1;
        var liSetN = liN * myViewLen;
        console.log( liN );
        reSetting(liSetN); 
      });
  
      // 0: 0 ~ 70
      // 1: 71 ~ 140
      // 2: 141 ~ 210
      // 3: 211 ~ 280
      // 4: 281 ~ 350 
  
  
   
     
  /*
      var select_area = $('.select_area').find('button');
      select_area.on('click', function(e){
        e.preventDefault();
        var i = $(this).index();
        switch(i){
            case 0:
              dataFile =  data.sort(function(a,b){
                return b.id - a.id;
              });
              reSetting();
            break;
            case 1:
              dataFile =  data.sort(function(a,b){
                return a.id - b.id;
              });
              reSetting();
            break;
          }
      });
  */
  
  
  
    });
  
  })(jQuery);