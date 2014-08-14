$(function () {
    // Handler for .ready() called.

    var url = 'proxy.php?url=http://feeds.twit.tv/ww_video_large.xml';
    url = 'ww_video_large.xml'
  console.log('ok')

    $.get(url, function (data) {
        var image = 'http://feeds.twit.tv/coverart/ww600videohi.jpg'
        console.log(data)

        $(data).find('item').each(function () {

            var title = $(this).find('title').text();
            var link = $(this).find('link').text();
            var description =  $(this).find('description').text();
            var pubDate = $(this).find('pubDate').text();


           var html = '<div class="panel panel-list">'+
                            '<div class="panel-body">'+
                              '<a href="' + link + '">'+
                                '<h4>'+title+'</h4>'+
                                '<p>'+pubDate+'</p>'+
                              '</a></div>'+
                            '</div>'

            // var html = '<div class="podcastItem"><a href="' + link + '"><img src="' + image + '"></a><div class="title"><a href="' + link + '">' + title + '</a></div></div>';
            // $('#podCastScroll').width($('#podCastScroll').width()+650)
             $('#podList').append(html)
        

        });

        },'xml');


});