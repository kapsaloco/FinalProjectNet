CREATE DATABASE db_claims with template = template0 ENCODING 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';

create table Owners (
	id uuid primary key default gen_random_uuid(),
	firstName varchar(40) null,
	lastName varchar(40) null,
	driverLicense varchar(50) null
);

create table Vehicles (

	id uuid primary key default gen_random_uuid(),
	brand varchar(40) null,
	vin varchar(50) null,
	color varchar(30) null,
	year int null,
	owner_id uuid not null references Owners(id)

);

create table Claims (
	id uuid primary key default gen_random_uuid(),
	description varchar(200) null,
	status varchar(200) null,
	date timestamptz,
	vehicle_id uuid not null references Vehicles(id)
);