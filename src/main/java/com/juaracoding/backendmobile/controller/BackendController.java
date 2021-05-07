package com.juaracoding.backendmobile.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.juaracoding.backendmobile.entity.Backend;
import com.juaracoding.backendmobile.repository.BackendRepository;

@RestController
public class BackendController {

	@Autowired
	BackendRepository backendrepo;
	
	@GetMapping("/backend/")
	public List<Backend> getAll() {
		return (List<Backend>) backendrepo.findAll();
	}
	
	@GetMapping("/email/{email}")
	public List<Backend> getAllById(@PathVariable String email){
		return backendrepo.findAllByEmail(email);
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
	
	@PostMapping("/tambah")
	public String addBackend(@RequestBody Backend backend) {
		backendrepo.save(backend);
		return "Data Berhasil disimpan";
	}
}
