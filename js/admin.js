
$(document).ready(function () {
    var $newsList=$('tbody');

    refreshNews();

    $('#btn-submit').click(function(e){
        e.preventDefault();
        // console.log($('#newsTitle').val());
        if($('#newsTitle').val()===" " || $('#newsImg').val()==="" ||$('#newsType').val()==="" ||$('#newsTime').val()==="" ){
            if($('#newsTitle').val()===""){
                $('#newsTitle').parent().addClass('has-error');
            }else{
                $('#newsTitle').parent().removeClass('has-error');
            }
             if($('#newsImg').val()===""){
                $('#newsImg').parent().addClass('has-error');
            }else{
                $('#newsImg').parent().removeClass('has-error');
            }
             if($('#newsType').val()===""){
                $('#newsType').parent().addClass('has-error');
            }else{
                $('#newsType').parent().removeClass('has-error');
            }
             if($('#newsTime').val()===""){
                $('#newsTime').parent().addClass('has-error');
            }else{
                $('#newsTime').parent().removeClass('has-error');
            
            }
    }   else{
            var jsonNews={
                newsTitle:$('#newsTitle').val(),
                newsType:$('#newsType').val(),
                newsImg:$('#newsImg').val(),
                newsTime:$('#newsTime').val(),

            }

            $.ajax(
            {
                url:'../baidu/server/insert.php',
                type:'post',
                data:jsonNews,
                datatype:'json',
                success:function(data){
                    // console.log(data);
                    $('#newsTitle').val('');
                    $('#newsType').val('');
                    $('#newsImg').val('');
                    $('#newsTime').val('');

                    refreshNews();


                }
            })
        }

 });

// Delete News
    var $deleteId=null;
    $newsList.on('click','.btn-danger',function(e){
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(4).html();
    });
    $('#confirmDelete').click(function(e){
        if(deleteId){
            $.ajax({
                url:'../baidu/server/delete.php',
                type:'post',
                data:{newsid:deleteId},
                success:function(data){
                    console.log('删除成功');
                    $('#deleteModal').modal('hide');
                    refreshNews();
                }
            })
        }
    });

// Update News
   var $updateId=null;
    $newsList.on('click','.btn-warning',function(e){
        $('#updateModal').modal('show');
        updateId=$(this).parent().prevAll().eq(3).html()
        // console.log(updateId);

         $.ajax({
                url:'../baidu/server/getUpInfo.php',
                type:'get',
                datatype:'json',
                data:{newsid:updateId},
                success:function(data){
                    console.log(data);
                      $('#u-newsTitle').val(data[0].newsTitle);
                    // console.log(data[0].newsTitle);
                    $('#u-newsType').val(data[0].newsType);
                    $('#u-newsImg').val(data[0].newsImg);
                    var utime = data[0].newsTime.split(' ')[0];
                    console.log(utime);

                    $('#u-newsTime').val(utime);
                }
            })
    });
    $('#confirmUpdate').click(function(e){
            $.ajax({
                url:'../baidu/server/update.php',
                type:'post',
                data:{
                    newsTitle:$('#u-newsTitle').val(),
                    newsType:$('#u-newsType').val(),
                    newsImg:$('#u-newsImg').val(),
                    newsTime:$('#u-newsTime').val(),
                    id:updateId
                },
                success:function(data){
                    // console.log('删除成功');
                    $('#updateModal').modal('hide');
                    refreshNews();
                }
            })
        
    });


    function refreshNews() {
        $newsList.empty();
        $.ajax({
            url:'../baidu/server/getNews.php',
            type:'get',
            datatype:'json',
            success:function(data){
                console.log(data);
                data.forEach(function(item,index,array){
                    var $tdid=$('<td>').html(item.id);
                    var $tdType=$('<td>').html(item.newsType);
                    var $tdTitle=$('<td>').html(item.newsTitle);
                    var $tdTime=$('<td>').html(item.newsTime);
                    var $tdUpdate=$('<td>');
                    var $tdDelete=$('<td>');
                    var $updateBtn=$('<button>').addClass('btn btn-default btn-warning btn-xs').text('Update').appendTo($tdUpdate);

                    var $deleteBtn=$('<button>').addClass('btn btn-danger btn-xs').html('Delete').appendTo($tdDelete);
                    var $trow=$('<tr>');
                    $trow.append($tdid,$tdType,$tdTitle,$tdTime,$tdUpdate,$tdDelete);
                    $newsList.append($trow);

                })
                                    // refreshNews();

            }
        })
    // var $list=$('<div></div>').addClass('index-list-item').prependTo($lists);
    // var $main=$('<div></div>').addClass('index-list-main showleft').appendTo($list);
    // var $imgDiv=$('<div></div>').addClass('index-list-image').appendTo($main);
    // var $img=$('<img>').attr('src','./img/news/2.jpeg').appendTo($imgDiv)
    // var $textDiv=$('<div></div>').addClass('index-list-main-text').appendTo($main);
    // var $textTitle=$('<div></div>').addClass('index-list-main-title').appendTo($textDiv);
    // $textTitle.text('男子不满违章处置　竟挥舞西瓜刀砍向交警');
    // var $textBot=$('<div></div>').addClass('index-list-bottom').appendTo($textDiv);
    // var $textTime=$('<div></div>').addClass('index-list-main-time').appendTo($textBot);
    // var $tipTime=$('<b></b>').addClass('tip-time').appendTo($textTime);
    // $tipTime.text('2017-7-27');
};
});

