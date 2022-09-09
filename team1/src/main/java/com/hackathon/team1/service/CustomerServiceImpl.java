package com.hackathon.team1.service;

import com.hackathon.team1.dao.CustomerDao;
import com.hackathon.team1.entities.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerServiceImpl implements CustomerService{
    @Autowired
    private CustomerDao customerdao;


    @Override
    public List<Customer> getCustomers() {

        return customerdao.findAll();
    }

    @Override
    public Customer getCustomer(long customerId) {
        return customerdao.findById(customerId).get();
    }

    @Override
    public Customer addCustomer(Customer customer) {
        return customerdao.save(customer);
    }

    @Override
    public Customer updateCustomer(Customer customer) {
        return customerdao.save(customer);
    }

    @Override
    public void deleteCustomer(long customerId) {
            customerdao.deleteById(customerId);
    }
}
