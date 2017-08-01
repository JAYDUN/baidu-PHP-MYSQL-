/**
 * Created by jianshuaz on 2017-07-27.
 */

$(document).ready(function () {
    refreshNews('Business');

    $('li a').click(function(e){
        e.preventDefault();
        var type=$(this).text();
        refreshNews(type);
    });
})

function refreshNews(type) {
    var $lists=$('.index-list-item-container');
    $lists.empty();
    $.ajax({
        url:'../baidu/server/getNews.php',
        type:'get',
        datatype:'json',
        data:{newsType:type},
        success:function(data){
            console.log(data);
            data.forEach(function(item,index,array){
            var $list=$('<div></div>').addClass('index-list-item').prependTo($lists);
            var $main=$('<div></div>').addClass('index-list-main showleft').appendTo($list);
            var $imgDiv=$('<div></div>').addClass('index-list-image').appendTo($main);
            var $img=$('<img>').attr('src',item.newsImg).appendTo($imgDiv)
            var $textDiv=$('<div></div>').addClass('index-list-main-text').appendTo($main);
            var $textTitle=$('<div></div>').addClass('index-list-main-title').appendTo($textDiv);
            $textTitle.text(item.newsTitle);
            var $textBot=$('<div></div>').addClass('index-list-bottom').appendTo($textDiv);
            var $textTime=$('<div></div>').addClass('index-list-main-time').appendTo($textBot);
            var $tipTime=$('<b></b>').addClass('tip-time').appendTo($textTime);
            $tipTime.text(item.newsTime);
            })
           
        }
    });
    
}