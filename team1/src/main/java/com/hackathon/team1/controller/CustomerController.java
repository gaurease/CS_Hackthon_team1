package com.hackathon.team1.controller;

import com.hackathon.team1.entities.Admin;
import com.hackathon.team1.entities.Customer;
import com.hackathon.team1.service.AdminService;
import com.hackathon.team1.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.SocketHandler;

@RestController
@CrossOrigin
public class CustomerController {
    @Autowired
    private CustomerService CustomerService;
    @Autowired
    private AdminService AdminService;

    @GetMapping("/login/{username}/{password}")
    public Boolean isPresent(@PathVariable String username, @PathVariable String password) {

        Boolean userExists = this.AdminService.userExists(username);
        System.out.println(userExists);

        if(userExists){
            Admin local_admin = this.AdminService.getAdmin(username);
            if(local_admin.getPassword().equals(password)){
                return true;
            }
        }
        return false;
    }

    @PostMapping("/add-user")
    public Admin addAdmin(@RequestBody Admin admin) {
        return this.AdminService.addAdmin(admin);
    }



    @GetMapping("/home")
    public String home() {
        return "Welcome to Customers application";
    }

    //getting the Customers
    @GetMapping("/Customers")
    public List<Customer> getCustomers(){
        return this.CustomerService.getCustomers();
    }

    @GetMapping("/Customers/{CustomerId}")
    public Customer getCustomer(@PathVariable long CustomerId) {
        return this.CustomerService.getCustomer(CustomerId);
    }

    @PostMapping("/Customers")
    public Customer addCustomer(@RequestBody Customer Customer) {
        return this.CustomerService.addCustomer(Customer);
    }

    @PutMapping("/Customers")
    public Customer updateCustomer(@RequestBody Customer Customer) {
        return this.CustomerService.updateCustomer(Customer);
    }
    @CrossOrigin
    @DeleteMapping("/Customers/{CustomerId}")
    public ResponseEntity<HttpStatus> deleteCustomer(@PathVariable String CustomerId) {
        try {
            this.CustomerService.deleteCustomer(Long.parseLong(CustomerId));
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
