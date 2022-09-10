package com.hackathon.team1.service;

import com.hackathon.team1.dao.AdminDao;
import com.hackathon.team1.dao.CustomerDao;
import com.hackathon.team1.entities.Admin;
import com.hackathon.team1.entities.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminDao admindao;

    @Override
    public Admin getAdmin(String username) {
        return admindao.findById(username).get();
    }

    @Override
    public Admin addAdmin(Admin admin) {
        return admindao.save(admin);
    }
}
