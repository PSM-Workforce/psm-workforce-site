/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CostManagement from './pages/CostManagement';
import SpendTechnology from './pages/SpendTechnology';
import SupplierDevelopment from './pages/SupplierDevelopment';
import Automotive from './pages/Automotive';
import TalentDevelopment from './pages/TalentDevelopment';
import Tier1Suppliers from './pages/Tier1Suppliers';
import SpecialtyDistribution from './pages/SpecialtyDistribution';
import ProvenResults from './pages/ProvenResults';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cost-management" element={<CostManagement />} />
          <Route path="spend-technology" element={<SpendTechnology />} />
          <Route path="supplier-development" element={<SupplierDevelopment />} />
          <Route path="automotive" element={<Automotive />} />
          <Route path="talent-development" element={<TalentDevelopment />} />
          <Route path="tier-1-suppliers" element={<Tier1Suppliers />} />
          <Route path="specialty-distribution" element={<SpecialtyDistribution />} />
          <Route path="proven-results" element={<ProvenResults />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
