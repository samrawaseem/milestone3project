import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">E-Commerce Site</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
