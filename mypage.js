$(function(){
    

    // 목록화면 이미지 업로드
    $("#upload_list_file").on("change", function(event) {
        var file = event.target.files[0];
        var reader = new FileReader(); 
        reader.onload = function(e) {
            $("#list_img img").attr("src", e.target.result);
        }
        reader.readAsDataURL(file);
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




