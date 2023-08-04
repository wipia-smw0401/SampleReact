/**
 * 
 */
package com.sample.test.controller;

import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Min
 *
 */
@RestController
public class TestController {
	@RequestMapping("/test")
	public String test() {
		return "안녕하세요. 현재 서버시간은 " + new Date() +"입니다. \n";
	}
}
