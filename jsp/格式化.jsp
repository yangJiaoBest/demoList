<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=utf-8"%>
<%@ include file="/common/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>京东方科技集团股份有限公司</title>
		<%@ include file="/common/metas.jsp"%>
		<% 	String path = request.getContextPath();
%>
		<link rel="stylesheet" type="text/css" href="<c:url value='/styles/portal.style.css'/>" />
		<style type="text/css">
			#leftBodyer {
				width: 30%;
				/*设定宽度*/
				text-align: left;
				/*文字左对齐*/
				float: left;
				/*浮动居左*/
				clear: left;
				/*不允许左侧存在浮动*/
				overflow: hidden;
				/*超出宽度部分隐藏*/
				background-color: #eee;
			}
			#mainBodyer {
				width: 100%;
				text-align: left;
				float: right;
				/*浮动居右*/
				clear: right;
				/*不允许右侧存在浮动*/
				overflow: hidden;
				background-color: #fff;
			}
		</style>
		<script type="text/javascript" charset="UTF-8">
			$().ready( function () {
				var sec_id = $( '#sectionId' ).attr( 'value' );
				divShow( sec_id );
				$( '#publishTimeString' ).datepick( {
					showOn: 'button',
					duration: 'fast',
					buttonImage: '../images/calendar-blue.gif',
					buttonImageOnly: true
				} );
				$( "#sectionTree" ).tree( {
					types: {
						"default": {
							draggable: false
						}
					},
					callback: {
						onselect: function ( node ) {
							var id = $( node ).attr( "ti" );
							var name = $( node ).attr( "tn" );
							var parentId = $( node ).attr( "extra" );
							$( '#sectionId' ).attr( 'value', id );
							$( '#sectionName' ).attr( 'value', name );
							$( '#parentId' ).attr( 'value', parentId );
							$( 'form' )[ 0 ].reset();
							divShow( id );
							refreshNews();
						},
						ondblclk: function ( node, treeObj ) {
							$( "#editSection" ).click();
						}
					}
				} );
				// 构造jqgrid
				$( "#newsList" ).jqGrid( {
					url: '<%=path%>/news/freshNewsList.action?sectionId=${sectionId}&secTree=1&searchType=${searchType}&searchValue=${searchValue}',
					datatype: "json",
					mtype: "POST",
					rownumbers: true,
					colNames: [ 'ID', '状态', '置顶', '标题', '栏目', '发布时间', '访问次数', '创建人', '创建人工号', '排序', '操作', '有效期', '起始时间', '截止时间', 'PDF作为新闻正文', '转换状态' ],
					colModel: [ {
						name: 'ID',
						index: 'ID',
						hidden: true,
						sortable: false,
						key: true
					}, {
						name: 'isActive',
						index: 'isActive',
						width: '8%',
						sortable: false,
						align: 'center'
					}, {
						name: 'isTop',
						index: 'isTop',
						width: '8%',
						sortable: false,
						align: 'center'
					}, {
						name: 'title',
						index: 'title',
						width: '18%',
						sortable: false,
						align: 'center'
					}, {
						name: 'sectionName',
						jsonmap: "newsSection.name",
						width: '13%',
						sortable: false,
						align: 'center'
					}, {
						name: 'publishTime',
						index: 'publishTime',
						width: '12%',
						sortable: false,
						align: 'center',
						formatter: 'date',
						formatoptions: {
							srcformat: 'Y-m-d H:i:s',
							newformat: 'Y-m-d H:i'
						}
					}, {
						name: 'clickTimes',
						index: 'clickTimes',
						width: '7%',
						sortable: false,
						align: 'center'
					}, {
						name: 'createUserName',
						index: 'createUserName',
						width: '11%',
						sortable: false,
						align: 'center'
					}, {
						name: 'createUserId',
						index: 'createUserId',
						hidden: true,
						sortable: false,
						align: 'center'
					}, {
						name: 'orderBy',
						index: 'orderBy',
						hidden: true,
						sortable: false,
						align: 'center'
					}, {
						name: 'act',
						index: 'act',
						width: '12%',
						sortable: false,
						align: 'center'
					}, {
						name: 'isForever',
						index: 'isForever',
						width: '8%',
						sortable: false,
						align: 'center'
					}, {
						name: 'activeSTime',
						index: 'activeSTime',
						width: '8%',
						hidden: true,
						sortable: false,
						align: 'center',
						formatter: 'date',
						formatoptions: {
							srcformat: 'Y-m-d H:i:s',
							newformat: 'Y-m-d H:i'
						}
					}, {
						name: 'activeETime',
						index: 'activeETime',
						width: '8%',
						hidden: true,
						sortable: false,
						align: 'center',
						formatter: 'date',
						formatoptions: {
							srcformat: 'Y-m-d H:i:s',
							newformat: 'Y-m-d H:i'
						}
					}, {
						name: 'ispdf2content',
						index: 'ispdf2content',
						width: '8%',
						hidden: true,
						sortable: false,
						align: 'center'
					}, {
						name: 'convertStatus',
						index: 'convertStatus',
						width: '8%',
						hidden: true,
						sortable: false,
						align: 'center'
					} ],
					rowNum: 10,
					rowList: [ 5, 10, 15 ],
					pager: '#newsPager',
					sortname: 'ID',
					sortorder: "desc",
					autowidth: true,
					height: 'auto',
					multiselect: false, // 多选
					hidegrid: true, // 隐藏
					viewrecords: true,
					editurl: "<%=path%>/news/delNews.action", // 只用于删除
					jsonReader: {
						root: "rows",
						page: "page",
						total: "total",
						records: "records",
						repeatitems: false
					},
					ondblClickRow: function ( id ) {
						var ret = jQuery( "#newsList" ).jqGrid( 'getRowData', id );
						var convertStatus = ret.convertStatus;
						var ispdf2content = ret.ispdf2content;
						if ( id ) {
							viewNews( id, convertStatus, ispdf2content );
						}
					},
					gridComplete: function () {
						//让页面实现自适应
						var ids = jQuery( "#newsList" ).jqGrid( 'getDataIDs' );
						var userId = "${userName}";
						var sectionIdd = $( '#sectionId' ).attr( 'value' );
						var secId_int = sectionIdd != "" ? parseInt( sectionIdd ) : 0;
						for ( var i = 0; i < ids.length; i++ ) {
							var cl = ids[ i ];
							var ret = jQuery( "#newsList" ).jqGrid( 'getRowData', cl );
							if ( secId_int > 15260 && secId_int < 15297 ) {
								if ( ret.createUserId == userId ) {
									var view = "<img src='<%=path%>/images/icon/viewb.png' style='cursor:hand;height:17px;' onclick=\"viewNews('" + cl + "','" + ret.convertStatus + "','" + ret.ispdf2content + "');\" title='查看' height='20'/>";
									var edit = "<img src='<%=path%>/images/icon/editb.png' style='cursor:hand;height:17px;' onclick=\"editNews('" + cl + "','" + ret.isActive + "','" + ret.convertStatus + "');\" title='编辑' height='20'/>";
									var remove = "<img src='<%=path%>/images/icon/deleteb.png' style='cursor:hand;height:17px;' onclick=\"removeNewsById('" + cl + "','" + ret.isActive + "','" + ret.convertStatus + "');\" title='删除' height='20'/>";
									jQuery( "#newsList" ).jqGrid( 'setRowData', ids[ i ], {
										act: view + edit + remove
									} );
								}
								else {
									var view = "<img src='<%=path%>/images/icon/viewb.png' style='cursor:hand' onclick=\"viewNews('" + cl + "','" + ret.convertStatus + "','" + ret.ispdf2content + "');\" title='查看' height='20'/>";
									jQuery( "#newsList" ).jqGrid( 'setRowData', ids[ i ], {
										act: view
									} );
								}
							}
							else {
								var view = "<img src='<%=path%>/images/icon/viewb.png' style='cursor:hand;height:17px;' onclick=\"viewNews('" + cl + "','" + ret.convertStatus + "','" + ret.ispdf2content + "');\" title='查看' height='20'/>";
								var edit = "<img src='<%=path%>/images/icon/editb.png' style='cursor:hand;height:17px;' onclick=\"editNews('" + cl + "','" + ret.isActive + "','" + ret.convertStatus + "');\" title='编辑' height='20'/>";
								var remove = "<img src='<%=path%>/images/icon/deleteb.png' style='cursor:hand;height:17px;' onclick=\"removeNewsById('" + cl + "','" + ret.isActive + "','" + ret.convertStatus + "');\" title='删除' height='20'/>";
								jQuery( "#newsList" ).jqGrid( 'setRowData', ids[ i ], {
									act: view + edit + remove
								} );
							}
							if ( ret.isActive == "Y" && ret.sectionName != "我们因你而骄傲" ) jQuery( "#newsList" ).jqGrid( 'setRowData', cl, {
								isActive: "已激活"
							} );
							else if ( ret.isActive == "Y" && ret.sectionName == "我们因你而骄傲" ) jQuery( "#newsList" ).jqGrid( 'setRowData', cl, {
								isActive: "已发布"
							} );
							else if ( ret.isActive == "N" ) jQuery( "#newsList" ).jqGrid( 'setRowData', cl, {
								isActive: "未激活"
							} );
							else if ( ret.isActive == "PROCESSING" ) jQuery( "#newsList" ).jqGrid( 'setRowData', cl, {
								isActive: "审批中"
							} );
							else if ( ret.isActive == "DENY" ) jQuery( "#newsList" ).jqGrid( 'setRowData', cl, {
								isActive: "审批拒绝"
							} );
							else if ( ret.isActive == "PASS" ) jQuery( "#newsList" ).jqGrid( 'setRowData', cl, {
								isActive: "审批通过"
							} );
							if ( ret.isTop == "Y" ) jQuery( "#newsList" ).jqGrid( 'setRowData', cl, {
								isTop: "已置顶"
							} );
							else jQuery( "#newsList" ).jqGrid( 'setRowData', cl, {
								isTop: "未置顶"
							} );
							if ( ret.isForever == "Y" ) {
								jQuery( "#newsList" ).jqGrid( 'setRowData', cl, {
									isForever: "永久有效"
								} );
							}
							else {
								if ( ( new Date().getTime() / 86400000 - new Date( ret.activeSTime ).getTime() / 86400000 ) < 0 || ( new Date().getTime() / 86400000 - new Date( ret.activeETime ).getTime() / 86400000 ) > 0 ) {
									jQuery( "#newsList" ).jqGrid( 'setRowData', cl, {
										isForever: "有效期外"
									} );
								}
								else {
									jQuery( "#newsList" ).jqGrid( 'setRowData', cl, {
										isForever: "有效期内"
									} );
								}
							}
							jQuery( "#newsList" ).jqGrid( 'setRowData', cl, {
								'publishTime': ret.publishTime.substring( 0, 10 )
							} );
						}
					},
					loadError: function ( xhr, st, err ) {
						$( "#tblMasterMessage" ).html( "Type: " + st + "; Response: " + xhr.status + " " + xhr.statusText + "\t Error:" + err );
					},
					onPaging: function ( pgButton ) {
						$( "#search" ).click();
					},
					// onSelectRow : function(rowid){},
					// loadBeforeSend : function(xhr){},
					loadComplete: function ( resp, postdata ) {
						var json = JSON.parse( resp.responseText );
						if ( json.message ) {
							alert( json.message );
							$( "button" ).hide();
						}
						else {
							$( "button" ).show();
						}
					},
					caption: "新闻列表"
				} );
				// 添加分页导航条
				$( "#newsList" ).jqGrid( 'navGrid', '#newsPager', {
					edit: false,
					add: false,
					del: false,
					search: false,
					refresh: true
				} );
				// 构造jqgrid
				$( "#essayList" ).jqGrid( {
					url: '<%=path%>/news/freshNewsList.action?sectionId=${sectionId}&searchType=${searchType}&searchValue=${searchValue}',
					datatype: "json",
					mtype: "POST",
					rownumbers: true,
					colNames: [ 'ID', '激活', '设置为头条', '标题', '栏目', '发布时间', '访问次数', '创建人', '评分', '操作', 'PDF作为新闻正文', '转换状态' ],
					colModel: [ {
						name: 'ID',
						index: 'ID',
						hidden: true,
						sortable: false,
						key: true
					}, {
						name: 'isActive',
						index: 'isActive',
						width: '10%',
						sortable: false,
						align: 'center'
					}, {
						name: 'isTop',
						index: 'isTop',
						width: '10%',
						sortable: false,
						align: 'center'
					}, {
						name: 'title',
						index: 'title',
						width: '20%',
						sortable: false,
						align: 'center'
					}, {
						name: 'sectionName',
						jsonmap: "newsSection.name",
						width: '14%',
						sortable: false,
						align: 'center'
					}, {
						name: 'publishTime',
						index: 'publishTime',
						width: '15%',
						sortable: false,
						formatter: 'date',
						formatoptions: {
							srcformat: 'Y-m-d H:i:s',
							newformat: 'Y-m-d H:i'
						},
						align: 'center'
					}, {
						name: 'clickTimes',
						index: 'clickTimes',
						width: '10%',
						sortable: false,
						align: 'center'
					}, {
						name: 'createUserId',
						index: 'createUserId',
						hidden: true,
						sortable: false
					}, {
						name: 'avgScore',
						index: 'avgScore',
						width: '6%',
						sortable: true,
						align: 'center'
					}, {
						name: 'act',
						index: 'act',
						width: '10%',
						sortable: false,
						align: 'center'
					}, {
						name: 'ispdf2content',
						index: 'ispdf2content',
						width: '8%',
						hidden: true,
						sortable: false,
						align: 'center'
					}, {
						name: 'convertStatus',
						index: 'convertStatus',
						width: '8%',
						hidden: true,
						sortable: false,
						align: 'center'
					} ],
					rowNum: 10,
					rowList: [ 5, 10, 15 ],
					pager: '#essayPager',
					sortname: 'ID',
					sortorder: "desc",
					autowidth: true,
					height: 'auto',
					multiselect: false, // 多选
					hidegrid: true, // 隐藏
					viewrecords: true,
					editurl: "<%=path%>/news/delNews.action", // 只用于删除
					jsonReader: {
						root: "rows",
						page: "page",
						total: "total",
						records: "records",
						repeatitems: false
					},
					ondblClickRow: function ( id ) {
						var ret = jQuery( "#essayList" ).jqGrid( 'getRowData', id );
						var convertStatus = ret.convertStatus;
						var ispdf2content = ret.ispdf2content;
						if ( id ) {
							viewNews( id, convertStatus, ispdf2content );
						}
					},
					gridComplete: function () {
						//让页面实现自适应
						var ids = jQuery( "#essayList" ).jqGrid( 'getDataIDs' );
						var userId = "${userName}";
						for ( var i = 0; i < ids.length; i++ ) {
							var cl = ids[ i ];
							var ret = jQuery( "#essayList" ).jqGrid( 'getRowData', cl );
							var view = "<img src='<%=path%>/images/icon/viewb.png' style='cursor:hand;height:17px;' onclick=\"viewNews('" + cl + "','" + ret.convertStatus + "','" + ret.ispdf2content + "');\" title='查看' />";
							var edit = "<img src='<%=path%>/images/icon/editb.png' style='cursor:hand;height:17px;' onclick=\"editNews('" + cl + "','" + ret.convertStatus + "');\" title='编辑' />";
							var remove = "<img src='<%=path%>/images/icon/deleteb.png' style='cursor:hand;height:17px;' onclick=\"removeNewsById('" + cl + "','" + ret.convertStatus + "');\" title='删除' />";
							jQuery( "#essayList" ).jqGrid( 'setRowData', ids[ i ], {
								act: view + edit + remove
							} );
							if ( ret.isActive == "Y" ) jQuery( "#essayList" ).jqGrid( 'setRowData', cl, {
								isActive: "已激活"
							} );
							else jQuery( "#essayList" ).jqGrid( 'setRowData', cl, {
								isActive: "未激活"
							} );
							if ( ret.isTop == "Y" ) jQuery( "#essayList" ).jqGrid( 'setRowData', cl, {
								isTop: "已置为头条"
							} );
							else jQuery( "#essayList" ).jqGrid( 'setRowData', cl, {
								isTop: "未置为头条"
							} );
							jQuery( "#essayList" ).jqGrid( 'setRowData', cl, {
								'publishTime': ret.publishTime.substring( 0, 10 )
							} );
						}
					},
					loadError: function ( xhr, st, err ) {
						$( "#tblMasterMessage" ).html( "Type: " + st + "; Response: " + xhr.status + " " + xhr.statusText + "\t Error:" + err );
					},
					onPaging: function ( pgButton ) {
						$( "#search" ).click();
					},
					// onSelectRow : function(rowid){},
					// loadBeforeSend : function(xhr){},
					loadComplete: function ( resp, postdata ) {
						var json = JSON.parse( resp.responseText );
						if ( json.message ) {
							alert( json.message );
							$( "button" ).hide();
						}
						else {
							$( "button" ).show();
						}
					},
					caption: "新闻列表"
				} );
				// 添加分页导航条
				$( "#essayList" ).jqGrid( 'navGrid', '#essayPager', {
					edit: false,
					add: false,
					del: false,
					search: false,
					refresh: true
				} );
				var sectionId = $( '#sectionId' ).attr( 'value' );
				divShow( sectionId );
				// 查询 ajax
				$( "#search" ).click( function () {
					refreshNews();
				} );
				$( "#search_top" ).click( function () {
					refreshNews();
				} );
				$( "#search_essay" ).click( function () {
					refreshNews();
				} );
				$( "#search_decision" ).click( function () {
					refreshNews();
				} );
				$( "#addNews" ).click( function () {
					var sectionId = $( '#sectionId' ).attr( 'value' );
					var url = "<%=path%>/news/newsDetail.action?news.newsSection.ID=" + sectionId;
					window.location.href = url;
				} );
				$( "#addNews_top" ).click( function () {
					var sectionId = $( '#sectionId' ).attr( 'value' );
					var url = "<%=path%>/news/newsDetail.action?news.newsSection.ID=" + sectionId;
					window.location.href = url;
				} );
				$( "#addNews_essay" ).click( function () {
					var sectionId = $( '#sectionId' ).attr( 'value' );
					var url = "<%=path%>/news/newsDetail.action?news.newsSection.ID=" + sectionId;
					window.location.href = url;
				} );
				$( "#addNews_decision" ).click( function () {
					var sectionId = $( '#sectionId' ).attr( 'value' );
					var url = "<%=path%>/news/newsDetail.action?news.newsSection.ID=" + sectionId;
					window.location.href = url;
				} );
				// 删除 ajax
				$( "#removeNews" ).click( function () {
					var sectionId = $( '#sectionId' ).attr( 'value' );
					var convertStatus;
					if ( sectionId == '20464' || sectionId == '20465' || sectionId == '20466' || sectionId == '20467' || sectionId == '27323' || sectionId == '27324' || sectionId == '27325' || sectionId == '27326' ) {
						var id = jQuery( "#essayList" ).jqGrid( 'getGridParam', 'selrow' ); // 多选
						/* var essayData = jQuery("#essayList").jqGrid('getRowData',id);
						convertStatus = essayData.convertStatus; */
					}
					else {
						var id = jQuery( "#newsList" ).jqGrid( 'getGridParam', 'selrow' ); // 多选
						var newsData = jQuery( "#newsList" ).jqGrid( 'getRowData', id );
						convertStatus = newsData.convertStatus;
					}
					if ( convertStatus == -1 ) {
						alert( "文件正在转换中，暂时无法操作。" );
					}
					else {
						removeNewsById( id );
					}
				} );
				$( "#removeNews_top" ).click( function () {
					var sectionId = $( '#sectionId' ).attr( 'value' );
					var isActive;
					var convertStatus;
					if ( sectionId == '20464' || sectionId == '20465' || sectionId == '20466' || sectionId == '20467' || sectionId == '27323' || sectionId == '27324' || sectionId == '27325' || sectionId == '27326' ) {
						var id = jQuery( "#essayList" ).jqGrid( 'getGridParam', 'selrow' ); // 多选
						var essayData = jQuery( "#essayList" ).jqGrid( 'getRowData', id );
						convertStatus = essayData.convertStatus;
					}
					else {
						var id = jQuery( "#newsList" ).jqGrid( 'getGridParam', 'selrow' ); // 多选
						var newsData = jQuery( "#newsList" ).jqGrid( 'getRowData', id );
						isActive = rowData.isActive;
						convertStatus = newsData.convertStatus;
					}
					if ( convertStatus == -1 ) {
						alert( "文件正在转换中，暂时无法操作。" );
					}
					else {
						removeNewsById( id, isActive );
					}
				} );
				$( "#removeNews_essay" ).click( function () {
					var sectionId = $( '#sectionId' ).attr( 'value' );
					var convertStatus;
					if ( sectionId == '20464' || sectionId == '20465' || sectionId == '20466' || sectionId == '20467' || sectionId == '27323' || sectionId == '27324' || sectionId == '27325' || sectionId == '27326' ) {
						var id = jQuery( "#essayList" ).jqGrid( 'getGridParam', 'selrow' ); // 多选
						var essayData = jQuery( "#essayList" ).jqGrid( 'getRowData', id );
						convertStatus = essayData.convertStatus;
					}
					else {
						var id = jQuery( "#newsList" ).jqGrid( 'getGridParam', 'selrow' ); // 多选
						var newsData = jQuery( "#newsList" ).jqGrid( 'getRowData', id );
						convertStatus = newsData.convertStatus;
					}
					if ( convertStatus == -1 ) {
						alert( "文件正在转换中，暂时无法操作。" );
					}
					else {
						removeNewsById( id );
					}
				} );
				$( "#topNews" ).click( function () {
					changeNewsStatusByType( 1 );
				} );
				$( "#cancelTop" ).click( function () {
					changeNewsStatusByType( -1 );
				} );
				$( "#topEssay" ).click( function () {
					changeNewsStatusByType( 1 );
				} );
				$( "#cancelTopEssay" ).click( function () {
					changeNewsStatusByType( -1 );
				} );
				$( "#activeNews" ).click( function () {
					changeNewsStatusByType( 2 );
				} );
				$( "#activeNews_top" ).click( function () {
					changeNewsStatusByType( 2 );
				} );
				$( "#activeNews_essay" ).click( function () {
					changeNewsStatusByType( 2 );
				} );
				$( "#activeNews_decision" ).click( function () {
					changeNewsStatusByType( 2 );
				} );
				$( "#cancelActive" ).click( function () {
					changeNewsStatusByType( -2 );
				} );
				$( "#cancelActive_top" ).click( function () {
					changeNewsStatusByType( -2 );
				} );
				$( "#cancelActive_essay" ).click( function () {
					changeNewsStatusByType( -2 );
				} );
				$( "#cancelActive_decision" ).click( function () {
					changeNewsStatusByType( -2 );
				} );
				$( "#reset" ).click( function () {
					$( 'form' )[ 0 ].reset();
				} );
				$( "#reset_top" ).click( function () {
					$( 'form' )[ 0 ].reset();
				} );
				$( "#reset_essay" ).click( function () {
					$( 'form' )[ 0 ].reset();
				} );
			} )

			function changeNewsStatusByType( operateType ) {
				var sectionId = $( '#sectionId' ).attr( 'value' );
				if ( sectionId == '20464' || sectionId == '20465' || sectionId == '20466' || sectionId == '20467' || sectionId == '27323' || sectionId == '27324' || sectionId == '27325' || sectionId == '27326' ) {
					var ids = jQuery( "#essayList" ).jqGrid( 'getGridParam', 'selrow' ); // 多选
				}
				else {
					var ids = jQuery( "#newsList" ).jqGrid( 'getGridParam', 'selrow' ); // 多选
					var rowData = jQuery( "#newsList" ).jqGrid( 'getRowData', ids );
					if ( rowData.isActive == "审批中" && ( sectionId == "13887" || sectionId == "39885" || sectionId == "30383" || sectionId == "30385" ) ) {
						alert( "正在审批中，暂时无法操作" );
						return false;
					}
					else if ( rowData.isActive == "已发布" && ( sectionId == "13887" || sectionId == "39885" || sectionId == "30383" || sectionId == "30385" ) && ( operateType == '-2' || operateType == '2' ) ) {
						alert( "已审批通过，不能修改" );
						return false;
					}
					else if ( rowData.isActive == "审批拒绝" && ( sectionId == "13887" || sectionId == "39885" || sectionId == "30383" || sectionId == "30385" ) && ( operateType == '-2' || operateType == '2' ) ) {
						alert( "已审批否决，不能激活或取消激活，请修改后重新提交审批" );
						return false;
					}
				}
				if ( ids != null && ids != '' ) {
					$.ajax( {
						url: "<%=path%>/newsdetail/getNewsInfor.action",
						type: "post",
						data: {
							newsId: ids
						},
						dataType: "json",
						success: function ( result ) {
							var isSync = result.news.isSync;
							if ( isSync == "Y" ) {
								alert( "此新闻为同步新闻，修改编辑或删除新闻请到源栏目修改编辑。" );
							}
							else {
								$.ajax( {
									url: "<%=path%>/news/batchUpdateNews.action?ids=" + ids,
									type: 'POST',
									data: {
										'operateType': operateType
									},
									dataType: 'json',
									success: function ( data ) {
										refreshNews();
									},
									error: function () {
										alert( 'err!' );
									}
								} );
							}
						}
					} );
				}
				else {
					alert( '请选择记录!' );
				}
			}

			function removeNewsById( id ) {
				if ( id != null && id != '' ) {
					$.ajax( {
						url: "<%=path%>/newsdetail/getNewsInfor.action",
						type: "post",
						data: {
							newsId: id
						},
						dataType: "json",
						success: function ( result ) {
							var isSync = result.news.isSync;
							if ( isSync == "Y" ) {
								alert( "此新闻为同步新闻，修改编辑或删除新闻请到源栏目修改编辑。" );
							}
							else {
								var sectionId = $( '#sectionId' ).attr( 'value' );
								var ids = jQuery( "#newsList" ).jqGrid( 'getGridParam', 'selrow' ); // 多选
								var rowData = jQuery( "#newsList" ).jqGrid( 'getRowData', ids );
								if ( rowData.isActive == "审批中" && ( sectionId == "13887" || sectionId == "39885" || sectionId == "30383" || sectionId == "30385" ) ) {
									alert( "正在审批中，暂时无法操作" );
									return false;
								}
								if ( id != null && id != '' ) {
									if ( sectionId == '20464' || sectionId == '20465' || sectionId == '20466' || sectionId == '20467' || sectionId == '27323' || sectionId == '27324' || sectionId == '27325' || sectionId == '27326' ) {
										$( "#essayList" ).jqGrid( 'delGridRow', id, {
											drag: false,
											afterSubmit: function ( resp, postdata ) {
												var result = JSON.parse( resp.responseText );
												if ( result.success == 'false' ) {
													alert( 'Delete failed:' + result.text );
													return [ true, "", "" ]
												}
												else {
													// alert('Delete is succefully');	
													return [ true, "", "" ]
												}
											}
										} );
									}
									else {
										$( "#newsList" ).jqGrid( 'delGridRow', id, {
											drag: false,
											afterSubmit: function ( resp, postdata ) {
												var result = JSON.parse( resp.responseText );
												if ( result.success == 'false' ) {
													alert( 'Delete failed:' + result.text );
													return [ true, "", "" ]
												}
												else {
													// alert('Delete is succefully');	
													return [ true, "", "" ]
												}
											}
										} );
									}
								}
								else {
									alert( '请选择记录!' );
								}
							}
						}
					} );
				}
				else {
					alert( '请选择记录!' );
				}
			}

			function removeNewsById( id, convertStatus ) {
				if ( convertStatus != -1 ) {
					alert( "文件正在转换中，暂时无法操作。" );
					return false;
				}
				if ( id != null && id != '' ) {
					$.ajax( {
						url: "<%=path%>/newsdetail/getNewsInfor.action",
						type: "post",
						data: {
							newsId: id
						},
						dataType: "json",
						success: function ( result ) {
							var isSync = result.news.isSync;
							if ( isSync == "Y" ) {
								alert( "此新闻为同步新闻，修改编辑或删除新闻请到源栏目修改编辑。" );
							}
							else {
								var sectionId = $( '#sectionId' ).attr( 'value' );
								var ids = jQuery( "#newsList" ).jqGrid( 'getGridParam', 'selrow' ); // 多选
								var rowData = jQuery( "#newsList" ).jqGrid( 'getRowData', ids );
								if ( rowData.isActive == "审批中" && ( sectionId == "13887" || sectionId == "39885" || sectionId == "30383" || sectionId == "30385" ) ) {
									alert( "正在审批中，暂时无法操作" );
									return false;
								}
								if ( id != null && id != '' ) {
									if ( sectionId == '20464' || sectionId == '20465' || sectionId == '20466' || sectionId == '20467' || sectionId == '27323' || sectionId == '27324' || sectionId == '27325' || sectionId == '27326' ) {
										$( "#essayList" ).jqGrid( 'delGridRow', id, {
											drag: false,
											afterSubmit: function ( resp, postdata ) {
												var result = JSON.parse( resp.responseText );
												if ( result.success == 'false' ) {
													alert( 'Delete failed:' + result.text );
													return [ true, "", "" ]
												}
												else {
													// alert('Delete is succefully');	
													return [ true, "", "" ]
												}
											}
										} );
									}
									else {
										$( "#newsList" ).jqGrid( 'delGridRow', id, {
											drag: false,
											afterSubmit: function ( resp, postdata ) {
												var result = JSON.parse( resp.responseText );
												if ( result.success == 'false' ) {
													alert( 'Delete failed:' + result.text );
													return [ true, "", "" ]
												}
												else {
													// alert('Delete is succefully');	
													return [ true, "", "" ]
												}
											}
										} );
									}
								}
								else {
									alert( '请选择记录!' );
								}
							}
						}
					} );
				}
				else {
					alert( '请选择记录!' );
				}
			}
			//重构方法用于兼容其它用法
			function removeNewsById( id, isActive ) {
				if ( id != null && id != '' ) {
					$.ajax( {
						url: "<%=path%>/newsdetail/getNewsInfor.action",
						type: "post",
						data: {
							newsId: id
						},
						dataType: "json",
						success: function ( result ) {
							var isSync = result.news.isSync;
							if ( isSync == "Y" ) {
								alert( "此新闻为同步新闻，修改编辑或删除新闻请到源栏目修改编辑。" );
							}
							else {
								var sectionId = $( '#sectionId' ).attr( 'value' );
								if ( ( isActive == "审批中" || isActive == "PROCESSING" ) && ( sectionId == "13887" || sectionId == "39885" || sectionId == "30383" || sectionId == "30385" ) ) {
									alert( "正在审批中，暂时无法操作" );
									return false;
								}
								if ( id != null && id != '' ) {
									if ( sectionId == '20464' || sectionId == '20465' || sectionId == '20466' || sectionId == '20467' || sectionId == '27323' || sectionId == '27324' || sectionId == '27325' || sectionId == '27326' ) {
										$( "#essayList" ).jqGrid( 'delGridRow', id, {
											drag: false,
											afterSubmit: function ( resp, postdata ) {
												var result = JSON.parse( resp.responseText );
												if ( result.success == 'false' ) {
													alert( 'Delete failed:' + result.text );
													return [ true, "", "" ]
												}
												else {
													// alert('Delete is succefully');	
													return [ true, "", "" ]
												}
											}
										} );
									}
									else {
										$( "#newsList" ).jqGrid( 'delGridRow', id, {
											drag: false,
											afterSubmit: function ( resp, postdata ) {
												var result = JSON.parse( resp.responseText );
												if ( result.success == 'false' ) {
													alert( 'Delete failed:' + result.text );
													return [ true, "", "" ]
												}
												else {
													// alert('Delete is succefully');	
													return [ true, "", "" ]
												}
											}
										} );
									}
								}
								else {
									alert( '请选择记录!' );
								}
							}
						}
					} );
				}
				else {
					alert( '请选择记录!' );
				}
			}

			function removeNewsById( id, isActive, convertStatus ) {
				if ( convertStatus == -1 ) {
					alert( "文件正在转换中，暂时无法操作。" );
					return false;
				}
				if ( id != null && id != '' ) {
					$.ajax( {
						url: "<%=path%>/newsdetail/getNewsInfor.action",
						type: "post",
						data: {
							newsId: id
						},
						dataType: "json",
						success: function ( result ) {
							var isSync = result.news.isSync;
							if ( isSync == "Y" ) {
								alert( "此新闻为同步新闻，修改编辑或删除新闻请到源栏目修改编辑。" );
							}
							else {
								var sectionId = $( '#sectionId' ).attr( 'value' );
								if ( ( isActive == "审批中" || isActive == "PROCESSING" ) && ( sectionId == "13887" || sectionId == "39885" || sectionId == "30383" || sectionId == "30385" ) ) {
									alert( "正在审批中，暂时无法操作" );
									return false;
								}
								if ( id != null && id != '' ) {
									if ( sectionId == '20464' || sectionId == '20465' || sectionId == '20466' || sectionId == '20467' || sectionId == '27323' || sectionId == '27324' || sectionId == '27325' || sectionId == '27326' ) {
										$( "#essayList" ).jqGrid( 'delGridRow', id, {
											drag: false,
											afterSubmit: function ( resp, postdata ) {
												var result = JSON.parse( resp.responseText );
												if ( result.success == 'false' ) {
													alert( 'Delete failed:' + result.text );
													return [ true, "", "" ]
												}
												else {
													// alert('Delete is succefully');	
													return [ true, "", "" ]
												}
											}
										} );
									}
									else {
										$( "#newsList" ).jqGrid( 'delGridRow', id, {
											drag: false,
											afterSubmit: function ( resp, postdata ) {
												var result = JSON.parse( resp.responseText );
												if ( result.success == 'false' ) {
													alert( 'Delete failed:' + result.text );
													return [ true, "", "" ]
												}
												else {
													// alert('Delete is succefully');	
													return [ true, "", "" ]
												}
											}
										} );
									}
								}
								else {
									alert( '请选择记录!' );
								}
							}
						}
					} );
				}
				else {
					alert( '请选择记录!' );
				}
			}

			function editNews( id, convertStatus ) {
				if ( convertStatus == -1 ) {
					alert( "文件正在转换中，暂时无法操作。" );
					return false;
				}
				var sectionId = $( '#sectionId' ).attr( 'value' );
				if ( id != null && id != '' ) {
					var url = "<%=path%>/news/newsDetail.action?news.ID=" + id + "&news.newsSection.ID=" + sectionId;
					window.location.href = url;
				}
				else {
					alert( '请选择记录!' );
				}
			}

			function editNews( id, isActive, convertStatus ) {
				if ( convertStatus == -1 ) {
					alert( "文件正在转换中，暂时无法操作。" );
					return false;
				}
				var sectionId = $( '#sectionId' ).attr( 'value' );
				if ( isActive == "PROCESSING" && ( sectionId == "13887" || sectionId == "39885" || sectionId == "30383" || sectionId == "30385" ) ) {
					alert( "正在审批中，暂时无法操作" );
					return false;
				}
				else if ( isActive == "Y" && ( sectionId == "13887" || sectionId == "39885" || sectionId == "30383" || sectionId == "30385" ) ) {
					alert( "已审批通过，不能修改" );
					return false;
				}
				else if ( isActive == "DENY" && ( sectionId == "13887" || sectionId == "39885" || sectionId == "30383" || sectionId == "30385" ) ) {
					alert( "提示:修改后，将重新提交审批" );
				}
				if ( id != null && id != '' ) {
					var url = "<%=path%>/news/newsDetail.action?news.ID=" + id + "&news.newsSection.ID=" + sectionId;
					window.location.href = url;
				}
				else {
					alert( '请选择记录!' );
				}
			}

			function viewNews( id, convertStatus, ispdf2content ) {
				if ( ispdf2content == 'Y' && convertStatus == -1 ) {
					alert( "文件正在转换中，请稍后再试。" );
					return false;
				}
				var sectionId = $( '#sectionId' ).attr( 'value' );
				if ( id != null && id != '' ) {
					var url = "<%=path%>/newsdetail/newsDetail.action?news.ID=" + id + "&news.newsSection.ID=" + sectionId;
					window.open( url );
				}
				else {
					alert( '请选择记录!' );
				}
			}

			function refreshNews() {
				var sectionId = $( '#sectionId' ).attr( 'value' );
				if ( sectionId == '20464' || sectionId == '20465' || sectionId == '20466' || sectionId == '20467' || sectionId == '27323' || sectionId == '27324' || sectionId == '27325' || sectionId == '27326' ) var url = '<%=path%>/news/freshNewsList.action?rowNum=' + $( '#essayList' ).jqGrid( 'getGridParam', 'rowNum' );
				else var url = '<%=path%>/news/freshNewsList.action?secTree=1&rowNum=' + $( '#newsList' ).jqGrid( 'getGridParam', 'rowNum' );
				var searchType = $( '#searchType' ).attr( 'value' );
				var searchValue = $( '#searchValue' ).attr( 'value' );
				var title = $( '#title' ).attr( 'value' );
				var publishTimeString = $( '#publishTimeString' ).attr( 'value' );
				var isactive = $( '#isactive' ).attr( 'value' );
				var top = $( '#top' ).attr( 'value' );
				if ( sectionId )
					if ( sectionId == '20464' || sectionId == '20465' || sectionId == '20466' || sectionId == '20467' || sectionId == '27323' || sectionId == '27324' || sectionId == '27325' || sectionId == '27326' ) {
						$( "#essayList" ).appendPostData( {
							'sectionId': sectionId,
							'searchType': searchType,
							'searchValue': searchValue,
							'news.title': title,
							'news.publishTimeString': publishTimeString,
							'news.isActive': isactive,
							'news.isTop': top,
							'isAdmin': 'Y'
						} );
						$( "#essayList" ).jqGrid( 'setGridParam', {
							url: url
						} ).trigger( "reloadGrid" );
					}
				else {
					$( "#newsList" ).appendPostData( {
						'sectionId': sectionId,
						'searchType': searchType,
						'searchValue': searchValue,
						'news.title': title,
						'news.publishTimeString': publishTimeString,
						'news.isActive': isactive,
						'news.isTop': top,
						'isAdmin': 'Y'
					} );
					$( "#newsList" ).jqGrid( 'setGridParam', {
						url: url
					} ).trigger( "reloadGrid" );
				}
			}
			//文本框输入完毕后回车自动查询
			function whetherEnter() {
				try {
					if ( event.keyCode == 13 ) {
						refreshNews();
						return false;
					}
				}
				catch ( error ) {
					alert( 'error:' + error + '.请点击查询' );
					return false;
				}
				return true;
			}
			//控制动态表上方的操作按钮显示
			function divShow( id ) {
				var currentUserId = "";
				var isTop = "";
				if ( id.length != 0 ) {
					$.ajax( {
						url: "<%=path%>/news/findSectionById.action?sectionId=" + id,
						async: false,
						type: "post",
						dataType: "json",
						success: function ( result ) {
							currentUserId = result.currentUserId;
							isTop = result.isTop;
						}
					} );
				}
				if ( id == '20464' || id == '20465' || id == '20466' || id == '20467' || id == '27323' || id == '27324' || id == '27325' || id == '27326' ) {
					$( "#newsList" ).hide();
					$( "#gbox_newsList" ).hide();
					$( "#newsTop" ).hide();
					$( "#mun_ps_div" ).hide();
					$( "#mun_ps_div_top" ).hide();
					$( "#mun_ps_div_decision" ).hide();
					$( "#essayList" ).show();
					$( "#gbox_essayList" ).show();
					$( "#essayTop" ).show();
					$( "#mun_ps_div_essay" ).show();
				}
				else if ( ( parseInt( id ) >= 15260 && parseInt( id ) <= 15296 ) ) { //市场信息平台
					$( "#newsList" ).show();
					$( "#gbox_newsList" ).show();
					$( "#newsTop" ).show();
					$( "#mun_ps_div" ).hide();
					$( "#mun_ps_div_top" ).hide();
					$( "#essayList" ).hide();
					$( "#gbox_essayList" ).hide();
					$( "#essayTop" ).hide();
					$( "#mun_ps_div_essay" ).hide();
					$( "#mun_ps_div_decision" ).show();
				}
				else {
					if ( currentUserId != "" && isTop != "" ) {
						if ( currentUserId == 1 || currentUserId == 2 ) {
							$( "#newsList" ).show();
							$( "#gbox_newsList" ).show();
							$( "#newsTop" ).show();
							$( "#mun_ps_div" ).show();
							$( "#mun_ps_div_top" ).hide();
							$( "#essayList" ).hide();
							$( "#gbox_essayList" ).hide();
							$( "#essayTop" ).hide();
							$( "#mun_ps_div_essay" ).hide();
							$( "#mun_ps_div_decision" ).hide();
						}
						else {
							if ( isTop == 'Y' ) {
								$( "#newsList" ).show();
								$( "#gbox_newsList" ).show();
								$( "#newsTop" ).show();
								$( "#mun_ps_div" ).show();
								$( "#mun_ps_div_top" ).hide();
								$( "#essayList" ).hide();
								$( "#gbox_essayList" ).hide();
								$( "#essayTop" ).hide();
								$( "#mun_ps_div_essay" ).hide();
								$( "#mun_ps_div_decision" ).hide();
							}
							else {
								$( "#newsList" ).show();
								$( "#gbox_newsList" ).show();
								$( "#newsTop" ).show();
								$( "#mun_ps_div" ).hide();
								$( "#mun_ps_div_top" ).show();
								$( "#essayList" ).hide();
								$( "#gbox_essayList" ).hide();
								$( "#essayTop" ).hide();
								$( "#mun_ps_div_essay" ).hide();
								$( "#mun_ps_div_decision" ).hide();
							}
						}
					}
					else {
						$( "#newsList" ).show();
						$( "#gbox_newsList" ).show();
						$( "#newsTop" ).show();
						$( "#mun_ps_div" ).show();
						$( "#mun_ps_div_top" ).hide();
						$( "#essayList" ).hide();
						$( "#gbox_essayList" ).hide();
						$( "#essayTop" ).hide();
						$( "#mun_ps_div_essay" ).hide();
						$( "#mun_ps_div_decision" ).hide();
					}
				}
				/* if (id == '20464' || id == '20465' || id == '20466' || id == '20467' || id == '27323' || id == '27324' || id == '27325' || id == '27326'){
							$("#newsList").hide();
							$("#gbox_newsList").hide();
							$("#newsTop").hide();
							$("#mun_ps_div").hide();
							$("#mun_ps_div_top").hide();
							$("#mun_ps_div_decision").hide();
							$("#essayList").show();
							$("#gbox_essayList").show();
							$("#essayTop").show();
							$("#mun_ps_div_essay").show();
						}else if (id == '10380'){
							$("#newsList").show();
							$("#gbox_newsList").show();
							$("#newsTop").show();
							$("#mun_ps_div").show();
							$("#mun_ps_div_top").hide();
							$("#essayList").hide();
							$("#gbox_essayList").hide();
							$("#essayTop").hide();
							$("#mun_ps_div_essay").hide();
							$("#mun_ps_div_decision").hide();
						}else if((parseInt(id)>=15260 && parseInt(id)<=15296)){//市场信息平台
							$("#newsList").show();
							$("#gbox_newsList").show();
							$("#newsTop").show();
							$("#mun_ps_div").hide();
							$("#mun_ps_div_top").hide();
							$("#essayList").hide();
							$("#gbox_essayList").hide();
							$("#essayTop").hide();
							$("#mun_ps_div_essay").hide();
							$("#mun_ps_div_decision").show();
						}else if (${topFlag} == true){
							$("#newsList").show();
							$("#gbox_newsList").show();
							$("#newsTop").show();
							$("#mun_ps_div").show();
							$("#mun_ps_div_top").hide();
							$("#essayList").hide();
							$("#gbox_essayList").hide();
							$("#essayTop").hide();
							$("#mun_ps_div_essay").hide();
							$("#mun_ps_div_decision").hide();
						}else{
							$("#newsList").show();
							$("#gbox_newsList").show();
							$("#newsTop").show();
							$("#mun_ps_div").hide();
							$("#mun_ps_div_top").show();
							$("#essayList").hide();
							$("#gbox_essayList").hide();
							$("#essayTop").hide();
							$("#mun_ps_div_essay").hide();
							$("#mun_ps_div_decision").hide();
						} */
			}
		</script>
	</head>

	<body>
		<div class="ind_content">
			<div class="ind_con">
				<div class="ind_header">
					<div class="ind_hd_wrapper"><span class="marfin_lef10"><a href="<c:url value='/help/UserManual.doc'/>" target="_blank" class="font_w">帮助</a></span> <span class="marfin_lef10 font_w">|</span> <span class="marfin_lef10"><a

	href="<c:url value='/logout.action'/>" class="font_w">注销</a></span></div>
				</div>
				<div class="ind_tags_bg"></div>
				<!--end ind_tags_bg-->
				<div class="ind_tags">
					<div class="ind_tags_but">
						<ul class="clearfix">
							<!-- 如果是新闻管理员 -->
							<app:isPermission module="/news" resource="/news/sectionTree.action">
								<li class="float_rig ind_tags_but_but">
									<a href="<c:url value='/floatwindow/toFloatWindow.action'/>">浮动窗管理</a>
								</li>
								<li class="float_rig ind_tags_but_but">
									<a href="<c:url value='/news/newsList.action'/>">后台管理</a>
								</li>
							</app:isPermission>
							<!-- 如果是具体栏目管理员 -->
							<app:isAclEntity>
								<li class="float_rig ind_tags_but_active">
									<a href="<c:url value='/news/newsListBySectionTree.action'/>"><span style="cursor:hand">新闻发布</span></li>
								</a>
							</app:isAclEntity>
						</ul>
					</div>
					<!--end ind_tags_but-->
					<div class="clear"></div>
					<div class="ind_tags_con">
						<jsp:include page="top.jsp" />
						<!-- ，您上次登录本系统的时间是2009年12月11号 -->
						<div class="ind_tads_con_wrapper">
							<div class="ind_tags_con_body clearfix">
								<div class="float_lef ind_con_left">
									<!--start model-->
									<div class="ind_con_model">
										<div class="ind_con_model_title">
											<div class="padding5031"><span class="marfin_lef10">信息发布</span> </div>
											<!--end padding5030-->
										</div>
										<!--end ind_con_model_title-->
										<div class="ind_con_model_conleft">
											<div>
												<ul style="text-align:left">
													<li>&nbsp;</li>
												</ul>
												<ul style="text-align:left">
													<app:treeView treeId="sectionTree" tree='${sectionTree}' /> </ul>
											</div>
										</div>
									</div>
								</div>
								<div class="rightform">
									<div class="table_formk1" style="background:#fff">
										<div class="form_title">
											<div class="title_leftbg"></div>
											<div class="title_nr">新闻管理</div>
											<div class="title_rightbg"></div>
										</div> <input type="hidden" name="sectionId" id="sectionId" value="${sectionId}" /> <input type="hidden" name="section.parentId" id="parentId" /> <input type="hidden" name="section.name" name="sectionName" />
										<form id="sectionForm" action="sectionDetail.action" method="post">
											<div class="bg_title">
												<div class="form_bignr">
													<table width="100%" border="0" cellpadding="0" cellspacing="0">
														<tr>
															<td width="15%" align="right">
																<select name="searchType" id="searchType" value="${searchType}">
																	<s:iterator value="%{searchTypeList}" id="sType">
																		<s:if test="searchType == #sType.key">
																			<option value="<s:property value=" #sType.key " />" selected> <s:property value="#sType.value" /> </option>
																		</s:if>
																		<s:else>
																			<option value="<s:property value=" #sType.key " />"> <s:property value="#sType.value" /> </option>
																		</s:else>
																	</s:iterator>
																</select>： </td>
															<td width="25%">&nbsp;<input type="text" name="searchValue" id="searchValue" size="25" maxlength="100" value="${searchValue}" onkeypress="return whetherEnter();" /></td>
															<td width="15%" align="right"><label for="bn">发布日期：</label></td>
															<td width="25%"> <input type="text" name="news.publishTimeString" id="publishTimeString" value="${news.publishTimeString}" /> </td>
														</tr>
														<tr>
															<td colspan="6">&nbsp;</td>
														</tr>
														<tr>
															<td width="15%" align="right"><label for="bn">是否激活：</label></td>
															<td width="20%">
																<select name="news.isActive" id="isactive">
																	<s:iterator value="%{activeList}" id="isActive">
																		<s:if test="news.isActive == #isActive.key">
																			<option value="<s:property value=" #isActive.key " />" selected> <s:property value="#isActive.value" /></option>
																		</s:if>
																		<s:else>
																			<option value="<s:property value=" #isActive.key " />"><s:property value="#isActive.value" /></option>
																		</s:else>
																	</s:iterator>
																</select>
															</td>
															<td width="15%" align="right" style="display:none;" id="newsTop"><label for="bn">是否置顶：</label></td>
															<td width="15%" align="right" style="display:none;" id="essayTop"><label for="bn">是否为头条：</label></td>
															<td width="10%">
																<select name="news.isTop" id="top">
																	<s:iterator value="%{isTopList}" id="isTop">
																		<s:if test="news.isTop == #isTop.key">
																			<option value="<s:property value=" #isTop.key " />" selected> <s:property value="#isTop.value" /></option>
																		</s:if>
																		<s:else>
																			<option value="<s:property value=" #isTop.key " />"><s:property value="#isTop.value" /></option>
																		</s:else>
																	</s:iterator>
																</select>
															</td>
														</tr>
													</table>
												</div>
											</div>
										</form>
										<div style="height:5px; line-height:5px;"></div>
										<div id="mun_ps_div" style="display:none;" class="mun_list"> <button type="button" name="search" id="search" class="button_style">查询</button> <button type="reset" name="reset" id="reset">重置</button> <button type="button" name="addNews" id="addNews">发表新文章</button> <button type="button" name="removeNews" id="removeNews" style="display:none">删除</button> <button type="button" name="topNews" id="topNews">置顶</button> <button type="button" name="cancelTop" id="cancelTop">取消置顶</button> <button type="button" name="activeNews" id="activeNews">激活</button> <button type="button" name="cancelActive" id="cancelActive">取消激活</button> </div>
										<div id="mun_ps_div_top" style="display:none;" class="mun_list"> <button type="button" name="search" id="search_top" class="button_style">查询</button> <button type="reset" name="reset" id="reset_top">重置</button> <button type="button" name="addNews" id="addNews_top">发表新文章</button> <button type="button" name="removeNews" id="removeNews_top" style="display:none">删除</button> <button type="button" name="activeNews" id="activeNews_top">激活</button> <button type="button" name="cancelActive" id="cancelActive_top">取消激活</button> </div>
										<div id="mun_ps_div_decision" style="display:none;" class="mun_list"> <button type="button" name="search" id="search_decision" class="button_style">查询</button> <button type="button" name="addNews" id="addNews_decision">发表新文章</button> <button type="button" name="activeNews" id="activeNews_decision">激活</button> <button type="button" name="cancelActive" id="cancelActive_decision">取消激活</button> </div>
										<div id="mun_ps_div_essay" style="display:none;" class="mun_list"> <button type="button" name="search" id="search_essay" class="button_style">查询</button> <button type="reset" name="reset" id="reset_essay">重置</button> <button type="button" name="addNews" id="addNews_essay">发表新文章</button> <button type="button" name="removeNews" id="removeNews_essay" style="display:none">删除</button> <button type="button" name="topEssay" id="topEssay">设置为头条</button> <button type="button" name="cancelTopEssay" id="cancelTopEssay">取消置为头条</button> <button type="button" name="activeNews" id="activeNews_essay">激活</button> <button type="button" name="cancelActive" id="cancelActive_essay">取消激活</button> </div>
										<div style="height:5px; line-height:5px;"></div>
										<table style="display:none;" id="newsList"></table>
										<table style="display:none;" id="essayList"></table>
										<div id="newsPager"></div>
										<div id="essayPager"></div>
										<div id="tblMasterMessage"></div>
										<div style="height:5px; line-height:5px;"></div>
										<div style="height:5px; line-height:5px;"></div>
									</div>
								</div>
								<div class="clear"></div>
							</div>
							<!--end ind_tags_con_body-->
						</div>
						<!--end ind_tads_con_wrapper-->
					</div>
					<!--end ind_tags_con-->
				</div>
				<!--end ind_tags-->
				<div class="port_index_footer" style="color: #878686;">京东方科技集团股份有限公司版权所有</div>
			</div>
			<!--end ind_con-->
		</div>
		<!--end ind_content-->
	</body>

</html>