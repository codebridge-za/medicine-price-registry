import React from 'react'

import Layout from '../hoc/Layout';
import InputForm from '../components/InputForm';
import MedicineList from '../components/MedicineList';

import apiCopy from '../data/api/api.json';

const IndexPage = () => (
  <Layout>
    <InputForm />
    <MedicineList medicines={apiCopy} />
  </Layout>
);

export default IndexPage;
