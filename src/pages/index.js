import React from 'react'

import Layout from '../hoc/Layout';
import InputForm from '../components/InputForm';
import MedicineBasicSearch from '../components/MedicineBasicSearch';

const IndexPage = () => (
  <Layout>
    <InputForm />
    <MedicineBasicSearch />
  </Layout>
);

export default IndexPage;
