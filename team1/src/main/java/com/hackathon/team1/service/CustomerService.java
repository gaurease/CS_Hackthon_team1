package com.hackathon.team1.service;

import com.hackathon.team1.entities.Customer;

import java.util.List;

public interface CustomerService {
    public List<Customer> getCustomers();

    public Customer getCustomer(long customerId);

    public Customer addCustomer(Customer customer);

    public Customer updateCustomer(Customer customer);

    public void deleteCustomer(long customerId);
}


