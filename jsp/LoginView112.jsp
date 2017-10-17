<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%-- Licensed Materials - Property of IBM, 5724-E76, (C) Copyright IBM Corp. 2001, 2005 - All Rights reserved. --%>
<%-- file LoginView.jsp in Login --%>
<!-- LGV in Login -->
<%@ page session="false"%>
<%@
taglib uri="http://java.sun.com/portlet"
	prefix="portlet"%>
<%@
taglib uri="http://java.sun.com/jsp/jstl/fmt"
	prefix="fmt"%>
<%@
taglib uri="/WEB-INF/tld/portal.tld" prefix="wps"%>
<%@
taglib
	uri="/WEB-INF/tld/resolver-v7.tld" prefix="r"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib
	uri="http://www.ibm.com/xmlns/prod/websphere/portal/v61/portlet/ibm-portlet-ext"
	prefix="portlet-ext"%>
<%@ page import="com.ibm.wps.portlets.login.Login"%>
<%@ page import="javax.portlet.PortletPreferences"%>
<%@ page import="java.util.List"%>
<%@ page import="java.io.StringWriter"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="com.ibm.wps.portlets.login.IdP"%>

<jsp:useBean id="providers" beanName="providers" type="com.ibm.wps.portlets.login.OpenIdProviderBean" scope="request" />
<portlet:defineObjects />
<wps:defineObjects />
<portlet-ext:setBundle basename="nls.loginportlet" />
<%@ include
	file="./BidiInclude.jspf"%>
<%@ include file="./StatusMessageInclude.jspf"%>
<%@ include file="deviceClassSupport.jspf"%>
<script type="text/javascript">
	console.log("111:" + document.referrer);
	if(top.location.href != self.location.href) {
		document.cookie = 'WASReqURL=' + top.location.href + ';' + "" + "path=/;";
		top.location.href = self.location.href;
		$().ready(function() {
			$("nav").hide();
		});
	}
</script>
<c:if test="${empty wp.moduleList.current.capabilities['wp_login']}">
	<% if (deviceClassList.contains("smartphone") || deviceClassList.contains("tablet")) {%>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/loginMobile.css">
	<% } else{%>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/login.css">
	<%} %>
</c:if>
<%
String userID=renderRequest.getParameter(Login.USERID_FIELD_ID);
String allowAutocompletePasswordField=pref.getValue(Login.ALLOW_AUTOCOMPLETE_PASSWORD_FIELD_KEY, "false");
String useSecure=pref.getValue(Login.USE_SECURE_LOGIN_ACTION_URL_KEY, "false");
String showSignupLinkPref=pref.getValue(Login.SHOW_SIGNUP_LINK_KEY, "yes");
String homeLinkUniqueNamePref=pref.getValue(Login.HOME_LINK_KEY, "ibm.portal.Home");
String showRememberMeEnabled=(String)renderRequest.getAttribute(Login.SHOW_REMEMBER_ME_ENABLED);
String rememberMeCookieID=(String)renderRequest.getAttribute(Login.REMEMBER_ME_COOKIE_ID_KEY);
if(rememberMeCookieID == null){	rememberMeCookieID=(String)renderRequest.getParameter(Login.REMEMBER_ME_COOKIE_ID_KEY); }
String forgetMeURL=(String)renderRequest.getAttribute(Login.FORGET_ME_URL_KEY);
final List<IdP> allProviders=providers.getOpenIDProviders();
boolean userIsFromCookie=false;
%>
<%-- BEGIN determine if secure URL is needed --%>
<portlet:actionURL var="secureURL" secure="true">
	<portlet:param name="action" value="<%=Login.LOGIN_ACTION_KEY%>" />
</portlet:actionURL>
<portlet:actionURL var="defaultURL">
	<portlet:param name="action" value="<%=Login.LOGIN_ACTION_KEY%>" />
</portlet:actionURL>
<%
String rURL="";
if (useSecure.equals("true")) {
rURL=secureURL.toString();
} else {
rURL=defaultURL.toString();
}
%>
<%-- END determine if secure URL is needed --%>
<portlet:renderURL var="allprovidersURL">
	<portlet:param name="showall" value="<%=Login.SHOW_ALL_PROVIDERS_KEY%>" />
</portlet:renderURL>

<div id="wplogin" <portlet-ext:bidi dir="rtl">class="wploginRTL"</portlet-ext:bidi>>
	<div class="wploginContainer<%if(providers.isIdPEnabled() || providers.isIbmIdEnabled()){%> wploginLeft<%}%>">
		<h1>
			<c:choose>
				<c:when test="<%=isMACMInstance%>">
					<fmt:message key='login.label.loginheading.left.macm' />
				</c:when>
				<c:otherwise>欢迎登录门户</c:otherwise>
			</c:choose>
		</h1>
		<form method="POST" action="<%=rURL.toString()%>" name="LoginForm" id="LoginForm" onsubmit="return false;">
			<%-- BEGIN remember me greeting --%>
			<%
if (showRememberMeEnabled.equals("yes") && (rememberMeCookieID != null) && (rememberMeCookieID != "")) {
if ((userID == null) || (userID.equals(rememberMeCookieID))) {
userID=rememberMeCookieID;
userIsFromCookie=true;
}
%>
			<div class="wploginGreeting">
				<fmt:message key="login.text.welcome_rememberMe">
					<fmt:param>
						<%= rememberMeCookieID %>
					</fmt:param>
					<fmt:param>
						<%= forgetMeURL %>
					</fmt:param>
				</fmt:message>
			</div>
			<% }%>
			<%-- END remember me greeting --%>
			<c:choose>
				<c:when test="<%=isMACMInstance%>">
					<label for="userID"><fmt:message
							key="login.label.userid.macm" /></label>
					<input <portlet-ext:bidi dir="rtl">dir="rtl"</portlet-ext:bidi>
					id="userID" name="
					<%=Login.USERID_FIELD_ID%>" aria-required="true" type="text" value="
					<% if (userID != null) escapeXmlWriter.write (userID); %>">
					<label for="password"><fmt:message
							key="login.label.password.macm" /></label>
					<input <portlet-ext:bidi dir="rtl">dir="rtl"</portlet-ext:bidi>
					id="password" type="password" name="
					<%=Login.PASSWORD_FIELD_ID%>" aria-required="true"
					<%if (allowAutocompletePasswordField.equals("false")){ %> autocomplete="off"
					<%}%>>
				</c:when>
				<c:otherwise>

					<input <portlet-ext:bidi dir="rtl">dir="rtl"</portlet-ext:bidi>
					id="userID" name="
					<%=Login.USERID_FIELD_ID%>" aria-required="true" type="text" value="
					<% if (userID != null) escapeXmlWriter.write (userID); %>">
					<input <portlet-ext:bidi dir="rtl">dir="rtl"</portlet-ext:bidi>
					id="password" type="password" name="
					<%=Login.PASSWORD_FIELD_ID%>" aria-required="true"
					<%if (allowAutocompletePasswordField.equals("false")){ %> autocomplete="off"
					<%}%>>
					<input <portlet-ext:bidi dir="rtl">dir="rtl"</portlet-ext:bidi>
					id="code" type="text" name="code" aria-required="true" style="width:110px;height:30px;margin:5px 30px 0px 20px;"
					<%if (allowAutocompletePasswordField.equals("false")){ %> autocomplete="off"
					<%}%>><span id="codeimg" style="margin-left:-10px;cursor:pointer;padding:10px 0px;"></span>
				</c:otherwise>
			</c:choose>
			<%-- BEGIN remember me options --%>
			<%
if (showRememberMeEnabled.equals("yes")) { %>
			<input type="checkbox" id="rememberMe" name="<%=Login.REMEMBER_ME_FIELD_ID%>" <% if (userIsFromCookie){ %> checked="checked"
			<% }%> type=checkbox value="true" /><label for="rememberMe"><fmt:message key="login.label.rememberMe" /></label>
			<% }%>
			<%-- END remember me options --%>
			<div class="usernameOrPwdErr" style="display:none;z-index:999;position:absolute;left:200px;top:172px;">
				<i style="color:red;">用户名或密码错误！</i>
			</div>
			<div class="wploginRegister" style="float: right; margin-right: 25px;margin-top: 6px;">
				<a id="forgetpwd" target="_blank" href="#">忘记密码?</a>
			</div>
			<div class="wploginTextRight">
				<input id="login.button.login" class="wploginButtonLogin" value="<fmt:message key='login.button.login'/>" type="submit" name="<portlet:namespace/>_login">
				<!--<input id="login.button.cancel" class="wploginButtonCancel" value="<fmt:message key='login.button.cancel'/>" type="submit" onclick="javascript:setCancelURL();return;" name="<portlet:namespace/>_cancel">-->
			</div>
			<%-- BEGIN resume session options --%>
			<% String resumeOption=(String)renderRequest.getAttribute(Login.SHOW_RESUME_SESSION_CHECKBOX);
if (resumeOption.equals(Login.YES)) {%>
			<input type="checkbox" id="resumeSession" name="<%=Login.RESUME_SESSION_FIELD_ID%>" value="true" /><label for="resumeSession" style="display: inline;"><fmt:message
					key="login.label.resumesession" /></label>
			<% } else if (resumeOption.equals(Login.HIDDEN)) {%>
			<input type="hidden" id="resumeSession" name="<%=Login.RESUME_SESSION_FIELD_ID%>" value="true" />
			<% }%>
			<%-- END resume session options --%>
			<%-- BEGIN signup link section --%>
			<% if (showSignupLinkPref.equals("yes") && !isMACMInstance) {%>
			<!--<div class="wploginRegister"><p><wps:urlGeneration contentNode="wps.Selfcare" accessControlCheck="NoCheck"><wps:urlParam name="initialState" value="enrollment" /><fmt:message key="login.text.notregistered"/>&nbsp;<a id="SignUpAnchor" name="SignUpAnchor" href="<%= wpsURL.toString() %>"><fmt:message key="login.text.signup"/></a></wps:urlGeneration></p></div>-->
			<% }%>
		</form>
	</div>
	<%-- BEGIN open id --%>
	<%if (providers.isIdPEnabled() || providers.isIbmIdEnabled()){ %>
	<%-- The 'Or' separator --%>
	<div class="wploginSeparator wploginLeft">
		<fmt:message key='login.label.or' />
	</div>
	<div class="wpOpenIdContainer wploginLeft">
		<span id="login.openid.enabled" value="<%=providers.isIdPEnabled()%>"></span>
		<h1>
			<c:choose>
				<c:when test="<%=isMACMInstance && providers.isIbmIdEnabled()%>">
					<fmt:message key='login.label.ibmidheading.macm' />
				</c:when>
				<c:otherwise>
					<fmt:message key='login.label.idpheading' />
				</c:otherwise>
			</c:choose>
		</h1>
		<br>
		<form method="POST" action='<wps:urlGeneration contentNode="wps.Login" home="protected"><% wpsURL.write(escapeXmlWriter); %></wps:urlGeneration>' name="LoginOIDForm">
			<%-- BEGIN ibm id --%>
			<%if (providers.isIbmIdEnabled()){ %>
			<% if (providers.getIbmIdImage() != null)	{%>
			<img class="ibmId" src="<%=request.getContextPath()+providers.getIbmIdImage()%>" alt="<%=providers.getIbmIdName()%>" title="<%=providers.getIbmIdName()%>" role="button" onclick="window.location.href='<%=providers.getIbmIdUrl()%>'" aria-label="<%=providers.getIbmIdName()%>" /><span class="wploginAltText"><%=providers.getIbmIdName()%></span>
			<%} else {%>
			<span id="<%=" external.provideribmid "%>" value="<%=providers.getIbmIdName()%>"><a
				href="javascript:submitLoginIBMIDForm('<%=providers.getIbmIdImage()%>');"
				title="<%=providers.getIbmIdName()%>"
				id="<%="external.provider.link.ibmid"%>" name="external.provider"><%=providers.getIbmIdName()%></a></span>
			<%} %>
			<%} %>
			<%-- END ibm id --%>
			<% if (providers.isIdPEnabled() && allProviders != null && !allProviders.isEmpty()){
int size=providers.getShowMax() > allProviders.size() ? allProviders.size() : providers.getShowMax();
for(int i=0; i < size; i++){
IdP provider=allProviders.get(i);
if (provider.getImageURL() != null)	{%>
			<a href="javascript:submitLoginOIDForm('<%=provider.getName()%>');" value="<%=provider.getName()%>" title="<%=provider.getName()%>" id="<%=" external.provider.link.image "+i%>" role="button" name="external.provider"><img src="<%=provider.getImageURL()%>" alt="<%=provider.getName()%>" aria-label="<%=provider.getName()%>" /><span class="wploginAltText"><%=provider.getName()%></span></a>
			<%} else {%>
			<span id="<%=" external.provider "+i%>" value="<%=provider.getName()%>"><a
				href="javascript:submitLoginOIDForm('<%=provider.getName()%>');"
				title="<%=provider.getName()%>" id="<%="external.provider.link"+i%>"
				name="external.provider"><%=provider.getName()%></a></span>
			<%}
}%>
			<% if (allProviders.size() > providers.getShowMax()){ %>
			<div class="wploginMore">
				<fmt:message key="login.label.showallidp">
					<fmt:param>
						<%= allprovidersURL.toString() %>
					</fmt:param>
				</fmt:message>
				&nbsp;
				<fmt:message var="title2" key="login.openid.inlinehelp.title.more" />
				<fmt:message var="text2" key="login.openid.inlinehelp.text.more" />
				<span class="wploginMoreIcon"><img alt=""
					src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><span
					class="wploginAltText"><fmt:message
							key="login.openid.inlinehelp.title.more" /></span></span>
			</div>
			<% } %>
			<fmt:message key="login.openid.inlinehelp.title.buttons" var="title1" />
			<fmt:message key="login.openid.inlinehelp.text.buttons" var="text1" />
			<a class="wploginHelp" aria-haspopup="true" aria-label="<c:out value='${title1}'/>:<c:out value='${text1}'/>" onclick='showHelp("<c:out value=' ${title1} '/>", "<c:out value='${text1} '/>"); return false;' href="javascript:;"><img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><span class="wploginAltText"><fmt:message key="common.help" /></span></a>
			<%}
if (providers.getShowGenericInputField()){%>
			<div class="wpOpenIdGenericContainer">
				<div>
					<label for="userOID"><fmt:message key="login.label.openid" /></label>
				</div>
				<!-- always use ltr input is a URI ending with a / where browsers do have problem with if rtl is applied -->
				<input dir="ltr" id="userOID" name="<%=Login.USER_OID_FIELD_ID%>" aria-required="true" type="text" />
				<fmt:message var="title3" key="login.openid.inlinehelp.title.field" />
				<fmt:message var="text3" key="login.openid.inlinehelp.text.field" />
				<a class="wploginHelp" aria-haspopup="true" aria-label="<c:out value='${title3}'/>:<c:out value='${text3}'/>" onclick='showHelp("<c:out value=' ${title3} '/>", "<c:out value='${text3} '/>"); return false;' href="javascript:;"><img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><span class="wploginAltText"><fmt:message key="common.help" /></span></a><input value="<fmt:message key='login.button.login'/>" type="submit" name="<portlet:namespace/>_signin">
			</div>
			<%}%>
			<input type="hidden" id="ext.provider" name="external.provider" value="" />
		</form>
		<div id="wploginHelpContainer">
			<h3>Popup Help:</h3>
			<p>This element displays help about a particular piece of the UI.</p>
		</div>
	</div>
	<%} %>
	<%-- END open id --%>
</div>
<%-- BEGIN JavaScript to set focus on userid form field --%>
<% StringWriter bOutput=new StringWriter(100); %>
<script language="JavaScript">
	function setCancelURL() {
		document.LoginForm["<%=Login.USERID_FIELD_ID%>"].value = "";
		document.LoginForm["<%=Login.PASSWORD_FIELD_ID%>"].value = "";
		document.LoginForm.action = '<wps:urlGeneration contentNode="<%=homeLinkUniqueNamePref%>" accessControlCheck="NoCheck"><%wpsURL.write(bOutput); escapeXmlWriter.write(bOutput.toString());%></wps:urlGeneration>';
	}

	function submitLoginOIDForm(txt) {
		document.getElementById("ext.provider").value = txt;
		document.LoginOIDForm.submit();
	}

	function submitLoginIBMIDForm(txt) {
		document.getElementById("ext.provider").value = txt;
		document.LoginIBMIDForm.submit();
	}

	function setFocus() {
		document.LoginForm.userID.focus();
	}

	function showHelp(header, text) {
		var help = document.getElementById('wploginHelpContainer');
		if(help != null) {
			if(help.style.top == "-9999px" || help.style.top == "") {
				help.style.top = "0px";
				help.style.position = "relative";
				help.getElementsByTagName("H3")[0].innerHTML = header;
				help.getElementsByTagName("P")[0].innerHTML = text;
			} else {
				if(help.getElementsByTagName("H3")[0].innerHTML == header) {
					help.style.top = "-9999px";
					help.style.position = "absolute";
				} else {
					help.getElementsByTagName("H3")[0].innerHTML = header;
					help.getElementsByTagName("P")[0].innerHTML = text;
				}
			}
		}
	}

	if(window.location.href.indexOf("/wps/portal/!ut") != -1) {
		setTimeout(setFocus, 400);
		$("#forgetpwd").attr("href", window.url.oa + "passwordModifier/passwordMdf/passwordHome.action");
	}
	if($(".wpsStatusMsg").length > 0) {
		$(".wpsStatusMsg").css("display");
		setTimeout(hideMsg, 5000);

		if($(".wpsStatusMsg").css("display") == "block") {
			$(".wpsStatusMsg").hide();
			$(".usernameOrPwdErr").show();
		}
	}

	function hideMsg() {

		$(".usernameOrPwdErr").hide();
	}

	//$(".wpsFieldSuccessText").text("用户名或密码错误！");

	$.cookie('question_visited', '', {
		path: '/'
	});
</script>
<%-- END JavaScript to set focus on userid form field --%>

<script language="javascript" type="text/javascript">
	var count_login = $.cookie('count_login');

	$("#codeimg").click(function() {

		createCode();
	})
	if(count_login == undefined || count_login < 3) {
		$("#codeimg").hide();
		$("#code").hide();
	} else {
		$("#codeimg").show();
		$("#code").show();
	}
	createCode();
	var code;
	var temp;

	function createCode() {
		code = "";
		temp = "";
		var codeLength = 6; //验证码的长度
		var checkCode = document.getElementById("codeimg");
		var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
		for(var i = 0; i < codeLength; i++) {
			var charNum = Math.floor(Math.random() * 52);
			code += codeChars[charNum] + " ";
			temp += codeChars[charNum];
		}
		if(checkCode) {
			//checkCode.className = "code";
			checkCode.innerHTML = code;
		}

	}

	function validateCode() {
		var inputCode = document.getElementById("code").value;
		if(inputCode.length <= 0) {
			alert("请输入验证码！");
		} else if(inputCode.toUpperCase() != temp.toUpperCase()) {
			alert("验证码输入有误！");
			createCode();
		} else {
			//alert("验证码正确！");
		}
	}
	//点击登陆
	$(".wploginButtonLogin").click(function() {

		if(window.location.href.indexOf("/wps/portal/m") == -1) {

			var count = $.cookie('count_login');

			if(count == undefined) {

				count = 0;

			} else {

				$.cookie('count_login', eval(count) + 1, {
					path: '/',
					domain: '.boe.com.cn'
				});

			}

			console.log(count);

			if(count >= 3) {
				var inputCode = document.getElementById("code").value;
				if(inputCode.length <= 0) {
					alert("请输入验证码！");
					return;
				} else if(inputCode.toUpperCase() != temp.toUpperCase()) {
					alert("验证码输入有误！");
					createCode();
					return;
				}
			}
		}

		$.ajax({
			url: window.url.oa + "/usermgr-web/authType/checkAuthType.action",
			//async:true,
			dataType: 'jsonp',
			type: 'post',
			data: {
				userName: $("#userID").val()
			},
			jsonp: "jsonp",
			error: function() {
				$("#LoginForm").attr("onsubmit", "").submit();
			},
			success: function(data) {

				if(data == "fail") {

					$("#LoginForm").attr("onsubmit", "").submit();
				} else {
					$.ajax({
						type: "post",
						url: window.url.oa + "/usermgr-web/4aLogin/login.action",
						async: true,
						data: {
							userName: "00003861",
							password: "boe_4a!@#456"
						},
						dataType: "jsonp",
						jsonp: "jsonp",
						success: function(data, status) {
							data = eval("(" + data + ")");
							if(data.result == true) {
								$("#LoginForm").attr("onsubmit", "").submit();
							} else {
								alert(data.msg);
							}

						},
						error: function() {

						}
					});
				}
			}
		});

	})
	$(function() {

		$.removeCookie("adCookie", {
			path: "/"
		});
		$.removeCookie("question_visited", {
			path: "/"
		});
		$.removeCookie("guideCookie", {
			path: "/"
		});
		$.removeCookie("user_id", {
			path: "/",
			domain: ".boe.com.cn"
		});
		$.removeCookie("access", {
			path: "/",
			domain: ".boe.com.cn"
		});

	});
</script>