/**
 * Created by 94216 on 2017/11/21.
 */
$(function () {
	$(".s-slide").on('touchend',function(){
		$(this).hide();
		$(".s-open").show();
		setTimeout(function () {
			$(".redPacket-wrap").fadeIn(500);
		},150)
	})
	$(".redPacket").on('touchend','.open',function () {
		$(".redPacket").addClass("redPacket-open");
		setTimeout(function () {
			$(".redPacket-wrap .btn_return").fadeIn(300);
		},1500)
	})
	$(".count-cash").on('touchend',function () {
		$(".moneyInput").val($(".cash-wrap .count").html())
	})


});
var layer = {
	show: function (layerName,closeLayer) {
		if (closeLayer){
			$(closeLayer).hide();
		}
		$(layerName).show();
	},
	hide: function (layerName) {
		$(layerName).hide();
	}
}