import React, {useContext} from 'react';
import ShoppingCard from '../components/ShoppingCard';
import { ShoppingContext } from '../MyContext';

function ShoppingHome() {
  const { selectedCards, setSelectedCards } = useContext(ShoppingContext);

  return (
    <section>
      <div className="container py-5">
      <div className="row">
        <ShoppingCard 
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
        />
        </div>
      </div>
    </section>
  )
}

export default ShoppingHome
