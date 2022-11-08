import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../services/api'
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';

const DetailProducts = () => {
  const [products, setProduct] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const fetchProduct = async (id) => {
    try {
      const url = `/api/v1/products/${id}`;
      const response = await api.get(url);
      const payload = {...response?.data?.data?.product};
      console.log(payload);
      setProduct(payload || []);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchProduct(params.id);
    }
  }, [params.id])

  return (
    <>
      <div className='text-center'>DetailProduct</div>
      <p>Nama Produk : {products?.name}</p>
      <p>Harga : {products?.price}</p>
      <p>Yang Jual : {products?.ownerId?.name}</p>
      <Button type="danger" onClick={()=> navigate(-1, {replace: true})}>Pulanggg!</Button>
    </>
  );
};
export default DetailProducts