select * from E01_cliente;
select nombre, apellido from E01_cliente;
select nombre from E01_producto;
select codigo_area from E01_telefono;

select * from E01_producto where stock between  50 and 200;
select * from E01_producto where codigo_producto = 50;
select * from E01_factura where total_con_iva > 40.000 and nro_cliente = 8;
select * from E01_factura where nro_cliente = 10;
select * from E01_factura where total_con_iva > 50.000;
