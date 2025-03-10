$(function(){
    
    // ** 마이페이지 관련 스크립트 추가 ** 

    // 목록화면 이미지 업로드
    $("#upload_list_file").on("change", function(event) {
        var file = event.target.files[0];
        var reader = new FileReader(); 
        reader.onload = function(e) {
            $("#list_img img").attr("src", e.target.result);
        }
        reader.readAsDataURL(file);
    });

    // 학력정보 리스트 추가
    let academic_html = `<li>
                            <div class="col lt">
                                <p class="input_box"><input type="text" placeholder="입학년도" ></p>
                                <em>~</em>
                                <p class="input_box"> <input type="text"placeholder="졸업년도" ></p>
                            </div>
                            <div class="rt">
                                <p class="txt_box ko"><textarea name="" id="" rows="1" placeholder="학력(국문)"></textarea></p>
                                <p class="txt_box en"><textarea name="" id="" rows="1" placeholder="학력(영문)"></textarea></p>
                                <p class="btn_add_list"><span>추가</span></p>
                            </div>
                        </li>`;
    $(document).on("click", ".academic_info_conts .btn_add_list", function(e){
        $(this).hide();
        $(this).parents("li").after(academic_html);
    });


    // 경력사항 리스트 추가
    let career_html = `<li>
                            <div class="col lt">
                                <p class="input_box"><input type="text" placeholder="입사일"></p>
                                <em>~</em>
                                <p class="input_box"> <input type="text" placeholder="퇴사일"></p>
                            </div>
                            <div class="rt">
                                <p class="txt_box ko"><textarea name="" id="" rows="1" placeholder="경력(국문)"></textarea></p>
                                <p class="txt_box en"><textarea name="" id="" rows="1" placeholder="경력(영문)"></textarea></p>
                                <p class="btn_add_list"><span>추가</span></p>
                            </div>
                        </li>`;
    $(document).on("click", ".career_info_conts .btn_add_list", function(e){
        $(this).hide();
        $(this).parents("li").after(career_html);
    });

    // 겸무/보직 리스트 추가
    let appoint_html = `<li>
                            <p class="txt_box ko">
                                <textarea name="" id="" rows="1" placeholder="겸무/보직(국문)"></textarea>
                            </p>
                            <p class="txt_box en">
                                <textarea name="" id="" rows="1" placeholder="겸무/보직(영문)"></textarea>
                            </p>
                            <p class="btn_add_list">
                                <span>추가</span>
                            </p>
                        </li>`;
    $(document).on("click", ".appoint_info_conts .btn_add_list", function(e){
        $(this).hide(); 
        $(this).parents("li").after(appoint_html);
    });





    // 상세화면 이미지 업로드
    $("#upload_detail_file").on("change", function(event) {
        var file = event.target.files[0];
        var reader = new FileReader(); 
        reader.onload = function(e) {
            $("#detail_img img").attr("src", e.target.result);
        }
        reader.readAsDataURL(file);
    });


    /* 순서 변경 */
    $("#sortable").sortable ({
        handle: "strong",
        scroll: false,
        placeholder: "ui-state-highlight",
        sort: function (event, ui) {
            ui.helper.css({ 'top': ui.position.top + $(window).scrollTop() + 'px' });
        },
    });

    $("#s_date").datepicker();
    $("#e_date").datepicker();

    $("#sortable").disableSelection();

     /* 추가버튼 */
    $(".rsh_box .btn_add").on("click", function(e){
        $(".rsh_box.modify").removeClass("on");
        $(".rsh_box.left").addClass("short");
        $(".rsh_box.add").addClass("on");
        $(this).hide();
        e.preventDefault();
    });

    /* 취소버튼 */
    $(".rsh_box .cancel").on("click", function(e){
        $(".rsh_box.left").removeClass("short");
        $(".rsh_box.add").removeClass("on");
        $(".rsh_box.modify").removeClass("on");
        $(".rsh_list li").removeClass("modify");
        $(".rsh_box .btn_add").show();
        e.preventDefault();
    });

    /* 리스트 클릭 시 수정화면 */
    $(".rsh_list li .rsh_txt").on("click", function(e){
        $(".rsh_box.add").removeClass("on");
        $(".rsh_box.left").addClass("short");
        $(".rsh_box.modify").addClass("on");
        $(".rsh_list li").removeClass("modify");
        $(this).parent("li").addClass("modify");
        e.preventDefault();
    });

    
    /* 수정화면 삭제버튼 */
    $(".rsh_box .delete").on("click", function(e){
        
        e.preventDefault();
    });

    /* 모바일 레이어팝업 닫기버튼 */
    $(".rsh_box .btn_popup_close").on("click", function(e){
        $(".rsh_box.left").removeClass("short");
        $(".rsh_box.add").removeClass("on");
        $(".rsh_box.modify").removeClass("on");
        $(".rsh_list li").removeClass("modify");
        $(".rsh_box .btn_add").show();
        e.preventDefault();
    });


    $(window).on("resize",function() {
        if( $(window).width() <= 1023 ) {

            /* 추가버튼 */
            $(".rsh_box .btn_add").on("click", function(e){
                $("#header, #lnb_wrap, #footer").css({ "z-index" : 4 });
            });

            /* 취소버튼 */
            $(".rsh_box .cancel").on("click", function(e){
                $("#header,").css({ "z-index" : 9997 });
                $("#lnb_wrap").css({ "z-index" : 6 });
                $("#footer").css({ "z-index" : 5 });
            });

            /* 리스트 클릭 시 수정화면 */
            $(".rsh_list li .rsh_txt").on("click", function(e){
                $("#header, #lnb_wrap, #footer").css({ "z-index" : 4 });
            });

        }
        
    });






});




