package com.hackathon.team1.dao;

import com.hackathon.team1.entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminDao extends JpaRepository<Admin,String> {
}
