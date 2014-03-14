var bob;
$(function () {
    // Handler for .ready() called.

    var url ='proxy.php?url=http://feeds.twit.tv/ww_video_hd.xml';
  

    $.get(url, function (data) {
        var image = 'http://feeds.twit.tv/coverart/ww600videohi.jpg'
        console.log(data)
        bob = data;

        $(data).find('item').each(function () {

            var title = $(this).find('title').text();
            var link = $(this).find('link').text();

            var html = '<div class="podcastItem"><a href="' + link + '"><img src="' + image + '"></a><div class="title"><a href="' + link + '">' + title + '</a></div></div>';
            $('#podCastScroll').width($('#podCastScroll').width()+650)
            $('#podCastScroll').append(html)
        

        });

        },'xml');


});