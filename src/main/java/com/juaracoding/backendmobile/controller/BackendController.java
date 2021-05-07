package com.juaracoding.backendmobile.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.juaracoding.backendmobile.entity.Backend;
import com.juaracoding.backendmobile.repository.BackendRepository;

@RestController
public class BackendController {

	@Autowired
	BackendRepository backendrepo;
	
	@GetMapping("/")
	public List<Backend> getAll() {
		return (List<Backend>) backendrepo.findAll();
	}
	
	@GetMapping("/{id}")
	public List<Backend> getAllById(@PathVariable String id){
		return backendrepo.findAllById(Long.parseLong(id));
	}
	
	@GetMapping("/nama/{nama}")
	public List <Backend> getAllByNama(@PathVariable String nama){
		return backendrepo.findAllByNama(nama);
	}
	
	@GetMapping("/phone/{phone}")
	public List<Backend> getAllByPhone(@PathVariable int phone){
		return backendrepo.findAllByPhone(phone);
	}
	
	@GetMapping("/address/{address}")
	public List<Backend> getAllByAddress(@PathVariable String address){
		return backendrepo.findAllByAddress(address);
	}
	
	public String addBackend(@RequestBody Backend backend) {
		backendrepo.save(backend);
		return "Data Berhasil disimpan";
	}
}
