package com.hackathon.team1.service;

import com.hackathon.team1.entities.Admin;
import com.hackathon.team1.entities.Customer;

public interface AdminService {

    public Admin getAdmin(String username);

    public  Admin addAdmin(Admin admin);


    Boolean userExists(String username);
}
