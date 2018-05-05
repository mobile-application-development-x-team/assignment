use MyShops

create table tests(
	id int primary key not null,
	text varchar(50) not null
)

insert into tests values (002, 'text 2')
insert into tests values (003, 'text 3')
insert into tests values (004, 'text 4')
insert into tests values (005, 'text 5')
insert into tests values (006, 'text 6')
insert into tests values (007, 'text 7')
insert into tests values (008, 'text 8')

select * from tests