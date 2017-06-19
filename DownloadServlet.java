package com.itheima.response.demo2;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sun.misc.BASE64Encoder;

/**
 * 文件下载的Servlet：
 */
public class DownloadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/**
		 *  接收参数：
		 *  设置两个头和一个流：
		 *  文件输入流和响应的输出流对接：
		 */
		// 接收参数：get乱码  new String("中文".getBytes("ISO-8859-1"),"UTF-8");
		
		String filename = new String(request.getParameter("filename").getBytes("ISO-8859-1"),"UTF-8");
		System.out.println(filename);
		// 设置两个头和一个流:
		// 设置Content-Type头
		String fileType = this.getServletContext().getMimeType(filename);
		response.setContentType(fileType);
		// 设置Content-Disposition:
		// 处理中文文件名的乱码:
		// 判断浏览器的类型	:User-Agent:
		String path = this.getServletContext().getRealPath("/download/"+filename); 
		String agent = request.getHeader("User-Agent");
		if(agent.contains("Firefox")){
			// 火狐浏览器
			filename = base64EncodeFileName(filename);
		}else{
			// IE，其他浏览器
			filename = URLEncoder.encode(filename, "UTF-8");
		}
		response.setHeader("Content-Disposition", "attachment;filename="+filename);
		// 设置文件的输入流：
		// 
		InputStream is = new FileInputStream(path);
		OutputStream os = response.getOutputStream();
		int len = 0;
		byte[] b = new byte[1024];
		while((len = is.read(b))!=-1){
			os.write(b, 0, len);
		}
		is.close();
	}

	public static String base64EncodeFileName(String fileName) {
		BASE64Encoder base64Encoder = new BASE64Encoder();
		try {
			return "=?UTF-8?B?"
					+ new String(base64Encoder.encode(fileName
							.getBytes("UTF-8"))) + "?=";
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
