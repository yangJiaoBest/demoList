<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=8">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<% String path = request.getContextPath();%>
		<title>京东方集团门户 - 重置密码</title>
		<link href="<%=path%>/styles/base.css" type="text/css" rel="stylesheet">
		<link href="<%=path%>/styles/reg-login.css" rel="stylesheet" type="text/css">
		<script src="<%=path%>/scripts/jquery.js"></script>
		<script src="<%=path%>/scripts/jquery.min.js"></script>
		<!--<script src="<%=path%>/scripts/security.js"></script>-->
		</style>
	</head>

	<body>

		<div class="jx-wrap">
			<!--内容开始-->

			<script>
				$(function() {
					$('#password').bind('focus', function() { //新登录密码
						$(this).siblings('.jx-correct').hide();
						$(this).siblings('.jx-click').show();
						$(this).siblings('i[icon=0]').hide();
					})
					$('#password').bind('blur', function() {
						$(this).siblings('i[icon=0]').show();
						$(this).siblings('.jx-click').show();
						checkPayPassword($(this))
					})

					$('#passwordTrue').bind('focus', function() { //确认密码
						$(this).siblings('.jx-correct').hide();
						$(this).siblings('.jx-click').show();
						$(this).siblings('i[icon=0]').hide();
					})
					$('#passwordTrue').bind('blur', function() {
						$(this).siblings('i[icon=0]').show();
						$(this).siblings('.jx-click').show();
						checkPayPassword($(this))
					})

					$('#land').bind('click', function() { //登录
						$('.jx-form-list input[type=password]').each(function() {
							if($(this).val() == '') {
								$(this).siblings('i[icon=0]').show();
								$(this).siblings('i[icon=0]').attr('class', 'error');
								$(this).siblings('.jx-correct').show();
								$(this).siblings('.jx-click').hide();
								$(this).addClass('on');
							}
						});
						var canSumbit = true;
						var password = $("#password").siblings("i[icon=0]").hasClass('corr');
						var repassword = $("#passwordTrue").siblings("i[icon=0]").hasClass('corr');
						if(password && repassword && canSumbit) {
							canSubmit = false;
							//提交表单
							$('#backform').attr('action', '<%=path%>/passwordMdf/pwdUpdate.action');
							$('#backform').attr('target', '_self');
							$('#backform').submit();
							//document.backform.submit();
							return;
						} else {
							return;
						}
					});

					/*验证密码*/
					function checkPayPassword(obj) {
						var value = $.trim(obj.val());
						if(value == "") {
							obj.siblings('.jx-correct').show();
							obj.siblings('.jx-click').hide();
							obj.siblings('i[icon=0]').attr('class', 'error');
							obj.siblings('.jx-correct').show();
							obj.addClass('on');
						} else {
							if(obj.attr("id") == 'password') {
								//var regexp1 = /^\d+$/g;
								//var regexp2 = /^(?![A-Z]+$)(?![a-z]+$)/g;
								//var regexp3 = /^[\;!,@#$%^&*?_~`(){}\[\]\-\+:"'|\\<>\/\.=]+$/g;
								var regexp4 = /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\;!,@#$%^&*?_~`(){}\[\]\-\+:"'|\\<>\/\.=])).{8,20}$/;
								if(value.length < 8 || value.length > 20) {
									obj.siblings('.jx-correct').text("密码长度为8-20位");
									obj.siblings('.jx-correct').show();
									obj.siblings('.jx-click').hide();
									obj.siblings('i[icon=0]').attr('class', 'error');
									obj.siblings('.jx-correct').show();
									obj.addClass('on');
								} else if(!regexp4.test(value)) {
									obj.siblings('.jx-correct').text("密码至少包含数字、大小写字母、符号中的三种");
									obj.siblings('.jx-correct').show();
									obj.siblings('.jx-click').hide();
									obj.siblings('i[icon=0]').attr('class', 'error');
									obj.siblings('.jx-correct').show();
									obj.addClass('on');
								}
								/*else if(!regexp4.test(value)){
													obj.siblings('.jx-correct').text("非法字符，请重新输入");
											        obj.siblings('.jx-correct').show();
													obj.siblings('.jx-click').hide();
													obj.siblings('i[icon=0]').attr('class','error');
													obj.siblings('.jx-correct').show();
													obj.addClass('on');
												}*/
								else if(value == $("#username").val()) {
									obj.siblings('.jx-correct').text("密码和用户名不能相同");
									obj.siblings('.jx-correct').show();
									obj.siblings('.jx-click').hide();
									obj.siblings('i[icon=0]').attr('class', 'error');
									obj.siblings('.jx-correct').show();
									obj.addClass('on');
								} else {
									obj.siblings('.jx-correct').hide();
									obj.siblings('.jx-click').hide();
									obj.siblings('i[icon=0]').attr('class', 'corr');
									obj.removeClass('on');
									//给密码赋值
									//var pwd = $("#password").val();
									//var modulus = $("#modulus").val();
									//var exponent = $("#exponent").val();
									//var publicKey = RSAUtils.getKeyPair(exponent, '',modulus);
									//$('#pwd').val(RSAUtils.encryptedString(publicKey, pwd));
								}
							}
							if(obj.attr("id") == 'passwordTrue') {
								var val = $.trim($("#password").val());
								if(value != val) {
									obj.siblings('.jx-correct').text("两次密码输入不一致");
									obj.siblings('.jx-correct').show();
									obj.siblings('.jx-click').hide();
									obj.siblings('i[icon=0]').attr('class', 'error');
									obj.siblings('.jx-correct').show();
									obj.addClass('on');
								} else {
									obj.siblings('.jx-correct').hide();
									obj.siblings('.jx-click').hide();
									obj.siblings('i[icon=0]').attr('class', 'corr');
									obj.removeClass('on');
									//给密码赋值
									//var repwd = $("#passwordTrue").val();
									//var modulus = $("#modulus").val();
									//var exponent = $("#exponent").val();
									//var publicKey = RSAUtils.getKeyPair(exponent, '',modulus);
									//$('#repwd').val(RSAUtils.encryptedString(publicKey, repwd));
								}
							}

						}

					}

					$('#password').keyup(function() {
						var value = $.trim($(this).val());
						var length = value.length;
						if(length < 8) {
							$(".strength").hide();
						}

						/*密码强： 以上两个等级任加至少1个大写字母，等级加一级，例如弱变中，中变强*/
						else if(((value.match(/[a-z]/) && value.match(/\d/)) || (value.match(/\d/) && value.match(/[\;!,@#$%^&*?_~`(){}\[\]\-\+:"'|\\<>\/\.=]/)) || (value.match(/[a-z]/) && value.match(/[\;!,@#$%^&*?_~`(){}\[\]\-\+:"'|\\<>\/\.=]/))) && value.match(/[A-Z]/) && (length > 10) && (length <= 20)) {
							$(".strength").show();
							$(this).siblings('i[icon=0]').show();
							$(".strength i").attr('class', 'strength3');
							$(this).siblings('i[icon=0]').attr('class', 'corr');
							//$(this).parents("td").find(".accNotic").hide();	
							$(this).removeClass("on");
						}
						/*密码中：数字、字母、符号双双或三个共同组合大于等于8位至20位*/
						else if((((value.match(/[A-Z]/) && value.match(/[\;!,@#$%^&*?_~`(){}\[\]\-\+:"'|\\<>\/\.=]/)) || (value.match(/[A-Z]/) && value.match(/\d/)) || (value.match(/[a-z]/) && value.match(/\d/)) || (value.match(/\d/) && value.match(/[\;!,@#$%^&*?_~`(){}\[\]\-\+:"'|\\<>\/\.=]/)) || (value.match(/[a-z]/) && value.match(/[\;!,@#$%^&*?_~`(){}\[\]\-\+:"'|\\<>\/\.=]/))) && (length > 10) && (length <= 20)) || ((value.match(/[A-Z]/) && value.match(/\d/)) || (value.match(/[A-Z]/) && value.match(/[\;!,@#$%^&*?_~`(){}\[\]\-\+:"'|\\<>\/\.=]/))) && (length >= 8) && (length <= 10)) {
							$(".strength").show();
							$(this).siblings('i[icon=0]').show();
							$(".strength i").attr('class', 'strength2');
							$(this).siblings('i[icon=0]').attr('class', 'corr');
							//$(this).parents("td").find(".accNotic").hide();	
							$(this).removeClass("borderRed");
						}

						/*密码弱：数字、字母、符号双双或三个共同组合小于8位*/
						else if(((value.match(/[a-z]/) && value.match(/\d/)) || (value.match(/\d/) && value.match(/[\;!,@#$%^&*?_~`(){}\[\]\-\+:"'|\\<>\/\.=]/)) || (value.match(/[a-z]/) && value.match(/[\;!,@#$%^&*?_~`(){}\[\]\-\+:"'|\\<>\/\.=]/))) && (length >= 8) && (length <= 10)) {
							$(".strength").show();
							$(this).siblings('i[icon=0]').show();
							$(".strength i").attr('class', 'strength1');
							$(this).siblings('i[icon=0]').attr('class', 'corr');
							//$(this).parents("td").find(".accNotic").hide();	
							$(this).removeClass("on");
						} else {
							$(".strength").hide();
						}

					});

				})
			</script>
			<!--内容-->
			<form action="" method="post" name="backform" id="backform">
				<input type="hidden" value="4" name="step">
				<div class="jx-main-bg">
					<div class="jx-main">
						<div class="jx-content">
							<div class="jx-forgot-box">
								<div class="title">${systemName}密码重置</div>
								<div class="process process-3">
									<ul>
										<li class="n1 on">请输入账号</li>
										<li class="n2 on">验证身份</li>
										<li class="n3 on">重置密码</li>
										<li class="n4">完成</li>
									</ul>
								</div>
								<div class="jx-form-list">
									<div class="item">
										<span>新的登录密码</span>
										<div class="item-wrap">
											<i class="lock"></i>
											<input type="password" class="jx-iput-1" id="password" name="password" plugin="passwordStrength" autocomplete="off" onpaste="return false" maxlength="20">
											<input type="hidden" id="randomCode" name="randomCode" value="${randomCode}">
											<i icon="0" class="corr" style="display:none"></i>
											<div class="jx-correct">请输入密码</div>
											<div class="jx-click" style="display:none">8-20位字符，数字、字母、符号至少包含两种</div>
										</div>
										<div class="strength" style="display: none;">
											<b>弱</b>
											<i class="strength1"></i>
											<b>强</b>
										</div>
									</div>
									<div class="item">
										<span>确认新密码</span>
										<div class="item-wrap">
											<i class="lock"></i>
											<input name="" type="password" class="jx-iput-1" id="passwordTrue" name="passwordTrue" onpaste="return false" maxlength="20" autocomplete="off">
											<input type="hidden" id="repwd" name="_pwdTwo">
											<i icon="0" class="corr" style="display:none"></i>
											<div class="jx-correct">请再次输入密码</div>
											<div class="jx-click" style="display:none">再次输入密码</div>
										</div>
									</div>
									<div class="item mt5">
										<span>&nbsp;</span>
										<input name="bi_rest_pwd" type="button" value="提 交" class="jx-iput-3" id="land">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
			<!--内容 结束-->
			<!--内容结束-->
			<!--尾部开始-->
			<div class="jx-footer" style="height: 90px;">
				<div class="jx-foot">
					<p>© &nbsp;京东方&nbsp; 2017 BOE All &nbsp;Rights Reserved&nbsp;&nbsp;</p>
				</div>

			</div>
			<!--尾部结束-->

	</body>

</html>

</body>

</html>