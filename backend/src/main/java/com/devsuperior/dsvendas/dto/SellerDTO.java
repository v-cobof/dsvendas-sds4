package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SellerDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	private Long ID;
	private String name;
	
	public SellerDTO() {
		
	}

	public SellerDTO(Long iD, String name) {
		super();
		ID = iD;
		this.name = name;
	}
	
	public SellerDTO(Seller seller) {
		this.ID = seller.getId();
		this.name = seller.getName();
	}

	public Long getID() {
		return ID;
	}

	public void setID(Long iD) {
		ID = iD;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	

}
