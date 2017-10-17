//判断是否正常支持jQuery,不支持则跳转到下载页面，目前IE9以上浏览器
var ieVersion;
if(navigator.userAgent.match(/msie.*?(?=;)/i)){
	ieVersion=navigator.userAgent.match(/msie.*?(?=;)/i)[0].replace("MSIE ","");
}

if((typeof jQuery=="undefined") || !$ || !$.support || (ieVersion && eval(ieVersion + "< 9.0"))){

	if(!/ie_pudate.html$/.test(window.location.href))
	{
        	window.location.replace("/wps/boeres/boe-ui/html/ie_update.html");
	}

} else {

//各接口URL
window.url={};

if(/^http:\/\/(portal.boe.com.cn|10.1.8.11(2|3))/.test(window.location.href))//判断是否为生产环境
{
	window.url.oa='http://oa.boe.com.cn/';
	window.url.bpm='http://bpm.boe.com.cn/';
	window.url.meeting='#';
	window.url.course='http://u.boe.com.cn';
	window.url.social ='http://3ks.boe.com.cn/';

} else {
	/*window.url.oa='http://oatest.boe.com.cn/';*/
	window.url.oa='http://oa.boe.com.cn/';
	window.url.bpm='http://bpmdev.boe.com.cn/';
	window.url.meeting='#';
	window.url.course='http://u.boe.com.cn';
	window.url.social ='http://10.1.2.94/';

}

//替换默认Alert 为  sweet alert

window.alert=sweetAlert;

//HTPPS跳转HTTP
if(window.location.href.indexOf("https")!=-1){
	window.location.replace(window.location.href.replace("https","http"));
}

//contains 函数不不区分大小写
jQuery.expr[':'].contains = function(a, i, m) {    
	  return jQuery(a).text().toUpperCase()    
	      .indexOf(m[3].toUpperCase()) >= 0;    
};
$(document).ready(function(){
	//保密答题
	//功能开启时间
    var activeTime = Date.parse('2017/02/03 00:00:00');
			   now = new Date();
	if(now > activeTime && $.cookie('LtpaToken')){
        var cookie_status = $.cookie('question_visited');
        //var examUrl = "http://oa.boe.com.cn";
        $(function(){
            $.ajax({
                type: "POST",
                url:"http://oa.boe.com.cn/Question/question/isPass?w=1",
                data: {},
                contentType: "application/json; charset=utf-8",
                dataType: "jsonp",
                success: function (data) {
                    if(data.result=='false' && (!cookie_status || cookie_status != 'true')){
                        layer.open({
                            //closeBtn:true,
                            scrollbar: false,
                            title :'\u4fdd\u5bc6\u77e5\u8bc6\u7ebf\u4e0a\u7b54\u9898',
                            type: 2,
                            area: ['760px', '95%'],
                            fix: false,
                            maxmin: true,
                            content:window.url.oa + "Question/question/welcome"
                        });
                        document.domain='boe.com.cn';
                        $.cookie('question_visited', 'true', { path: '/' });
                    }
                },
                error: function (msg) {
                    //alert("error" + msg.readyState);
                }
            });
        });
    }
	//廉洁协议
	var cookie_status = $.cookie('integrity_visited');
	//var username = '<portal-fmt:user attribute="uid"/>';
	//var examUrl = "http://oa.boe.com.cn";
	$.ajax({
		type: "POST",
		url: "http://oa.boe.com.cn/boePortal-Integrity/Integrity/isSignUser?username="+ userID,
		data: {},
		contentType: "application/json; charset=utf-8",
		dataType: "jsonp",
		success: function (data) {
			if(data.result!='false' && (cookie_status == null || cookie_status == '')){
				console.log("true");
				layer.open({
					//closeBtn:true,
					closeBtn: false,
					scrollbar: false,
					title :'\u0042\u004f\u0045\u5458\u5de5\u804c\u4e1a\u64cd\u5b88\u5ba3\u8a00\u7b7e\u7f72',
					type: 2,
					area: ['800px', '98%'],
					fix: false, 
					maxmin: false,
					content: "http://oa.boe.com.cn/boePortal-Integrity/Integrity/welcome?username=" + userID
				});
				document.domain='boe.com.cn';
				$.cookie('integrity_visited', 'true', { path: '/' });
			}
		},
		error: function (msg) {
			//alert("error" + msg.readyState);
		}
	});

    //新手引导退出清除cookie
    $("a#boelogoutlink").click(function(){
        $.cookie("guideCookie","",{
            path:"/"
        });
        //$.cookie("adCookie","",{
        //    path:"/"
        //});
    })
    //天气
    $.ajax({
        url:"http://10.1.8.51:9081/usermgr-web/shortcut/getAddressData.action",
        async:true,
        dataType:'jsonp',
        type:'get',
        jsonp:'jsonp',
        error: function() {
        },
        success :function(result){
            var address=result.ipCity;
            $("header .left-box span:eq(1)").empty().text(address);
            $.ajax({
                url:"http://10.1.8.51:9081/usermgr-web/shortcut/getWeatherData.action",
                type:'get',
                async:true,
                data:{address:address},
                dataType:'jsonp',
                jsonp:'jsonp',
                error: function() {
                },
                success :function(data){
                    var weatherData =$("header .left-box .weather a");
                    weatherData.empty();
                    weatherData.eq(0).text(address);
                    if(data.info=="晴"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_1.png' />");
                    }else if(data.info=="多云"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_2.png' />");
                    }else if(data.info=="阴"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_3.png' />");
                    }else if(data.info=="暴风雪"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_4.png' />");
                    }else if(data.info=="暴雪"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_5.png' />");
                    }else if(data.info=="冰雹"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_6.png' />");
                    }else if(data.info=="尘土"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_7.png' />");
                    }else if(data.info=="大暴风雨"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_8.png' />");
                    }else if(data.info=="大雨"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_9.png' />");
                    }else if(data.info=="大雪"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_10.png' />");
                    }else if(data.info=="冻雨"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_11.png' />");
                    }else if(data.info=="风沙"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_12.png' />");
                    }else if(data.info=="飓风"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_13.png' />");
                    }else if(data.info=="雷阵雨"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_14.png' />");
                    }else if(data.info=="强沙尘暴"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_15.png' />");
                    }else if(data.info=="沙尘"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_16.png' />");
                    }else if(data.info=="沙尘暴"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_17.png' />");
                    }else if(data.info=="雾"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_18.png' />");
                    }else if(data.info=="霾"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_19.png' />");
                    }else if(data.info=="小雪"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_20.png' />");
                    }else if(data.info=="小雨"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_21.png' />");
                    }else if(data.info=="雨夹雪"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_22.png' />");
                    }else if(data.info=="阵雪"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_23.png' />");
                    }else if(data.info=="阵雨"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_24.png' />");
                    }else if(data.info=="中雨"){
                        weatherData.eq(1).append("<img src='/wps/boeres/boe-ui/images/weather_25.png' />");
                    }
                    weatherData.eq(2).text(data.temperature);
                    weatherData.eq(3).text("/\t" +data.humidity);
                    weatherData.eq(4).text(data.direct + data.power);
                    weatherData.eq(5).text(data.pm +"pm");
                    if(data.pm < 50){
                        weatherData.eq(5).css("background","#00af29").append("<b>优</b>");
                    }else if(data.pm >= 50 &&data.pm<=100){
                        weatherData.eq(5).css("background","#0a8aa6").append("<b>良</b>");
                    }else if(data.pm > 100){
                        weatherData.eq(5).css("background","#a60a0a").append("<b>差</b>");
                    }
                }
            });
        }
    });
    //股指获取
//  $.ajax({
//      url:window.url.oa+"usermgr-web/shortcut/getStockData.action",
//      async:true,
//      dataType:'jsonp',
//      type:'get',
//      jsonp:'jsonp',
//      error: function() {
//      },
//      success :function(data){
//          $("header .left-box .smi_1,header .left-box .smi_2,header .left-box .smi_3").empty();
//          $("header .left-box .smi_1").text(data.nowPri);
//          $("header .left-box .smi_2").text(data.increPer);
//          $("header .left-box .smi_3").text(data.increase);
//          if(data.increPer<0 || data.increase<0){
//              $("header .left-box .smi_1,header .left-box .smi_2,header .left-box .smi_3, header .left-box .shares p:nth-of-type(2) em:last-child").css("color","#1dbf60");
//          }
//      }
//  });
    //竞争动态/流程与内控专栏切换
    var gloNav=$(".db_news h2.chiose  span");
    var gloInfo=$(".db_news ul.chiose_box");
    gloNav.each(function(c,p){
        var that=$(p);
        if(that.hasClass('not')){return;}
        var m=c;
        that.click(function(){
            gloNav.removeClass('here').eq(m).addClass('here');
            gloInfo.removeClass('here').eq(m).addClass('here');
        });
    });
    //帖子
    var tzgloNav=$(".forum_list h2.chiose  span");
    var tzgloInfo=$(".forum_list ul.chiose_box");
    tzgloNav.each(function(c,p){
        var that=$(p);
        if(that.hasClass('not')){return;}
        var m=c;
        that.click(function(){
            tzgloNav.removeClass('here').eq(m).addClass('here');
            tzgloInfo.removeClass('here').eq(m).addClass('here');
        });
    });
    //京东方大学
    var boeusNav=$(".video_list h2.chiose  span");
    var boeusInfo=$(".video_list ul.chiose_box");
    boeusNav.each(function(c,p){
        var that=$(p);
        if(that.hasClass('not')){return;}
        var m=c;
        that.click(function(){
            boeusNav.removeClass('here').eq(m).addClass('here');
            boeusInfo.removeClass('here').eq(m).addClass('here');
        });
    });
})

//邮箱接口
$(function () {
    if(!window.loggedIn) return;
    $.support.cors = true;
    var postdata = {
    }
    $.ajax({
        type: "post",
        url: window.url.bpm+"boePortalIntegrator/mail/countUnreadMails",
        async: true,
        data: postdata,
        dataType: "jsonp",
        jsonp: "jsonp",
        //jsonpCallback:"callback",
        cache:true,
        success: function (data, status) {
            for(var i=0;i<data.length;i++){
                $(".emil span:eq(0)").append("<a href='"+ data[i].url +"' target='_blank'>"+ data[i].name +"<i>"+ data[i].count +"</i></a>");
            }
            var emnum=$(".emil i");
            var allcount =0;
            for(var k=0;k<emnum.length;k++){
                allcount+=eval(emnum.eq(k).text());
                if(emnum.eq(k).text()>99){
            	emnum.eq(k).text("99+");
            }
            }
            if(allcount==0){
                emnum.hide();
                $(".emil .warn").hide();
            }else{
                $(".emil .warn").show();
            }
            if(emnum.text()<=0){
            	emnum.hide();
            }
        },
        error: function(data,status){
        }
    });
});
//返回顶部
$(function(){
    //点击在线客服出现详细信息
    $(".rightNavTop").hover(function(){
        $(this).children(".onlineServices").stop().fadeIn();
    },function(){
        $(this).children(".onlineServices").stop().fadeOut();
    });
    //滑动出现或者隐藏
    var slideSpeed = 500;
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#backTop").fadeIn(slideSpeed);
        } else {
            $("#backTop").fadeOut(slideSpeed);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#backTop").click(function(){
        if ($('html').scrollTop()) {
            $('html').animate({
                scrollTop: 0
            }, slideSpeed);
            return false;
        }
        $('body').animate({
            scrollTop: 0
        }, slideSpeed);
        return false;
    });
});

//统一搜索
$(function () {
    $(".search span").hover(function(){
        $(".searchType").show();
    },function(){
        $(".searchType").hide();
    })
    $(".searchType a").click(function(){
        $(".search span i").text($(this).text());
        $(".searchType").hide();
    });
    $(".searchDatabtn").click(function () {
        var searchData =$("#searchData").val();
        var value=$(".search span i").text();
        if(searchData != "") {
            window.location.href="/wps/myportal/Home/home/portalhome_sceneall/?serchData=" + encodeURI(searchData) + "&value=" + encodeURI(value);
        } else {
            alert("请填写内容");
        }
    });
    $("#searchData").keyup(function(event){
        if(event.keyCode==13){
            var searchData =$("#searchData").val();
            var value=$(".search span i").text();
            if(searchData != "") {
                window.location.href="/wps/myportal/Home/home/portalhome_sceneall/?serchData=" + encodeURI(searchData) + "&value=" + encodeURI(value);
            } else {
                alert("请填写内容");
            }
        }
    });
});
//追加导航
$(document).ready(function(){
    if(window.location.href.indexOf("/wps/myportal/Home") == -1) return; //判断是否进入首页
    var serviseLiMore = "";
    serviseLiMore ='<div>'+
	        '<em></em>'+
	        '<a href="/wps/myportal/Home/service_sector/">IT专区</a>'+
	        '<a href="/wps/myportal/Home/service_sector/admin/" >行保专区</a>'+
	        '<a href="/wps/myportal/Home/service_sector/finance/" >财务专区</a>'+
	        '<a href="/wps/myportal/Home/service_sector/law/" >法务专区</a>'+
	        '<a href="http://hrportal.boe.com.cn/home/rehome" target="_blank">人力资源专区</a>'+
	        '<a href="/wps/myportal/Home/service_sector/culture/" >企业文化专区</a>'+
	        '<a href="/wps/myportal/Home/service_sector/eap/">EAP专区</a>'+
	    '</div>';
	$(".wpthemeNavList li").eq(2).addClass("serviseLi").append(serviseLiMore);
	$(".wpthemeNavList li").eq(2).children("a").attr("href","javascript:void(0)");
	//追加快速专区模版的导航
    $.ajax({
            url:window.url.oa+"portal-news/news/getDivisionTemplateURL.action",
            type:"post",
            async:true,
            data:{},
            dataType:"jsonp",
            jsonp:"jsonp",
            success:function (data,status) {
            		var serviseMod = "";
                    var sectionList= data.sectionList;
                    if(!sectionList) return;
                        for(var i = 0; i < sectionList.length; i++){
							//重置地址栏的地址
							var fatherId = sectionList[i].ID;
							var sectionName = sectionList[i].name;
							var templateURL = sectionList[i].templateURL+"?fatherId="+fatherId+"&sectionName="+encodeURI(sectionName);
							serviseMod= "<a href='"+templateURL+"' >"+sectionName+"</a>";
				        $(".wpthemeNavList li").eq(2).children("div").append(serviseMod);
                    }
                    //判断用户是否可以查看服务专区
//                   Array.prototype.contains = function ( needle ) {
//						  for (i in this) {
//						    if (this[i] == needle) return true;
//						  }
//						  return false;
//					}
//			        var userList = new Array("00002141","portaladmin","00003990");
//			        if(userList.contains(window.userID)) {
//			        	$(".wpthemeNavList li").eq(2).children("div").children("a").show();
//			        } else {
//			        	$(".wpthemeNavList li").eq(2).children("div").children("a").hide();
//			        	$(".wpthemeNavList li").eq(2).children("div").children("a").eq(0).show();
//			        	$(".wpthemeNavList li").eq(2).children("div").children("a").eq(1).show();
//			        	$(".wpthemeNavList li").eq(2).children("div").children("a").eq(2).show();
//			        	$(".wpthemeNavList li").eq(2).children("div").children("a").eq(3).show();
//			        	$(".wpthemeNavList li").eq(2).children("div").children("a").eq(4).show();
//			        	$(".wpthemeNavList li").eq(2).children("div").children("a").eq(5).show();
//			        	$(".wpthemeNavList li").eq(2).children("div").children("a").eq(6).show();
//			        }
                }
        });
        
//	//统计管理js
//	$("body").on("click",".accesslog",function(){
//		   $.ajax({
//			   url:"http://oa.boe.com.cn/usermgr-web/log/insertAccessLog.action?SSOUserName="+userID,
//			   dataType:'jsonp',
//			   type:'post',
//			   data:{
//				   	module1:$(this).attr("data-up"),
//				   	module2:$(this).attr("data-name"),
//				   	uri:$(this).attr("href")
//			   	},
//			   success :function(data){
//				
//			   }
//		   })
//		});
});
}
