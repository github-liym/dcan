/**
 * Created by 94216 on 2017/10/16.
 */
$(function () {
	// 数量控制
	$(".countController").on("click",".countController-btn",function () {
		var text = $(this).siblings(".countController-text"),
			add = $(this).siblings(".add"),
			subtract = $(this).siblings(".subtract")
		if ($(this).hasClass("add")){
			if (text.text()>0){
				subtract.removeClass("disabled")
			}
			text.html(parseInt(text.text())+1);
		}else if($(this).hasClass("subtract")) {
			if (text.text()<=2){
				$(this).addClass("disabled");
			}
			if (text.text()>1){
				text.html(parseInt(text.text())-1);
			}
		}
	});

	$(".food-menu__list").on("click",".food-menu__item",function () {
		$(".popup-food__add").show();
	});

	$(".buoy-menu").click(function () {
		$(".menu-wrap").removeClass("hide");
	});
	$(".buoy-return").click(function () {
		$(".menu-wrap").addClass("hide");
	});

});
function closePopup(el) {
	$(el).closest(".popup").hide();
}
