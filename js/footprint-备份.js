$(function(){
	var startTime = Date.parse('2017/06/29 00:00:00');//个人足迹开启时间
	var endTime = Date.parse('2017/07/30 17:30:00');//个人足迹结束时间
	var now = new Date();
	if(now > startTime && now < endTime){
		$('.BPMzj').show();
		var cookie_BPM = $.cookie('cookie_BPM');
		var userID = '00002141';
		$.ajax({
			type:"post",
			url:"http://bpmdev.boe.com.cn/boePortalIntegrator/freqDraft/getPersonalBPMInfo?username="+userID,
			data:{},
			dataType: "jsonp",
			jsonp:"jsonp",
			success:function(data,status){
				//如果cookie_BPM==null || cookie_BPM == undefined，则开启弹窗
				if(cookie_BPM==null || cookie_BPM == undefined){
					$(".BPMslot_bg,.BPMslot").fadeIn('slow');
					$.cookie('cookie_BPM', 'true', { path: '/' });	
				}
				var data = data;
				if($.isEmptyObject(data)){
					var BPMcontent = "<p class='bcOne'><em class='on'></em><a href='javascript:;' class='blingbling on'></a><span>你在BPM起草的第一个审批单是--年--月--日--时--分提交的《xxxx》</span></p>"+
						"<p class='bcTwo'><em></em><a href='javascript:;'></a><span>截止到2017年6月30日，你在BPM上一共起草了0个审批单，审批了0个审批单；近半年，起草了0个审批单，审批了0个审批单</span></p>"+
						"<p class='bcThree'><em></em><a href='javascript:;'></a><span>你使用最频繁的审批单Top3分别是："+
							"<b><i>xxxx</i><i>0</i></b>"+
							"<b><i>xxxx</i><i>0</i></b>"+
							"<b><i>xxxx</i><i>0</i></b></span></p>"+
						"<p class='bcFour'><em></em><a href='javascript:;'></a><span>你办理审批平均耗时-日--时--分--秒，你的处理效率在全公司排名0</span></p>"+
						"<p class='bcFive'><em></em><a href='javascript:;'></a><span>与你相关的审批单中，审批时间最长的一个是《xxxx》，提交审批时间是--年--月--日--时--分，结束审批时间是--年--月--日--时--分，共历时-日--时--分--秒</span></p>"+
						"<p class='bcSix'><em></em><a href='javascript:;'></a><span>请继续关注和使用BPM审批流程，BPM将持续为各组织优化流程提供支撑，更多BPM发展足迹，请关注portal首页公告《xx》</span></p>";
					$(".BPMcontent").append(BPMcontent);
				}else{
					//处理时间格式  起草第一个审批单的时间  2017-06-26T02:41:35Z
					var firstDraft = data.firstDraftProcessTime.slice(0,16);
					var firstDraftYear= firstDraft.slice(0,4);//年
                    var firstDraftMonth=firstDraft.slice(5,7);//月
                    var firstDraftDate=firstDraft.slice(8,10);//日
                    var firstDraftHour=firstDraft.slice(11,13);//小时
                    var firstDraftMinute=firstDraft.slice(14,16);//分
                    var firstDraftTime = firstDraftYear+'年'+firstDraftMonth+'月'+firstDraftDate+'日'+firstDraftHour+'时'+firstDraftMinute+'分';
                    //处理时间格式 -办理任务平均耗时 handleTaskAverageTime  1500000ms
                    var handleTask = data.handleTaskAverageTime;
					var handleTaskDays = handleTask/1000/60/60/24;
					var daysRound= Math.floor(handleTaskDays);
					var handleTaskHours = handleTask/1000/60/60 - (24 * daysRound);
					var hoursRound= Math.floor(handleTaskHours);
					var handleTaskMinutes= handleTask/1000/60-(24 * 60 * daysRound)-(60 * hoursRound);
					var minutesRound = Math.floor(handleTaskMinutes);
					var handleTaskSeconds = (handleTask/1000-(24 * 60 * 60 * daysRound)-(60 * 60 * hoursRound)-(60 * minutesRound)).toFixed(0);
					//判断天数是否为0
					var handleTaskTimes = daysRound+'日'+hoursRound+'时'+minutesRound+'分'+handleTaskSeconds+'秒';
					if(daysRound>0){
						handleTaskTimes = daysRound+'日'+hoursRound+'时'+minutesRound+'分'+handleTaskSeconds+'秒';
					}else{
						if(hoursRound>0){
							handleTaskTimes = hoursRound+'时'+minutesRound+'分'+handleTaskSeconds+'秒';
						}else{
							if(minutesRound>0){
								handleTaskTimes = minutesRound+'分'+handleTaskSeconds+'秒';
							}else{
								handleTaskTimes = handleTaskSeconds+'秒';
							}
						}
					}
					//处理时间格式 -审批最长时间审批单耗时 longestTimeProcessCost  360000000ms
                    var longestTime = data.longestTimeProcessCost;
					var longestDays = longestTime/1000/60/60/24;
					var daysRound= Math.floor(longestDays);
					var longestHours = longestTime/1000/60/60 - (24 * daysRound);
					var hoursRound= Math.floor(longestHours);
					var longestMinutes= longestTime/1000/60-(24 * 60 * daysRound)-(60 * hoursRound);
					var minutesRound = Math.floor(longestMinutes);
					var longestSeconds = (longestTime/1000-(24 * 60 * 60 * daysRound)-(60 * 60 * hoursRound)-(60 * minutesRound)).toFixed(2);
					//判断天数是否为0
					var longestTimes = daysRound+'日'+hoursRound+'时'+minutesRound+'分'+handleTaskSeconds+'秒';
					if(daysRound>0){
						longestTimes = daysRound+'日'+hoursRound+'时'+minutesRound+'分'+handleTaskSeconds+'秒';
					}else{
						if(hoursRound>0){
							longestTimes = hoursRound+'时'+minutesRound+'分'+handleTaskSeconds+'秒';
						}else{
							if(minutesRound>0){
								longestTimes = minutesRound+'分'+handleTaskSeconds+'秒';
							}else{
								longestTimes = handleTaskSeconds+'秒';
							}
						}
					}
					//处理时间格式  审批时间最长审批单开始时间  2017-06-26T02:41:35Z
					var startLongest = data.startLongestTimeProcess.slice(0,16);
					var startLongestYear= startLongest.slice(0,4);//年
                    var startLongestMonth=startLongest.slice(5,7);//月
                    var startLongestDate=startLongest.slice(8,10);//日
                    var startLongestHour=startLongest.slice(11,13);//小时
                    var startLongestMinute=startLongest.slice(14,16);//分
                    var startLongestTime = startLongestYear+'年'+startLongestMonth+'月'+startLongestDate+'日'+startLongestHour+'时'+startLongestMinute+'分';
                    //处理时间格式  审批时间最长审批单结束时间  2017-06-26T02:41:35Z
					var endLongest = data.endLongestTimeProcess.slice(0,16);
					var endLongestYear= endLongest.slice(0,4);//年
                    var endLongestMonth=endLongest.slice(5,7);//月
                    var endLongestDate=endLongest.slice(8,10);//日
                    var endLongestHour=endLongest.slice(11,13);//小时
                    var endLongestMinute=endLongest.slice(14,16);//小时
                    var endLongestTime = endLongestYear+'年'+endLongestMonth+'月'+endLongestDate+'日'+endLongestHour+'时'+endLongestMinute+'分';
                    //定义追加的内容
					var BPMcontent = "<p class='bcOne'><em class='on'></em><a href='javascript:;' class='blingbling on'></a><span>你在BPM起草的第一个审批单是"+firstDraftTime+"提交的《"+data.firstDraftProcessName+"》</span></p>"+
						"<p class='bcTwo'><em></em><a href='javascript:;'></a><span>截止到2017年6月30日，你在BPM上一共起草了"+
						data.sumDraftProcess+"个审批单，审批了"+data.sumTodoProcess+"个审批单；近半年，起草了"+data.halfYearSumDraftProcess+"个审批单，审批了"+data.halfYearSumTodoProcess+"个审批单</span></p>"+
						"<p class='bcThree'><em></em><a href='javascript:;'></a><span>你使用最频繁的审批单Top3分别是："+
							"<b><i>"+data.firstUsedProcess+"</i><i>"+data.sumFirstUsedProcess+"</i></b>"+
							"<b><i>"+data.secondUsedProcess+"</i><i>"+data.sumSecondUsedProcess+"</i></b>"+
							"<b><i>"+data.thirdUsedProcess+"</i><i>"+data.sumThirdUsedProcess+"</i></b></span></p>"+
						"<p class='bcFour'><em></em><a href='javascript:;'></a><span>你办理审批平均耗时"+handleTaskTimes+"，你的处理效率在全公司排名"+data.handleTaskRanking+"</span></p>"+
						"<p class='bcFive'><em></em><a href='javascript:;'></a><span>与你相关的审批单中，审批时间最长的一个是《"+data.longestTimeProcess+"》，提交审批时间是"+startLongestTime+"，结束审批时间是"+endLongestTime+"，共历时"+longestTimes+"</span></p>"+
						"<p class='bcSix'><em></em><a href='javascript:;'></a><span>请继续关注和使用BPM审批流程，BPM将持续为各组织优化流程提供支撑，更多BPM发展足迹，请关注portal首页公告《xx》</span></p>";
					$(".BPMcontent").append(BPMcontent);
				}
				//document.domain='boe.com.cn';
			},
			error:function(data,ststus){
				alert("用户数据不存在")
			}
		})
	}
	//文字打印机效果
	 $.fn.autotype = function() {
     var timer=null;
      var _this=$(this);
      var str=_this.html();
      // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
      str=str.replace(/(\s){2,}/g,"$1");
        var index = 0;
        $(this).html('');
        var printer = function() {
            var args=arguments;
            var current = str.slice(index, index+1);
            // html标签完整输出,如：<p>
            if (current == '<'){
                index = str.indexOf('>', index) + 1;
            }
            else{
            index++;
            }
           timer= setTimeout(args.callee,50);
            //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
            if (index < str.length){ //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
            }else{
                _this.html(str.substring(0, index));
                clearTimeout(timer);
            };
        };
        // 延迟1s开始
        setTimeout(printer,100);
    };
	
	//动画效果
	setInterval(function(){
	    var div=$(".blingbling");
	    div.animate({opacity:'0.5'},500);
	    div.animate({opacity:'1'},500);
	},1000);

	//点击效果封装函数  BPMclick
 	function BPMclick(BPMnum1,index){
		 var couldRun = true;
		 var index =  0;
	    $(".BPMcontent").on('click',BPMnum1,function(){
	        if(couldRun) {
	        	index ++;
	            couldRun = false;
	            $(this).parent().next().find('a').addClass("blingbling").parent().siblings().children('a').removeClass('blingbling');
	            $(this).parent().next().find('a').addClass("on").parent().siblings().children('a').removeClass('on');
				$(this).parent().next().find('em').show().parent().siblings().children('em').hide();
				if(BPMnum1=='.bcSix a'){
					$(this).parents('.BPMcontent').find('p:first').children('a').addClass("blingbling").parent().siblings().children('a').removeClass('blingbling');
					$(this).parents('.BPMcontent').find('p:first').children('a').addClass("on").parent().siblings().children('a').removeClass('on');
					$(this).parents('.BPMcontent').find('p:first').children('em').show().parent().siblings().children('em').hide();
				}
	            if(index%2!=0){
		            $(this).siblings('span').stop().fadeIn('slow').css('display','block');
					$(this).siblings('span').autotype();
					// 3秒后将变为可运行
	            setTimeout(function(){
	                couldRun = true;
	            },5000);
	           }else{
	            	$(this).siblings('span').stop().fadeOut('slow');
	            	// 1秒后将变为可运行
	            	setTimeout(function(){
	            	    couldRun = true;
	            	},500);
	            }
	        }
	    });
	    //点击关闭
		$(".zj_close").click(function(){
			index=0;    //重置点击次数
			$(".BPMslot_bg,.BPMslot").fadeOut('slow');
			$(".BPMcontent").find("span").hide();
			$(".bcOne a").addClass("blingbling").parent(".bcOne").siblings().children('a').removeClass('blingbling');
			$(".bcOne a").addClass("on").parent(".bcOne").siblings().children('a').removeClass('on');
			$(".bcOne em").show().parent(".bcOne").siblings().children('em').hide();
		});
	}
 	//第一个星星闪烁，点击效果
	BPMclick('.bcOne a');
	//第二个星星闪烁，点击效果
	BPMclick('.bcTwo a');
	//第三个星星闪烁，点击效果
	BPMclick('.bcThree a');
	//第四个星星闪烁，点击效果
	BPMclick('.bcFour a');
	//第五个星星闪烁，点击效果
	BPMclick('.bcFive a');
	//第六个星星闪烁，点击效果
	BPMclick('.bcSix a');
	
	//BPMzj   点击出现弹窗
	$(".BPMzj a").click(function(){
		$(".BPMslot_bg,.BPMslot").fadeIn('slow');
	});
});
