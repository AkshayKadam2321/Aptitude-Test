package com.acme.controller;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.acme.entity.Users;
import com.acme.repository.UserRepository;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
	
	@Autowired
	private UserRepository userRepo;
	
	@PostMapping("/login")
	public Users Login(@RequestBody Map<String, String> credential ) {
		System.out.println("In Login");
		String email = credential.get("email");
		String password = credential.get("password");
		Users userByUname = userRepo.findByEmailAndPassword(email, password);
		return userByUname;
	}
}
