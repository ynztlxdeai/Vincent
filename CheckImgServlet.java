package com.itheima.response.demo3;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 图片验证码的Servlet
 */
public class CheckImgServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int width = 120;
		int height = 30;
		// 生成内存中的一张图片
		BufferedImage bufferedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
		// 获得画笔 设置背景:
		Graphics g = bufferedImage.getGraphics();
		g.setColor(Color.YELLOW);
		g.fillRect(0, 0, width, height);
		// 设置边框:
		g.setColor(Color.BLUE);
		g.drawRect(0, 0, width-1, height-1);
		// 随机产生4个字母或数字  Math.random()  Random类
		String words = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
		Random random = new Random();
		g.setColor(Color.RED);
		g.setFont(new Font("宋体",Font.BOLD,20));
		Graphics2D g2d = (Graphics2D) g;
		int x=10;
		int y=24;
		// 随机正负30度   -30 ~ 30
		
		for (int i = 1; i <=4 ; i++) {
			int idx = random.nextInt(words.length());
			char ch = words.charAt(idx);
			// 将随机的字母或数字写到图片上
			int jiaodu = random.nextInt(60)-30;
			// 角度转出弧度:
			double theta = jiaodu * Math.PI/180;
			g2d.rotate(theta, x, y);
			g2d.drawString(""+ch, x, y);
			g2d.rotate(-theta, x, y);
			x+=20;
		}
		
		
		// 在页面中显示该图片
		ImageIO.write(bufferedImage, "jpg", response.getOutputStream());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
