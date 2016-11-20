/**
 * Created by LXK on 2016/10/13.
 */
init();
function init(){
    showTopic();
    showMyTopic();
}
function showTopic() {
    $.post("/my/hotTopic",{},function(data) {
        if(data.state == 1) {
            var topic = data.value;
            for(var i = 0 ; i<topic.length ; i++) {
                var li=$("<li class='mui-table-view-cell mui-media li' ></li>");
                $("#ul").append(li);
                var div=$("<div class='mui-media-body div'></div>");
                var span1=$("<span class='create_time' >"+topic[i].create_time+"</span>");
                var span2=$("<span id='title'>"+topic[i].topic_title+"</span>");
                var p =$("<p class='mui-ellipsis'>"+topic[i].topic_desc+"</p>");
                var img =$("<img class=' mui-pull-right' src='"+topic[i].img_url+"'/>");
                div.append(span1);
                div.append(span2);
                div.append(p);
                li.append(div);
                li.append(img);
            }
        }
    })
}

function showMyTopic() {
    $.post("/my/myTopic",{},function(data) {
        if(data.state == 1) {
            var topic = data.value;
            for(var i = 0 ; i<topic.length ; i++) {
                var li=$("<li class='mui-table-view-cell mui-media li' ></li>");
                $("#myToppic").append(li);
                var div=$("<div class='mui-media-body div'></div>");
                var span=$("<span id='title'>"+topic[i].topic_title+"</span>");
                var p =$("<p class='mui-ellipsis'>"+topic[i].topic_desc+"</p>");
                var img =$("<img class=' mui-pull-right' src='"+topic[i].img_url+"'/>");
                div.append(span);
                div.append(p);
                li.append(div);
                li.append(img);
            }
        }
    })
}