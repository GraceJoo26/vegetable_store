(function($){

  $.ajax({
    url     : '../data/sus_01.json',
    dataType: 'json',
    contenxt: document.body
  }).done(function(data){

    var dataFile;
    dataFile = data.sort(function(a,b){
      return b.id - a.id;
    });   

    // console.log( dataFile );
    var noticeCode = '<li><p class = "confirm"><a href = "#"></a></p><em></em><span></span><p class = "number_01">재고 <p class = "number"></p><fieldset><label for="countNum">판매갯수</label><input type="number" name="countNum" id="countNum" value="" placeholder="수량" min="0" max="100" step="1"></fieldset></li>';
    

    var notice = $('.notice_board');
    var noticeCon = notice.children('.context');
    var noticeArea = noticeCon.children('ul');
    

     var myViewLen=1;
     
  

      var url = "../img/"
      var noticeLi, number, em, confirm, confirmA, it , itI;
      

    // 내용 넣기
    var reSetting = function(n){
      var i = 0;
      
      noticeArea.empty();
     
    
      //사진, 이름을 json파일에 저장한 후 for문으로 반복으로 복사,붙임
      for(; i < myViewLen; i+=1){       
        if(dataFile[i] === undefined){
          break;
        }else{
          noticeArea.append(noticeCode);
          noticeLi = noticeArea.children('li').eq(i);
          em = noticeLi.find('em');
          number = noticeLi.find('.number'); 
          confirm= noticeArea.find('.confirm');
          confirmA = confirm.find('a');
          
          number.text(100);
      
          em.css({backgroundImage:'url(' + url + dataFile[i].picture + ')' });
          noticeLi.find('span').text(dataFile[i].name);
          confirm.find('a').eq(i).text(dataFile[i].push);
          /* countNum.parent('fieldset').text(i+1); */
        }
      }
      confirmA.on('click',function(e){ 
        e.preventDefault();
        var countNum = noticeLi.find('#countNum');
        var cn;
          cn = countNum.val();
          console.log(cn);
          number.text(100-cn);
  
        
        
})
    };

    // 기능 수행
    reSetting();
  });


})(jQuery);