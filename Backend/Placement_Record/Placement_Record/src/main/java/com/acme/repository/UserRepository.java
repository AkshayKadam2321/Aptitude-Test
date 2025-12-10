package com.acme.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.acme.entity.Users;



@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    // Custom methods for user-related operations
	
	Users findByEmailAndPassword(String email, String password);
}