$(function(){
	// 为第一个列表绑定事件:
	$("#province").change(function(){
		// 获得下拉列表选中的值
		var val = $(this).val();
		// alert(val);
		$.post("/WEB15/ServletDemo6",{"province":val},function(data){
			// alert(data); 
			$("#city").html("<option>--请选择--</option>");
			
			$(data).find("city").each(function(){
				var id = $(this).children("id").text();
				var name = $(this).children("name").text();
				// alert(name);
				var op = "<option>"+name+"</option>";
				$("#city").append(op);
			});
		});
	});
});