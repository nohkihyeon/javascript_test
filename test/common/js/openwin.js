/**
 * <PRE>
 * Scroll 이 없는 새 창을 띄운다
 * </PRE>
 * @param   theURL 새로 띄울 파일 이름이다
 * @param   winName 새창 이름
 * @param   winTitle 새창 title
 * @param	width 새창 가로 크기
 * @param	height 새창 세로 크기
 * @param   param 추가적인 화면 argument
 */
 function openNoScrollWin(theURL, winName, winTitle, width, height, param)
 {
     var wid = (screen.width)/2 - width/2 ;
     var hei = (screen.height)/2 - height/2;
     var win = window.open(theURL + "?popupTitle=" + winTitle + "&tableWidth=" + width + param, winName, "menubar=no, scrollbars=no, resizable=no, width=" + width + ", height=" + height+ ",top=" + hei + ",left=" + wid + "");
     win.focus();
 }
 
 /**
  * <PRE>
  * Scroll 이 없는 새 창을 띄운다
  * </PRE>
  * @param   theURL 새로 띄울 파일 이름이다
  * @param   winName 새창 이름
  * @param   winTitle 새창 title
  * @param	width 새창 가로 크기
  * @param	height 새창 세로 크기
  * @param   param 추가적인 화면 argument
  */
 function openScrollWin(theURL, winName, winTitle, width, height, param)
 {
     var wid = (screen.width)/2 - width/2 ;
     var hei = (screen.height)/2 - height/2;
     var win = window.open(theURL + "?popupTitle=" + winTitle + "&tableWidth=" + width + param, winName, "menubar=no, scrollbars=yes, resizable=no, width="+width+", height="+height+ ",top=" + hei + ",left=" + wid + "");
     win.focus();
 }
 
 /**
  * <PRE>
  * 제약이 없는 새 창 띄우기를 하자
  * </PRE>
  * @param   theURL 새로 띄울 파일 이름이다
  * @param   winName 새창 이름
  * @param   winTitle 새창 title
  * @param	width 새창 가로 크기
  * @param	features 다양한 모양을 직접 준다
  * @param   param 추가적인 화면 argument
  */
 function openFlexWin(theURL,winName,winTitle, width, features, param)
 {
     var win = window.open(theURL + "?popupTitle=" + winTitle + "&tableWidth=" + width + param,winName,features);
     win.focus();
 }
 
 
 /**
  * <PRE>
  * 리사이징되는  새 창을 띄운다
  * </PRE>
  * @param   theURL 새로 띄울 파일 이름이다
  * @param   winName 새창 이름
  * @param   winTitle 새창 title
  * @param	width 새창 가로 크기
  * @param	height 새창 세로 크기
  * @param   param 추가적인 화면 argument
  */
 function openReSizeWin(theURL, winName, winTitle, width, height, param)
 {
     var wid = (screen.width)/2 - width/2 ;
     var hei = (screen.height)/2 - height/2;
     var win = window.open(theURL + "?popupTitle=" + winTitle + "&tableWidth=" + width + param, winName, "menubar=no, scrollbars=yes, resizable=yes, width="+width+", height="+height+ ",top=" + hei + ",left=" + wid + "");
     win.focus();
 }
 
 
 /**
     직원찾기
     cb_func		: 호출받을 스크립트 명
     close_yn 	: 팝업 닫을지 여부 ex) Y -> 닫음, N -> 닫지않음
     team_id		: 검색하려는 team_id를 넘긴다. 없을 경우 0 set
     now_team_yn	: 보낸  team_id에 대해서 하위 조직까지 조회하지 않을 경우 'Y' set
                     보낸 team_id에 대해서 하위 조직까지 조회할 경우 아무값이나 넘기면 된다.
 */
 function searchEmpPop(cb_func, close_yn, team_id, now_team_yn , index) {
 
     if( team_id == undefined || team_id == '' ) {
         team_id = 0;
     }
 
     var param ='&method=searchEmpPop&cb_func='+ cb_func + '&close_yn=' + close_yn + '&upper_team_id=' + team_id + '&now_team_yn=' + now_team_yn;
     
     if( index != undefined && index >= 0 ) {
         param = param +'&index='+index;
     }
     
     openScrollWin('/employee/employeeMgmt.do', 'SEARCH_EMP', '직원찾기', 400, 500, param);
 
 }
 
 /**
     조직찾기(기본조직만)
     cb_func 	: 호출받을 스크립트 명
     close_yn 	: 팝업 닫을지 여부 ex) Y -> 닫음, N -> 닫지않음
 */
 function searchBaseOrgPop(cb_func, close_yn) {
 
     var param ='&method=searchOrgPop&base_gubun_code=Y&cb_func='+ cb_func + '&close_yn=' + close_yn;
 
     openScrollWin('/employee/employeeMgmt.do', 'SEARCH_ORG', '조직찾기', 400, 500, param);
 
 }
 
 /**
     조직찾기(기본조직, 가상조직 :  전체 조직만 나오는 부분 )
     cb_func 	: 호출받을 스크립트 명
     close_yn 	: 팝업 닫을지 여부 ex) Y -> 닫음, N -> 닫지않음
 */
 function searchAllOrgPop(cb_func, close_yn) {
 
     var param ='&method=searchOrgPop&base_gubun_code=Y&virtual_team=Y&cb_func='+ cb_func + '&close_yn=' + close_yn;
 
     openScrollWin('/employee/employeeMgmt.do', 'SEARCH_ORG', '조직찾기', 400, 500, param);
 
 }
 
 
 /**
     조직찾기
     cb_func : 호출받을 스크립트 명
     close_yn : 팝업 닫을지 여부 ex) Y -> 닫음, N -> 닫지않음
 */
 function searchOrgPop(cb_func, close_yn) {
 
     var param ='&method=searchOrgPop&cb_func='+ cb_func + '&close_yn=' + close_yn;
 
     openScrollWin('/employee/employeeMgmt.do', 'SEARCH_ORG', '조직찾기', 400, 500, param);
 
 }
 
 /**
     증명서 신청서 조회/수정(최병언,2008.01.18)
     empNo   : 신청자 명
     notiSeq : 게시순번
     round   : 차수
     reqSeq  : 신청순번
 */
 function cerificateViewPop(empNo, notiSeq, round, reqSeq){
 
     var method = '&method=searchCertificateReq';
     var param =method+'&emp_no='+ empNo + '&noti_seq=' + notiSeq + '&round=' + round + '&request_seq=' + reqSeq;
 
     openScrollWin('/bbs/bbsMgmt.do', 'ceriView', '증명서 신청서 조회/수정', 860, 710, param);
 }
 
 /**
     증명서 양식 등록 (오지현 ,2008.01.18)
 */
 function insertCertificate() {
     openScrollWin('/bbs/bbs/CertificateReqMgmt.do', 'certi_reg', '증명서양식등록 ', 1000, 700, '');
 }
 
 /**
     증명서 양식 수정  (오지현 ,2008.01.18)
 
     notiSeq : 게시순번
 */
 function updateCertificate(notiSeq) {
 
     var method = '&method=getCertificateReqStyle';
     var param =method+ '&noti_seq=' + notiSeq ;
 
     openScrollWin('/bbs/bbsMgmt.do', 'certi_reg', '증명서양식수정 ', 1000, 700, param);
 }
 
 /**
     업무 그룹찾기 팝업
     cb_func : 호출 받은 스크립트 명
 */
 
 function searchBizGroupPop(cb_func){
 
     openScrollWin('/system/bizGroup.do', 'BizGroupPop', '업무조직찾기', 600, 500, '&method=searchBizGroupList&cb_func=' + cb_func, 'Y');
 }
 
 /**
     증명서 신청서   (오지현 ,2008.01.18)
 
     notiSeq : 게시순번
 */
 
 function insertCertificateReq(notiSeq) {
     var method = '&method=getCertificateReq';
     var param =method+ '&noti_seq=' + notiSeq ;
 
     openScrollWin('/bbs/bbsMgmt.do', 'certi_reg', '증명서양식신청서  ', 900, 700, param);
 }
 
 
 /**
     직업 찾기
     cb_func : 호출받을 스크립트 명
     close_yn : 팝업 닫을지 여부 ex) Y -> 닫음, N -> 닫지않음
 */
 function searchMultiEmp(emp_no, emp_name,index, close_yn) {
     var param ='&method=searchMultiEmployee&obj_emp_no='+ emp_no + '&close_yn=' + close_yn+'&index='+ index+ '&obj_emp_name=' + emp_name;
     openScrollWin('/employee/employeeMgmt.do', 'SEARCH_EMP', '조직찾기', 850, 600, param);
 
 }
 
 /**
     기타수당 상세보기
     empNo : emp_no 사원번호
     workDate : 기타수당 등록 일
 */
 function openSaveNightWork(emp_no, workDate){
     var param ='&method=showNightWorkMgmt&emp_no=' + emp_no + '&workDate=' + workDate;
     openScrollWin('/holiday/nightWorkMgmt.do', 'showNightWork', '기타수당 등록하기', 850, 650, param);
 }
 
 /**
       계정항목찾기 팝업
 
      cb_func			: 호출받을 스크립트 명
      close_yn 		: 팝업 닫을지 여부 ex) Y -> 닫음, N -> 닫지않음
      exec_check_yn	: 집행항목 여부에 따라 선택 할것인지 ( 'Y' -> 집행항목인 것만 선택 가능 )
  */
 function fn_callAcctAttrPop(cb_func, close_yn, exec_check_yn) {
 
     var param ='&method=searchAcctAttrTreeListPop&close_yn=Y&cb_func=' + cb_func + '&close_yn=' + close_yn + '&exec_check_yn=' + exec_check_yn;
 
     openScrollWin('/budget/budgetMgmt.do', 'SEARCH_ACCT_ATTR', '계정항목찾기', 400, 500, param);
 
 }
 
 /**
     예산코드찾기팝업
 
     cb_func 	: 호출받을 스크립트 명
     close_yn 	: 팝업 닫을지 여부 ex) Y -> 닫음, N -> 닫지않음
  */
 function fn_callBudgetAttrPop(cb_func, close_yn) {
 
     var param ='&method=searchBudgetTreeListPop&close_yn=Y&cb_func=' + cb_func + '&close_yn=' + close_yn;
 
     openScrollWin('/budget/budgetMgmt.do', 'SEARCH_BUDGET_ATTR', '예산코드찾기', 400, 500, param);
 
 }
 
 /**
 카드 등록 및 조회   창
 */
 function fn_searchCardMgmt(){
     var param = "&method=searchCardMgmtList";
     openScrollWin('/budget/budgetMgmt.do', 'SEARCH_CARD', '카드등록', 680, 630, param);
 }
 /**
 고객사 등록 및 조회   창 /businessCard/businessCardMgmt.do?method=clientCompanyPop
 */
 function fn_searchClientCompanyPop(obj_name,obj_no,obj_check){
 
     var param = "&method=clientCompanyPop&obj_name="+obj_name+"&obj_no="+obj_no+"&obj_check="+obj_check;
     openScrollWin('/businessCard/businessCardMgmt.do', 'SEARCH_COMPANY', '고객사찾기', 600, 600, param);
 }
 
 