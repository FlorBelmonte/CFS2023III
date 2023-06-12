/*
1. Listar todas las Facturas que hayan sido compradas por el cliente de nombre "Pandora" y apellido "Tate"
2. Listar todas las Facturas que contengan productos de la marca "In Faucibus Inc."
*/
use ayacucho; 

select * FROM e01_factura
WHERE nro_cliente = (
    SELECT nro_cliente
    FROM e01_cliente
    WHERE nombre = 'Pandora' AND apellido = 'Tate'
);

SELECT * FROM e01_factura WHERE nro_factura IN (
    SELECT nro_factura FROM e01_detalle_factura WHERE codigo_producto IN (
        SELECT codigo_producto FROM E01_PRODUCTO WHERE marca = 'In Faucibus Inc.')
);
