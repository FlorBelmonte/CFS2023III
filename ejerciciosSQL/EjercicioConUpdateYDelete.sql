select * from e01_producto;
INSERT INTO E01_PRODUCTO (codigo_producto, marca, nombre, descripcion, precio, stock)
VALUES (101,'Misky','Turrón','Turron light que en realidad es venenoso', 4, 100);

delete from e01_producto where marca = 'Misky' and nombre = 'Turrón';

select * from e01_telefono;
UPDATE E01_telefono SET codigo_area = '526' WHERE codigo_area = '551';
