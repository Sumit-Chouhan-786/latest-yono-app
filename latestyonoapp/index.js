$(function() {
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }
    $('.HaloLudo_Com').find('span').on('click', function() {
        var times = $(this).index();
        $(this).addClass('current').siblings().removeClass();
        $(this).parents('.tab_box').find('.AllRummyUpdate-Com').eq(times).show().siblings().hide();
    });
    $('#typeBtn').on('click', function() {
        $('#typeBox').toggleClass('hide');
        $(this).find('i').toggleClass('up');
        $(this).toggleClass('current');
    })
    $('#typeBox').find('li').on('click', function() {
        $(this).addClass('current').parents('#typeBox').find('li').siblings().removeClass('current');
        $(this).addClass('current')
    })
    $('.ranking_nav').find('li').on('click', function() {
        $(this).addClass('current').siblings().removeClass('current');
    })
    $('.game_classify').on('click', function() {
        $('.game_classify i').toggleClass('up');
        $('.game_tags ul li:nth-child(n+8)').toggle();
        $('.game_classify').show();
    })
    var liLength = $(".nav_bar li.current").index();
    liLength += 1;
    if (liLength > 5) {
        $('.nav_bar ul').scrollLeft(parseInt($(".nav_bar li").width()));
    } else {
        $('.nav_bar ul').scrollLeft(0);
    }

    function randomsort(a, b) {
        return Math.random() > .5 ? -1 : 1;
    }
    var arr = ['#0091ff', '#f36e5d', '#e8d851', '#92cf67', '#47c1a8', '#ffab80', '#35aba7', '#f98700', '#a286c0', '#ebcda7', '#81a0d7', '#e4697d', '#d2bdc4', '#91adb9', '#acb0d5', '#ed9d60', '#f46060', '#be7763', '#26a69a', '#f3b18e', '#92cf67', '#36b1c0', '#b27cda', '#ffab80', '#f26d7e', '#66bb6a', '#47c1a8', '#ffb230', '#df88ab', '#a1a8e7', '#4dd0e1', '#64b5f6', '#ffb300', '#ce93d8', '#f46060'];
    var arr2 = arr.sort(randomsort);
    $('.index_tag ul').children('li').each(function() {
        var index = $(this).index();
        $(this).children('a').attr('style', 'background:' + arr[index] + ';box-shadow:0px 1px 0px' + arr[index]);
    });
    var arrTags = ['#98dc9b', '#f8b0cd', '#a6bde3', '#f8c871', '#fea387', '#f38ce3', '#b3d465', '#5dc9ea', '#e4a1f0'];
    var arrtags = arrTags.sort(randomsort);
    $('.game_tag ul').children('li').each(function() {
        var index = $(this).index();
        $(this).children('a').attr('style', 'background:' + arrTags[index]);
    });
    var arrRe = arr.sort(randomsort);
    $('.editRe p').children('span').each(function() {
        var index = $(this).index();
        $(this).attr('style', 'background:' + arrRe[index]);
    });
    var linkHtml = $('#friend_link').html();
    if ($('#friend_link').height() > 30) {
        var box = document.getElementById("friend_link"),
            can = true;
        var html = document.getElementsByTagName('html')[0];
        var fsize = 0.5 * parseInt(html.style.fontSize);
        var ht = 0.5 * parseInt(html.style.fontSize);
        var flh = parseInt($('#friend_link').height());
        if (flh > fsize) {
            $('#friend_link').css('height', fsize);
            box.innerHTML += box.innerHTML;
            box.onmouseover = function() {
                can = false
            };
            box.onmouseout = function() {
                can = true
            };
            new function() {
                var stop = box.scrollTop % ht == 0 && !can;
                if (!stop) box.scrollTop == parseInt(box.scrollHeight / 2) ? box.scrollTop = 0 : box.scrollTop++;
                setTimeout(arguments.callee, box.scrollTop % ht ? 30 : 1500);
            };
        }
    } 
});

function headerNav() {
    var bodyH = $('body,html').height();
    var haaderH = $('header').height();
    if ($('#headerNav').css('display') === 'none') {
        $('header .menu').find('i').addClass('green');
        $('#headerNav').show();
        $('#headerNav').find('.mask').css('height', bodyH - haaderH);
    } else {
        $('header .menu').find('i').removeClass('green');
        $('#headerNav').hide();
    }
}
$('#closeTxt').on('click', function() {
    $(this).siblings('input').val('');
    clearInterval(searchzidong);
});
var baseurl = $.trim($("#baseUrl").val());
var keyword = $.trim($("#searchKey").val());
var searchTxt = 0;

function searchRun() {
    searchTxt++;
    if (searchTxt >= $('.search_ul_txt li').length) {
        searchTxt = 0;
    };
    searchSlider();
};

function searchSlider() {
    $(".search_ul_txt").find("li").eq(searchTxt).show().siblings().hide();
    $('.search_txt .text').val($(".search_ul_txt").find("li").eq(searchTxt).text());
};
var searchzidong = setInterval(searchRun, 2500);
if (keyword) {
    clearInterval(searchzidong);
    $('.search_txt .text').val(keyword);
} else {
    $('.search_txt .text').val($(".search_ul_txt").find("li").eq(0).text());
}
$(".search_txt input").focus(function() {
    clearInterval(searchzidong);
});

function liftSearch() {
    var keyword = $.trim($("#searchKey").val());
    var baseurl = $.trim($("#baseUrl").val());
    if (keyword) {
        $.ajax({
            url: baseurl + 'so/search/',
            type: 'POST',
            data: {
                keyword: keyword
            },
            success: function(data) {
                $('.search_wrap').hide();
                $('.search_list_wrap_div').show();
                $('.search_list_wrap').html(data);
            }
        });
    } else {
        $('.search_wrap').show();
    }
}
$('#dosearch').click(function() {
    var keyword = $("#searchKey").val();
    if (keyword) {
        window.location.href = baseurl + 'so/?key=' + encodeURI(keyword);
    }
});
$(document).keyup(function(event) {
    if (event.keyCode == 13) {
        $('#dosearch').click();
    }
});
$('#search_more').click(function() {
    var more = $(this);
    var baseurl = $.trim($("#baseUrl").val());
    var keyword = $.trim($("#searchKey").val());
    var page = parseInt($(this).attr('page'));
    var totpage = parseInt($(this).attr('totpage'));
    $.ajax({
        url: baseurl + 'so/',
        type: 'get',
        data: {
            key: keyword,
            page: page
        },
        success: function(res) {
            $('.search_list_wrap2').append(res);
            more.attr('page', page + 1);
            if (page + 1 >= totpage) {
                more.remove();
            }
        }
    });
});


$(function() {
    if ($('.downbtn').length > 0) {
        var baseUrl = "https://m.doyo.cn/";
        var reportUrl = 'https://linkwe.dzyms.cn/';
        var obj = $('.downbtn');
        id = obj.attr('id');
        type = obj.attr('type');
        $.get(baseUrl + '/downs/detail/' + id + '/' + type, function(res) {
            var result = JSON.parse(res);
            if (result.code == 1) {
                $.getJSON(reportUrl + 'home?callback=?&data=' + encodeURIComponent(JSON.stringify(result.data)) +
                    '&url=' + encodeURIComponent(window.location.href));
                if (result.data.and_url) {
                    $('.btnAnd').show().click(function() {
                        $.getJSON(reportUrl + 'home?callback=?&data=' + encodeURIComponent(JSON.stringify(result.data)) + '&sys=and');
                        location.href = result.data.and_url;
                    });
                }
                if (result.data.ios_url) {
                    $('.btnIos').show().click(function() {
                        $.getJSON(reportUrl + 'home?callback=?&data=' + encodeURIComponent(JSON.stringify(result.data)) + '&sys=ios');
                        location.href = result.data.ios_url;
                    });
                }
            }
        });
    }
})


"use strict";
var pageStartTime = +new Date;
~ function(e) {
    function t() {
        var t = screen.width > 0 && (e.innerWidth >= screen.width || 0 == e.innerWidth) ? screen.width : e.innerWidth;
        a && (t = screen.width);
        var i = t > u ? w : t / (u / 100);
        i = i > h ? i : h, document.documentElement.style.fontSize = i + "px"
    }
    var i, n = e.navigator.userAgent,
        a = n.match(/iphone/i),
        o = n.match(/yixin/i),
        c = n.match(/Mb2345/i),
        r = n.match(/mso_app/i),
        s = n.match(/sogoumobilebrowser/gi),
        m = n.match(/liebaofast/i),
        d = n.match(/GNBR/i),
        u = document.documentElement.dataset.dw || 750,
        h = 42,
        w = 100;
    e.addEventListener("resize", function() {
        clearTimeout(i), i = setTimeout(t, 300)
    }, !1), e.addEventListener("pageshow", function(e) {
        e.persisted && (clearTimeout(i), i = setTimeout(t, 300))
    }, !1), o || c || r || s || m || d ? setTimeout(function() {
        t()
    }, 500) : t()
}(window);



function whatsapp() {
	window.open
('whatsapp://send?text=All-Rummy-App.com is a Very Good Platform to Download New Rummy Apps, if You Are Intrested to Download New Rummy & Best Rummy Apps Then You Can Visit: https://all-rummy-app.com/')
}
function telegram() {
	window.open
('https://telegram.dog/share/url?url=https://all-rummy-app.com/&text=All-Rummy-App.com is a Very Good Platform to Download New Rummy Apps, if You Are Intrested to Download New Rummy & Best Rummy Apps Then You Can Visit')
}

function facebook() {
	window.open
('https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https://all-rummy-app.com/2F&display=popup&ref=plugin&src=share_button?text=All-Rummy-App.com is a Very Good Platform to Download New Rummy Apps, if You Are Intrested to Download New Rummy & Best Rummy Apps Then You Can Visit.')
}


function openLink(id) {
    if (id == 1) {
        window.open('About.html')
    }
    if (id == 2) {
        window.open('Terms.html')
    }
    if (id == 3) {
        window.open('privacy-policy.html')
    }
    if (id == 4) {
        window.open('CancellationRefund.html')
    }
    if (id == 5) {
        window.open('Pricing.html')
    }
    if (id == 6) {
        window.open('contact-us.html')
    }
}