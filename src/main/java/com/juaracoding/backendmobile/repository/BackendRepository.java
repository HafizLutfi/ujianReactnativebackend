package com.juaracoding.backendmobile.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.juaracoding.backendmobile.entity.Backend;

public interface BackendRepository extends CrudRepository<Backend, Long>{

	List<Backend> findAllById(long id);

	@Query(value="select * from backend where nama LIKE %?1%",nativeQuery = true)
	List<Backend> findAllByNama(String nama);
	
	@Query(value="select * from backend where phone LIKE %?1%",nativeQuery = true)
	List<Backend> findAllByPhone(int phone);
	
	@Query(value="select * from backend where addres LIKE %?1%",nativeQuery = true)
	List<Backend> findAllByAddress(String address);

	@Query(value="select * from backend where email LIKE %?1%",nativeQuery = true)
	List<Backend> findAllByEmail(String email);

}
