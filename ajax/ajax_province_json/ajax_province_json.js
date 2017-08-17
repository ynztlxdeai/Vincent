$(function(){
	// 为第一个下拉列表绑定事件
	$("#province").change(function(){
		// 获得下拉列表的值:
		var val = $(this).val();
		// 异步提交到后台:
		$.post("/WEB15/ServletDemo7",{"province":val},function(data){
			// var data = xhr.responseText;
			$("#city").html("<option>--请选择--</option>");
			
			$(data).each(function(i,n){
				// alert(i+"  "+n.name);
				var op = "<option>"+n.name+"</option>";
				$("#city").append(op);
			});
		},"json");
	});
});